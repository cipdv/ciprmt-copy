import React, {useContext, useEffect, useState} from 'react'
import {ClientProfileContext} from '../contexts/ClientProfileContext'
import {useParams} from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import AppointmentList from '../components/AppointmentList'
import RMTDashboardHeader from '../components/RMT/RMTDashboardHeader'

const AppointmentsRoute = ({setAuth}) => {

    const { selectedClientProfile, setSelectedClientProfile } = useContext(ClientProfileContext)
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
                <RMTDashboardHeader />
                <h3>List of appointments</h3>
                <AppointmentList appointments={selectedClientProfile.appointments} />
            </div>
        )
    }

export default AppointmentsRoute
