import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bandbanner } from '../../assets'
import { Button, Footer, Navbar } from '../../components'

export class Bandabout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <div className="col-10 my-5">
                        <h2 className='text-center mb-3'>Lomba Cover Akustik TECHNOFEST 2021</h2>
                        <img src={bandbanner} alt="Mobile Legend Banner" className='img-fluid'/>
                        <h3 className='mt-5'>Peraturan Kompetisi:</h3>
                        <h5 className='text-center mt-3'>Timeline</h5>
                        <ol className='mt-3'>
                           <li> Pendaftaran, Pembayaran dan Upload: <b>5-30 Juni 2021</b>  </li>
                           <li> Pengumuman 5 besar: <b>3 Juli 2021</b> </li>
                           <li> Pentas 5 besar: <b>9 Juli 2021</b> </li>
                           <li> Pengumuman pemenang juara 1-3: <b>9 Juli 2021</b> </li>
                        </ol>
                        <h5 className='text-center mt-3'>Ketentuan Lomba</h5>
                        <ol className='mt-3'>
                            <li>Lomba dibuka untuk umum (Lokal Jepara) </li>
                            <li>Setiap team beranggotakan 1-5 orang </li>
                            <li>Kualifikasi dilaksanakan online youtube </li>
                            <li>1 lagu bebas (tidak mengandung SARA, Pornografi dan politik) </li>
                            <li>Pendaftaran dilakukan melalui web Technofest 2021 </li>
                            <li>Konfirmasi pendaftaran dan bukti pendaftaran ke CP yang tertera </li>
                            <li>5 karya peserta terbaik akan dinobatkan sebagai finalis dan berkesempatan tampil di expo technofest untuk memperebutkan juara 1-3 </li>
                            <li>Keputusan Juri dan panitia bersifat mutlak.</li>
                        </ol>
                        <h5 className='text-center mt-3'>Penilaian</h5>
                        <ol className='mt-3'>
                            <li>Instrumen</li>
                            <li>Vokal</li>
                            <li>Kreativitas</li>
                        </ol>
                        <h5 className='text-center mt-3'>Pendaftaran</h5>
                        <ol>
                            <li>Biaya Pendaftaran :  <b>Rp, 50.000</b></li>
                            <li>Pembayaran : 
                                <ul>
                                    <li>Rekening : 589401029738531(BRI An ahmad yudi irawan )</li>
                                    <li>Dana : 0895421636755(Masdar Farid Alwi)</li>
                                </ul>
                            </li>
                            <li>Konfirmasi Pembayaran : 082137085668(Hilmi)</li>
                        </ol>
                        <Link to="/band/daftar"><Button title="Daftar Sekarang" addStyle="btn-block"/></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Bandabout
