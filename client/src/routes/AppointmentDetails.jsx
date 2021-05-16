import React, {useContext, useEffect} from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import {ClientProfileContext} from '../contexts/ClientProfileContext'
import RMTDashboardHeader from '../components/RMT/RMTDashboardHeader'

const AppointmentDetails = ({setAuth}) => {

    const { selectedAppointment, setSelectedAppointment } = useContext(ClientProfileContext)

    const {id} = useParams()
    let history = useHistory()

    useEffect(()=>{
        try {
            const fetchData = async () => {
                const response = await ClientFilesApi.get(`/clientprofile/appointment/${id}`)
                setSelectedAppointment(response.data.data.appointment)
            }
            fetchData()
        } catch (error) {
            console.error(error);
        }  
    }, [])

    const paymentType = () => {
        if (selectedAppointment.credit) {
            return "Credit"
        } else if (selectedAppointment.debit) {
            return "Debit"
        } else if (selectedAppointment.cash) {
            return "Cash/e-transfer"
        } else {
            return "Payment not received"
        }
    }
    
    return (
            <div>
                <RMTDashboardHeader setAuth={setAuth} />
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Payment type</th>
                            <th>View Receipt</th>
                        </tr>                   
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.appointment_date}</td>
                            <td>{selectedAppointment.duration}</td>
                            <td>{selectedAppointment.price}</td>
                            <td>{paymentType()}</td>
                            <td>View receipt Link</td>
                        </tr>                
                    </tbody>
                </table>
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Purpose of massage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.treatment_purpose}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Findings</th>
                            <th>Treatment</th>
                            <th>Results</th> 
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.findings}</td>
                            <td>{selectedAppointment.treatment}</td>
                            <td>{selectedAppointment.immediate_results}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Remex</th>
                            <th>Treatment Plan</th>
                        </tr>                   
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.remex}</td>
                            <td>{selectedAppointment.treatment_plan}</td>
                        </tr>                 
                    </tbody>
                </table>
                <Link to={`/rmt/dashboard/profile/${selectedAppointment.client_id}`}><button className="ui button pink" >Back to Client Profile</button></Link>
            </div>      
    )
}

export default AppointmentDetails
