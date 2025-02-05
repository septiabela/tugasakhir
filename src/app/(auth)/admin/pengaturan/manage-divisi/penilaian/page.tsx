"use client";
import Link from 'next/link';
import AdminProfile from '@/app/component/adminProfile';
import NavbarAdmin from '@/app/component/nav-admin';
import '/src/stylePenilaian/style.css';
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";

export default function Penilaian() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className="w-full h-screen flex overflow-hidden">
        <NavbarAdmin />
        <div className="bg-gray-200 w-full p-4 flex-col relative overflow-y-auto">
          <AdminProfile />
          <div className="flex items-center">
            <Link href="/admin/pengaturan/manage-divisi" passHref>
              <div className="selected relative m-5 cursor-pointer underline">
                <svg
                  width="18"
                  height="28"
                  viewBox="0 0 20 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 3L3 19.2021L17.5 35.4043"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <div className="ml-7 font-bold">Kategori Penilaian Ui/Ux</div>
          </div>          

          <div className="bg-black h-2 w-full relative">
            <div className="absolute top-2 left-0 p-6 text-white">Tambah Kategori Penilaian Ui/Ux</div>
            <p className="absolute top-12 left-0 p-6 text-xs text-white">
              Digunakan untuk menentukan kategori penilaian kepada Peserta Magang
            </p>
          </div>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-pengaturan bg-white max-w-xs p-8 rounded-xl p-4">
                <div className="modal-content">
                  <h1 className="text-lg font-inter font-bold mb-5 ">
                    Tambah Kategori
                  </h1>

                  <div className="bg-gray-200 rounded-md p-4 mb-4">
                    <div className="w-full mt-4 text-box relative">
                      <div className="text-center mb-2">Pengetahuan</div>
                      <div className="border-line"></div>
                      <svg
                        className="action-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full mt-4 text-box relative">
                      <div className="text-center mb-2">Kreativitas</div>
                      <div className="border-line"></div>
                      <svg
                        className="action-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full mt-4 text-box relative">
                      <div className="text-center mb-2">Lainnya</div>
                      <div className="border-line"></div>
                      <svg
                        className="action-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                      style={{ width: '100%', fontSize: 'small' }}
                      placeholder="Tambah Kategori Izin"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-end gap-2 mt-2" style={{ marginLeft: '65px' }}>
                      <button
                        onClick={closeModal}
                        className="border border-gray-600 flex rounded-lg text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                      >
                        Batal
                      </button>
                      <button
                        onClick={closeModal}
                        className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                      >
                        Tambahkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white p-4 mt-4 white-box relative">
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 add-category" onClick={openModal}>
              + Tambah Kategori
            </button>

            <div className="flex justify-between mt-4">
              <div className="w-1/2">
                <div className="mt-2 text-sm font-semibold">Pengetahuan</div>
                {/* Isi grid 1 */}
                {/* Garis lurus text box */}
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Desain Thinking</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Baris tambahan untuk "Pemahaman Penerapan Desain" */}
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Pemahaman Penerapan Desain</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Text box dan tombol "Add" */}
                <div className="flex items-center mt-2">
                  <input type="text" className="border-gray-300 bg-gray-100 border p-2 rounded-md" style={{width: '65%'}} />
                  <button className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-800">Tambah</button>
                </div>
                <div className="mt-10 text-sm font-semibold">Kreativitas</div>

            {/* Garis lurus text box */}
            <div className="w-full mt-4 text-box relative">
              <div className="text-center mb-2">Desain Yang Menarik</div>
              <div className="border-line"></div>
              <svg
                className="action-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Baris tambahan untuk*/}
            <div className="w-full mt-4 text-box relative">
              <div className="text-center mb-2">Pemecahan Masalah Pengguna</div>
              <div className="border-line"></div>
              <svg
                className="action-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Baris tambahan untuk*/}
            <div className="w-full mt-4 text-box relative">
              <div className="text-center mb-2">Hasil Kerja</div>
              <div className="border-line"></div>
              <svg
                className="action-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex items-center mt-2">
              <input
                type="text"
                className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                style={{width: '65%'}}
              />
              <button className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-800">Tambah</button>
            </div>
            
              </div>
              <div className="w-1/2">
                <div className="mt-2 text-sm font-semibold">Lainnya</div>
                {/* Isi grid 2 */}
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Aktif presentasi</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Kejujuran</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Kedisiplinan</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full mt-4 text-box relative">
                  <div className="text-center mb-2">Tanggung Jawab</div>
                  <div className="border-line"></div>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                    style={{width: '65%'}}
                  />
                  <button className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-800">
                    Tambah
                  </button>
                </div>
              </div>
            </div>
            {/* Tombol Submit */}
            <Link href="/admin/pengaturan/manage-divisi" passHref>
              <button className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};