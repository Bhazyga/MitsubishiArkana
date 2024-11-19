import { useEffect, useState } from "react";

export default function Dashboard() {

  const handleCetakUser = () => {
    // Open the URL in a new tab
    window.open('http://localhost:8000/api/cetak-user', '_blank');
  };
  const handleCetakMaterial = () => {
    // Open the URL in a new tab
    window.open('http://localhost:8000/api/cetak-material', '_blank');
  };
  const handleCetakPembelian = () => {
    // Open the URL in a new tab
    window.open('http://localhost:8000/api/cetak-pembelian', '_blank');
  };

  return (
    <div>
      Dashboard
      <div>
        <button
          onClick={handleCetakUser}
          className="btn btn-primary btn-block"
        >
          Cetak Laporan User
        </button>
        <button
          onClick={handleCetakMaterial}
          className="btn btn-primary btn-block"
        >
          Cetak Laporan Material
        </button>
        <button
          onClick={handleCetakPembelian}
          className="btn btn-primary btn-block"
        >
          Cetak Laporan Pembelian
        </button>

      </div>
    </div>
  );
}
