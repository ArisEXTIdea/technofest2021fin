// Import module
import React from 'react'
import { Link } from 'react-router-dom'
import { logotechnofest, mascot } from '../../assets'
import './style.scss'

import axios from 'axios'

const Landingpage = () => {

    
        axios.get('https://technnofest2021-api.herokuapp.com/api/pengumuman/get')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    

    return (
        <div className='container-fluid landing-container'>
            {/*---------------------------------- Navbar section for Landing page ---------------------------------*/}
            <div className="row landing-header justify-content-center align-items-center">
                <div className="col-10 landing-header-col pt-3">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing-header-nav">
                        <Link to='/'><img src={logotechnofest} alt="Logo Technofest" className='logo-technofest'/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/about'><p className="nav-item nav-link" href="#">About</p></Link>
                            <span className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Lomba
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/mobilelegend' className="dropdown-item" >Mobile Legend</Link>
                                    <Link to='/band' className="dropdown-item" >Accoustic Competition</Link>
                                </div>
                            </span>
                            <span className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Event
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/webinar' className="dropdown-item" >Webinar</Link>
                                    <Link to='/expo' className="dropdown-item" >Expo</Link>
                                </div>
                            </span>
                            <Link to='/pengumuman'><p className="nav-item nav-link" >Pengumuman</p></Link>
                            <Link to='contact'><p className="nav-item nav-link" >Contact</p></Link>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
            {/* --------------------Content Section ----------------------------- */}
            <div className="row landing-row justify-content-center align-items-center">
                <div className="col-10 col-md-5 landing-col justify-content-center align-items-center">
                    <h1 className="landing-header-content">TECHNOFEST 2021</h1>
                    <p>Produktifitas dan Kreatifitas Mahasiswa</p>
                    <p>Di Era New Normal</p>
                    <Link to='/about' className='btn btn-light landing-btn'>Temukan Lebih banyak...</Link>
                </div>
                {/* Mascot right side */}
                <div className="col-10 col-md-5 landing-col align-items-center justify-content-center d-none d-md-block">
                    <img src={mascot} alt="Mascot Technofest 2021" className='landing-mascot img-fluid'/>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
