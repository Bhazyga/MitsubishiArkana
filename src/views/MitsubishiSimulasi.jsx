import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Navbar from "../context/navbar";
import ScrollTop from "../context/scrolltop";
import Footer from "../context/footerMitsubishi";
// import ParallaxImage from "../context/Paralax";

import {BsTelephone,FiMail,FiMapPin} from "../assets/icons/vander"
import WhatsAppIcon from "../context/WhatsAppIcon";

export default function MitsubishiSimulasi(){


  const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('comments').value;

      // Construct the WhatsApp message

      const phoneNumber = ' 6281383029846'; // Replace with the target phone number
      const text = `Hallo Mitsubishi Saya Dari Website Menghubungi.\n \n \n Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`;
      const encodedText = encodeURIComponent(text); // Encode the text for URL

      // Construct the WhatsApp URL
      const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedText}&type=phone_number&app_absent=0`;

      // Redirect to WhatsApp
      window.location.href = whatsappURL;
  };

    return(
        <>
         <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">

        <div className=" image-wrap"
         style={{backgroundImage:"url('../gambar/MitsubishiOffice.jpg')",
        backgroundSize: "100%", // Zoom out to 80% of the original size
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "repeat" // Avoid repeating the image
    }}></div>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-260 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Simulasi Kredit</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">...</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/Mitsubishi">Mitsubishi</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Simulasi</li>
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="p-4 rounded shadow">
                        <form onSubmit={handleSubmit}>
                        <p className="mb-0" id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Nama <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Nama :" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Type <span className="text-danger">*</span></label>
                                    <input name="email" id="name" type="email" className="form-control" placeholder="Email :" required />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Transimisi AT/NT</label>
                                    <input name="subject" id="subject" className="form-control" placeholder="Subjek :" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">DP <span className="text-danger">*</span></label>
                                    <textarea name="komentar" id="comments" rows="4" className="form-control" placeholder="Pesan :" required></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Tenor <span className="text-danger">*</span></label>
                                    {/* <textarea name="komentar" id="comments" rows="4" className="form-select" placeholder="Pesan :" required></textarea> */}
                                    <select name="komentar" id="comments" rows="4" className="form-select" placeholder="Pesan :" required>
                                      <option value="">Pilih Tenor</option>
                                      <option value="1 Tahun">1 Tahun</option>
                                      <option value="2 Tahun">2 Tahun</option>
                                      <option value="3 Tahun">3 Tahun</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-grid">
                                    <button type="submit" id="submit" name="send" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Kirim Pesan</button>
                                </div>
                            </div>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <WhatsAppIcon/>
        <ScrollTop/>
        <Footer/>
        </>
    )
}
