import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Buttonlogout, Navbar, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Subadminband extends Component {
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
                    <Navbar />
                    <div className="col-12 p-a-col mt-5 px-5">
                     <h3 className='text-center pt-5'>Data Peserta Kompetisi Band</h3>
                     <div className="row mt-3">
                         <div className="col-12 ml-3 mt-2">
                            <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button btn btn-success"
                            table="table-expo-partner"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download as XLS"/>
                            <h5 className='text-center'>Jumlah Peserta : {this.state.band.length}</h5>
                            <Buttonlogout cookies="bandasdmhagsdjgyashdjagsd7685a7sdghjasgdjy" />
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

export default Subadminband
