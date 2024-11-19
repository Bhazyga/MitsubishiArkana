import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import Navbar from "../context/navbar";
import FooterFour from "../context/footerMitsubishi";
import ScrollTop from "../context/scrolltop";
import ParallaxImage from "../context/Paralax";
import {AiOutlineCheck} from "../assets/icons/vander"
import WhatsAppIcon from "../context/WhatsAppIcon";

export default function MitsubishiDaftarHarga(){

    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" />

        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/gambar/ListMobil.jpg'/>
            <div className="bg-overlay bg-half-170 bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                   
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
                    <div className="col-lg-10">
                        <div className="features-absolute bg-white rounded shadow position-relative overflow-hidden">
                            <img src='/gambar/Mobil (10).jpg'width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
<div class="overflow-x-auto mt-10">
    <table class="min-w-full border-collapse border border-gray-300 text-sm text-gray-800">
        <thead class="bg-gray-100">
            <tr>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">No</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Model</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Price List Oct 2024</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-yellow-200">
                <td class="border border-gray-300 px-4 py-2">1</td>
                <td class="border border-gray-300 px-4 py-2">NEW PAJERO SPORT</td>
                <td class="border border-gray-300 px-4 py-2">DAKAR ULTIMATE 4X4 AT</td>
                <td class="border border-gray-300 px-4 py-2">Rp 767,200,000</td>
                <td class="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr>
                <td class="border border-gray-300 px-4 py-2">2</td>
                <td class="border border-gray-300 px-4 py-2">NEW PAJERO SPORT</td>
                <td class="border border-gray-300 px-4 py-2">DAKAR ULTIMATE 4X2 AT</td>
                <td class="border border-gray-300 px-4 py-2">Rp 706,100,000</td>
                <td class="border border-gray-300 px-4 py-2">White Color (+3,000,000)</td>
            </tr>
            <tr class="bg-yellow-200">
                <td class="border border-gray-300 px-4 py-2">14</td>
                <td class="border border-gray-300 px-4 py-2">NEW XPANDER CROSS</td>
                <td class="border border-gray-300 px-4 py-2">CROSS CVT PLUS</td>
                <td class="border border-gray-300 px-4 py-2">Rp 353,150,000</td>
                <td class="border border-gray-300 px-4 py-2">White Color</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="mt-4 text-xs text-gray-600">
    <p>Note:</p>
    <ul class="list-disc pl-5">
        <li>Harga sewaktu-waktu dapat berubah</li>
        <li>Harga OTR Jakarta selama bulan October 2024</li>
        <li>BBN untuk area Bekasi, Tangerang dan Bogor tidak meningkat</li>
        <li>Harga Xforce, Harga New Xpander dan New Xpander Cross warna putih lebih tinggi Rp. 1.500.000</li>
        <li>Harga Pajero Sport warna putih lebih tinggi Rp. 3.000.000</li>
    </ul>
</div>

        </section>

        <WhatsAppIcon/>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}
