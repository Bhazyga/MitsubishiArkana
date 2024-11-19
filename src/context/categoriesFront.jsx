import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react"; // Direct import since you're not using dynamic loading
import '../../node_modules/tiny-slider/dist/tiny-slider.css'; // Ensure the CSS is properly imported

import { categoriesData } from "./jobData";

let settings = {
    container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            376: {
                items: 2
            },

            320: {
                items: 1
            },
        },
};

export default function Categories() {
  return (
      <div className="tiny-five-item">
          <TinySlider settings={settings}>
              {categoriesData.map((item, index) => {
                  let IconComponent = item.icon;  // Get the icon from the item
                  return (
                      <div className="tiny-slide" key={index}>
                          <div className="card features feature-primary feature-clean category py-5 px-2 shadow rounded-md m-2">
                              {/* Display image */}
                              <div className="icons bg-md text-center mx-auto d-block rounded-pill">
                                  <img className="icon" src={item.gambar} alt={item.title1} />
                              </div>

                              {/* Content section */}
                              <div className="content mt-3 mx-auto text-center">
                                  {/* Title */}
                                  <Link to="https://api.whatsapp.com/send/?phone=6281383029846&text=Website%20Menghubungi%20MitsubishiDealer&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="h6 title text-dark">{item.title1} <br /> {item.title2}</Link>

                                  {/* Icon and iconTitle */}
                              <div className="icon-title mt-2 d-flex align-items-center justify-content-center">
                                <IconComponent className="me-2" style={{ fontSize: '20px' }} />
                                <span>{item.iconTitle}</span>
                              </div>

                                  {/* Jobs */}
                                  <h6 className="text-muted fw-normal mt-3 mb-0">{item.jobs}</h6>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </TinySlider>
      </div>
  );
}

