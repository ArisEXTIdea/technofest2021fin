import React, { Component } from 'react'
import './style.scss'
import axios from 'axios'
import { Button, Input, Sidemenu } from '../../components'

export class Pengumumancreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pengumuman : {
                 title : '',
                 image : '',
                 content : '',
             }
        }
    }

    handleChange = (event) => {
        const newPengumuman = {...this.state.pengumuman}
        newPengumuman[event.target.name] = event.target.value;
        this.setState({
            pengumuman : newPengumuman
        }, ()=> console.log(this.state.pengumuman))
    }

    uploadImage = (event) => {
        const newPengumuman = {...this.state.pengumuman}
        newPengumuman.image = event.target.files[0];
        this.setState({
            pengumuman : newPengumuman
        }, ()=> console.log(this.state.pengumuman))
    }
    
    handleSave = () => {
        const data = new FormData();
        data.append("title", this.state.pengumuman.title);
        data.append("content", this.state.pengumuman.content);
        data.append("image", this.state.pengumuman.image);

        axios.post('https://technnofest2021-api.herokuapp.com/api/pengumuman/post', data)
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
                        <h3 className="text-center">Buat Pengumuman</h3>
                        <form enctype="multipart/form-data">
                            <Input type="text" labelName="Judul" placeholder="Masukkan judul ldisini..." name="title" onChange={this.handleChange}/>
                            <div className="form-group">
                                <label htmlFor="content">Konten</label><br />
                                <textarea name="content" className='form-control pengumuman-text-area' onChange={this.handleChange}></textarea>
                            </div>
                            <Input type="file" name="image" labelName="Unggah Gambar(Wajib)" onChange={this.uploadImage}/>
                            <Button title="Simpan" addStyle="btn-block" type="button" onClick={this.handleSave}/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Pengumumancreate
