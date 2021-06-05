import React, { Component } from 'react'
import { Buttonlogout, Navbar } from '../../components'
import { Link } from 'react-router-dom'
import { Button, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Subadminwebinar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             webinar : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/webinar/get')
        .then(result => {
            this.setState({
                webinar : result.data.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getApi()
        console.log(this.state.webinar)
    }

    render() {
        return (
            <div className="container-fluid p-a-container">
                <div className="row">
                    <Navbar />
                    <div className="col-12 p-a-col mt-5 px-5">
                     <h3 className='text-center pt-5'>Data Peserta Webinar</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                         <Buttonlogout cookies='webinarjhavshvasd65a7sd867aduasgdhasjdgjadsgj'/>
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
                     <h5 className='text-center'>Jumlah peserta = {this.state.webinar.length}</h5>
                     <table className="table table-bordered mt-3 tb-admin-read" id="table-expo-partner">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                <th scope="col">Delegasi</th>
                                <th scope="col">Nama PTN/Instansi</th>
                                <th scope="col">No Telp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                this.state.webinar.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.name}</td>
                                            <td>{post.email}</td>
                                            <td>{post.delegasi}</td>
                                            <td>{post.ptinstansi}</td>
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

export default Subadminwebinar
