import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
// import { Link as Link } from 'react-scroll';

import Modal from 'react-bootstrap/Modal';

export default function Navbar(){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    let [show, setShow] = useState(false);

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

      let toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            let anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    let target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

    return(
        <>
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container">
                <Link className="logo" to="/">
                    <span className="logo-light-mode" >
                        <img src='/gambar/MitsubishiLogo.png' width={120} height={58} className="l-dark" alt=""/>
                        <img src='/gambar/logo-light.png.webp' width={98} height={28} className="l-light" alt=""/>
                    </span>
                    <img src='/gambar/MitsubishiLogo.png' width={118} height={28} className="logo-dark-mode" alt=""/>
                </Link>

                <div className="menu-extras" >
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                        <li className={window.location.pathname === "/" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/" activeclass="active" className="sub-menu-item">Beranda</Link>
                        </li>
                        <li className={window.location.pathname === "/Sales" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/Sales" activeclass="active" className="sub-menu-item">Sales</Link>
                        </li>
                        <li className={window.location.pathname === "/ListMobil" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/ListMobil" activeclass="active" className="sub-menu-item">List Mobil</Link>
                        </li>
                        <li className={window.location.pathname === "/DaftarHarga" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/DaftarHarga" activeclass="active" className="sub-menu-item">Daftar Harga</Link>
                        </li>
                        <li className={window.location.pathname === "/SimulasiKredit" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/SimulasiKredit" activeclass="active" className="sub-menu-item">Simulasi Kredit</Link>
                        </li>
                        <li className={window.location.pathname === "/Contact" ? "active" : "has-submenu"}>
                            <Link to="/mitsubishi/Contact" activeclass="active" className="sub-menu-item">Dealer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
            <Modal.Title><h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Subject</label>
                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid">
                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

        </>
    )
}
