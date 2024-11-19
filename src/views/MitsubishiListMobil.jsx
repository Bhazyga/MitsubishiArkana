import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../context/navbar";
import Footer from "../context/footerMitsubishi";
import ScrollTop from "../context/scrolltop";
import ParallaxImage from "../context/Paralax";
import Gallary from "../context/gallary";
import WhatsAppIcon from "../context/WhatsAppIcon";

export default function MitsubishiListMobil(){
    return(
        <>
            <Navbar navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>

            <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/gambar/ListMobil.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Selengkapnya</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">List Mobil</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Beranda</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">List Mobil</li>
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


        {/* Kolom Mobil Mobil  */}

        <section className="section bg-soft-primary" id="work">
            <div className="container">


                <Gallary/>


            </div>
        </section>
        {/* Kolom Mobil End */}
        <WhatsAppIcon/>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
