import React, {useState, createContext} from 'react'

export const ClientProfileContext = createContext();

export const ClientProfileContextProvider = (props) => {

    //store list of client profiles in a variable
    const [ClientProfiles, setClientProfiles] = useState([]);

    //set state value for selected client profile
    const [selectedClientProfile, setSelectedClientProfile] = useState([null]);

    //set state value for selected appointment
    const [selectedAppointment, setSelectedAppointment] = useState([null])

    //set state for user being logged in
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    //set state for user 
    const [username, setUsername] = useState("")
    //set state for password
    const [password, setPassword] = useState("")

    return (
        <ClientProfileContext.Provider value={{ClientProfiles, setClientProfiles, selectedClientProfile, setSelectedClientProfile, selectedAppointment, setSelectedAppointment, userLoggedIn, setUserLoggedIn, username, setUsername, password, setPassword}}>
            {props.children}
        </ClientProfileContext.Provider>
    )
}
