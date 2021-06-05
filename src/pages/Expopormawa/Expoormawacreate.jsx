import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'

export class Expoormawacreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            expo : {
                ormawa_name : '',
                kaprodi_name : '',
                ketua_name : '',
                telephone : '',
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
        axios.post('https://technnofest2021-api.herokuapp.com/api/expo/ormawa/post', this.state.expo)
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
                        <h3 className="text-center">Tambah Data Peserta EXPO Ormawa</h3>
                        <form enctype="application/json">
                            <Input type="text" labelName="Nama Ormawa" placeholder="Masukkan ormawa disini..." name="ormawa_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="E-Nama Kaprodi/Pembimbing" placeholder="Masukkan kaprodi/pembimbing disini..." name="kaprodi_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nama Ketua Ormawa" placeholder="Masukkan nama ketua disini..." name="ketua_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nomor Telephone" placeholder="Masukkan no telepon disini..." name="telephone" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Expoormawacreate
