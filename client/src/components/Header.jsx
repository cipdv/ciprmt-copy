import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <div className="ui headcolour grey inverted menu">
                <Link to={'/'}><h2 className="item">Cip de Vries, RMT</h2></Link>
                <div className="ui item button right">
                    <Link to={'/client/login'}>Login</Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header
