"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { GrGroup } from "react-icons/gr";
// import { FaHandsHoldingCircle } from "react-icons/fa6";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { PiPlant } from "react-icons/pi";
// import { GoGear } from "react-icons/go";
// import { LiaCoinsSolid } from "react-icons/lia";
// import { FaArrowsSpin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowUp,
} from "react-icons/io";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-around items-center py-5">
          <div>
            <Image src="/eratani.webp" alt="logo" width={150} height={150} />
          </div>
          <div className="flex items-center gap-5">
            <p className="font-bold">Beranda</p>
            <p>Tentang Kami</p>
            <p>Tips & Berita Pertanian</p>
            <p>Kegiatan</p>
          </div>
          <div>
            <Button className="rounded-none bg-yellow-300 text-black">
              Mitra Kami
            </Button>
          </div>
        </div>
        <div className="w-full relative min-h-[90vh] pb-5">
          <Image
            src="/petani.webp"
            alt="petani"
            layout="fill"
            objectFit="cover"
            className="shadow-xl"
          />
          <div className="w-full h-full flex flex-col justify-center items-center absolute text-white">
            <div className="w-1/2 flex flex-col gap-5">
              <p className="text-5xl text-center">#SelaluAdaUntukPetani</p>
              <p className="text-center text-2xl">
                Eratani adalah perusahaan startup teknologi pertanian di Asia,
                yang menjadi pelopor dan terdepan dalam menyediakan solusi yang
                terintegrasi dan komprehensif dengan mengatasi masalah petani
                kecil mulai dari hulu (pendanaan petani, manajemen rantai
                pasokan) hingga hilir (distribusi dan pemasaran hasil panen).
                Kami hadir untuk memastikan setiap petani mendapatkan dukungan
                yang mereka butuhkan untuk tumbuh dan berkembang.
              </p>
            </div>
            <div className="w-full flex justify-center gap-5 absolute bottom-10 items-center">
              <div className="w-10 bg-gray-300 h-2 rounded-3xl"></div>
              <div className="w-10 bg-yellow-300 h-2 rounded-3xl"></div>
              <div className="w-10 bg-gray-300 h-2 rounded-3xl"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-10 gap-16">
          <div>
            <p className="text-6xl text-center text-green-700">
              Menuju Ekosistem yang <br /> Lebih Kuat Bersama Eratani
            </p>
          </div>
          <div className="w-1/2 flex justify-evenly items-center">
            <div className="flex-col flex gap-12">
              <Image
                src="/Group 106.png"
                alt="people"
                width={100}
                height={100}
              />
              <div className="flex flex-col ">
                <p className="text-green-700 font-bold text-2xl text-center">
                  500+
                </p>
                <p className="text-yellow-300">Petani Binaan</p>
              </div>
            </div>
            <div className="flex-col flex items-center justify-center gap-12">
              <Image src="/capital.png" alt="people" width={100} height={100} />{" "}
              <div className="flex flex-col text-center">
                <p className="text-green-700 font-bold text-2xl">
                  &gt; Rp 5 Miliar
                </p>
                <p className="text-yellow-300">Pendanaan Tersalurkan</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-evenly items-center">
            <div className="flex-col flex gap-12 items-center justify-center">
              <Image
                src="/Group 108.png"
                alt="people"
                width={100}
                height={100}
              />{" "}
              <div className="flex flex-col ">
                <p className="text-green-700 font-bold text-2xl text-center">
                  &gt; 15%
                </p>
                <p className="text-yellow-300">Peningkatan Pendapatan</p>
              </div>
            </div>
            <div className="flex-col flex items-center justify-center gap-12">
              <Image
                src="/Group 109.png"
                alt="people"
                width={100}
                height={100}
              />{" "}
              <div className="flex flex-col text-center">
                <p className="text-green-700 font-bold text-2xl">750 Ha +</p>
                <p className="text-yellow-300">Luas Wilayah Binaan</p>
              </div>
            </div>
            <div className="flex-col flex items-center justify-center gap-12">
              <Image
                src="/Group 110.png"
                alt="people"
                width={100}
                height={100}
              />{" "}
              <div className="flex flex-col text-center">
                <p className="text-green-700 font-bold text-2xl">&gt; 20%</p>
                <p className="text-yellow-300">Peningkatan Produktivitas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-10 gap-10 px-10">
          <div>
            <p className="text-6xl text-center text-green-700">
              Peduli Petani Bersama Eratani
            </p>
          </div>
          <div className="w-full flex flex-col px-10 gap-5">
            <div className="w-full flex items-center bg-gray-100 shadow-md rounded-sm gap-5 p-10">
              <Image
                src="/icon-park_funds.png"
                alt="people"
                width={200}
                height={200}
              />{" "}
              <div className="w-full flex flex-col gap-3">
                <p className="text-green-700 text-3xl">Pembiayaan</p>
                <p className="text-xl">
                  Eratani menyalurkan dukungan dan edukasi finansial berbasis
                  teknologi bagi para petani yang mengalami kesulitan permodalan
                  untuk meningkatkan produktivitas pertanian
                </p>
              </div>
            </div>
            <div className="w-full flex items-center bg-gray-100 shadow-md rounded-sm gap-5 p-10">
              <Image
                src="/icon-park_cycle-movement.png"
                alt="people"
                width={200}
                height={200}
              />{" "}
              <div className="w-full flex flex-col gap-3">
                <p className="text-green-700 text-3xl">
                  Manajemen Rantai Pasok
                </p>
                <p className="text-xl">
                  Eratani memfasilitasi akses kebutuhan petani melalui mitra
                  penyedia sarana kebutuhan di bidang pertanian secara
                  transparan dan terstandarisasi
                </p>
              </div>
            </div>
            <div className="w-full flex items-center bg-gray-100 shadow-md rounded-sm gap-5 p-10">
              <Image
                src="/carbon_data-share.png"
                alt="people"
                width={200}
                height={200}
              />{" "}
              <div className="w-full flex flex-col gap-3">
                <p className="text-green-700 text-3xl">
                  Distribusi & Penjualan
                </p>
                <p className="text-xl">
                  Eratani memfasilitasi petani untuk menjual dan
                  mendistribusikan hasil panen secara langsung dan mudah dengan
                  harga yang terstandarisasi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-10 gap-10 px-20">
          <div>
            <p className="text-6xl text-center text-green-700">Kata Mereka</p>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <div className="">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex justify-center items-center">
                <IoIosArrowBack size={30} />
              </div>
            </div>
            <div className="w-1/2 rounded-sm bg-gray-100 flex items-center gap-10 shadow-md">
              <div className="w-full min-h-[35vh] relative">
                <Image
                  src="/review.jpg"
                  alt="review"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <p className="text-2xl">
                  Wasroni |{" "}
                  <span className="text-gray-300 text-lg">Petani</span>
                </p>
                <p>
                  Harapan saya Eratani semakin meluas karena petani sangat amat
                  dibantu dengan adanya Eratani. Terima kasih Eratani!
                </p>
              </div>
            </div>
            <div className="">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex justify-center items-center">
                <IoIosArrowForward size={30} />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 items-center">
            <div className="w-10 bg-gray-300 h-2 rounded-3xl"></div>
            <div className="w-10 bg-yellow-300 h-2 rounded-3xl"></div>
            <div className="w-10 bg-gray-300 h-2 rounded-3xl"></div>
            <div className="w-10 bg-gray-300 h-2 rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 px-10 my-10">
          <div>
            <p className="text-6xl text-center text-green-700">Mitra Kami</p>
          </div>
          <div className="w-full flex justify-center items-center gap-10">
            <div className="relative">
              <Image src="/amartha.png" alt="logo" width={350} height={350} />
            </div>
            <div className="relative">
              <Image src="/pupuk.png" alt="logo" width={350} height={350} />
            </div>
            <div className="relative">
              <Image
                src="/Bulog 2024.png"
                alt="logo"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 px-20 my-10">
          <div>
            <p className="text-6xl text-center text-green-700">
              Ingin Menjadi Bagian dari Kami?
            </p>
          </div>
          <div>
            <p className="text-3xl text-center ">
              Bersama kami membangun pertanian Indonesia <br /> karena Eratani{" "}
              <span className="bg-yellow-400 font-bold p-0.5">
                #SelaluAdaUntukPetani
              </span>
            </p>
          </div>
          <div className="bg-green-600 flex items-center p-3 gap-2 rounded-md">
            <FaWhatsapp size={20} color="white" />{" "}
            <span className="text-white">Hubungi Kami</span>
          </div>
        </div>
        <div className="w-full min-h-[70vh] flex justify-center items-center px-20 my-10 gap-10">
          <div className="w-full relative flex justify-center items-center">
            <MapContainer
              center={[-6.2088, 106.8456]} // Coordinates for Jakarta
              zoom={12} // Adjust zoom level for a detailed view of Jakarta
              style={{ height: "70vh", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <div className="absolute w-full bottom-10 left-0 justify-center items-center flex z-20">
              <Button className="w-1/4 bg-yellow-400 text-black rounded-none text-xl p-5">
                Lokasi
              </Button>{" "}
            </div>
          </div>
          <div className="w-1/2 min-h-[70vh] bg-gray-100 flex flex-col justify-center items-start p-5 gap-5">
            <div className="w-full flex justify-center items-start my-5">
              <p className="text-4xl">Kritik & Saran</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <Input placeholder="Nama" className="bg-white" />
              <Input placeholder="Email" className="bg-white" />
              <Input placeholder="Nomor Handphone" className="bg-white" />
              <Textarea placeholder="Pesan Anda" className="bg-white" />
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <Button className="w-1/2 bg-yellow-400 text-black rounded-none text-xl p-5">
                Kirim Pesan
              </Button>
            </div>
          </div>
        </div>
        <footer>
          <div className="w-full relative flex justify-between bg-green-700 items-center px-20 py-10">
            <div className="w-full flex flex-col  items-center gap-10">
              <div className="w-full relative">
                {" "}
                <Image
                  src="/Logo-Final-EraTani-white 2.png"
                  alt="logofooter"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-full flex gap-20">
                  <div className="w-full flex flex-col gap-10">
                    <p className="text-white">
                      Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec.
                      Tebet, Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan,
                      DKI Jakarta 12870, Indonesia
                    </p>
                    <div className="w-full">
                      <p className="text-white">
                        Email : info.eratani@eratani.co.id
                      </p>
                      <p className="text-white">Telepon : +62 811 952 2577</p>
                    </div>
                  </div>
                  <div className="w-full flex-col flex gap-5">
                    <div className="w-full">
                      <p className="font-bold text-xl text-white">Menu</p>
                    </div>
                    <div className="w-full">
                      <p className="text-white">Tim Kami</p>
                      <p className="text-white">Mitra Eratani</p>
                      <p className="text-white">Tips & Berita Pertanian</p>
                      <p className="text-white">Karir</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center gap-20">
                  <div className="w-full flex justify-center items-center gap-5">
                    <div className="relative">
                      <Image
                        src="/akar-icons_globe.png"
                        alt="globe"
                        width={20}
                        height={30}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-white">IN</p>
                      <div className="w-5 h-1 bg-yellow-400"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-white">EN</p>
                      <div className="w-5 h-1"></div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center gap-5">
                    <div className="relative">
                      <Image
                        src="/bx_bxl-tiktok.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/akar-icons_instagram-fill.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/akar-icons_linkedin-fill.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/akar-icons_youtube-fill.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/Vector.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white">
                  Copyright &#xa9; 2024 by PT Eratani Teknologi Nusantara
                </p>
              </div>
              <div className="absolute rounded-full bg-yellow-400 h-16 flex justify-center items-center w-16 right-10 top-10">
                <IoIosArrowUp size={40} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
