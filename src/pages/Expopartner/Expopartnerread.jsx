import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Expopartnerread extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             expo : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/expo/partner/get')
        .then(result => {
            this.setState({
                expo : result.data.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getApi()
        console.log(this.state.expo)
    }

    handleDelete = (id) => {
        const r = window.confirm('Apakah anda yakin menghapus data ini?')
        if(r){
            axios.delete(`https://technnofest2021-api.herokuapp.com/api/expo/partner/delete/${id}`)
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
                     <h3 className='text-center pt-5'>Data Peserta Expo UMKM dan Sponsorship</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                            <Link to="/admin/expopartner/create"><Button title='Tambah Data'/></Link>
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
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                <th scope="col">No Telp</th>
                                <th scope="col">Jenis Stand</th>
                                <th scope="col">Nama Bisnis/Brand</th>
                                <th scope="col">Jenis Bisnis</th>
                                <th scope="col">Bidang Bisnis</th>
                                <th scope="col" colSpan='2'>Kontrol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.expo.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.name}</td>
                                            <td>{post.email}</td>
                                            <td>{post.telephone}</td>
                                            <td>{post.stand_type}</td>
                                            <td>{post.business_name}</td>
                                            <td>{post.business_type}</td>
                                            <td>{post.business_field}</td>
                                            <td className="text-center"><Link to={`/admin/expopartner/update/${post._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
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

export default Expopartnerread
