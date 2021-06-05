import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Bandread extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             band : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/band/get')
        .then(result => {
            this.setState({
                band : result.data.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getApi()
        console.log(this.state.band)
    }

    handleDelete = (id) => {
        const r = window.confirm('Apakah anda yakin menghapus data ini?')
        if(r){
            axios.delete(`https://technnofest2021-api.herokuapp.com/api/band/delete/${id}`)
            .then( res => {
                this.getApi()
            })
            .catch(err => console.log(err)) 
        }
    }
    
    render() {
        return (
            <div className="container-fluid p-a-container">
                <div className="row">
                    <div className="col-3"></div>
                        <Sidemenu />
                    <div className="col-9 p-a-col">
                     <h3 className='text-center pt-5'>Data Peserta Accoustic Cover Competition</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                            <Link to="/admin/band/create"><Button title='Tambah Data'/></Link>
                         </div>
                         <div className="col-6 ml-3 mt-2">
                            <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button btn btn-success"
                            table="table-expo-partner"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download as XLS"/>
                         </div>
                     </div>
                     <table className="table table-bordered mt-3 tb-admin-read" id="table-expo-partner">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Nama Band</th>
                                <th scope="col">Nama Ketua Band</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Nama Lagu</th>
                                <th scope="col">Link Video</th>
                                <th scope="col" colSpan='2'>Kontrol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.band.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.band_name}</td>
                                            <td>{post.leader_name}</td>
                                            <td>{post.telephone}</td>
                                            <td>{post.song_title}</td>
                                            <td>{post.video_link}</td>
                                            <td className="text-center"><Link to={`/admin/band/update/${post._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
                                            <td className="text-center"><button onClick={() =>this.handleDelete(post._id)} className='btn btn-danger'>Hapus</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Bandread
