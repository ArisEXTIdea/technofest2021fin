import axios from 'axios'
import React, { Component } from 'react'
import { Footer, Navbar } from '../../components'
import './style.scss'

export class Pengumumandetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pengumuman : ''
        }
    }

    componentDidMount = () => {
        const id = window.location.pathname.split('/').reverse()[0]
        axios.get(`https://technnofest2021-api.herokuapp.com/api/pengumuman/get/${id}`)
        .then(res => {
            this.setState({
                pengumuman : res.data.data
            })
        })
        .catch(err => console.log(err))
    }
    
    
    render() {
        const image = this.state.pengumuman.image;
        console.log(image)
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mb-5">
                    <div className="col-9 penggumuman-col">
                        <h3 className='text-center mb-5'>{this.state.pengumuman.title}</h3>
                        <img src={`https://technnofest2021-api.herokuapp.com/${image}`} alt="" className='img-fluid'/>
                        <p>{this.state.pengumuman.content}</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Pengumumandetail
