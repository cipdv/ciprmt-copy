import React from 'react'
import {useHistory, useParams} from 'react-router-dom'

const AppointmentList = ({appointments}) => {

    let history = useHistory()
    const {id} = useParams()

    const backToClientProfile = () => {
        history.push(`/dashboard/profile/${id}`)
    }

    const openAppointmentDetails = (appointment_id) => {
        history.push(`/dashboard/profile/${id}/appointmentdetails/${appointment_id}`)
    }

    return (
        <div>
            <table className="ui selectable celled compact table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.map((appointment)=>{
                        return (
                            <tr onClick={()=>openAppointmentDetails(appointment.appointment_id)} key={appointment.appointment_id}>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.duration}</td>
                                <td>{appointment.price}</td>
                            </tr>
                        )                   
                    })}
                </tbody>             
            </table>
            <button onClick={backToClientProfile} className="ui button blue">Back to client profile</button>
        </div>
    )
}

export default AppointmentList
