require('dotenv').config()

//dependencies
const express = require ('express')
const cors = require ('cors')
const bcrypt = require ('bcrypt')
const jwtGenerator = require('./JSONWebToken/jwtGenerator')
const authorization = require('./middleware/authorization')

//.env file has db variables and jwtsecret
const db = require('./db')

const app = express()

//middleware
app.use(cors())
app.use(express.json())

//RMT registration
app.post("/api/1/rmtregistration", async (req, res)=>{
    try {
        const {first_name, last_name, email, password} = req.body
        
        //check if email is already registered
        const rmt = await db.query(
            "select * from rmtprofiles where email = $1",
            [email]
        )
        if (rmt.rows.length !== 0) {
            return res.status(401).json('email is already registered')
        }

        //bcrypt the password
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const bcryptPassword = await bcrypt.hash(password, salt)

        //enter rmt profile into rmtprofiles table
        const results = await db.query(
            "insert into rmtprofiles (first_name, last_name, email, password) values ($1, $2, $3, $4) returning *",
            [first_name, last_name, email, bcryptPassword]
        )

        //generate a jwt
        const token = jwtGenerator(results.rows[0].id)

        return res.status(201).json({
            status: "new rmt profile successfully added",
            token,
            data: {
                rmt_profile: results.rows[0]
            }
        })

    } catch (error) {
        console.error(error.message)
    }
})

//RMT login
app.post("/api/1/rmtlogin", async (req, res)=>{
    try {
        //destructure req.body
        const {email, password} = req.body

        //check if client email is registered or not
        const rmt = await db.query(
            "select * from rmtprofiles where email = $1",
            [email]
        )

        if (rmt.rows.length === 0) {
            return res.json('Email or password is incorrect')
        }

        //if rmt email is registered, verify password
        const validPassword = await bcrypt.compare(password, rmt.rows[0].password)
        if (!validPassword) {
            return res.status(401).json('Email or password is incorrect')
        }

        //if password matches, give jwt token
        const token = jwtGenerator(rmt.rows[0].id)
        res.json({token})

    } catch (error) {
        console.error(error.message)
    }
})

//Add patient intake form data to client_profiles table
app.post("/api/1/clientprofiles", async (req, res)=>{
    try {
        //destructure req.body
        const {first_name, last_name, email, password, service, reason_for_massage, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, glutes, inner_thighs, abdomen, chest_wall, all_areas, sensitive_areas, privacy_policy, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, massage_history, pronouns, address, injuries, surgeries, general_health} = req.body

        //check if client email is already in database
        const client = await db.query(
            "select * from client_profiles where email = $1",
            [email]
        )
        if (client.rows.length !== 0) {
            return res.status(401).send('email already registered')
        }

        //bcrypt the password
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const bcryptPassword = await bcrypt.hash(password, salt)

        //enter the client into the database
        const results = await db.query(
            "insert into client_profiles (first_name, last_name, email, password, service, reason_for_massage, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, glutes, inner_thighs, abdomen, chest_wall, all_areas, sensitive_areas, privacy_policy, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, massage_history, pronouns, address, injuries, surgeries, general_health ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55) returning *", 
            [first_name, last_name, email, bcryptPassword, service, reason_for_massage, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, glutes, inner_thighs, abdomen, chest_wall, all_areas, sensitive_areas, privacy_policy, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, massage_history, pronouns, address, injuries, surgeries, general_health ])
       

        //generate a jwtToken
        const token = jwtGenerator(results.rows[0].id)

        return res.status(201).json({
            status: "new client profile successfully added",
            token,
            data: {
                client_profile: results.rows[0]
            }
        })

    } catch (error) {
        console.error(error.message)
    }
})

// This route verifies that the jwt is valid and returns a true statement
app.get("/api/1/verified", authorization, async (req, res)=>{
    try {
        res.json(true)
    } catch (error) {
        console.error(error.message)
    }
})

// Patient's login to access their health history, contact info, and appointment history/receipts
app.post("/api/1/login", async (req, res)=>{
    try {
        //destructure req.body
        const {email, password} = req.body

        //check if client email is registered or not
        const client = await db.query(
            "select * from client_profiles where email = $1",
            [email]
        )

        if (client.rows.length === 0) {
            return res.json('Email or password is incorrect')
        }

        //if client email is registered, verify password
        const validPassword = await bcrypt.compare(password, client.rows[0].password)
        if (!validPassword) {
            return res.status(401).json('Email or password is incorrect')
        }

        //if password matches, give jwt token
        const token = jwtGenerator(client.rows[0].id)
        res.json({token})

    } catch (error) {
        console.error(error.message)
    }
})

//Get the patient's profile
app.get('/api/1/profile', authorization, async (req, res)=>{
    try {
        const client = await db.query(
            "select * from client_profiles where id = $1",
            [req.client]
        )
        res.json(client.rows[0])
    } catch (error) {
        console.error(error.message)
        res.status(500).json('server error')
    }
})

