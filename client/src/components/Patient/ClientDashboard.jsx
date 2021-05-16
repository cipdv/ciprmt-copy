import React, {useState, useEffect, Fragment} from 'react'
import ClientFilesApi from '../../apis/ClientFilesApi'
import { Link } from 'react-router-dom'

const ClientDashboard = ({setAuth}) => {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [reasonForMassage, setReasonForMassage] = useState('')
    const [service, setService] = useState('')
    const [otherHCP, setOtherHCP] = useState('')

    const getData = async () => {
        try {
            const response = await ClientFilesApi.get("/profile", {
                headers: {token: localStorage.token}
            })
            setName(response.data.first_name)
            setId(response.data.id)
            setReasonForMassage(response.data.reason_for_massage)
            setService(response.data.service)
            setOtherHCP(response.data.other_hcp)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const logout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
    }

    const gotoUpdateHealthHistory = e => {
        e.preventDefault(e)
    }

    const gotoReceipts = e => {
        e.preventDefault(e)
    }

    return (
        <Fragment>
            <h2>Hi {name}, welcome to your dashboard</h2>
            <h5>{name}'s id is {id}</h5>
            <h4>What would you like to do today?</h4>
            <button className="ui button blue" onClick={e=>gotoReceipts(e)}>View Receipts</button>
            <Link to="/client/update"><button className="ui button pink">Update Health History</button></Link>

            <button className="ui button" onClick={e=>logout(e)}>Logout</button>
            {/* <h3>{name}'s Health History</h3>
                <h4>Last updated: </h4>
                <div>
                <table className="ui celled compact table tm30">
                    <thead>
                        <th>Reason for seeking Massage Therapy</th>
                        <th>Service</th>
                        <th>Treatment from other HCPs</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{reasonForMassage}</td>
                            <td>{service}</td>
                            <td>{otherHCP}</td>
                        </tr>
                    </tbody>
                    </table>
                </div> */}
        </Fragment>
    )
}

export default ClientDashboard
