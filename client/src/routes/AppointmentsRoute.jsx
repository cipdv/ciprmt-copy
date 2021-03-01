import React, {useContext, useEffect, useState} from 'react'
import {ClientProfileContext} from '../contexts/ClientProfileContext'
import {useParams} from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import AppointmentList from '../components/AppointmentList'
import Login from '../components/Login/Login'
import DashboardHeader from '../components/Login/DashboardHeader'

const AppointmentsRoute = () => {

    const { selectedClientProfile, setSelectedClientProfile, userLoggedIn } = useContext(ClientProfileContext)
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await ClientFilesApi.get(`/clientprofiles/${id}`)
                setSelectedClientProfile(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
        return (
            <div>
                {!userLoggedIn ?
                    <Login />
                :
                    <div>
                        <DashboardHeader />
                        <h3>List of appointments</h3>
                        <AppointmentList appointments={selectedClientProfile.appointments} />
                    </div>
                }
            </div>
        )
    }

export default AppointmentsRoute
