import React from 'react'
import ClientSearchbar from '../components/ClientSearchbar'
import RMTDashboardHeader from '../components/RMT/RMTDashboardHeader'


const Dashboard = ({setAuth}) => {

    return (
        <div>
            <RMTDashboardHeader setAuth={setAuth} />
            <h1 className="ui item" style={{color: 'gray'}}>Hi Cip, welcome to your dashboard</h1>
            <button className="ui button">View financial statements</button>
            <ClientSearchbar />
        </div>
    )
}

export default Dashboard
