import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'

export class Webinarcreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             webinar : {
                 name : '',
                 email : '',
                 delegasi : '',
                 ptinstansi : '',
                 telephone : '',
             }
        }
    }

    handleChange = (event) => {
        const newWebinar = {...this.state.webinar}
        newWebinar[event.target.name] = event.target.value;
        this.setState({
            webinar : newWebinar
        })
    }
    
    handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/webinar/post', this.state.webinar)
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
                        <h3 className="text-center">Tambah Data Peserta Webinar</h3>
                        <form enctype="application/json">
                            <Input type="text" labelName="Nama" placeholder="Masukkan nama anda disini..." name="name" onChange={this.handleChange}/>
                            <Input type="text" labelName="Email" placeholder="Masukkan email anda disini..." name="email" onChange={this.handleChange}/>
                            <Input type="text" labelName="Delegasi" placeholder="Tulis nama ormawa untuk delegasi, tulis 'perorangan' untuk non-delegasi " name="delegasi" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nama Perguruan Tinggi/Instansi" placeholder="Tulis nama Perguruan tinggi atau Instansi anda" name="ptinstansi" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nomor Telephone" placeholder="Masukkan no telepon disini..." name="telephone" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Webinarcreate
