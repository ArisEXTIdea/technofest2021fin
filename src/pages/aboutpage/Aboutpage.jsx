// Import Module
import React, { Component } from 'react'
import { Card, Footer, Headerstroke, Navbar } from '../../components'
import './style.scss'
import {aboutgaleries, bandthumb, expothumb, mlthumb, webinarthumb} from '../../assets/'


export class Aboutpage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                {/* Navigation Bar */}
                <Navbar /> 
                {/* Content */}
                <Headerstroke />
                <div className="row justify-content-center align-items-center about-row mb-5">
                    <div className="col-sm-4 about-col">
                        <img src={aboutgaleries} alt="Aboutgaleries" className="img-fluid p-3"/>
                    </div>
                    <div className="col-sm-6 about-col">
                        <p className='about-content'>Technofest merupakan kegiatan yang dilaksanakan setiap tahunnya yang diselenggarakan oleh Badan Eksekutif Mahasiswa Sains dan Teknologi UNISNU Jepara. Kegitan ini bertujuan untuk menumbuhkan semangat berinovasi dan kreatifitas bagi mahasiswa dalam bidang teknologi, sosial, budaya dan kewirausahaan. Selain itu kami juga berharap agar dapat menyatukan seluruh Himpunan Mahasiswa Program Studi Fakultas Sains dan Teknologi. Dalam penyelenggaraan acara ini kami  menampilkan berbagai karya mahasiswa UNISNU yang dikemas semenarik mungkin dalam kegiatan ini.
                        </p>
                    </div>
                </div>
                <hr />
                {/* Introduction about events in Technofest 2021 */}
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-10">
                        <h2 className='text-center mb-3'>Ada apa nih di Technofest 2021?</h2>
                        <p>Ditahun 2021 ini Technofest mengusung tema "Produktifitas dan Kreativitas Mahasiswa di Era New Normal" dan tentunya dengan tema tersebut kami menghadirkan banyak kegiatan yang menarik dan seru yang dapat kita nikmati walaupun kita masih berada di masa pandemi.Di Technofest 2021 ini juga kami bekerjasama dengan berbagai pihak seperti UMKM dan Bintang tamu-bintang tamu keren untuk menambah keseruan di Technofest 2021. Penasaran nih apa saja kegiatan di Technofest 2021...?</p>
                        <p>Ini dia kegiatan seru yang bisa kita nikmati di Technofest 2021...</p>
                    </div>
                    {/* Card Section - this section contain link to register form for each event in technofest 2021 */}
                    <div className="row about-card-row justify-content-center align-items-center">
                        <div className="col-12 col-md-4">
                            <Card cardButtonLink='/mobilelegend/daftar' cardImg={mlthumb} cardContent="Mobile Legend Turnamen" cardHeader="Mobile Legend" />
                        </div>
                        <div className="col-12 col-md-4">
                            <Card cardButtonLink='/band/daftar' cardImg={bandthumb} cardContent="Band Competition" cardHeader="Accoustic Competition" />
                        </div>
                        <div className="col-12 col-md-4">
                            <Card cardButtonLink='/expo' cardImg={expothumb} cardContent="Expo" cardHeader="Expo Technofest" />
                        </div>
                    </div>
                    <div className="row about-card-row mb-5 justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <Card cardButtonLink='/webinar/daftar' cardImg={webinarthumb} cardContent="Webinar" cardHeader="Webinar" />
                        </div>
                        <div className="col-12 col-md-6">
                            <Card cardImg={bandthumb} cardContent="Inagurasi" cardHeader="Inagurasi" />
                        </div>
                    </div>
                </div>
                {/* Footer Section */}
                <div className="row">
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutpage
