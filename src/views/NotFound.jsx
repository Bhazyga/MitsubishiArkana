import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../context/navbar";
import FooterFour from "../context/footerMitsubishi";
import ScrollTop from "../context/scrolltop";
import WhatsAppIcon from "../context/WhatsAppIcon";

export default function NotFound() {
  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" />

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section data-theme="dark" className="section">
        <div className="container text-center mt-5">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <p className="text-white mt-3">
            Rute anda salah. Periksa link atau klik tombol navigasi di bagian atas dan bawah.
          </p>
        </div>
      </section>

      <WhatsAppIcon />
      <FooterFour />
      <ScrollTop />
    </>
  );
}
