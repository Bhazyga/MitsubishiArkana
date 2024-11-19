import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import Navbar from "../context/navbar";
import FooterFour from "../context/footerMitsubishi";
import ScrollTop from "../context/scrolltop";

import {FiFacebook, FiInstagram,FiTwitter,FiLinkedin,AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineTwitter,FiMail,AiOutlineFile} from "../assets/icons/vander"

import ParallaxImage from "../context/Paralax";
import WhatsAppIcon from "../context/WhatsAppIcon";


export default function SalesMitsubishi(){

  return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/gambar/DealerMitsubishi.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Sales</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Revo</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Beranda</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Sales</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="card team team-primary team-two text-center">
                            <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                <img src='/gambar/ArkanaMitsubishi.jpeg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay rounded"></div>

                                <div className="content">
                                    <h5 className="text-white title-dark mb-0">Revo</h5>
                                    <h6 className="text-white-50 mb-0 fw-normal mt-1 designation">Dealer</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title">Revo</h4>
                            <h6 className="text-primary fw-normal">Sales Executive</h6>
                            <p className="text-muted mt-4">Sebagai seorang Sales Executive yang berpengalaman di mitusbishi jakarta pusat, Revo telah membuktikan dirinya sebagai seorang profesional yang andal dalam mengelola hubungan dengan klien serta mencapai target penjualan. Dengan keahlian yang mendalam, Revo mampu memahami kebutuhan pelanggan dan memberikan solusi yang tepat guna meningkatkan kepuasan serta loyalitas mereka.</p>
                            <p className="text-muted mb-0">Selain itu, Revo memiliki keterampilan komunikasi yang kuat, kemampuan negosiasi yang efektif, dan pandai membangun jaringan bisnis yang luas. Berbekal pemahaman yang mendalam tentang pasar, Revo terus berinovasi dalam strategi pemasaran dan penjualan, sehingga berhasil meningkatkan pertumbuhan bisnis perusahaan secara konsisten.</p>
                            <p className="text-muted mb-0">-Best Mitsubishi dealer in Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <WhatsAppIcon/>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}
