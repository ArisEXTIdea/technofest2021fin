import React, { Component } from 'react'
import { mascot } from '../../assets'
import { Button, Navbar } from '../../components'

export class Exposuccess extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row ml-client-form-row">
                    <div className="col-6 d-none d-md-block"></div>
                    <div className="col-6 d-none d-md-block ml-client-form-col-left position-fixed">
                        <img src={mascot} alt="Mascot Technofest" className='img-fluid'/>
                    </div>
                    <div className="col-12 col-md-6 p-5 alig-itmes-center">
                        <h3 className="text-center mt-5">Pendaftaran Berhasil</h3>
                        <p className='text-justify'>Silahkan bergabung dengan group whatsapp EXPO TECHNOFEST2021 di link berikut dan jangan lupa melakukan konfirmasi pembayaran ke nomor <b>085781271519(Dicky)</b> </p>
                        <a href="https://chat.whatsapp.com/EMefbMKVU59445TJB1hcrL"><Button title="Gabung Group Whatsapp" addStyle="btn-block"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exposuccess
