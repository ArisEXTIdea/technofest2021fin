import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { webinarbanner } from '../../assets'
import { Button, Footer, Navbar } from '../../components'

export class Webinarabout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <div className="col-10 my-5">
                        <h2 className='text-center mb-3'>Webinar TECHNOFEST 2021</h2>
                        <img src={webinarbanner} alt="Mobile Legend Banner" className='img-fluid'/>
                        <h3 className='mt-5'>Syarat dan Ketentuan Peserta:</h3>
                        <ol>
                            <li>Akses ke Zoom akan dibuka 15 menit sebelum acara dimulai.</li>
                            <li>Link akses zoom Webinar akan kami kirimkan melalui WA Grup Webinar pada H-1 pelaksanaan Webinar.</li>
                            <li>ID peserta dalam Webinar ini harus menggunakan nama asli, bukan nama perangkat atau nama institusi.</li>
                            <li>Peserta yang mendapatkan akses ke Zoom harus berpakaian sopan dan berperilaku sopan saat Webinar dilaksanakan.</li>
                            <li>Peserta sangat diharapkan untuk mematikan suara (mute) selama proses Webinar berlangsung.</li>
                            <li>Materi Webinar akan diberikan 30 menit sebelum acara dimulai.</li>
                            <li>Sertifikat akan dibagikan bagi peserta yang mengikuti acara dari awal sampai berakhirnya Webinar.</li>
                            <li>Di akhir acara, link daftar hadir akan dibagikan. Link tersebut hanya akan aktif selama 30 menit.</li>
                            <li>Peserta yang tidak mengisi google form pendaftaran sebelum acara dimulai dan atau tidak mengisi daftar hadir saat acara selesai, TIDAK akan mendapatkan sertifikat.</li>
                            <li>Untuk e-sertifikat akan kami kirim paling lambat H+3 setelah pelaksanaan Webinar berlangsung melalui grup WhatsApp.</li>
                        </ol>
                        

                        <h5 className='text-center mt-3'>Pendaftaran</h5>
                        <ol>
                            <li>Biaya Pendaftaran :  <b>Gratis</b></li>
                            <li>Pembayaran : -
                            </li>
                        </ol>
                        <Link to="/webinar/daftar"><Button title="Daftar Sekarang" addStyle="btn-block"/></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Webinarabout
