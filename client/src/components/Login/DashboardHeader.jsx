import React, { useContext } from 'react'
import {ClientProfileContext} from '../../contexts/ClientProfileContext'
import {useHistory} from 'react-router-dom'

const DashboardHeader = () => {

    let history = useHistory()

    const {setUserLoggedIn} = useContext(ClientProfileContext)

    const handleLogout = (e) => {
        e.preventDefault()
        setUserLoggedIn(false)
    }

    const returnToDashboard = (e) => {
        e.preventDefault()
        history.push(`/dashboard`)
    }

    return (
        <div>
            <div className="ui headcolour grey inverted menu">
                <div onClick={returnToDashboard} className="ui item">Dashboard</div>
                <div onClick={handleLogout} className="ui item right">Logout</div>
            </div>
        </div>
    )
}

export default DashboardHeader
