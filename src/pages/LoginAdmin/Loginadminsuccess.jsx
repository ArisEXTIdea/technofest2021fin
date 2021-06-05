import React from 'react'
import { Link } from 'react-router-dom'
import { mct } from '../../assets'
import { Button, Navbar } from '../../components'
import './style.scss'

function Loginadminsuccess() {
    return (
        <div>
            <Navbar />
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-12 mt-5">
                    <h3 className='text-center'>Anda sudah login dengan akun admin</h3><br />
                    <div>
                        <img src={mct} alt="mascot" className='img-fluid img-admin-success mx-auto d-block'/>
                        <Link to='/admin'><Button title='Masuk ke halaman Admin' addStyle="mx-auto d-block mt-3"/></Link>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Loginadminsuccess
