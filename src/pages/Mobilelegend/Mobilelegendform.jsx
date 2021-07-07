import React, { Component, useState } from 'react'
import { mascot } from '../../assets'
import { Button, Input, Navbar } from '../../components'
import './style.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Mobilelegendform = () => {
    const History = useHistory();
    const [ml, setMl] = useState({
            team_name : '',
            leader_name : '',
            leader_nickname : '',
            leader_game_id : '',
            telephone : '',
            id_member_1 : '',
            nickname_member_1 : '',
            id_member_2 : '',
            nickname_member_2 : '',
            id_member_3 : '',
            nickname_member_3 : '',
            id_member_4 : '',
            nickname_member_4 : '',
            id_member_5 : '',
            nickname_member_5 : '',
    });

    const handleChange = (event) => {
        const newMl = {...ml}
        newMl[event.target.name] = event.target.value;
        setMl(newMl);
    }
    
    const handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/ml/post', ml)
        .then(res => {
            History.push('/mobilelegend/success')
        })
        .catch(err => {
            alert('Semua form wajib diisi!!!');
            History.push('/mobilelegend/daftar')
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
                    <h3 className="text-center">Daftar Technofest Mobile Legend Tournament Season 3</h3>
                        <form enctype="application/json">
                            <Input type="text" labelName="Nama Team" placeholder="Masukkan nama team anda disini..." name="team_name" onChange={handleChange}/>
                            <Input type="text" labelName="Nama Ketua" placeholder="Masukkan nama ketua anda disini..." name="leader_name" onChange={handleChange}/>
                            <Input type="text" labelName="No Telepon" placeholder="Tulis nomor telephone anda disini... " name="telephone" onChange={handleChange}/>
                            <Input type="text" labelName="ID Ketua" placeholder="Tulis ID anda disini..." name="leader_game_id" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Ketua" placeholder="Masukkan Nickname Ketua disini..." name="leader_nickname" onChange={handleChange}/>
                            <Input type="text" labelName="ID Anggota 1" placeholder="Masukkan ID Anggota 1 disini..." name="id_member_1" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 1" placeholder="Masukkan Nickname Anggota 1 disini..." name="nickname_member_1" onChange={handleChange}/>
                            <Input type="text" labelName="ID Anggota 2" placeholder="Masukkan ID Anggota 2 disini..." name="id_member_2" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 2" placeholder="Masukkan Nickname Anggota 2 disini..." name="nickname_member_2" onChange={handleChange}/>
                            <Input type="text" labelName="ID Anggota 3" placeholder="Masukkan ID Anggota 3 disini..." name="id_member_3" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 3" placeholder="Masukkan Nickname Anggota 3 disini..." name="nickname_member_3" onChange={handleChange}/>
                            <Input type="text" labelName="ID Anggota 4" placeholder="Masukkan ID Anggota 4 disini..." name="id_member_4" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 4" placeholder="Masukkan Nickname Anggota 4 disini..." name="nickname_member_4" onChange={handleChange}/>
                            <Input type="text" labelName="ID Anggota 5" placeholder="Masukkan ID Anggota 5 disini..." name="id_member_5" onChange={handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 5" placeholder="Masukkan Nickname Anggota 5 disini..." name="nickname_member_5" onChange={handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={handleSave}/>
                            <p className='mt-3'><Link to='/mobilelegend' className='lihat'>Lihat Peraturan</Link></p>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}

export default Mobilelegendform
