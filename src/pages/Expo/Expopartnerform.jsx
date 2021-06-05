import React, { Component, useState } from 'react'
import { mascot } from '../../assets'
import { Button, Input, Navbar } from '../../components'
import './style.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Expopartnerform = () => {
    const History = useHistory();
    const [expo, setExpo] = useState({
        name : '',
        email : '',
        telephone : '',
        stand_type : '',
        business_name : '',
        business_type : '',
        business_field : '',
    });

    const handleChange = (event) => {
        const newExpo = {...expo}
        newExpo[event.target.name] = event.target.value;
        setExpo(newExpo);
    }
    
    const handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/expo/partner/post', expo)
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
                    <h3 className="text-center">Daftar Expo SPONSORSHIP dan UMKM TECHNOFEST 2021</h3>
                        <form enctype="application/json">
                        <Input type="text" labelName="Nama" placeholder="Masukkan nama disini..." name="name" onChange={handleChange}/>
                            <Input type="text" labelName="E-mail" placeholder="Masukkan email disini..." name="email" onChange={handleChange}/>
                            <Input type="text" labelName="No Telepon" placeholder="Masukkan nomor telepon disini..." name="telephone" onChange={handleChange}/>
                            {/* Droppdown */}
                            <Input type="text" labelName="Nama Bisnis / Brand" placeholder="Masukkan nama bisnis disini..." name="business_name" onChange={handleChange}/>
                            <Input type="text" labelName="Bidang Bisnis" placeholder="Masukkan bidang disini..." name="business_field" onChange={handleChange}/>
                            <div class="input-group mb-3">
                                <label htmlFor="jenisstand"></label>
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Jenis Bisnis</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name='business_type' onChange={handleChange}>
                                    <option selected>Pilih...</option>
                                    <option value="Jasa">Jasa</option>
                                    <option value="Produksi">Produksi</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <label htmlFor="jenisstand"></label>
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Jenis Stand</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name='stand_type' onChange={handleChange}>
                                    <option selected>Pilih...</option>
                                    <option value="Sponsor">Sponsor</option>
                                    <option value="UMKM">UMKM</option>
                                </select>
                            </div>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}

export default Expopartnerform
