import React, {useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ClientFilesApi from './apis/ClientFilesApi'

//Components
import Homepage from './routes/Homepage'
import ThanksForBooking from './routes/ThanksForBooking'
import Dashboard from './routes/Dashboard'
import ClientProfile from './routes/ClientProfile'
import AppointmentsRoute from './routes/AppointmentsRoute'
import { ClientProfileContextProvider } from './contexts/ClientProfileContext'
import HealthHistory from './components/HealthHistory'
import AppointmentDetails from './routes/AppointmentDetails'
import Register from './routes/Register'
import PrivacyPolicy from './components/PrivacyPolicy'
import AddAppointment from './components/AddAppointment'
import ClientLogin from './components/Patient/ClientLogin'
import ClientDashboard from './components/Patient/ClientDashboard'
import ClientUpdateHealthHistory from './components/Patient/ClientUpdateProfile'
import RMTLogin from './components/RMT/RMTLogin'
 
 const App = () => {

  const [authenticated, setAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setAuthenticated(boolean)
  }

  async function isAuth() {
    try{
      const response = await ClientFilesApi("/verified", {
        method: "GET",
        headers: {token: localStorage.token}
      })
      response.data === true ? setAuthenticated(true) : setAuthenticated(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  // async function isAuth() {
  //   try{
  //     const response = await fetch ("http://localhost:5000/verified", {
  //       method: "GET",
  //       headers: {token: localStorage.token}
  //     })
  //     const parseRes = await response.json()
  //     parseRes === true ? setAuthenticated(true) : setAuthenticated(false)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  useEffect(()=> {
    isAuth()
  }, [])

   return (
     <ClientProfileContextProvider>
      <div className="ui container tm30">
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/massagedetails" component={ThanksForBooking}/>
              <Route exact path="/rmt/dashboard" render={props => authenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)} />
              <Route exact path="/rmt/dashboard/profile/:id" render={props => authenticated ? (<ClientProfile {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)} />
              <Route exact path="/dashboard/profile/:id/appointments" render={props => authenticated ? (<AppointmentsRoute {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)}/>
              <Route exact path="/dashboard/profile/:id/appointmentdetails/:id" render={props => authenticated ? (<AppointmentDetails {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)} />
              <Route exact path="/dashboard/profile/:id/addappointment" render={props => authenticated ? (<AddAppointment {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)} />
              <Route exact path="/dashboard/profile/healthhistory/:id" render={props => authenticated ? (<HealthHistory {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/login" />)}/>
              <Route exact path="/rmt/login" render={props => !authenticated ? (<RMTLogin {...props} setAuth={setAuth} />) : (<Redirect to="/rmt/dashboard" />)} />
              <Route exact path="/dashboard/register" component={Register} />
              <Route exact path="/privacypolicy" component={PrivacyPolicy} />
              <Route exact path="/client/login" render={props => !authenticated ? (<ClientLogin {...props} setAuth={setAuth} />) : (<Redirect to="/client/dashboard" />)} />
              <Route exact path="/client/dashboard" render={props => authenticated ? (<ClientDashboard {...props} setAuth={setAuth} />) : (<Redirect to="/client/login" />)} />
              <Route exact path="/client/update" component={ClientUpdateHealthHistory} />
            </Switch>
        </Router>
      </div>
     </ClientProfileContextProvider>
   )
 }
 
 export default App
 