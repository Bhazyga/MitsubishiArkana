import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { FiCamera } from "../assets/icons/vander";
import { portfolioData, portfolioImage } from "../assets/icons/data";

export default function Gallary() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [open, setIsOpen] = useState(false);

    // Handle previous image in lightbox
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    // Handle next image in lightbox
    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };

    // Open lightbox with the selected image
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        if (!open) setIsOpen(true); // Set open only if not already open
    };

    // Category filter
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    // Filter portfolio data by selected category
    const filteredData = selectedCategory
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;

    return (
        <>
            <div className="row justify-content-center mt-4 pt-2">
                <div className="col-12 my-4 filters-group-wrap text-center">
                    <div className="filters-group">
                        <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                            <li className={selectedCategory === null ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="all" onClick={() => matchCategory(null)}>All</li>
                            <li className={selectedCategory === 'pajero' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="pajero" onClick={() => matchCategory('pajero')}>Pajero</li>
                            <li className={selectedCategory === 'xpander' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="xpander" onClick={() => matchCategory('xpander')}>XPander</li>
                            <li className={selectedCategory === 'Xforce' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="Xforce" onClick={() => matchCategory('Xforce')}>Xforce</li>
                            <li className={selectedCategory === 'Xcross' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="Xcross" onClick={() => matchCategory('Xcross')}>Xcross</li>
                            <li className={selectedCategory === 'Pickup' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="Pickup" onClick={() => matchCategory('Pickup')}>Pickup</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="grid" className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {filteredData.slice(0, 8).map((item, index) => (
                    <div className="col picture-item" key={index}>
                        <div className="position-relative portfolio portfolio-primary portfolio-modern rounded-md">
                            <div className="position-relative port-image">
                                <div className="rounded-md p-0 overflow-hidden">
                                    <img src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid shadow" alt="" />
                                    <div className="icons text-center">
                                        <Link to="#" onClick={() => handleImageClick(index)} className="btn btn-icon btn-pills btn-lg lightbox">
                                            <FiCamera />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg rounded-md"></div>
                        </div>
                        <div className="mt-3">
                            <h6 className="mb-1"><Link to="#" className="text-dark title">{item.name}</Link></h6>
                            <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox for displaying image and table */}
            {open && currentImageIndex !== null && (
                <Lightbox
                    mainSrc={portfolioImage[currentImageIndex]}
                    prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                    nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                    imageCaption={
                        <div className="custom-modal-content">
                            {/* Add Table Below the Image */}
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Column 1</th>
                                        <th>Column 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Data 1</td>
                                        <td>Data 2</td>
                                    </tr>
                                    <tr>
                                        <td>Data 3</td>
                                        <td>Data 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                />
            )}
        </>
    );
}
