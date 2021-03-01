import React, { useContext } from 'react'
import ClientFilesApi from '../../apis/ClientFilesApi'
import {ClientProfileContext} from '../../contexts/ClientProfileContext'
import {useHistory} from 'react-router-dom'

const Login = () => {

    let history = useHistory()

    const {setUserLoggedIn} = useContext(ClientProfileContext)  
    const {username, setUsername} = useContext(ClientProfileContext)
    const {password, setPassword} = useContext(ClientProfileContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await ClientFilesApi.post(`/login`, {
                username,
                password
            })
            console.log(response)
            if (response.data.data.user === 'cip.devries@gmail.com') {
                setUserLoggedIn(true)
                setPassword("")
                history.push(`/dashboard`)
            } 
        } catch (err) {
            console.log(err)
        }   
    }

    return (
        <div>
            <h3>Login</h3>
            <form className="ui form">
                <div className="field" >
                    <label htmlFor="">Username</label>
                    <input value={username} onChange={e=>setUsername(e.target.value)} type="email" placeholder="Enter your email address" />
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                </div>
                <button onClick={handleLogin} className="ui button teal">Login</button>
            </form>
        </div>
    )
}

export default Login
