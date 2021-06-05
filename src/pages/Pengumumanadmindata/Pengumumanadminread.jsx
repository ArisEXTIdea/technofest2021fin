import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Sidemenu } from '../../components'
import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Pengumumanadminread extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pengumuman : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/pengumuman/get')
        .then(result => {
            this.setState({
                pengumuman : result.data.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getApi()
    }

    handleDelete = (id) => {
        alert('Apakah anda yakin menghapus data ini?')
        axios.delete(`https://technnofest2021-api.herokuapp.com/api/pengumuman/delete/${id}`)
        .then( res => {
            this.getApi()
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="container-fluid p-a-container">
                <div className="row">
                    <div className="col-3"></div>
                        <Sidemenu />
                    <div className="col-9 p-a-col">
                     <h3 className='text-center pt-5'>Data Pengumuman</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                            <Link to="/admin/pengumuman/create"><Button title='Buat Pengumuman'/></Link>
                         </div>
                         <div className="col-6 ml-3 mt-2">
                            <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button btn btn-success"
                            table="table-pengumuman"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download as XLS"/>
                         </div>
                     </div>
                     <table className="table table-bordered mt-3 tb-admin-read" id="table-pengumuman">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Judul</th>
                                <th scope="col">Konten</th>
                                <th scope="col">Gambar</th>
                                <th scope="col" colSpan='2'>Kontrol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pengumuman.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.title}</td>
                                            <td>{post.content}</td>
                                            <td>{post.image}</td>
                                            <td className="text-center"><Link to={`/admin/pengumuman/update/${post._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
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

export default Pengumumanadminread
