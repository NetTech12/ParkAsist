import { useEffect, useState } from 'react';
import Header from '../Components/Header'
import header from '../assets/hero.png'
const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 441);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div>
       <Header
      title="Hakkımızda"
      bgImage={header}
      style={{
        height: isMobile ? "300px" : "500px",
      }}
    />
      <style>
        {`
            .page-header .title-wrap {
                transform: translateY(${isMobile ? "320%" : "550%"}) !important; 
              }
            `}
      </style>
  

      <div className='container py-8 px-6 md:px-0 text-start text-lg mt-20 mx-auto opacity-70'>
        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            ParkAsist <span className='text-[var(--primary)]'>Sistemi Nedir?</span>
          </h2>
          <p>
            ParkAsist, kullanıcılarına kolay, hızlı ve avantajlı park çözümleri sunmak için geliştirilmiş bir dijital platformdur. Modern teknolojileri park etme deneyimiyle buluşturmayı hedefleyen ParkAsist, kullanıcılarına stressiz bir park deneyimi yaşatmayı amaçlar. Gelişmiş yazılım altyapısı ve kullanıcı dostu arayüzü sayesinde, park yeri bulma sürecini kolaylaştırır ve zaman tasarrufu sağlar.
          </p>
          <br className='my-5' />
          <p>
            ParkAsist, yalnızca park yeri bulmakla sınırlı kalmayıp, kullanıcılara çeşitli avantajlar ve ek hizmetler de sunar. Örneğin, rezervasyon sistemi sayesinde istediğiniz bölgedeki uygun park yerlerini önceden ayırtabilirsiniz. Bu özellik, özellikle yoğun trafik ve kalabalık bölgelerde araç sahiplerine büyük kolaylık sağlar. Ayrıca, entegre ödeme seçenekleriyle hızlı ve güvenli bir şekilde ödeme yapabilirsiniz. Kredi kartı, mobil ödeme veya diğer dijital yöntemlerle işlemlerinizi zahmetsizce gerçekleştirebilirsiniz.
          </p>
          <br className='my-5' />
          <p>
            ParkAsist, sadece bireysel kullanıcılar için değil, işletmeler ve kurumlar için de özel çözümler sunar. Özel etkinlikler, büyük organizasyonlar veya işletmelere ait otopark yönetimi için özelleştirilmiş hizmetler mevcuttur. Bu sayede otopark yönetimi daha verimli ve düzenli hale gelir.
          </p>
          <br className='my-5' />
          <p>
            Mobil uygulaması ve web tabanlı erişim imkanıyla, ParkAsist her an her yerden kullanılabilir. Kullanıcılar, birkaç tıklama ile park yerlerini kontrol edebilir, rezervasyon yapabilir ve ödeme işlemlerini tamamlayabilir. Ayrıca, uygulamanın sunduğu haritalar ve gerçek zamanlı trafik verileri, kullanıcıların en kısa sürede park yerine ulaşmalarını sağlar.
          </p>
          <br className='my-5' />
          <p>
            Sürdürülebilir bir gelecek vizyonuyla hareket eden ParkAsist, çevre dostu yaklaşımlarıyla da dikkat çeker. Akıllı park çözümleri sayesinde gereksiz yere araç dolaşımı azaltılır ve karbon salınımı minimuma indirilir. Böylece şehir içi trafik yoğunluğu azalırken, çevreye olan olumsuz etkiler de en aza indirgenmiş olur.        </p>
          <br className='my-5' />
          <p>

            ParkAsist'in sunduğu avantajlar arasında müşteri destek hizmetleri de yer alır. Herhangi bir sorun veya ihtiyaç durumunda, kullanıcılar anında destek alabilir ve problemlerine hızlı çözümler bulabilir. Müşteri memnuniyetini ön planda tutan bu yaklaşım, ParkAsist'i kullanıcılar için vazgeçilmez bir platform haline getirir.
          </p>
          <br className='my-5' />
          <p>

            Sonuç olarak, ParkAsist, park etme deneyimini modern teknolojilerle yeniden tanımlayan yenilikçi bir platformdur. Kolay kullanımı, geniş hizmet yelpazesi ve müşteri odaklı çözümleriyle, kullanıcılarına üstün bir park deneyimi sunar. Hem bireysel hem de kurumsal kullanıcılar için tasarlanmış bu platform, hayatı kolaylaştıran ve zaman kazandıran bir çözüm olarak öne çıkar. Park etme stresine son vermek ve daha konforlu bir deneyim yaşamak isteyen herkes için ParkAsist, güvenilir ve etkili bir seçenektir.        </p>
        </section>

        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            Misyonumuz
          </h2>
          <p>
            Park etme sürecini daha kolay, güvenilir ve erişilebilir hale getirmek. Kullanıcılarımızın zamandan ve enerjiden tasarruf etmesini sağlayarak hayatlarını kolaylaştırmayı hedefliyoruz.
          </p>
        </section>
        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            Vizyonumuz
          </h2>
          <p>
            Park alanlarında dijital dönüşümün öncüsü olmak ve sektördeki standartları yenilikçi bir yaklaşımla yeniden tanımlamak. Park etmenin geleceğini şekillendiren global bir çözüm sağlayıcı olmayı amaçlıyoruz.        </p>
        </section>
        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            Değerlerimiz
          </h2>
          <p>

            Anlaşmalı otopark ağımızı genişleterek kullanıcılarımıza daha fazla avantaj ve seçenek sunmak. Yerli ve global ölçekte park çözümleri konusunda lider olmak.
          </p>
        </section>
        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            ParkAsist Sistemi Değerleri
          </h2>
          <p>
            <ul className='list-none'>
              <li>
                <span className='text-[var(--primary)]'>Kullanıcı Odaklılık: </span> Hizmetlerimizi kullanıcılarımızın ihtiyaç ve beklentilerine göre şekillendiriyoruz. Onların deneyimini sürekli iyileştirmek ve beklentilerini aşmak öncelikli hedefimizdir.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Yenilikçilik: </span> Teknolojiyi etkin bir şekilde kullanarak sürekli gelişen çözümler üretiyoruz. Dijitalleşen dünyanın gerekliliklerini yakından takip ederek, yaratıcı ve ileri teknolojilerle donatılmış hizmetler sunuyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Güvenilirlik: </span> Kullanıcılarımızın güvenini ön planda tutarak veri güvenliği ve hizmet kalitesine önem veriyoruz. Güvenilirliğimizi, şeffaf ve etik değerlerle birleştirerek uzun vadeli ilişkiler kuruyoruz.
                Erişilebilirlik: Herkesin kolayca kullanabileceği, pratik çözümler sunuyoruz. Uygulama ve platform tasarımlarımız, kullanıcılarımızın her an her yerden ihtiyaç duydukları hizmete ulaşabilmelerini sağlamak üzere optimize edilmiştir.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Erişilebilirlik: </span>  Herkesin kolayca kullanabileceği, pratik çözümler sunuyoruz. Uygulama ve platform tasarımlarımız, kullanıcılarımızın her an her yerden ihtiyaç duydukları hizmete ulaşabilmelerini sağlamak üzere optimize edilmiştir.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Sürdürülebilirlik: </span>  Çevresel etkileri en aza indirmeyi ve sürdürülebilir bir gelecek için katkı sağlamayı hedefliyoruz. Akıllı park sistemlerimiz hem kullanıcıların hayatını kolaylaştırıyor hem de çevreye olan olumsuz etkileri azaltıyor.
              </li>

            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h2 className='!font-[300] text-[var(--tertiary)]'>
            ParkAsist Sistemi Neler <span className='text-[var(--primary)]'>Sunuyor?</span>
          </h2>
          <p>
            <ul className='list-[circle] ml-5'>
              <li>
                <span className='text-[var(--primary)]'>Kolay ve Hızlı Park Çözümleri: </span>  Kullanıcılarımızın park etme deneyimini kolaylaştıran, zaman kazandıran ve modern teknolojilerle donatılmış hizmetler sunuyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'> Rezervasyon Hizmeti: </span> Önceden park yeri ayırtma olanağıyla yoğun bölgelerde park yeri arama stresine son veriyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Entegre Ödeme Seçenekleri: </span>  Kredi kartı, mobil ödeme ve diğer dijital yöntemlerle güvenli ve hızlı ödeme imkanı sağlıyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'> Gelişmiş Güvenlik Önlemleri: </span>   Akıllı kameralar ve sensörlerle donatılmış park alanlarımız sayesinde araçlarınız güvende.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Yapay Zeka Destekli Çözümler: </span>   Kullanıcılarımızı en uygun park yerlerine yönlendiren akıllı algoritmalar kullanıyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Bireysel ve Kurumsal Çözümler: </span>  Hem bireysel kullanıcılar hem de işletmeler için özelleştirilmiş otopark yönetimi hizmetleri sunuyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Mobil ve Web Erişimi: </span>  Uygulama ve web tabanlı sistemlerimizle kullanıcılar her yerden hizmetlerimize erişebilir.
              </li>
              <li>
                <span className='text-[var(--primary)]'>Gerçek Zamanlı Trafik ve Haritalar: </span>  Kullanıcıların park yerlerine en kısa sürede ulaşmalarını sağlıyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'> Sürdürülebilirlik Odaklı Hizmetler: </span>  Çevre dostu park sistemlerimizle karbon salınımını azaltıyor ve sürdürülebilir bir gelecek için çalışıyoruz.
              </li>
              <li>
                <span className='text-[var(--primary)]'>7/24 Müşteri Desteği: </span>  Kullanıcılarımızın ihtiyaçlarına anında yanıt vererek memnuniyeti ön planda tutuyoruz.
              </li>

            </ul>
          </p>
        </section>


      </div>
    </div>
  )
}

export default About