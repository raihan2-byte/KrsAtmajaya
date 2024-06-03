import React from 'react'
import InformasiTerkini from "../../assets/informasi-terkini.png"

const currentlyInfo = () => {
  return (
    <div className="p-8">
      <div>
        <a href="/sidebars" className="text-[#1D518D] font-normal text-[15px]">
          <div>E-learning: https://elearning.atmajaya.ac.id/</div>
          <div>SK Kalender Akademik Tahun Akademik 2024-2025</div>
          <div>Jadwal Pengambilan Toga Wisuda Mei 2024</div>
          <div>
            Daftar Mata Kuliah Lintas Program Studi Internal UNIKA Atma Jaya
          </div>
          <div>Addendum SK Kalender Akademik 2023-2024</div>
          <div>Buku Pedoman Perilaku Mahasiswa</div>
          <div>SK Penempatan Buku Saku Mahasiswa Tahun Akademik 2023-2024</div>
          <div>Pengumuman Update Data Mahasiswa Baru Angkatan 2022</div>
          <div>
            Panduan Membuat Cicilan untukCalon Mahasiswa Baru (Payment Plan)
          </div>
          <div>Panduan Upload Dokumen</div>
        </a>
      </div>
      <div className='flex justify-center mt-4'>

      <img src={InformasiTerkini} alt="" className='h-[395px]'/>
      </div>
    </div>
  );
}

export default currentlyInfo