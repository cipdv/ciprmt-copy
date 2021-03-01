import React, { useContext } from 'react'
import ClientSearchbar from '../components/ClientSearchbar'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import Login from '../components/Login/Login'
import DashboardHeader from '../components/Login/DashboardHeader'


const Dashboard = () => {

    const {userLoggedIn} = useContext(ClientProfileContext)

    return (
        <div>
            {!userLoggedIn 
                ? 
                <Login />    
                :    
                <div>
                    <DashboardHeader />
                    <h1 className="ui item" style={{color: 'gray'}}>Hi Cip, welcome to your dashboard</h1>
                    <button className="ui button">View financial statements</button>
                    <ClientSearchbar />
                </div>
            }
        </div>
    )
}

export default Dashboard
