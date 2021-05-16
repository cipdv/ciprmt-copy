import React, {useContext, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import ClientFilesApi from '../apis/ClientFilesApi'
import RMTDashboardHeader from '../components/RMT/RMTDashboardHeader'

const HealthHistory = ({setAuth}) => {

    const {id} = useParams();
    const {selectedClientProfile, setSelectedClientProfile} = useContext(ClientProfileContext);

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

    return (
        <div>
            <div>
                <RMTDashboardHeader setAuth={setAuth} />
                <h2>{selectedClientProfile.first_name}'s Health History</h2>
                <h4>Last updated: {selectedClientProfile && selectedClientProfile.date_updated.toString()}</h4>
                <table className="ui celled compact table tm30">
                    <thead>
                        <th>Reason for seeking Massage Therapy</th>
                        <th>Service</th>
                        <th>Treatment from other HCPs</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedClientProfile && selectedClientProfile.reason_for_massage}</td>
                            <td>{selectedClientProfile && selectedClientProfile.service}</td>
                            <td>{selectedClientProfile && selectedClientProfile.other_hcp}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tm30">
                <h4>Cardiovascular</h4>
                <table className="ui celled compact table tm30">
                    <thead>
                        <th>None</th>
                        <th>High Blood Pressure</th>
                        <th>Low Blood Pressure</th>
                        <th>History of Heart Attack(s)</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedClientProfile && selectedClientProfile.cardio_none ? "yes" : "no"}</td>
                            <td>{selectedClientProfile && selectedClientProfile.high_blood_pressure ? "yes" : "no"}</td>
                            <td>{selectedClientProfile && selectedClientProfile.low_blood_pressure ? "yes" : "no"}</td>
                            <td>{selectedClientProfile && selectedClientProfile.heart_attack ? "yes" : "no"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tm30">
                <Link to={`/dashboard/profile/${id}/appointments`}><button className="ui button teal">Appointments</button></Link>
                <Link to={`/rmt/dashboard/profile/${id}`}><button className="ui button">Back to client profile</button></Link>
            </div>
        </div>
    )
}

export default HealthHistory
