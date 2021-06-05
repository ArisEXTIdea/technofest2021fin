import React, { Component, useState } from 'react'
import { Button, Input, Navbar } from '../../components'
import {mascot} from '../../assets'
import './style.scss'
import {useHistory} from 'react-router-dom'

import Cookies from 'js-cookie';

const Loginadmin = () => {
    var history = useHistory();

    const [admin, setAdmin] = useState({
        username : '',
        password : ''
    });

    const handleChange = (event) => {
        console.log(event.target.value);
        const newAdmin = {...admin};
        newAdmin[event.target.name] =  event.target.value;
        setAdmin(newAdmin);
        console.log(admin)
    }

    const HandleLogin = () => {
        const username = 'dhabithakesekretariatan';
        const password = 'mbokjegeg';
        const usernamewebinar = 'adminwebinar';
        const passwordwebinar = 'adminwebinar21';
        const usernameband = 'adminband';
        const passwordband = 'adminband21';
        const usernameml = 'adminml';
        const passwordml = 'adminml21';
        const usernameexpo = 'adminexpo';
        const passwordexpo = 'adminexpo21';
        if(username === admin.username && password === admin.password){
            Cookies.set("user", "loginTrue");
            history.push('/admin');
        }
        else if(usernamewebinar === admin.username && passwordwebinar === admin.password){
            Cookies.set("webinarjhavshvasd65a7sd867aduasgdhasjdgjadsgj", "loginTrue");
            history.push('/subadmin/webinar');
        }
        else if(usernameexpo === admin.username && passwordexpo === admin.password){
            Cookies.set("expoasdbkajsbdjhavsjdasd7a646a54da5s4d76a", "loginTrue");
            history.push('/subadmin/expoormawa');
        }
        else if(usernameml === admin.username && passwordml === admin.password){
            Cookies.set("mlasdbkabsdmnbmnv898xhjgajdsghjasd897889", "loginTrue");
            history.push('/subadmin/ml');
        }
        else if(usernameband === admin.username && passwordband === admin.password){
            Cookies.set("bandasdmhagsdjgyashdjagsd7685a7sdghjasgdjy", "loginTrue");
            history.push('/subadmin/band');
        }
        else{
            alert('username atau Password salah')
        }
    }


    return (
        <div>
           <div className='container-fluid login-admin-container'>
                <Navbar />
                <div className="row login-admin-row">
                    <div className="col-md-6 login-col-leftside d-none d-md-block">
                        <img src={mascot} alt="Mascot Technofest 2021" className='landing-mascot img-fluid'/>
                    </div>
                    <div className="col-12 col-md-6 p-5">
                        <h3 className='text-center'>Login Admin</h3>
                        <Input labelName='Username' type='text' placeholder='Enter your username here...' name='username' onChange={handleChange}/>
                        <Input labelName='Password' type='password' placeholder='Enter your password here...' name='password' onChange={handleChange}/>
                        <Button title='Login' addStyle='btn-block' onClick={HandleLogin}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Loginadmin

