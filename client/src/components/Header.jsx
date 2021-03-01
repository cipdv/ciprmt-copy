import React from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {

    let history = useHistory();

    const backToHome = () => {
        history.push(`/`)
    }

    const toLoginPage = () => {
        history.push(`/dashboard/login`)
    }

    return (
        <div>
            <div className="ui headcolour grey inverted menu">
                <h2 onClick={backToHome} className="item">Cip de Vries, RMT</h2>
                <div onClick={toLoginPage} className="ui item button right">
                    Login
                </div>
            </div>
            
        </div>
    )
}

export default Header
