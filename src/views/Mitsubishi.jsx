import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import Navbar from "../context/navbar"
import '../index.css';
import Footer from "../context/footerMitsubishi";
import ScrollTop from "../context/scrolltop";
import Gallary from "../context/gallary";
import WhatsAppIcon from "../context/WhatsAppIcon";
// import TextAnimation from "../context/textAnimation";
import CategoriesFront from "../context/categoriesFront";

export default function MitsubishiJakartaPusat(){


    return(
        <>
            {/* Rest of your component */}
            <Navbar navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>

            <section className=" zoom-image d-flex align-items-center"  id="home">
            <div className="bg-overlay image-wrap" id="hero-images"
            style={{
                backgroundImage:"url('gambar/Mobil1.jpg')",
                backgroundSize:"150%",
                backgroundPosition: "center", // Center the image

        }} role="img"
        aria-label="Background image of Mitsubishi Dealer Car in Jakarta Pusat"
    ></div>
            <div className="bg-overlay bg-linear-gradient-2" ></div>
            <div className="container" >
        <div className="row mt-4">
            <div className="col-12 mt-4">
                <div className="title-heading mt-4">

                    {/* <p className="text-white-50 dark:text-gray-400 para-desc mb-0">Selamat datang di website resmi mitsubishi Jakarta-Pusat...</p> */}

                            <div className="subcribe-form mt-4 mb-3 pt-2">
                                {/* <form className="ms-0">
                                    <input type="email" id="email2" name="email" className="rounded-pill bg-white-50 border opacity-7" placeholder="E-mail :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Register</button>
                                </form> */}
                            </div>
                            {/* <span className="text-white title-dark">Anda Mencari Dealer Terpercaya? <Link href="#" className="text-warning">Hubungi Kami</Link></span> */}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* <TextAnimation/> */}
                        <CategoriesFront/>
                    </div>
                </div>
            </div>
        </section>

        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link href="#"><i className="mdi mdi-car-sports arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>

            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section bg-soft-primary" id="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-4">List Mobil</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Temukan mobil impian anda.</p>
                        </div>
                    </div>
                </div>

                <Gallary/>

                <div className="row text-center">
                    <div className="col-12 mt-4 pt-2">
                        <Link to="/ListMobil" className="btn btn-pills btn-soft-primary">Selengkapnya...</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* Kolom Mobil End */}
        <WhatsAppIcon/>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
