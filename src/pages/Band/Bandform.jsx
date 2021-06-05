import React, { Component, useState } from 'react'
import { mascot } from '../../assets'
import { Button, Input, Navbar } from '../../components'
import './style.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Bandform = () => {
    const History = useHistory();
    const [band, setBand] = useState({
        band_name : '',
        leader_name : '',
        telephone : '',
        song_title : '',
        video_link : '',
    });

    const handleChange = (event) => {
        const newBand = {...band}
        newBand[event.target.name] = event.target.value;
        setBand(newBand);
    }
    
    const handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/band/post', band)
        .then(res => {
            History.push('/band/success')
        })
        .catch(err => {
            alert('Semua form wajib diisi!!!');
            History.push('/band/daftar')
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
                    <h3 className="text-center">Daftar Accoustic Cover Competition TECHNOFEST 2021</h3>
                        <form enctype="application/json">
                        <Input type="text" labelName="Nama Band/Team" placeholder="Masukkan nama band anda disini..." name="band_name" onChange={handleChange}/>
                            <Input type="text" labelName="Nama Ketua Band" placeholder="Masukkan nama ketua band anda disini..." name="leader_name" onChange={handleChange}/>
                            <Input type="text" labelName="No Telepon" placeholder="Tulis nomor telephone anda disini... " name="telephone" onChange={handleChange}/>
                            <Input type="text" labelName="Judul Lagu" placeholder="Tulis judul lagu anda disini..." name="song_title" onChange={handleChange}/>
                            <Input type="text" labelName="Link Video Youtube" placeholder="Masukkan Link video lomba anda disini..." name="video_link" onChange={handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}

export default Bandform
