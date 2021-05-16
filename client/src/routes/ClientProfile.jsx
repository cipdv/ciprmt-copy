import React, {useContext, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import RMTDashboardHeader from '../components/RMT/RMTDashboardHeader'

const ClientProfile = ({setAuth}) => {

    const {id} = useParams();

    const {selectedClientProfile, setSelectedClientProfile} = useContext(ClientProfileContext)

    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await ClientFilesApi.get(`/clientprofiles/${id}`)
                setSelectedClientProfile(response.data.data.clientProfile);
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [])

    return (
        <div>
            <RMTDashboardHeader setAuth={setAuth} />
            <h2>{selectedClientProfile && selectedClientProfile.first_name}'s profile</h2>
            <table className="ui celled table tm30">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Service Selected</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedClientProfile && selectedClientProfile.first_name}</td>
                        <td>{selectedClientProfile && selectedClientProfile.last_name}</td>
                        <td>{selectedClientProfile && selectedClientProfile.email}</td>
                        <td>{selectedClientProfile && selectedClientProfile.phone}</td>
                        <td>{selectedClientProfile && selectedClientProfile.date_of_birth}</td>
                        <td>{selectedClientProfile && selectedClientProfile.service}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Link to={`/dashboard/profile/${id}/appointments`}><button className="ui button teal">Appointments</button></Link>
                <Link to={`/dashboard/profile/healthhistory/${id}`}><button className="ui button teal">Health History</button></Link>
                <Link to={`/dashboard/profile/${id}/addappointment`}><button className="ui button pink">Add appointment</button></Link>
            </div>
        </div>    
    )
}

export default ClientProfile
