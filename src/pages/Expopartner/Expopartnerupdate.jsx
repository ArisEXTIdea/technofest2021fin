import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'


export class Expopartnerupdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             expo : {
                 name : '',
                 email : '',
                 telephone : '',
                 stand_type : '',
                 business_name : '',
                 business_type : '',
                 business_field : '',
             }
        }
    }

    componentDidMount = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        console.log(id);
        axios.get(`https://technnofest2021-api.herokuapp.com/api/expo/partner/get/${id}`)
        .then(res => {
            this.setState({
                    expo : {
                        name : res.data.data.name,
                        email : res.data.data.email,
                        telephone : res.data.data.telephone,
                        stand_type : res.data.data.stand_type,
                        business_name : res.data.data.business_name,
                        business_type : res.data.data.business_type,
                        business_field : res.data.data.business_field,
                    }
            }, () => console.log(this.state.pengumuman))
        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const newExpo = {...this.state.expo}
        newExpo[event.target.name] = event.target.value;
        this.setState({
            expo : newExpo
        }, ()=> console.log(this.state.expo))
    }
    
    handleSave = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        console.log(id);
        axios.put(`https://technnofest2021-api.herokuapp.com/api/expo/partner/put/${id}`, this.state.expo)
        .then(res => {
            alert(res.data.message);
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"></div>
                    <Sidemenu />
                    <div className="col-9 p-5">
                        <h3 className="text-center">Tambah Data Peserta EXPO Sponsorship dan UMKM</h3>
                        <form enctype="application/json">
                            <Input value={this.state.expo.name} type="text" labelName="Nama" placeholder="Masukkan nama disini..." name="name" onChange={this.handleChange}/>
                            <Input value={this.state.expo.email} type="text" labelName="E-mail" placeholder="Masukkan email disini..." name="email" onChange={this.handleChange}/>
                            <Input value={this.state.expo.telephone} type="text" labelName="No Telepon" placeholder="Masukkan nomor telepon disini..." name="telephone" onChange={this.handleChange}/>
                            {/* Droppdown */}
                            <Input value={this.state.expo.business_name} type="text" labelName="Nama Bisnis / Brand" placeholder="Masukkan nama bisnis disini..." name="business_name" onChange={this.handleChange}/>
                            <Input value={this.state.expo.business_field} type="text" labelName="Bidang Bisnis" placeholder="Masukkan bidang disini..." name="business_field" onChange={this.handleChange}/>
                            <div class="input-group mb-3">
                                <label htmlFor="jenisstand"></label>
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Jenis Bisnis</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name='business_type' onChange={this.handleChange}>
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
                                <select class="custom-select" id="inputGroupSelect01" name='stand_type' onChange={this.handleChange} value={this.state.stand_type}>
                                    <option >Pilih...</option>
                                    <option value="Sponsor">Sponsor</option>
                                    <option value="UMKM">UMKM</option>
                                </select>
                            </div>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Expopartnerupdate
