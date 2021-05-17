import React, {useEffect, useState} from 'react'
import ClientFilesApi from '../../apis/ClientFilesApi'
import {useHistory, Link} from 'react-router-dom'
import Header from '../../components/Header'

const ClientUpdateProfile = () => {

    let history = useHistory();

    const getData = async () => {
        try {
            const response = await ClientFilesApi.get("/profile", {
                headers: {token: localStorage.token}
            })
            const {id, first_name, last_name, email, password, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, address, pronouns, injuries, surgeries, generalHealth} = response.data
            setId(id)
            setFirstName(first_name)
            setLastName(last_name)
            setEmail(email)
            setPhone(phone)
            setDateOfBirth(date_of_birth)
            setOccupation(occupation)
            setDoctorName(doctor_name)
            setDoctorAddress(doctor_address)
            setPassword(password)
            setOtherhcp(other_hcp)
            setCardioNone(cardio_none)
            setCardioHBP(high_blood_pressure)
            setCardioLBP(low_blood_pressure)
            setCardioHeartDisease(heart_disease)
            setCardioHeartattack(heart_attack)
            setCardioVericose(vericose_veins)
            setCardioStroke(stroke)
            setCardioPacemaker(pacemaker)
            setRespNone(resp_none)
            setRespAsthma(asthma)
            setRespBronchitis(bronchitis)
            setRespChronicCough(chronic_cough)
            setRespEmphysema(emphysema)
            setSkinConditions(skin_conditions)
            setDiabetes(diabetes)
            setEpilepsy(epilepsy)
            setCancer(cancer)
            setArthritis(arthritis)
            setChronicHeadaches(chronic_headaches)
            setMigraineHeadaches(migraine_headaches)
            setVisionLoss(vision_loss)
            setHearingLoss(hearing_loss)
            setOsteoporosis(osteoporosis)
            setHaemophilia(haemophilia)
            setLossOfFeeling(loss_of_feeling)
            setMedicalConditions(medical_conditions)
            setAllergies(allergies)
            setPregnant(pregnant)
            setMedications(medications)
            setInfectiousConditions(infectious_conditions)
            setAddress(address)
            setPronouns(pronouns)
            setInjuries(injuries)
            setSurgeries(surgeries)
            setGeneralHealth(generalHealth)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [occupation, setOccupation] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [doctorAddress, setDoctorAddress] = useState("")
    const [otherhcp, setOtherhcp] = useState("")
    const [cardioNone, setCardioNone] = useState(false)
    const [cardioHBP, setCardioHBP] = useState(false)
    const [cardioLBP, setCardioLBP] = useState(false)
    const [cardioHeartattack, setCardioHeartattack] = useState(false)
    const [cardioVericose, setCardioVericose] = useState(false)
    const [cardioStroke, setCardioStroke] = useState(false)
    const [cardioPacemaker, setCardioPacemaker] = useState(false)
    const [cardioHeartDisease, setCardioHeartDisease] = useState(false)
    const [respNone, setRespNone] = useState(false)
    const [respChronicCough, setRespChronicCough] = useState(false)
    const [respBronchitis, setRespBronchitis] = useState(false)
    const [respAsthma, setRespAsthma] = useState(false)
    const [respEmphysema, setRespEmphysema] = useState(false)
    const [skinConditions, setSkinConditions] = useState("")
    const [otherNone, setOtherNone] = useState(false)
    const [diabetes, setDiabetes] = useState(false)
    const [epilepsy, setEpilepsy] = useState(false)
    const [cancer, setCancer] = useState(false)
    const [arthritis, setArthritis] = useState(false)
    const [chronicHeadaches, setChronicHeadaches] = useState(false)
    const [migraineHeadaches, setMigraineHeadaches] = useState(false)
    const [visionLoss, setVisionLoss] = useState(false)
    const [hearingLoss, setHearingLoss] = useState(false)
    const [osteoporosis, setOsteoporosis] = useState(false)
    const [haemophilia, setHaemophilia] = useState(false)
    const [medicalConditions, setMedicalConditions] = useState("")
    const [lossOfFeeling, setLossOfFeeling] = useState("")
    const [allergies, setAllergies] = useState("")
    const [pregnant, setPregnant] = useState("")
    const [medications, setMedications] = useState("")
    const [infectiousConditions, setInfectiousConditions] = useState("")
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [injuries, setInjuries] = useState('')
    const [surgeries, setSurgeries] = useState('')
    const [generalHealth, setGeneralHealth] = useState('')

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await ClientFilesApi.put(`/profile/update/${id}`, {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    phone,
                    date_of_birth: dateOfBirth,
                    occupation,
                    doctor_name: doctorName,
                    doctor_address: doctorAddress,
                    other_hcp: otherhcp,
                    cardio_none: cardioNone,
                    high_blood_pressure: cardioHBP,
                    low_blood_pressure: cardioLBP,
                    heart_attack: cardioHeartattack,
                    vericose_veins: cardioVericose,
                    stroke: cardioStroke,
                    pacemaker: cardioPacemaker,
                    heart_disease: cardioHeartDisease,
                    resp_none: respNone,
                    chronic_cough: respChronicCough,
                    bronchitis: respBronchitis,
                    asthma: respAsthma,
                    emphysema: respEmphysema,
                    skin_conditions: skinConditions,
                    other_none: otherNone,
                    diabetes,
                    epilepsy,
                    cancer,
                    arthritis,
                    chronic_headaches: chronicHeadaches,
                    migraine_headaches: migraineHeadaches,
                    vision_loss: visionLoss,
                    hearing_loss: hearingLoss,
                    osteoporosis,
                    haemophilia,
                    medical_conditions: medicalConditions,
                    loss_of_feeling: lossOfFeeling,
                    allergies: allergies,
                    pregnant,
                    medications,
                    infectious_conditions: infectiousConditions,
                    address,
                    pronouns,
                    injuries,
                    surgeries,
                    general_health: generalHealth
            })        
            history.push('/client/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <Header />
        <div className="tm30 bm30">
            <h3>Update Your Profile</h3>
            <div>
                <p>The information provided below will help me in treating you safely. All information you provide will be kept confidential in accordance with this <Link to="/privacypolicy">privacy policy</Link> and will not be shared without your written consent, or as required by law. Information you submit will be encrypted and transferred through a secure network. ​</p>
            </div>
            <h4 className="ui dividing header">Personal Info</h4>
            <form className="ui form">
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">First Name</label>
                        <input 
                            value={firstName} 
                            onChange={e=>setFirstName(e.target.value)} 
                            type="text" name="first-name" 
                            placeholder="First Name"
                        />
                    </div>
                    <div className="required field">
                        <label htmlFor="">Last Name</label>
                        <input 
                            value={lastName} 
                            onChange={e=>setLastName(e.target.value)} 
                            type="text" name="last-name" 
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="field">
                        <label>Preferred pronouns</label>
                        <select value={pronouns} onChange={e=>setPronouns(e.target.value)} className="ui search dropdown" name="pronouns" placeholder="Pronouns">
                            <option value="they">They/them</option>
                            <option value="she">She/her</option>
                            <option value="he">He/him</option>
                            <option value="nopreference">No preference</option>
                            <option value="prefernottosay">Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <div className="two fields">
                        <div className="required field">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                value={phone} 
                                onChange={e=>setPhone(e.target.value)} 
                                type="tel" 
                                placeholder="Telephone number" 
                            />
                        </div>
                        <div className="field">
                        <label>Address</label>
                        <input
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            type="text"
                            placeholder="Street #, stress name, city and province"
                        />
                    </div>
                    <div className="required field">
                        <label htmlFor="occupation">Occupation</label>
                        <input value={occupation} onChange={e=>setOccupation(e.target.value)} type="text" />
                    </div>            
                </div>
                <h4 className="ui dividing header">Login credentials</h4>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder="This email will be used as your login and for correspondence"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="">Password</label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="This will be your password for logging into your account"/>
                    </div>           
                </div>
                <h4 className="ui dividing header">Health History</h4>
                <div className="field">
                    <label htmlFor="otherhcp">Are you receiving any treatment from another health care provider?</label>
                    <input value={otherhcp} onChange={e=>setOtherhcp(e.target.value)} type="text" name="otherhcp" placeholder="Please indicate type of treatment and provider"/>
                </div>               
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Physician's Full Name</label>
                        <input value={doctorName} onChange={e=>setDoctorName(e.target.value)} type="text" name="doctor_name" placeholder=""/>
                    </div>
                    <div className="required field">
                        <label htmlFor="phone">Physician's Address</label>
                        <input value={doctorAddress} onChange={e=>setDoctorAddress(e.target.value)} type="text" placeholder="" />
                    </div>            
                </div>
                <div className="field">
                    <label>How would you describe your general health status?</label>
                    <input type="text" value={generalHealth} onChange={e=>setGeneralHealth(e.target.value)} />
                </div>
                <div className="field">
                        <div className="field">
                            <label>Do you have any of the following medical conditions?</label>
                        </div>
                        <div className=" inline field">
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={otherNone} onChange={e=>{setOtherNone(e.target.checked)}} />
                                <label>None</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={diabetes} onChange={e=>{setDiabetes(e.target.checked)}} />
                                <label>Diabetes</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={epilepsy} onChange={e=>{setEpilepsy(e.target.checked)}} />
                                <label>Epilepsy</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={cancer} onChange={e=>{setCancer(e.target.checked)}} />
                                <label>Cancer</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={arthritis} onChange={e=>{setArthritis(e.target.checked)}} />
                                <label>Arthritis</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={chronicHeadaches} onChange={e=>{setChronicHeadaches(e.target.checked)}} />
                                <label>Chronic Headaches</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={migraineHeadaches} onChange={e=>{setMigraineHeadaches(e.target.checked)}} />
                                <label>Migraine headaches</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={visionLoss} onChange={e=>{setVisionLoss(e.target.checked)}} />
                                <label>Vision Loss</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={hearingLoss} onChange={e=>{setHearingLoss(e.target.checked)}} />
                                <label>Hearing Loss</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={osteoporosis} onChange={e=>{setOsteoporosis(e.target.checked)}} />
                                <label>Osteoporosis</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={haemophilia} onChange={e=>{setHaemophilia(e.target.checked)}} />
                                <label>Haemophilia</label>
                            </div>
                        </div>
                    </div>
                <div className="field">
                    <div className="field">
                        <label>Do you have any of the following cardiovascular conditions?</label>
                    </div>
                    <div className="inline field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioNone} onChange={e=>{setCardioNone(e.target.checked)}} />
                            <label>None</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioHBP} onChange={e=>{setCardioHBP(e.target.checked)}} />
                            <label>High blood pressure</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioLBP} onChange={e=>{setCardioLBP(e.target.checked)}} />
                            <label>Low blood pressure</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioHeartattack} onChange={e=>{setCardioHeartattack(e.target.checked)}} />
                            <label>History of heart attack(s)</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioVericose} onChange={e=>{setCardioVericose(e.target.checked)}} />
                            <label>Vericose veins</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioStroke} onChange={e=>{setCardioStroke(e.target.checked)}} />
                            <label>Stroke</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioPacemaker} onChange={e=>{setCardioPacemaker(e.target.checked)}} />
                            <label>Pacemaker</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardioHeartDisease} onChange={e=>{setCardioHeartDisease(e.target.checked)}} />
                            <label>Heart disease</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any of the following respiratory conditions?</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={respNone} onChange={e=>{setRespNone(e.target.checked)}} />
                            <label>None</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={respChronicCough} onChange={e=>{setRespChronicCough(e.target.checked)}} />
                            <label>Chronic Cough</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={respBronchitis} onChange={e=>{setRespBronchitis(e.target.checked)}} />
                            <label>Bronchitis</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={respAsthma} onChange={e=>{setRespAsthma(e.target.checked)}} />
                            <label>Asthma</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={respEmphysema} onChange={e=>{setRespEmphysema(e.target.checked)}} />
                            <label>Emphysema</label>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Do you have any skin conditions?</label>
                            <input type="text" value={skinConditions} onChange={e=>setSkinConditions(e.target.value)} name="" placeholder="List skin conditions here" />
                        </div>
                        <div className="field">
                            <label>Do you have any infectious conditions?</label>
                            <input type="text" value={infectiousConditions} onChange={e=>setInfectiousConditions(e.target.value)} name="" placeholder="Please include skin, respiratory, blood such as HIV, hepatitis, herpes" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any other medical conditions?</label>
                            <input type="text" value={medicalConditions} onChange={e=>setMedicalConditions(e.target.value)} name="" placeholder="List here" />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                                <label>Please list any surgeries including when they occured:</label>
                                <input value={surgeries} onChange={e=>setSurgeries(e.target.value)} type="text" />
                            </div>
                            <div className="field">
                                <label>Please list any injuries including when they occured:</label>
                                <input value={injuries} onChange={e=>setInjuries(e.target.value)} type="text" />
                            </div>
                        </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you experiencing a loss of feeling or sensation anywhere?</label>
                            <input type="text" value={lossOfFeeling} onChange={e=>setLossOfFeeling(e.target.value)} name="" placeholder="Please describe what you're experiencing and where" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any allergies?</label>
                            <input type="text" value={allergies} onChange={e=>setAllergies(e.target.value)} name="" placeholder="Please list your allergies" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you currently pregnant?</label>
                            <select value={pregnant} onChange={e=>setPregnant(e.target.value)} className="ui search dropdown" name="pregnant" placeholder="N/A">
                            <option value="na">N/A</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you currently taking any medications?</label>
                            <input type="text" value={medications} onChange={e=>setMedications(e.target.value)} name="" placeholder="Please list your medications and conditions being treated" />
                        </div>
                    </div>
                </div>                   
                <div>
                    <button type="submit" onClick={handleUpdate} className="ui button violet">Update</button>
                </div>
                
            </form>
        </div>
        </>
    )
}

export default ClientUpdateProfile

