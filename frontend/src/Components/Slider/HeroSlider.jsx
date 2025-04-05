import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import { FaMapMarkerAlt, FaQrcode, FaCar } from "react-icons/fa";
import "./index.css";

const HeroSlider = () => {
    const cards = [
        {
            id: 1,
            title: "Park Et",
            description:
                "Aracınızı anlaşmalı park alanlarımıza kolayca bırakın. Her şey sizin rahatlığınız için hazır!",
            icon: <FaMapMarkerAlt />,
        },
        {
            id: 2,
            title: "Kodunu Göster",
            description:
                "Size gönderilen özel kodu park görevlisine göstererek işleminizi tamamlayın. Zahmetsiz bir süreç sizi bekliyor...",
            icon: <FaQrcode />,
        },
        {
            id: 3,
            title: "Avantajını Yakala",
            description:
                "Ücretsiz park ayrıcalığının keyfini çıkarın ve zaman kazanın. ParkAsist ile her şey daha kolay!",
            icon: <FaCar />
            ,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="hero-slider w-full flex justify-center ">
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={30}
                initialSlide={1}
                pagination={{
                    dynamicBullets: true,
                  }}

                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    468: { slidesPerView: 1 },
                }}
             
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full max-w-8xl"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={card.id} className="flex justify-center">
                        <div
                            className={`flex flex-col justify-between px-4 lg:px-8 py-10 h-60 md:h-70 xl:h-70 text-center text-white rounded-lg shadow-lg transition-all duration-300 ${index === activeIndex ? "bg-[var(--tertiary)]" : "bg-[var(--primary)] scale-105"
                                }`}
                        >
                            <div className="flex  justify-center text-4xl mb-2">{card.icon}</div>
                            <h3 className=" !font-bold">{card.title}</h3>
                            <p className="mt-2">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
