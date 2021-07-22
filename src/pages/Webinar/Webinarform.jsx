import React, { Component, useState } from 'react'
import { mascot } from '../../assets'
import { Button, Input, Navbar } from '../../components'
import './style.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Webinarform = () => {
    const History = useHistory();
    const [webinar, setWebinar] = useState({
        name : '',
        email : '',
        delegasi : '',
        ptinstansi : '',
        telephone : '',
    });

    const handleChange = (event) => {
        const newWebinar = {...webinar}
        newWebinar[event.target.name] = event.target.value;
        setWebinar(newWebinar);
    }
    
    const handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/webinar/post', webinar)
        .then(res => {
            History.push('/webinar/success')
        })
        .catch(err => {
            alert('Semua form wajib diisi!!!');
            History.push('/webinar/daftar')
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
                    <h3 className="text-center">Daftar Webinar TECHNOFEST 2021</h3>
                        <form enctype="application/json">
                            <Input type="text" labelName="Nama" placeholder="Masukkan nama anda disini..." name="name" onChange={handleChange}/>
                            <Input type="text" labelName="Email" placeholder="Masukkan email anda disini..." name="email" onChange={handleChange}/>
                            <Input type="text" labelName="Delegasi(Tulis Perorangan jika bukan delegasi)" placeholder="Tulis nama ormawa untuk delegasi, tulis 'perorangan' untuk non-delegasi " name="delegasi" onChange={handleChange}/>
                            <Input type="text" labelName="Nama Perguruan Tinggi/Instansi" placeholder="Tulis nama Perguruan tinggi atau Instansi anda" name="ptinstansi" onChange={handleChange}/>
                            <Input type="text" labelName="Nomor Telephone" placeholder="Masukkan no telepon disini..." name="telephone" onChange={handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}

export default Webinarform
