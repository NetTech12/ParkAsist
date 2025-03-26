import React from 'react'
import Header from '../Components/Header'
import communication from '../assets/iletisim-banner2.jpg'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (

    <div> <Header
      title="İletişim"
      bgImage={communication}
      style={{
        height: "380px",

      }}
    />
      <style>
        {`
      .page-header .title-wrap {
        transform: translateY(400%) !important; /* Buradaki değeri değiştir */
      }
    `}
      </style>
      <div className=" ">

        <div className='container px-6 md:px-20  text-lg  mx-auto opacity-80 border-1 py-18'>

          <h2 className=" !font-normal text-[var(--primary)] text-center">
            Bize <span className="text-gray-600">Ulaşın</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto my-3"></div>
          <p className="text-center  text-gray-600">
            Herhangi bir sorunuz, öneriniz veya geri bildiriminiz mi var?
            Size yardımcı olmaktan memnuniyet duyarız!
          </p>

          <div className="flex flex-col justify-center items-center mt-6 text-start md:text-center">
            <h4 className="text-yellow-500 font-semibold">ParkAsist</h4>
            <h3 className="text-2xl font-bold text-[var(--primary)]">Net&amp;Risk</h3>
            <p className="text-gray-700 mt-2">
              Adres: Business İstanbul A Blok Ofis 87-88 Kadıköy/İSTANBUL
            </p>
            <a href="tel:+908503331792" className="text-gray-700 mt-2">
              +90 850 333 17 92
            </a>
            <a href="mailto:info@netrisk.com.tr" className=" text-blue-700 mt-2">
              info@netrisk.com.tr
            </a>
          </div>
        </div>


        <div className="container mx-auto mt-8 mb-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Telefon */}
          <div className="flex flex-col justify-center items-center bg-white px-6 lg:px-10  py-6 lg:py-12 xl:py-16 shadow-lg text-center rounded-lg">
            <FaPhoneAlt className="text-blue-600 text-2xl mx-auto mb-4" />
            <a href="tel:+908503331792" className="text-gray-700 mt-2">
              +90 850 333 17 92
            </a>
          </div>

          {/* Adres */}
          <div className="flex flex-col justify-center items-center bg-white  px-6 lg:px-10  py-6 lg:py-12 xl:py-16 shadow-lg text-center rounded-lg">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mx-auto mb-4" />
            <p className="text-gray-700 mt-2">Business İstanbul A Blok Ofis 87-88</p>
          </div>

          {/* E-posta */}
          <div className="flex flex-col justify-center items-center not-first:bg-white px-6 lg:px-10 py-6 lg:py-12 xl:py-16 shadow-lg text-center rounded-lg">
            <FaEnvelope className="text-blue-600 text-2xl mx-auto mb-4" />
            <a href="mailto:info@netrisk.com.tr" className=" text-gray-700 mt-2">
              info@netrisk.com.tr
            </a>

          </div>

          {/* Çalışma Saatleri */}
          <div className="flex flex-col justify-center items-center bg-white px-6 lg:px-10 py-6 lg:py-12 xl:py-16 shadow-lg text-center rounded-lg">
            <FaClock className="text-blue-600 text-2xl mx-auto mb-4" />
            <p className="text-gray-700 mt-2">08:00 - 18:00</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;