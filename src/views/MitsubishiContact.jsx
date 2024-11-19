import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Navbar from "../context/Navbar";
import ScrollTop from "../context/scrolltop";
import Footer from "../context/footerMitsubishi";
// import ParallaxImage from "../context/Paralax";

import {BsTelephone,FiMail,FiMapPin} from "../assets/icons/vander"
import WhatsAppIcon from "../context/WhatsAppIcon";

export default function MitsubishiKontak(){


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
                                <p className="text-white-50 para-desc mx-auto mb-0">Kontak Info</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Hubungi Kami</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/Mitsubishi">Mitsubishi</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact us</li>
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
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="features-absolute bg-white rounded shadow position-relative overflow-hidden">
                            <div className="row align-items-center g-0">
                                <div className="col-lg-7 col-md-6 col-12">
                                    <div className="card map border-0">
                                        <div className="card-body p-0">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17911.9215946281!2d106.7932814918433!3d-6.2042766167064825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b851267159%3A0xc68875c0093ba637!2sMitsubishi%20Dipo%20Gatsu!5e0!3m2!1sen!2sid!4v1730175515933!5m2!1sen!2sid" title="MitsubishiJakpus" style={{border:"0"}} allowFullScreen></iframe>
                                       </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-6 col-12 mt-4 mt-sm-0">
                                    <div className="m-lg-5 m-4">
                                        <div className="d-flex features feature-primary feature-clean">
                                            <div className="icons text-center mx-auto rounded">
                                                <BsTelephone className="d-block h4 mb-0 icon"/>
                                            </div>

                                            <div className="flex-1 ms-3">
                                                <h5 className="mb-2">Phone</h5>
                                                <p className="text-muted mb-2">Mulai mencari mobil impian anda dengan menghubungi kami dealer mitsubishi jakarta pusat</p>
                                                <a href="https://api.whatsapp.com/send/?phone=6281383029846&text=Dari%20Website%20Menghubungi%20Mitsubishi&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"  className="link">+62 813-8302-9846</a>
                                            </div>
                                        </div>

                                        <div className="d-flex features feature-primary feature-clean mt-4">
                                            <div className="icons text-center rounded mx-auto">
                                                <FiMail className="d-block h4 mb-0 icon"/>
                                            </div>

                                            <div className="flex-1 ms-3">
                                                <h5 className="mb-2">Email</h5>
                                                <p className="text-muted mb-2">Mulai mencari mobil impian anda dengan menghubungi kami mitsubishi jakpus</p>
                                                <a href="mailto:mitsubishi@gmail.com" target="_blank" rel="noopener noreferrer" className="link"> Mitsubishi@gmail.com</a>
                                            </div>
                                        </div>

                                        <div className="d-flex features feature-primary feature-clean mt-4">
                                            <div className="icons text-center rounded mx-auto">
                                                <FiMapPin className="d-block h4 mb-0 icon"/>
                                            </div>

                                            <div className="flex-1 ms-3">
                                                <h5 className="mb-2">Location</h5>
                                                <p className="text-muted mb-2">Jl. Gatot Subroto No.Kav. 50-52, RT.2/RW.7, Petamburan, Kecamatan Tanah Abang, <br/>Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10260</p>
                                                <a href="https://www.google.com/maps/place/Mitsubishi+Dipo+Gatsu/@-6.203875,106.7936523,15z/data=!4m14!1m7!3m6!1s0x2e69f3b851267159:0xc68875c0093ba637!2sMitsubishi+Dipo+Gatsu!8m2!3d-6.203235!4d106.800905!16s%2Fg%2F11rqyy19rn!3m5!1s0x2e69f3b851267159:0xc68875c0093ba637!8m2!3d-6.203235!4d106.800905!16s%2Fg%2F11rqyy19rn?hl=en-us&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="lightbox text-primary" data-type="iframe" data-group="iframe" data-width="1024px" data-height="576px">View on Google map</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                        <label className="form-label">Email <span className="text-danger">*</span></label>
                        <input name="email" id="email" type="email" className="form-control" placeholder="Email :" required />
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Subjek</label>
                        <input name="subject" id="subject" className="form-control" placeholder="Subjek :" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Pesan <span className="text-danger">*</span></label>
                        <textarea name="komentar" id="comments" rows="4" className="form-control" placeholder="Pesan :" required></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-grid">
                        <button type="submit" id="submit" name="send" className="btn btn-primary">Kirim Pesan</button>
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
