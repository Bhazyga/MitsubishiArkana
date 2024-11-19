import React from "react";
import {Link} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import {AiOutlineInstagram,FiMail,MdOutlineKeyboardArrowRight} from "../assets/icons/vander";



export default function Footer(){
  const scrollToTops = () => {
    scroll.scrollToTop({
        duration: 500,  
        smooth: 'easeInOutQuad', 
    });
};
    return(
        <footer data-theme="dark">
   

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 footer-border">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link to="/" className="logo-footer" onClick={scrollToTops}>
                                        <img src="../gambar/logo-light.png.webp" width={118} height={98} alt="Logo"/>
                                    </Link>
                                    <p className="mt-4">Mulai Percayakan Kami.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                   
                                        <li className="list-inline-item"><a href={"https://www.instagram.com/Mitsubishi/"} target="_blank" rel="noopener noreferrer" className="rounded"><AiOutlineInstagram/></a></li>
                                        <li className="list-inline-item"><a href="mailto:mitsubishi@gmail.com" className="rounded"><FiMail/></a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Layanan Kami</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                    <li><a href="https://api.whatsapp.com/send/?phone=6281383029846&text=Website%20Menghubungi%20MitsubishiDealer&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Konsultasi</a></li>
                                        
                                        <li><a  className="inline-flex items-center text-foot bg-soft-dark" target="_blank" rel="noopener noreferrer"><MdOutlineKeyboardArrowRight className="me-1"/>Test Drive</a></li>
                                        
                                    </ul>
                                </div>

                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Tautan</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link to="/" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Beranda</Link></li>
                                        <li><Link to="/Sales" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Sales</Link></li>
                                        <li><Link to="/ListMobil" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> List Mobil</Link></li>
                                        <li><Link to="/DaftarHarga" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="mr-1" />Daftar Harga</Link></li>
                                        <li><Link to="/SimulasiKredit" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="mr-1" />Simulasi Kredit</Link></li>
                                        <li><Link to="/Syarat-Ketentuan" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="mr-1" />Syarat & Ketentuan</Link></li>
                                        <li><Link to="/Contact" className="inline-flex items-center text-foot"><MdOutlineKeyboardArrowRight className="mr-1" />Dealer</Link></li>

                  </ul>
                                </div>

                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Mulai Mencari Mobil Impian Anda</h5>

                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                           
                                        <li className="list-inline-item mx-1">
                                            <Link to="/login" className="btn btn-primary " >
                                                <p>Login</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Mitsubishi. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <a href="https://www.instagram.com/Mitsubishi/" target="_blank" rel="noopener noreferrer" className="text-reset">mitsubishijakpus.com</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
