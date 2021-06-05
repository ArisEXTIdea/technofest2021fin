import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'


export class Bandupdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            band : {
                band_name : '',
                leader_name : '',
                telephone : '',
                song_title : '',
                video_link : '',
            }
        }
    }

    componentDidMount = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        console.log(id);
        axios.get(`https://technnofest2021-api.herokuapp.com/api/band/get/${id}`)
        .then(res => {
            this.setState({
                    band : {
                        band_name : res.data.data.band_name,
                        leader_name : res.data.data.leader_name,
                        telephone : res.data.data.telephone,
                        song_title : res.data.data.song_title,
                        video_link : res.data.data.video_link,
                    }
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const newBand = {...this.state.band}
        newBand[event.target.name] = event.target.value;
        this.setState({
            band : newBand
        })
    }
    
    handleSave = () => {
        const path = window.location.pathname.split('/').reverse();
        const id = path[0];
        axios.put(`https://technnofest2021-api.herokuapp.com/api/band/put/${id}`, this.state.band)
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
                        <h3 className="text-center">Update Data Peserta Accoustic Cover Competition</h3>
                        <form enctype="application/json">
                            <Input value={this.state.band.band_name} type="text" labelName="Nama Band" placeholder="Masukkan nama band anda disini..." name="band_name" onChange={this.handleChange}/>
                            <Input value={this.state.band.leader_name} type="text" labelName="Nama Ketua Band" placeholder="Masukkan nama ketua band anda disini..." name="leader_name" onChange={this.handleChange}/>
                            <Input value={this.state.band.telephone} type="text" labelName="No Telepon" placeholder="Tulis nomor telephone anda disini... " name="telephone" onChange={this.handleChange}/>
                            <Input value={this.state.band.song_title} type="text" labelName="Judul Lagu" placeholder="Tulis judul lagu anda disini..." name="song_title" onChange={this.handleChange}/>
                            <Input value={this.state.band.video_link} type="text" labelName="Link Video Youtube" placeholder="Masukkan Link video lomba anda disini..." name="video_link" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Bandupdate
