import React, { Component } from 'react'
import './style.scss'
import {logotechnofest} from '../../../assets'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../..'
import Cookies from 'js-cookie'

function Sidemenu() {
    const history = useHistory();
    const HandleLogout = () => {
        Cookies.remove("user")
        history.push('/loginadmin')
    }
    return (
        <div className='col-12 col-md-3 side-menu-style position-fixed pl-5'>
            <img src={logotechnofest} alt="logo-technofest" className='img-fluid img-admin-logo'/><span>ADMIN</span>
            <hr />
            <Link to="/admin/pengumuman/read">Pengumuman</Link><br />
            <Link to="/admin/expopartner/read">Expo Partner</Link><br />
            <Link to="/admin/expoormawa/read">Expo Ormawa</Link><br />
            <Link to="/admin/webinar/read">Webinar</Link><br />
            <Link to="/admin/band/read">Accoustic Cover Competition</Link><br />
            <Link to="/admin/ml/read">Mobile Legend</Link>
            <hr />
            <Button title="Logout" addStyle='btn-success' onClick={HandleLogout}/>
        </div>
    )
}

export default Sidemenu

