import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {logotechnofesttwo } from '../../../assets';
import './style.scss'

export class Navbar extends Component {
    render() {
        return (
            <div className="row navbar-row">
                <div className="col-1 navbar-col"></div>
                <div className="col-10 navbar-col">
                    <nav class={`navbar navbar-expand-lg navbar-dark navbar-style`}>
                        <Link to='/'><img src={logotechnofesttwo} alt="Logo Technofest" className='logo-technofest'/></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end pt-2" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to='/about'><p className="nav-item nav-link" >About</p></Link>
                                <span className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lomba
                                    </p>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/mobilelegend" className="dropdown-item" >Mobile Legend</Link>
                                        <Link to="/band" className="dropdown-item" >Accoustic Competition</Link>
                                    </div>
                                </span>
                                <span className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Event
                                    </p>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/webinar" className="dropdown-item" >Webinar</Link>
                                        <Link to='/expo' className="dropdown-item" >Expo</Link>
                                    </div>
                                </span>
                                <Link to='/pengumuman'><p className="nav-item nav-link" >Pengumuman</p></Link>
                                <Link to='/contact'><p className="nav-item nav-link" >Contact</p></Link>
                            </div>
                        </div>
                    </nav>  
                </div>
                <div className="col-1 navbar-col"></div>
            </div>
            
        )
    }
}

export default Navbar
