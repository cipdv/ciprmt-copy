import React, { useContext, useState } from 'react'
import ClientFilesApi from '../apis/ClientFilesApi'
import {useHistory} from 'react-router-dom'
import {ClientProfileContext} from '../contexts/ClientProfileContext'

const Register = () => {

    let history = useHistory()

    const {username, setUsername} = useContext(ClientProfileContext)
    const {password, setPassword} = useContext(ClientProfileContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await ClientFilesApi.post(`/register`, {
                first_name: firstName,
                last_name: lastName,
                email: username,
                username,
                password
            })
            history.push(`/dashboard/login`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>Register a New User</h3>
            <form className="ui form">
                <div className="field">
                    <label>First name</label>
                    <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Last name</label>
                    <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={username} onChange={e=>setUsername(e.target.value)} placeholder="This will be your login"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <button className="ui button pink" onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register
