import React, {useState} from 'react'
import ClientFilesApi from '../apis/ClientFilesApi'
import {useHistory} from 'react-router-dom'

const BookAMassage = () => {

    let history = useHistory();

    //make form fields controlled inputs by giving them their own state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [occupation, setOccupation] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [doctorAddress, setDoctorAddress] = useState("")
    const [service, setService] = useState("")
    const [reason, setReason] = useState("")
    const [otherhcp, setOtherhcp] = useState("")
    const [massageHistory, setMassageHistory] = useState("")
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
    const [glutes, setGlutes] = useState(false)
    const [innerThighs, setInnerThighs] = useState(false)
    const [abdomen, setAbdomen] = useState(false)
    const [chestWall, setChestWall] = useState(false)
    const [allAreas, setAllAreas] = useState(false)
    const [sensitiveAreas, setSensitiveAreas] = useState("")
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false)
    const [infectiousConditions, setInfectiousConditions] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ClientFilesApi.post("/clientprofiles", {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                date_of_birth: dateOfBirth,
                occupation,
                doctor_name: doctorName,
                doctor_address: doctorAddress,
                service,
                reason_for_massage: reason,
                other_hcp: otherhcp,
                massage_history: massageHistory,
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
                glutes,
                inner_thighs: innerThighs,
                abdomen,
                chest_wall: chestWall,
                all_areas: allAreas,
                privacy_policy: privacyPolicyChecked,
                infectious_conditions: infectiousConditions
            })
            history.push(`/massagedetails`)
        } catch (err) {
            console.log(err)
        }
    }

    const privacyPolicy = () => {
        history.push(`/privacypolicy`)
    }

    return (
    //when adding a new field, remember to add it to 1 and 4 in server.js, as well as clientProfile.jsx list (if to be displayed)

        <div className="tm30 bm30">
            <div>
                <p>The information provided below will help me in treating you safely. All information you provide will be kept confidential in accordance with this <a onClick={privacyPolicy}>privacy policy</a> and will not be shared without your written consent, or as required by law. Information you submit will be encrypted and transferred through a secure network. ​</p>
            </div>
            <h3>Book a Massage</h3>
            <h4 className="ui dividing header">Contact Info</h4>
            <form className="ui form">
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">First Name</label>
                        <input value={firstName} onChange={e=>setFirstName(e.target.value)} type="text" name="first-name" placeholder="First Name"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="">Last Name</label>
                        <input value={lastName} onChange={e=>setLastName(e.target.value)} type="text" name="last-name" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder="This email will be used as your login and for correspondence"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={e=>setPhone(e.target.value)} type="tel" placeholder="Telephone number" />
                    </div>            
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <input value={dateOfBirth} onChange={e=>setDateOfBirth(e.target.value)} type="date" name="date_of_birth"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="occupation">Occupation</label>
                        <input value={occupation} onChange={e=>setOccupation(e.target.value)} type="text" />
                    </div>            
                </div>
                <h4 className="ui dividing header">Health History</h4>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="reason">What is your reason for seeking Massage Therapy?</label>
                        <input value={reason} onChange={e=>setReason(e.target.value)}  type="text" name="reason" placeholder="Eg. stress management, general wellbeing, pain/discomfort (please indicate areas affected)" />
                    </div>
                    <div className="required field">
                        <label>Service</label>
                        <select value={service} onChange={e=>setService(e.target.value)} className="ui search dropdown" name="service" placeholder="Service">
                            <option disabled value="">Select service</option>
                            <option value="90min">90 min massage ($135)</option>
                            <option value="75min">75 min massage ($115)</option>
                            <option value="60min">60 min massage ($95)</option>
                        </select>
                    </div>                        
                </div>
                <div className="two fields">
                    <div className="field">
                        <label htmlFor="otherhcp">Are you receiving any treatment from another health care provider?</label>
                        <input value={otherhcp} onChange={e=>setOtherhcp(e.target.value)} type="text" name="otherhcp" placeholder="Please indicate type of treatment and provider"/>
                    </div>
                    <div className="field">
                        <label htmlFor="massage_history">Please describe your history with Massage Therapy</label>
                        <input value={massageHistory} onChange={e=>setMassageHistory(e.target.value)} type="text" name="massage_history" />
                    </div>
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
                            <label>Do you have any other medical conditions, injuries, recent surgeries within the past 3 years, pins/wires/artificial joints?</label>
                            <input type="text" value={medicalConditions} onChange={e=>setMedicalConditions(e.target.value)} name="" placeholder="List here" />
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
                    <div className="field">
                        <h4 className="ui dividing header">Consent for Treatment</h4>
                        <div className="field">
                            <label>Sensitive Areas</label>
                            <p>Thai massage involves close body contact, through clothing. The goal of Thai Massage is to relieve tension throughout the body. All areas are connected, and as such, it is important to release tension in all areas of the body to relieve any pain or stiffness you may be feeling. For example, soreness in the lower back area can be the result of tightness in the thighs, hips, and buttocks. Areas that may be touched include inner thighs, glutes/buttocks, chest wall (not including breat tissue), and abdomen. Areas that will never be touched during a massage include breasts or genital regions. If you do not feel comfortable with any of these sensitive areas being touched, please indicate which areas here:</p>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={glutes} onChange={e=>{setGlutes(e.target.checked)}} />
                                <label>Glutes/buttocks</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={innerThighs} onChange={e=>{setInnerThighs(e.target.checked)}} />
                                <label>Inner thighs</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={abdomen} onChange={e=>{setAbdomen(e.target.checked)}} />
                                <label>Abdomen</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={chestWall} onChange={e=>{setChestWall(e.target.checked)}} />
                                <label>Chest wall</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={allAreas} onChange={e=>{setAllAreas(e.target.checked)}} />
                                <label>I am comfortable with all of these areas being massaged</label>
                            </div>                       
                        </div>
                        <div className="field">
                            <label>If there are any other areas that you would not like to have massaged, please indicate them here:</label>
                            <input type="text" value={sensitiveAreas} onChange={e=>{setSensitiveAreas(e.target.value)}} />
                        </div>    
                    </div>
                    <label>Privacy Policy</label>
                    <div className="ui checkbox">            
                        <input type="checkbox" checked={privacyPolicyChecked} onChange={e=>{setPrivacyPolicyChecked(e.target.checked)}} />
                        <label>By clicking here you're indicating that you have read and understand the <a onClick={privacyPolicy}>privacy policy</a></label>
                    </div>

                </div>                   
                <div>
                    <button type="submit" onClick={handleSubmit} className="ui button violet">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default BookAMassage
