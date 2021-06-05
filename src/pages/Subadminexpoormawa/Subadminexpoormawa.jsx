import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Buttonlogout, Navbar, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Subadminexpoormawa extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             expo : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/expo/ormawa/get')
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
            axios.delete(`https://technnofest2021-api.herokuapp.com/api/expo/ormawa/delete/${id}`)
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
                     <h3 className='text-center pt-5'>Data Peserta Expo Ormawa</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                            <Link to="/subadmin/expopartner"><Button title='Data Sponsorship dan UMKM'/></Link>
                            <Buttonlogout addStyle='mt-3' cookies="expoasdbkajsbdjhavsjdasd7a646a54da5s4d76a" />
                         </div>
                         <div className="col-6 ml-3 mt-2">
                            <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button btn btn-success"
                            table="table-expo-partner"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download as XLS"/>
                            <h5 className='text-center'>Jumlah Peserta: {this.state.expo.length}</h5>
                         </div>
                     </div>
                     <table className="table table-bordered mt-3 tb-admin-read" id="table-expo-partner">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Nama Ormawa</th>
                                <th scope="col">Nama Kaprodi/Pembimbing</th>
                                <th scope="col">Nama Ketua Ormawa</th>
                                <th scope="col">No Telp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.expo.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.ormawa_name}</td>
                                            <td>{post.kaprodi_name}</td>
                                            <td>{post.ketua_name}</td>
                                            <td>{post.telephone}</td>
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

export default Subadminexpoormawa
