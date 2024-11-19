import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai'; // Assuming you're using react-icons

export default function WhatsAppIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6281383029846&text=Website%20Menghubungi%20DealerMitsubishi&type=phone_number&app_absent=0" // Add your WhatsApp link here
      id="whatsapp-icon"
      className="whatsapp-icon rounded-pill fs-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <AiOutlineWhatsApp className="icons" />
      </div>
    </a>
  );
}
