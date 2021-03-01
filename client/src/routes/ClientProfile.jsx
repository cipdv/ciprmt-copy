import React, {useContext, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import Login from '../components/Login/Login'
import DashboardHeader from '../components/Login/DashboardHeader'

const ClientProfile = () => {

    let history = useHistory();

    const {id} = useParams();

    const {selectedClientProfile, setSelectedClientProfile, userLoggedIn} = useContext(ClientProfileContext)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await ClientFilesApi.get(`/clientprofiles/${id}`)
                setSelectedClientProfile(response.data.data.clientProfile);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    const sendToHealthHistory = () => {
        history.push(`/dashboard/profile/healthhistory/${id}`)
    }

    const viewAppointments = () => {
        history.push(`/dashboard/profile/${id}/appointments`)
    }

    const sendToAddAppointment = () => {
        history.push(`/dashboard/profile/${id}/addappointment`)
    }

    return (
        <div>
            {!userLoggedIn ?
                <Login />    
            :
            <div>
                <DashboardHeader />
                <h2>{selectedClientProfile && selectedClientProfile.first_name}'s profile</h2>
                <table className="ui celled table tm30">
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service Selected</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedClientProfile && selectedClientProfile.first_name}</td>
                            <td>{selectedClientProfile && selectedClientProfile.last_name}</td>
                            <td>{selectedClientProfile && selectedClientProfile.email}</td>
                            <td>{selectedClientProfile && selectedClientProfile.phone}</td>
                            <td>{selectedClientProfile && selectedClientProfile.service}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={viewAppointments} className="ui button teal">Appointments</button>
                    <button onClick={sendToHealthHistory} className="ui button teal">Health History</button>
                    <button onClick={sendToAddAppointment} className="ui button pink">Add appointment</button>
                </div>
                <div style={{marginTop: '3em'}}>
                </div>
            </div>
            }
        </div>      
    )
}

export default ClientProfile
