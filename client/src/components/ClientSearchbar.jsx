import React, {useState, useContext} from 'react'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import {useHistory} from 'react-router-dom'


const ClientSearchbar = () => {

    let history = useHistory()

    //bring in contexts to store state data from response and update state
    const { ClientProfiles, setClientProfiles } = useContext(ClientProfileContext)
    const [name, setName] = useState('')
    
    //search api for client matching by first and/or last name
    const searchClientProfiles = async (e) => {
        e.preventDefault();
        const results = await ClientFilesApi.get(`/clientprofile/?name=${name}`)
        setClientProfiles(results.data)
    }

    //send to client profile when name is clicked
    const handleClickProfileSelect = (id) => {
        history.push(`/dashboard/profile/${id}`)
        setName("")
    }

    return (
        <div>
            <h3 style={{marginTop: "2em"}}>Search client list</h3>
            <form onSubmit={searchClientProfiles}>
                <div className="ui input">
                    <input type="text" placeholder="Enter client name" value={name} onChange={e=>setName(e.target.value)}  />
                    <button style={{marginLeft: '10px'}}className="ui button">Search</button>
                </div>
            </form>
            <table className="ui celled compact table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {!name ?
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    :
                    ClientProfiles && ClientProfiles.map(client=>(
                        <tr key={client.id} onClick={()=>handleClickProfileSelect(client.id)}>
                            <td>{`${client.first_name} ${client.last_name}`}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClientSearchbar
