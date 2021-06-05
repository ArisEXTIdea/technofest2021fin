import React, { Component } from 'react'
import { Footer, Navbar } from '../../components'
import './style.scss'

export class Contact extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row contact-row justify-content-center">
                    <div className="col-10 col-md-8">
                        <h2 className='text-center'>Kontak</h2>
                        <p>Untuk informasi lebih lanjut mengenai technofest 2021 anda dapat menghubungi kami melalui daftar kontak di bawah ini.</p>
                        <h3>Alamat</h3>
                        <ul>
                            <li><b>Kantor BEM FST</b>- Jalan Taman Siswa, Pekeng, Jl. Kauman, Kec. Tahunan, Kabupaten Jepara, Jawa Tengah 59451</li>
                        </ul>
                        <h3>Email</h3>
                        <ul>
                            <li>bemfst@usisnu.ac.id</li>
                        </ul>
                        <h3>Media Sosial</h3>
                        <h4>Instagram</h4>
                        <ul>
                            <li>@bemfst.unisnu</li>
                            <li>@technofest.unisnu</li>
                            <li>@infofst.unisnu</li>
                        </ul>
                        <h3>Kontak Personal Setiap Aacara</h3>
                        <ul>
                            <li>Mobile Legend - 082137085668(Hilmi)</li>
                            <li>Lomba Cover Akustik - 082137085668(Hilmi)</li>
                            <li>Webinar - 081227303889(Dedi)</li>
                            <li>Expo - 085781271519(Dicky)</li>
                            <li>Umum - 085228473458(Igo)</li>
                        </ul>
                    </div>
                </div>
                <Footer />
                
            </div>
        )
    }
}

export default Contact
