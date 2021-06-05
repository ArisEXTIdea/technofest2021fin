import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'

export class Mlcreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ml : {
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
            }
        }
    }

    handleChange = (event) => {
        const newMl = {...this.state.ml}
        newMl[event.target.name] = event.target.value;
        this.setState({
            ml : newMl
        })
    }
    
    handleSave = () => {
        axios.post('https://technnofest2021-api.herokuapp.com/api/ml/post', this.state.ml)
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
                        <h3 className="text-center">Tambah Data Turnamen Mobile Legend</h3>
                        <form enctype="application/json">
                            <Input type="text" labelName="Nama Team" placeholder="Masukkan nama team anda disini..." name="team_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nama Ketua" placeholder="Masukkan nama ketua anda disini..." name="leader_name" onChange={this.handleChange}/>
                            <Input type="text" labelName="No Telepon" placeholder="Tulis nomor telephone anda disini... " name="telephone" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Ketua" placeholder="Tulis ID anda disini..." name="leader_game_id" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Ketua" placeholder="Masukkan Nickname Ketua disini..." name="leader_nickname" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Anggota 1" placeholder="Masukkan ID Anggota 1 disini..." name="id_member_1" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 1" placeholder="Masukkan Nickname Anggota 1 disini..." name="nickname_member_1" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Anggota 1" placeholder="Masukkan ID Anggota 2 disini..." name="id_member_2" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 2" placeholder="Masukkan Nickname Anggota 2 disini..." name="nickname_member_2" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Anggota 3" placeholder="Masukkan ID Anggota 3 disini..." name="id_member_3" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 3" placeholder="Masukkan Nickname Anggota 3 disini..." name="nickname_member_3" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Anggota 4" placeholder="Masukkan ID Anggota 4 disini..." name="id_member_4" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 4" placeholder="Masukkan Nickname Anggota 4 disini..." name="nickname_member_4" onChange={this.handleChange}/>
                            <Input type="text" labelName="ID Anggota 5" placeholder="Masukkan ID Anggota 5 disini..." name="id_member_5" onChange={this.handleChange}/>
                            <Input type="text" labelName="Nickname Anggota 5" placeholder="Masukkan Nickname Anggota 5 disini..." name="nickname_member_5" onChange={this.handleChange}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Mlcreate