//Update patient's profile
app.put('/api/1/profile/update/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const {first_name, last_name, email, password, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address} = req.body
        const updatedClient = await db.query(
            "update client_profiles set first_name=$1, last_name=$2, email=$3, password=$4, other_hcp=$5, cardio_none=$6, high_blood_pressure=$7, low_blood_pressure=$8, heart_attack=$9, vericose_veins=$10, stroke=$11, pacemaker=$12, heart_disease=$13, resp_none=$14, chronic_cough=$15, bronchitis=$16, asthma=$17, emphysema=$18, skin_conditions=$19, diabetes=$20, epilepsy=$21, cancer=$22, arthritis=$23, chronic_headaches=$24, migraine_headaches=$25, vision_loss=$26, hearing_loss=$27, osteoporosis=$28, haemophilia=$29, medical_conditions=$30, loss_of_feeling=$31, allergies=$32, pregnant=$33, medications=$34, phone=$35, date_of_birth=$36, occupation=$37, infectious_conditions=$38, doctor_name=$39, doctor_address=$40 where id = $41"
        ,[first_name, last_name, email, password, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, id])
        res.json('profile updated successfully')
    } catch (error) {
        console.error(error.message)
        res.status(500).json('server error')
    }
})


//2. retrieve list of client profiles from client_profiles table
app.get("/api/1/clientprofiles", async (req, res)=> {
    try {
        const results = await db.query ("select * from client_profiles")
        res.status(200).json({
            status: "here's a list of all the clients",
            results: results.rows.length,
            data: {
                clientProfiles: results.rows
            }
        })
    } catch (err) {
        console.log (err)
    }   
})

//3. retrieve a single client profile from client_profiles table along with all of their appointments
app.get("/api/1/clientprofiles/:id", async (req, res)=>{
    try {
        const clientProfile = await db.query ("select * from client_profiles where id = $1", [req.params.id])
        const appointments = await db.query ("select * from appointments where client_id = $1", [req.params.id])
        res.status(200).json({
            status: "here's a single client profile",
            data: {
                clientProfile: clientProfile.rows[0],
                appointments: appointments.rows
            }
        })
    } catch (err) {
        console.log(err)
    }
})

//4. update a single client profile from client_profiles table
//INCOMPLETE
app.put("/api/1/clientprofiles/:id", async (req, res)=> {
    try {
        const results = await db.query ("update client_profiles set first_name = $1, last_name = $2, email = $3, service = $4 reason_for_massage=$6 other_hcp=$7 where id = $5 returning *", [req.body.first_name, req.body.last_name, req.body.email, req.body.service, req.params.id, req.body.reason_for_massage, req.body.other_hcp])
        res.status(200).json({
            status: "successfully updated client profile",
            data: {
                client_profile: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
})

//5. delete a single client profile from client_profiles table
//INCOMPLETE
app.delete("/api/1/clientprofiles/:id", async (req, res)=> {
    const results = await db.query ("delete from client_profiles where id = $1", [req.params.id])
    res.status(204).json({
        status: "file deleted"
    })
})

//6. search client_profiles for client profile by name
app.get("/api/1/clientprofile", async (req, res)=>{
    try {
        const {name} = req.query
        const clients = await db.query("select * from client_profiles where first_name ilike $1", [`%${name}%`])
        res.json(clients.rows)
    } catch (err) {
        console.log(err)
    }
})  

//7. add an appointment to client's profile
app.post("/api/1/clientprofile/:id/appointments", async (req, res)=>{
    try{
        const results = await db.query("insert into appointments (client_id, appointment_date, duration, price, treatment_purpose, findings, treatment, immediate_results, remex, treatment_plan, consent_for_treatment, time, credit, debit, cash_etransfer, send_receipt) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) returning *", [req.body.client_id, req.body.appointment_date, req.body.duration, req.body.price, req.body.treatment_purpose, req.body.findings, req.body.treatment, req.body.immediate_results, req.body.remex, req.body.treatment_plan, req.body.consent_for_treatment, req.body.time, req.body.credit, req.body.debit, req.body.cash_etransfer, req.body.send_receipt])
        res.status(201).json({
            status: "appointment successfully added",
            data: {
                appointment: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
})

//8. retrieve list of all client's appointments
// app.get("/api/1/clientprofile/:id/appointments", async (req, res)=>{
//     try {
//         const results = await db.query("select * from appointments where id=$1", [req.params.id])
//         res.status(200).json({
//             status: "here's a list of all the client's appointments",
//             results: results.rows.length,
//             data: {
//                 appointmentList: results.rows
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

// 9. retrieve a single appointment
app.get('/api/1/clientprofile/appointment/:id', async (req, res)=>{
    try {
        const result = await db.query("select * from appointments where appointment_id=$1", [req.params.id])
        res.status(200).json({
        status: "here's the appointment",
        data: {
            appointment: result.rows[0]
        }
    })
    } catch (error) {
        console.log(error)
    }
    
})

//10. update client's appointment

//11. delete client's appointment

//.env file has port info
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
    console.log(`You're doing great Cip, keep it up :)`)
});

