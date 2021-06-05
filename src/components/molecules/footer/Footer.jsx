import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Footer() {
    return (
        <div className ='row justify-content-center footer-row p-3 pt-5 pb-4'>
            <div className="col-12 col-md-3">
                <h5>Alamat</h5>
                <p>Jalan Taman Siswa, Pekeng, Jl. Kauman, Kec. Tahunan, Kabupaten Jepara, Jawa Tengah 59451</p>
            </div>
            <div className="col-12 col-md-2 justify-content-center" >
                <h5>Kegiatan</h5>
                <Link to='mobilelegend' className="footer-link">Mobile Legend</Link><br />
                <Link to='/band' className="footer-link">Band Competition</Link><br />
                <Link to='/webinar' className="footer-link">Webinar</Link><br />
                <Link to='/expo' className="footer-link">Expo</Link><br />
                <Link className="footer-link">Inagurasi</Link>
            </div>
            <div className="col-12 col-md-2">
                <h5>Contact</h5>
                <p>+098976565768</p>
                <p>bemfst@unisnu.ac.id</p>
            </div>
            <div className="col-12 col-md-3 footer-social">
                <h5>Social Media</h5>
                <p>
                <a href="https://web.facebook.com/bemfst.unisnu/"><i className="fab fa-facebook mr-2"></i></a>
                <a href="https://www.instagram.com/technofest.unisnu/"><i className="fab fa-instagram mr-2"></i></a>
                <a href="https://www.youtube.com/channel/UCRRi78R8hBDrBCSAcSG1UBA"><i className="fab fa-youtube"></i></a></p>
            </div>
        </div>
    )
}

export default Footer
