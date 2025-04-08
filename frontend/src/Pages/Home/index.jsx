import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../Components/Hero';
import HeroSlider from '../../Components/Slider/HeroSlider';
import homeBanner from "../../assets/ana-sayfa-banner.png";

const textVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const Home = () => {
  return (
    <div>
      <Hero />

      <div className='container px-6 md:px-20 mx-auto'>
        <HeroSlider />
        <div className='mx-auto px-2 pb-30  justify-between items-center -mt-12'>
          <p className='text-center text-2xl font-semibold'>
            Otoparkınızın yönetimi ve qr güncellemelerinize <a href="https://qr.parkasist.com/Login" className='text-blue-800'>QR ParkAsist</a> 'den ulaşabilirsiniz.

          </p>
        </div>
        <div className="mx-auto px-2 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
          <motion.div
            className='text-start h-full flex flex-col justify-between'
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div >
              <h1 className="!font-normal text-[var(--primary)] mb-3 ">
                Park Asistanınız Her Zaman Yanınızda
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                ParkAsist, kullanıcılarına kolay, hızlı ve avantajlı park çözümleri sunmak için geliştirilmiş bir dijital platformdur. Modern teknolojileri park etme deneyimiyle buluşturmayı hedefleyen ParkAsist, kullanıcılarına stressiz bir park deneyimi yaşatmayı amaçlar. Gelişmiş yazılım altyapısı ve kullanıcı dostu arayüzü sayesinde, park yeri bulma sürecini kolaylaştırır ve zaman tasarrufu sağlar.
              </p>
            </div>
            <div>
              <h1 className="!font-normal text-[var(--primary)] mb-3">
                Hayatınızı Kolaylaştıran Park Çözümü
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                ParkAsist ile şehrin yoğunluğunda kaybolmayın! Akıllı navigasyon sistemimiz sayesinde size en yakın ve en uygun park yerlerini anında keşfedin. Rezervasyon yaparak park yerinizi garanti altına alın ve gereksiz zaman kayıplarını ortadan kaldırın. İster mobil uygulamamızla ister web platformumuzla, dilediğiniz an kolayca hizmetlerimize erişin. Park etme deneyiminizi tamamen değiştiren ParkAsist, sizin için her ayrıntıyı düşünüyor. Güven, hız ve konfor artık bir arada!
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-start h-auto xl:h-full"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={homeBanner} alt="parkAsistHome" className="rounded-lg shadow-lg w-full h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
