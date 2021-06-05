import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'


export class Expoormawaupdate extends Component {
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

    componentDidMount = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        console.log(id);
        axios.get(`https://technnofest2021-api.herokuapp.com/api/expo/ormawa/get/${id}`)
        .then(res => {
            this.setState({
                    expo : {
                        ormawa_name : res.data.data.ormawa_name,
                        kaprodi_name : res.data.data.kaprodi_name,
                        ketua_name : res.data.data.ketua_name,
                        telephone : res.data.data.telephone,
                    }
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const newExpo = {...this.state.expo}
        newExpo[event.target.name] = event.target.value;
        this.setState({
            expo : newExpo
        })
    }
    
    handleSave = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        axios.put(`https://technnofest2021-api.herokuapp.com/api/expo/ormawa/put/${id}`, this.state.expo)
        .then(res => {
            alert(res.data.message);
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
                        <h3 className="text-center">Update Peserta EXPO Ormawa</h3>
                        <form enctype="application/json">
                            <Input value={this.state.expo.ormawa_name} type="text" labelName="Nama Ormawa" placeholder="Masukkan nama ormawa disini..." name="ormawa_name" onChange={this.handleChange}/>
                            <Input value={this.state.expo.kaprodi_name} type="text" labelName="Nama Kaprodi" placeholder="Masukkan nama kaprodi/pembimbing disini..." name="kaprodi_name" onChange={this.handleChange}/>
                            <Input value={this.state.expo.ketua_name} type="text" labelName="Nama Ketua" placeholder="Masukkan nama ketua disini..." name="ketua_name" onChange={this.handleChange}/>
                            <Input value={this.state.expo.telephone} type="text" labelName="No Telepon" placeholder="Masukkan nomor telepon disini..." name="telephone" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Expoormawaupdate
