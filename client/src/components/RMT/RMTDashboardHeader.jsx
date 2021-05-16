import React from 'react'
import {Link} from 'react-router-dom'

const DashboardHeader = ({setAuth}) => {

    const logout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
    }

    return (
        <div>
            <div className="ui headcolour grey inverted menu">
                <div className="ui item"><Link to="/rmt/dashboard">Dashboard</Link></div>
                <div onClick={logout} className="ui item right">Logout</div>
            </div>
        </div>
    )
}

export default DashboardHeader
