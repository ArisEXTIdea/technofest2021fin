import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { expobanner } from '../../assets'
import { Button, Footer, Navbar } from '../../components'

export class Expoabout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <div className="col-10 my-5">
                        <h2 className='text-center mb-3'>EXPO TECHNOFEST 2021</h2>
                        <img src={expobanner} alt="Mobile Legend Banner" className='img-fluid'/>
                        <h3 className='mt-5'>Syarat dan Ketentuan Peserta:</h3>
                        <h5 className='text-center mt-5'>Fasilitas</h5>
                            <p>Setiap Peserta Ekspo TECHNOFEST tahun 2021 akan mendapatkan fasilitas sebagai berikut:</p>
                            <ol>
                                <li>Tempat Pelaksanaan: Lapangan basket, belakang gedung Rektorat UNISNU</li>
                                <li>Waktu pengisian stand dilaksanakan pada hari Sabtu, 10 Juli 2021 pkl 08.00 s.d 16.00 WIB</li>
                                <li>Setiap stand memiliki 1 buah meja; 2 buah kursi; dan 1 sumber listrik</li>
                                <li>Setiap stand dijaga oleh 1-2 orang peserta dengan mengenakan ID Card yang telah disediakan panitia</li> 
                            </ol>
                            
                        <h5 className='text-center mt-5'>Ketentuan Umum</h5>
                        <ol>
                            <li>Peserta DILARANG membawa dan menggunakan minuman keras/alkohol, narkoba, obat-obat terlarang (NAPZA), senjata dan atau barang-barang terlarang lainnya.</li>
                            <li>Ketentuan ini dimaksudkan agar acara dapat terselenggara dengan tertib dan terselenggaranya kegiatan Ekspo dengan baik.</li>
                            <li>Anda telah setuju dan menerima persyaratan yang telah ditentukan panitia selama kegiatan Ekspo Technofest 2021 berlangsung.</li>

                        </ol>
                        <h5 className='text-center mt-5'>Ketentuan Khusus</h5>
                        <ol>
                            <li>Plotting stand/booth peserta menjadi kewenangan panitia.</li>
                            <li>Stand bisa diisi dengan berbagai macam produk dari Usaha masing-masing.</li>
                            <li>Sumber listrik yang tersedia dalam jumlah yang dibatasi, setiap peserta yang  membutuhkan  listrik  di  atas  200 watt  sebagai  pendukung  display atau lainnya mohon memberitahukan kepada pihak panitia.</li>
                            <li>Setiap  peserta   bebas   merancang   bentuk   stand   dan   kegiatan   yang terdapat di stand agar menarik minat dan interaktif dengan pengunjung, apabila terdapat rancangan yang melebihi kapasitas yang sudah disediakan maka wajib menghubungi panitia.</li>
                            <li>Peserta sudah dapat melakukan dekorasi dan pengisian stand pada hari Sabtu tanggal 10 Juli 2021 pkl 08.00 WIB s.d 22.00 WIB.</li>
                            <li>Seluruh barang yang akan ditinggal di stand/pameran wajib dicatat dalam formulir daftar barang yang akan diberikan oleh panitia pada saat peserta mempersiapkan stand/pameran.</li>
                            <li>Materi pameran hanya boleh ditempel ke panel yang tersedia dan DILARANG MENGGUNAKAN DOUBLE TAPE JENIS APAPUN (silakan gunakan selotip kertas, Paper Klip, tali kenur atau alat lain yang tidak merusak panel).</li>
                            <li>Peserta meninggalkan area stand dalam keadaaan bersih setaip hari dan saat acara berakhir</li>
                        </ol>
                        <h5 className='text-center mt-5'>Ketentuan Lain</h5>
                        <ol>
                        <li>Kerusakan properti menjadi tanggung jawab peserta.</li>
                        <li>Panitia tidak menyediakan properti tambahan selain yang sudah tersedia di stand.</li>
                        <li>Panita  tidak   menyediakan   fasilitas   penunjang   seperti   kulkas,   meja tambahan, kompor.</li>
                        <li>Peserta diharapkan hadir sebelum acara pembukaan dimulai.</li>
                        <li>Peserta wajib mengenakan tanda peserta pada saat berada di stand</li>
                        <li>DILARANG   mengadakan   kegiatan heboh yang   dapat   mengganggu kegiatan peserta/acara lain.</li>
                        <li>Peserta   DILARANG   merusak   bangunan   dan   properti   area   kegiatan.</li>
                        <li>Peserta DILARANG menempel stand dengan DOUBLE TAPE JENIS APAPUN.</li>
                        <li>Seluruh area acara BEBAS ASAP ROKOK, dan berlaku pula bagi seluruh pengunjung. Mohon turut mengoreksi pengunjung bila melanggar.</li>
                        <li>Panitia berhak memberikan peringatan dan sanksi kepada peserta yang melanggar ketentuan.</li>
                        </ol>
                        <h5 className='text-center mt-3'>Pendaftaran</h5>
                        <ol>
                            <li>Biaya Pendaftaran :  <b>Rp, 100.000</b></li>
                            <li>Pembayaran : 
                                <ul>
                                    <li>Rekening : 589401029738531(BRI An ahmad yudi irawan )</li>
                                    <li>Dana : 0895421636755(Masdar Farid Alwi)</li>
                                </ul>
                            </li>
                            <li>Konfirmasi Pembayaran : 085781271519(Dicky)</li>
                        </ol>
                        <Link to="/expo/ormawa/daftar"><Button title="Daftar Sebagai Ormawa" addStyle="btn-block"/></Link>
                        <Link to="/expo/partner/daftar"><Button title="Daftar Sebagai Sponsor dan UMKM" addStyle="btn-block mt-3"/></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Expoabout
