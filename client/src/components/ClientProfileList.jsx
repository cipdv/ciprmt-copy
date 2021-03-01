import React, {useEffect, useContext} from 'react'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import {useHistory} from 'react-router-dom'

const ClientProfileList = (props) => {

    let history = useHistory();

    //bring in contexts to store state data from response and update state
    const { ClientProfiles, setClientProfiles } = useContext(ClientProfileContext)

    //retrieve data from ClientFilesApi and set state of ClientProfiles 
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await ClientFilesApi.get("/clientprofiles");
                setClientProfiles(response.data.data.clientProfiles);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    const handleClickProfileSelect = (id) => {
        history.push(`/dashboard/profile/${id}`)
    }

    return (
        <div>
            <table className="ui selectable celled table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {ClientProfiles && ClientProfiles.map(clientProfile => {
                        return (
                            <tr onClick={()=>handleClickProfileSelect(clientProfile.id)} key={clientProfile.id}>
                                <td>{clientProfile.first_name}</td>
                                <td>{clientProfile.last_name}</td>
                                <td>{clientProfile.email}</td>
                                <td>Phone</td>
                            </tr>
                        )
                    })}                   
                </tbody>
            </table>
        </div>
    )
}

export default ClientProfileList
