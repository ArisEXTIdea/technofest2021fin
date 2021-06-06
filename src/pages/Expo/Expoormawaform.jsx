import React, { Component, useState } from 'react'
import { mascot } from '../../assets'
import { Button, Input, Navbar } from '../../components'
import './style.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Expoormawaform = () => {
    const History = useHistory();
    const [expo, setExpo] = useState({
        ormawa_name : '',
        kaprodi_name : '',
        ketua_name : '',
        telephone : '',
    });

    const handleChange = (event) => {
        const newExpo = {...expo}
        newExpo[event.target.name] = event.target.value;
        setExpo(newExpo);
    }
    
    const handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/expo/ormawa/post', expo)
        .then(res => {
            History.push('/expo/success')
        })
        .catch(err => {
            alert('Semua form wajib diisi!!!');
            History.push('/expo/daftar')
        })
    }
    
        return (
            <div className='container-fluid'>
                <Navbar/>
                <div className="row ml-client-form-row">
                    <div className="col-6 d-none d-md-block"></div>
                    <div className="col-6 d-none d-md-block ml-client-form-col-left position-fixed">
                        <img src={mascot} alt="Mascot Technofest" className='img-fluid'/>
                    </div>
                    <div className="col-12 col-md-6 p-5">
                    <h3 className="text-center">Daftar Expo Ormawa TECHNOFEST 2021</h3>
                        <form enctype="application/json">
                        <Input type="text" labelName="Nama Ormawa" placeholder="Masukkan ormawa disini..." name="ormawa_name" onChange={handleChange}/>
                            <Input type="text" labelName="Nama Kaprodi/Pembimbing" placeholder="Masukkan kaprodi/pembimbing disini..." name="kaprodi_name" onChange={handleChange}/>
                            <Input type="text" labelName="Nama Ketua Ormawa" placeholder="Masukkan nama ketua disini..." name="ketua_name" onChange={handleChange}/>
                            <Input type="text" labelName="Nomor Telephone" placeholder="Masukkan no telepon disini..." name="telephone" onChange={handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}

export default Expoormawaform
