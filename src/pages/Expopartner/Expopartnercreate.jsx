import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'

export class Expopartnercreate extends Component {
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

    handleChange = (event) => {
        const newExpo = {...this.state.expo}
        newExpo[event.target.name] = event.target.value;
        this.setState({
            expo : newExpo
        }, ()=> console.log(this.state.expo))
    }
    
    handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/expo/partner/post', this.state.expo)
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
                            <Input type="text" labelName="Nama" placeholder="Masukkan nama disini..." name="name" onChange={this.handleChange}/>
                            <Input type="text" labelName="E-mail" placeholder="Masukkan email disini..." name="email" onChange={this.handleChange}/>
                            <Input type="text" labelName="No Telepon" placeholder="Masukkan nomor telepon disini..." name="telephone" onChange={this.handleChange}/>
                            {/* Droppdown */}
                            <Input type="text" labelName="Nama Bisnis / Brand" placeholder="Masukkan nama bisnis disini..." name="business_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="Bidang Bisnis" placeholder="Masukkan bidang disini..." name="business_field" onChange={this.handleChange}/>
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
                                <select class="custom-select" id="inputGroupSelect01" name='stand_type' onChange={this.handleChange}>
                                    <option selected>Pilih...</option>
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

export default Expopartnercreate
