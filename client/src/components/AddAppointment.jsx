import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import RMTDashboardHeader from './RMT/RMTDashboardHeader'

const AddAppointment = ({setAuth}) => {

    const {id} = useParams()
    let history = useHistory()

    const [date, setDate] = useState("")
    const [duration, setDuration] = useState(null)
    const [price, setPrice] = useState("")
    const [purpose, setPurpose] = useState("")
    const [findings, setFindings] = useState("")
    const [treatment, setTreatment] = useState("SUPINE: mx feet and legs with palm presses. PROM for hips, ankles and knees. Stretch hips through flexion, SLR, and FABER. Spinal twist stretch. SIDELYING: Foot presses along back. Stretch shoulder horizontal abduction. Scap mobilization and kneading to entire shoulder girdle. SEATED: mx shoulder girdle. scap mobs. spine lateral flexion stretch. spine extension stretch. foot presses along back and traps. neck stretches through flexion, extension, lateral flexion and rotation. apley scratch stretches. PRONE: mx feet, legs and back with palm and foot presses. SUPINE: ftk to neck and scalp.")
    const [results, setResults] = useState("")
    const [remex, setRemex] = useState("Did not recommend")
    const [treatmentplan, setTreatmentplan] = useState("Not indicated")
    const [consentForTreatment, setConsentForTreatment] = useState(false)
    const [time, setTime] = useState("")
    const [credit, setCredit] = useState(false)
    const [debit, setDebit] = useState(false)
    const [cash, setCash] = useState(false)
    const [sendReceipt, setSendReceipt] = useState(false)

    const SubmitAddAppointment = async (e) => {
        e.preventDefault()
        try {
            await ClientFilesApi.post(`/clientprofile/${id}/appointments`, {
                client_id: id,
                appointment_date: date,
                duration,
                price,
                treatment_purpose: purpose,
                findings, 
                treatment, 
                immediate_results: results,
                remex,
                treatment_plan: treatmentplan,
                consent_for_treatment: consentForTreatment,
                time,
                credit,
                debit,
                cash_etransfer: cash,
                send_receipt: sendReceipt
            })
            history.push(`/rmt/dashboard/profile/${id}`)
        } catch (error) {
            console.log(error)
        }
                
    }

    return (   
            <div>
                <RMTDashboardHeader />
                <h3>Add an appointment</h3>
                <form className="ui form">
                    <div className="field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consentForTreatment} onChange={e=>{setConsentForTreatment(e.target.checked)}} />
                            <label>Consent for treatment given</label>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Date</label>
                            <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Time</label>
                            <input type="time" name="time" value={time} onChange={e=>setTime(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Duration</label>
                            <select value={duration} onChange={e=>setDuration(e.target.value)} name="duration" className="ui search dropdown" placeholder="duration" >
                                <option value="">Select duration</option>
                                <option value="90">90 minutes</option>
                                <option value="75">75 minutes</option>
                                <option value="60">60 minutes</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Price</label>
                            
    {/* add an if statement to automatically set price based on duration value chosen                         */}

                            <input value={price} onChange={e=>setPrice(e.target.value)} type="text" placeholder="if statement based on duration"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Purpose for this massage</label>
                        <input value={purpose} onChange={e=>setPurpose(e.target.value)} type="text" name="purpose"/>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Findings</label>
                            <textarea value={findings} onChange={e=>setFindings(e.target.value)} name="findings" rows="4" />
                        </div>
                        <div className="field">
                            <label>Treatment</label>
                            <textarea value={treatment} onChange={e=>setTreatment(e.target.value)} name="treatment" rows="4"/>
                        </div>
                        <div className="field">
                            <label>Results</label>
                            <textarea value={results} onChange={e=>setResults(e.target.value)} name="results" rows="4"/>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Exercises Prescribed</label>
                            <textarea value={remex} onChange={e=>setRemex(e.target.value)} name="remex" rows="4"/>
                        </div>
                        <div className="field">
                            <label>Treatment Plan</label>
                            <textarea value={treatmentplan} onChange={e=>setTreatmentplan(e.target.value)} name="treatment_plan" rows="4"/>
                        </div>
                    </div>
                    <div className="inline field">
                        <label>Payment Received</label>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={credit} onChange={e=>{setCredit(e.target.checked)}} />
                            <label>Credit Card</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={debit} onChange={e=>{setDebit(e.target.checked)}} />
                            <label>Debit</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cash} onChange={e=>{setCash(e.target.checked)}} />
                            <label>Cash/E-transfer</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={sendReceipt} onChange={e=>{setSendReceipt(e.target.checked)}} />
                            <label>Send Receipt</label>
                        </div>
                    </div>
                    
    {/* when clicked, send receipt to client's email */}
                    {/* <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox"/>
                            <label>Send receipt to email</label>
                        </div>
                    </div>              */}
                    <button onClick={SubmitAddAppointment} className="ui button pink">Submit</button>
                </form>
            </div>
    )
}

export default AddAppointment
