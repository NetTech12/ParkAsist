import React from 'react'
import logo from '../../assets/footer2.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (


        <footer className=" bg-[var(--primary)]  h-full ">
            <div className="w-full px-10 xl:px-30 mx-auto py-8 md:py-16 lg:py-12">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  text-white p-10 w-full">
                    <div className=" flex flex-col justify-normal items-center md:justify-between md:items-start">
                        <img src={logo} alt="ParkAsist" className="w-[60%] sm:w-[50%] md:w-[75%] lg:w-[80%] xl:w-[65%]  flex justify-center items-start mt-8 md:mt-0 " />
                        <div className=' text-white font-medium exo-2'>
                            ParkAsist bir Net&Risk kuruluşudur.
                        </div>
                    </div>

                    <div className="text-center flex flex-col items-center md:items-start cursor-pointer">
                        <h3 className=" font-semibold">Hızlı Erişim</h3>
                        <ul className="flex flex-col  justify-center  space-y-1 mt-2 list-none">
                            <li className="flex items-center transition-all duration-500 hover:text-yellow-500 hover:translate-x-2">
                                <i className="fa-solid fa-chevron-right text-yellow-500 mr-2"></i>
                                <a href='/home'>
                                    Ana Sayfa
                                </a>
                            </li>
                            <li className="flex items-center transition-all duration-500 hover:text-yellow-500 hover:translate-x-2">
                                <i className="fa-solid fa-chevron-right text-yellow-500 mr-2"></i>
                                <a href='/about'>
                                    Hakkımızda
                                </a>
                            </li>
                            <li className="flex items-center transition-all duration-500 hover:text-yellow-500 hover:translate-x-2">
                                <i className="fa-solid fa-chevron-right text-yellow-500 mr-2"></i>
                                <a href='/contact'>
                                    İletişim
                                </a></li>
                            <li className="flex items-center transition-all duration-500 hover:text-yellow-500 hover:translate-x-2">
                                <i className="fa-solid fa-chevron-right text-yellow-500 mr-2"></i>
                                <a href='/cookie-policy'>
                                    Çerez Politikası
                                </a>
                                ı</li>
                            <li className="flex items-center transition-all duration-500 hover:text-yellow-500 hover:translate-x-2">
                                <i className="fa-solid fa-chevron-right text-yellow-500 mr-2"></i>
                                <a href='/KVKK'>
                                    KVKK

                                </a></li>
                        </ul>
                    </div>
                    <div className="pl-0 xl:pl-20 flex flex-col items-center justify-between md:items-start ">
                        <div className='flex flex-col pb-3 lg:md-0'>
                            <h3 className="text-xl font-semibold ">Bize Ulaşın</h3>
                            <div className="flex space-x-2 mt-2 ">
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M266.67-40q-27 0-46.84-19.83Q200-79.67 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920h426.66q27 0 46.84 19.83Q760-880.33 760-853.33v746.66q0 27-19.83 46.84Q720.33-40 693.33-40H266.67Zm0-100v33.33h426.66V-140H266.67Zm0-66.67h426.66v-546.66H266.67v546.66Zm0-613.33h426.66v-33.33H266.67V-820Zm0 0v-33.33V-820Zm0 680v33.33V-140Z" /></svg>
                                </div>
                                <div className="flex flex-col items-start">
                                    <a href="tel:+908503331792" className=" hover:underline">
                                        +90 850 333 17 92
                                    </a>
                                    <a href="mailto:info@netrisk.com.tr" className=" hover:underline">
                                        info@netrisk.com.tr
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-start md: max-w-60'>
                            <p className="mt-2"><span className='font-bold'>
                                Adres:</span> Business İstanbul A Blok Ofis 87-88 <span className=' ml-3'> Kadıköy/İSTANBUL</span>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer