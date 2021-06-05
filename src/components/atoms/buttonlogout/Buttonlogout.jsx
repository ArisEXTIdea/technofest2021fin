import Cookies from 'js-cookie'
import React from 'react'
import './style.scss'
import { useHistory } from 'react-router-dom'


function Buttonlogout({cookies, addStyle, ...rest}) {
    const history = useHistory();
    const HandleLogout = () => {
        Cookies.remove(cookies)
        history.push('/loginadmin')
    }
    return (
        <div>
            <button className={`btn btn-default button-style ${addStyle}`} {...rest} onClick={HandleLogout}>Logout</button>
        </div>
    )
}

export default Buttonlogout
