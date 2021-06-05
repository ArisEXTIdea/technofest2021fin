import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { pengumumanthumbnail } from '../../assets'
import { Button, Navbar } from '../../components'
import './style.scss'

export class Pengumuman extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pengumuman : [],
        }
    }
    
    componentDidMount = () => {
        axios.get('https://technnofest2021-api.herokuapp.com/api/pengumuman/get')
        .then(res => {
            this.setState({
                pengumuman : res.data.data
            })
        })
        .catch(err => console.log(err))
    }

    handleLoad = () => {
        if(this.state.pengumuman.length === 0){
            return "Sedang Memuat Pengumuman..."
        }
        else{
            return "Pengumuman sukses dimuat.."
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center">
                    <div className="col-8 penggumuman-col">
                        <h3 className='text-center my-3'>PENGUMUMAN</h3>
                        <a href="#end" className='btn btn-success'>Pengumuman terbaru</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    
                    <div className="col-8">
                    {
                        this.state.pengumuman.map(post => {
                            const image = post.image.split('\\').reverse()
                            const imagepath = `https://loremflickr.com/320/240`
                            const urltitle = post.title.split(' ').join('-')
                            return (
                                <div className="card">
                                    <img src={pengumumanthumbnail} className='img-fluid'/>
                                    <div className='pt-2 px-3 pb-5'>
                                        <h5 className='text-center'>{post.title}</h5>
                                    <Link to={`/pengumuman/${urltitle}/${post._id}`}><Button addStyle='btn-block' title='Baca...' /></Link>
                                    </div>
                                </div> 
                            )
                        })
                    }

                    <p className='text-center' id='end'>{this.handleLoad()}</p>
                        
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Pengumuman
