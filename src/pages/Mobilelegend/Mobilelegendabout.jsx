import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { mlbanner, mlscreen } from '../../assets'
import { Button, Footer, Navbar } from '../../components'

export class Mobilelegendabout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <div className="col-10 my-5">
                        <h2 className='text-center'>Mobile Legend Tournament</h2>
                        <h2 className='text-center mb-5'>Season 3</h2>
                        <img src={mlbanner} alt="Mobile Legend Banner" className='img-fluid'/>
                        <h4 className='mt-5'>Peraturan dan Ketentuan Turnamen:</h4>
                        <h5 className='text-center mt-3'>TimeLine</h5>
                        <ul>
                            <li>Pendaftaran :  <b>1-20 Juli 2021</b></li>
                            <li>Technical Meeting : <b>Jumat, 23 Juli 2021</b> </li>
                            <li>Pelaksanaan Pertandingan : <b>25-28 Juli 2021</b> </li>
                        </ul>
                        <h5 className='text-center mt-3'>Ketentuan Umum</h5>
                        <ul>
                            <li>Peserta berjumlah 5 orang dan 1 cadangan ( opsional ).</li>
                            <li>Setiap tim akan memilih satu pemain untuk menjadi kapten sebagai perwakilan untuk mengikuti Technical Meeting.</li>
                            <li>Jumlah peserta 32 tim yang akan dibagi kedalam 2 group.</li>
                            <li>Masing masing group akan diisi oleh 16 tim yang akan bertanding secara online (wasit)  group A di malam pertama dan group B di malam kedua .</li>
                            <li>Juara group (dua tim dari masing masing group ) akan bertanding untuk memperebutkan juara satu, dua, dan tiga secara online ( wasit ).</li>
                            <li>Sistem pertandingan menggunakan BO 3 dan final BO 5.</li>
                            <li>Perwakilan tim akan mengikuti teknical meting. Jika ada salah satu tim tidak ada yang mewakili untuk mengikuti teknical meeting, maka akan dianggap telah menyetujui hasil keputusan akhir.</li>
                            <li>Semua peserta harus mengirimkan <b>Screenshoot</b> awal pertandingan dimulai dan Hasil akhir dari pertandingan( jika satu kali 1x lupa mengirimkan screenshot akan diberikan toleransi, jika lebih dari 1 kali akan didiskualifikasi ).</li>
                            <img src={mlscreen} alt="Contoh screenshoot" className='img-fluid'/>
                            <li>Peserta dilarang menggunakan cheat atau sejenisnya, jika terdapat peserta yang menggunakan cheat maka panitia akan mendiskualifikasi tim tersebut.</li>
                            <li>Peserta harus hadir di loby 10 menit sebelum jadwal pertandingan dimulai, jika terlambat lebih dari 5 menit, pihak lawan akan mendapatkan 1 poin</li>
                            <li>Segala bentuk protes disampaikan dengan tetap menjunjung tinggi nilai-nilai sportifitas perlombaan dan etika sopan santun.</li>
                            <li>Keputusan dewan juri tidak dapat diganggu gugat.</li>
                            <li>Peraturan bisa berubah sewaktu waktu</li>
                        </ul>
                        <h5 className='text-center mt-3'>Kewajiban Peserta</h5>
                        <ol className='mt-3'>
                            <li>Peserta wajib memenuhi setiap peraturan yang telah ditentukan oleh Panitia Lomba.</li>
                            <li>Peserta wajib berlaku sopan, baik perkataan atau perbuatan kepada juri dan panitia.</li>
                            <li>Tidak ada larangan untuk Level Akun, Hero, dan Skin yang digunakan.</li>
                            <li>Dilarang chat all apapun itu alasannya. Jika sekali terlihat oleh wasit maka akan</li>
                            <li>Diberikan tolerasi, jika selebihnya akan didiskualifikasi.</li>
                        </ol>
                        <h5 className='text-center mt-3'>Peraturan Pertandingan</h5>
                        <ol>
                            <li> Pemain harus bersiap untuk pertandingan sesuai jadwal yang sudah ditentukan dan mengundang anggota lainnya untuk masuk ke dalam room yang sudah dibuat panitia.</li>
                            <li> Tim hanya diizinkan untuk bermain dengan pemain yang telah didaftarkan Tim yang melakukan smurfing dan memainkan anggota yang tidak terdaftar akan didiskualifikasi</li>
                            <li> Dilarang menggunakan VPN agar tidak terjadi hal yang tidak diinginkan</li>
                            <li> Cek kondisi jaringan internet kalian sebelum bertanding untuk menghindari hal yang tidak diinginkan.</li>
                            <li> Pergantian pemain hanya bisa dilakukan saat tidak dalam pertandingan.</li>
                            <li> Pemain yang tidak sesuai dengan didaftarkan maka akan dikick dari room pertandingan.</li>
                        </ol>
                        <h5 className='text-center mt-3'>Pendaftaran</h5>
                        <ol>
                            <li>Biaya Pendaftaran :  <b>Rp, 70.000</b></li>
                            <li>Pembayaran : 
                                <ul>
                                    <li>Rekening : 589401029738531(BRI An ahmad yudi irawan )</li>
                                    <li>Dana : 0895421636755(Masdar Farid Alwi)</li>
                                </ul>
                            </li>
                            <li>Konfirmasi Pembayaran : 082137085668(Hilmi)</li>
                        </ol>
                        <Link to="/mobilelegend/daftar"><Button title="Daftar Sekarang" addStyle="btn-block"/></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Mobilelegendabout
