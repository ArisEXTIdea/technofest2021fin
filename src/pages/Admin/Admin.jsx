import React, { Component } from 'react'
import { Button, Navbar, Sidemenu } from '../../components'
import './style.scss'
import { mct } from '../../assets'

export class Admin extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-3"></div>
                    <Sidemenu />
                    <div className="col-12 col-md-9">
                        <h1 className='text-center mt-5'>Selamat datang Admin</h1>
                        <img src={mct} alt="mascot" className='img-fluid img-admin-success mx-auto d-block'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin
