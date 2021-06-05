import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'


export class Webinarupdate extends Component {
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

    componentDidMount = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        console.log(id);
        axios.get(`https://technnofest2021-api.herokuapp.com/api/webinar/get/${id}`)
        .then(res => {
            this.setState({
                    webinar : {
                        name : res.data.data.name,
                        email : res.data.data.email,
                        delegasi : res.data.data.delegasi,
                        ptinstansi : res.data.data.ptinstansi,
                        telephone : res.data.data.telephone,
                    }
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const newWebinar = {...this.state.webinar}
        newWebinar[event.target.name] = event.target.value;
        this.setState({
            webinar : newWebinar
        })
    }
    
    handleSave = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        axios.put(`https://technnofest2021-api.herokuapp.com/api/webinar/put/${id}`, this.state.webinar)
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
                        <h3 className="text-center">Update Peserta Webinar</h3>
                        <form enctype="application/json">
                            <Input value={this.state.webinar.name} type="text" labelName="Nama" placeholder="Masukkan nama anda disini..." name="name" onChange={this.handleChange}/>
                            <Input value={this.state.webinar.email} type="text" labelName="Email" placeholder="Masukkan email anda disini..." name="email" onChange={this.handleChange}/>
                            <Input value={this.state.webinar.delegasi} type="text" labelName="Delegasi" placeholder="Tulis nama ormawa untuk delegasi, tulis 'perorangan' untuk non-delegasi " name="delegasi" onChange={this.handleChange}/>
                            <Input value={this.state.webinar.ptinstansi} type="text" labelName="Nama Perguruan Tinggi/Instansi" placeholder="Tulis nama Perguruan tinggi atau Instansi anda" name="ptinstansi" onChange={this.handleChange}/>
                            <Input value={this.state.webinar.telephone} type="text" labelName="Nomor Telephone" placeholder="Masukkan no telepon disini..." name="telephone" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Webinarupdate
