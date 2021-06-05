import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Sidemenu } from '../../components'
// import './style.scss'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export class Mlread extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ml : []
        }
    }

    getApi = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/ml/get')
        .then(result => {
            this.setState({
                ml : result.data.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getApi()
    }

    handleDelete = (id) => {
        const r = window.confirm('Apakah anda yakin menghapus data ini?')
        if(r){
            axios.delete(`https://technnofest2021-api.herokuapp.com/api/ml/delete/${id}`)
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
                     <h3 className='text-center pt-5'>Data Peserta Turnamen Mobile Legend</h3>
                     <div className="row mt-3">
                         <div className="col6 ml-3 mt-2">
                            <Link to="/admin/ml/create"><Button title='Tambah Data'/></Link>
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
                                <th scope="col">Nama Team</th>
                                <th scope="col">Nama Ketua Band</th>
                                <th scope="col">No Telepon</th>
                                <th scope="col">Nickname Ketua</th>
                                <th scope="col">ID Game Ketua</th>
                                <th scope="col">ID Anggota 1</th>
                                <th scope="col">Nickname Anggota 1</th>
                                <th scope="col">ID Anggota 2</th>
                                <th scope="col">Nickname Anggota 2</th>
                                <th scope="col">ID Anggota 3</th>
                                <th scope="col">Nickname Anggota 3</th>
                                <th scope="col">ID Anggota 4</th>
                                <th scope="col">Nickname Anggota 4</th>
                                <th scope="col">ID Anggota 5</th>
                                <th scope="col">Nickname Anggota 5</th>
                                <th scope="col" colSpan='2'>Kontrol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ml.map(post => {
                                    return (
                                        <tr key={post._id}>
                                            <td>{post.team_name}</td>
                                            <td>{post.leader_name}</td>
                                            <td>{post.telephone}</td>
                                            <td>{post.leader_nickname}</td>
                                            <td>{post.leader_game_id}</td>
                                            <td>{post.id_member_1}</td>
                                            <td>{post.nickname_member_1}</td>
                                            <td>{post.id_member_2}</td>
                                            <td>{post.nickname_member_2}</td>
                                            <td>{post.id_member_3}</td>
                                            <td>{post.nickname_member_3}</td>
                                            <td>{post.id_member_4}</td>
                                            <td>{post.nickname_member_4}</td>
                                            <td>{post.id_member_5}</td>
                                            <td>{post.nickname_member_5}</td>
                                            <td className="text-center"><Link to={`/admin/ml/update/${post._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
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

export default Mlread
