import React from 'react'
import Header from '../Components/Header'
import header from '../assets/header.png'


const KVKK = () => {
  return (
    <div className='text-lg text-start text-gray-800 dark:text-gray-200'>

      <Header title=" KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI"
              bgImage={header}
             
       />
      <div className='container px-6 md:px-20 py-8 mt-20 mx-auto opacity-70'>
        <section className='mb-16'  >
          <h4 className=''>1. AMAÇ</h4>
          <p className='mb-4'>
            Net Risk Yönetimi ve Destek Hizmetleri A.Ş. (“PARK ASİST” veya “Şirket”) olarak; başvurucularımızın, çalışanlarımızın, iş ortaklarımızın, kiracılarımızın, müşterilerimizin, stajyerlerimizin, taşeron işçilerimizin, taşeron yetkililerimizin, tedarikçi çalışanlarımızın, tedarikçi yetkililerimizin ve ziyaretçilerimizin kişisel verilerinin Türkiye Cumhuriyeti Anayasası ve insan haklarına ilişkin ülkemizin tarafı olduğu uluslararası sözleşmeler ile 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK” ya da “Kanun”) başta olmak üzere ilgili mevzuata uygun olarak işlenmesi ve verisi işlenen ilgili kişilerin haklarını etkin şekilde kullanılmasının sağlanması önceliğimizdir.
          </p>
          <p>Bu nedenle kişiseuyiği tüm idari ve teknik koruma tedbirlerini almakta ve aldığımız tedbirleri güncel tutmaktayız. İşbu PARK ASİST Kişisel Verilerin Korunması ve İşlenmesi Politikası (“Politika”), faaliyetlerimiz sırasında toplanan kişisel verilerin KVKK ’da anılan ilkeler çerçevesinde işlenmesine (örneğin saklanması, aktarılması ve silinmesi ya da anonim hale getirilmesine) dair izlediğimiz yöntemleri açıklamaktadır.</p>
        </section>


        <section className='mb-16'>
          <h4>2. KAPSAM</h4>
          <p>
            PARK ASİST tarafından veri işleme faaliyetine tabi tutulan; sayılanlarla sınırlı olmamak üzere; başvurucularımıza, çalışanlarımıza iş ortaklarımıza, kiracılarımıza, müşterilerimize, stajyerlerimize, taşeron işçilerimize, taşeron yetkililerimize, tedarikçi çalışanlarımıza, tedarikçi yetkililerimize ve ziyaretçilerimize ait tüm kişisel verilere işbu Politika uygulanmaktadır. Politikamız, PARK ASİST bünyesindeki kişisel verilerle alakalı bütün işleme faaliyetleri için uygulanmakta olup, KVKK ve kişisel verilere ilişkin diğer mevzuat ve bu alandaki uluslararası standartlar gözetilerek ele alınmış ve hazırlanmıştır.        </p>
        </section>

        <section className='mb-16'>
          <h4>3. TANIM VE KISALTMALAR</h4>
          <p>
            İşbu Politika kapsamında;
            <ul className="list-[lower-alpha] pl-6">
              <li>PARK ASİST veya Şirket:Net Risk Yönetimi ve Destek Hizmetleri A.Ş.</li>
              <li>Açık rıza: Belirli bir konuya ilişkin, bilgilendirilmeye ve özgür iradeye dayanan, tereddüte yer bırakmayacak açıklıkta, sadece o işlemle sınırlı olarak verilen onayı,</li>
              <li>Anonim hale getirme: Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiye ilişkilendirilemeyecek hale getirilmesini,</li>
              <li>Çalışan: PARK ASİST personelini,</li>
              <li>Çalışan adayı: PARK ASİST’a iş başvurusunda bulunmuş olan kişileri,</li>
              <li>Çevrimiçi Ziyaretçiler: PARK ASİST İnternet sitesi ziyaretçilerini,</li>
              <li>İlgili Kişi: Kişisel verisi işlenen gerçek kişileri,</li>
              <li>Kişisel veri: Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,</li>
              <li>Özel nitelikli kişisel veri: Kişilerin, ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi, veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkumiyeti, ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri,</li>
              <li>Kişisel verilerin işlenmesi: Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, saklanması, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hale getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlemi,</li>
              <li>Veri işleyen: Veri sorumlusunun verdiği yetkiye dayanarak veri sorumlusu adına kişisel verileri işleyen gerçek veya tüzel kişiyi,</li>
              <li>Veri sorumlusu:Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasında ve yönetilmesinden sorumlu gerçek veya tüzel kişiyi,</li>
              <li>KVK Kurulu: Kişisel Verileri Koruma Kurulu’nu,</li>
              <li>KVK Kurumu: Kişisel Verileri Koruma Kurumu’nu,</li>
              <li>KVKK ya da Kanun: 7 Nisan 2016 tarihli ve 29677 sayılı Resmi Gazetede yayımlanan Kişisel Verilerin Korunması Kanunu’nu,</li>
              <li>Politika: PARK ASİST Kişisel Verilerin Korunması ve İşlenmesi Politikasını ifade eder.</li>
            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h4>4. ROL VE SORUMLULUKLAR</h4>
          <p>
            <ul className="list-[lower-alpha] pl-6">
              <li>KVKK Komisyonu KVKK Komisyonu, işbu Politikaya, kural ve düzenlemelere uyulmaması durumunda bildirim, inceleme ve yaptırım mekanizmalarının belirlenmesi ve işletilmesinin üst gözetiminden sorumludur.</li>
              <li> KVKK Komisyonu İşbu Politika, KVKK Komisyonu tarafından onaylanmış olup, KVKK Komisyonu Politikanın oluşturulmasının, uygulanmasının ve gerektiğinde güncellenmesinin sağlanması konusunda yetkili onay mekanizmasıdır. KVKK Komisyonu, sorumlu oldukları faaliyetlerde, görev alan çalışanlarla beraber dış hizmet alınan firmaların Politikaya uyumu için gerekli tedbirlerin alınması, Politikaya aykırı hususların tespiti amacıyla konuların incelenmesi ve Genel Müdürlük Makamına bildirilmesinden sorumludur.</li>
              <li>İnsan Kaynakları Müdürlüğü Hazırlanan dokümanın kurum içi dağıtımının yapılması Yazı İşleri ve Sosyal Etkinlikler Şefliği sorumluluğundadır. e. Pazarlama Kurumsal İlişkiler Müdürlüğü Pazarlama Kurumsal İlişkiler Müdürlüğü bu Politika çerçevesinde, Şirket’in kamuyu bilgilendirme uygulamalarını, şeffaf bir şekilde tüm ilgililere eş zamanlı olarak yapmaktan sorumludur. Hazırlanan dokümanın internet sitesinde yayınlanması Tanıtım ve Halkla İlişkiler şefliği sorumluluğundadır.</li>
            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h4>5. HUKUKİ YÜKÜMLÜLÜKLER</h4>
          <p>Veri sorumlusu olarak kişisel verilerin korunması ve işlenmesi kapsamındaki hukuki yükümlülüklerimiz aşağıda sıralanmaktadır:</p>
          <p>
            5.1. Aydınlatma yükümlülüğümüz Veri sorumlusu olarak kişisel verileri toplarken;
            <ul className="list-[circle] pl-6">
              <li>Kişisel verilerin hangi amaçla işleneceği,</li>
              <li>Ticari unvanımıza, ilişkin bilgiler,</li>
              <li> İşlenen kişisel verilerin kimlere ve hangi amaçla aktarılabileceği,</li>
              <li>Verileri toplama yöntemimiz ve hukuki sebebi ve</li>
              <li>KVKK’ dan doğan hakları hususlarında İlgili Kişiyi aydınlatma yükümlülüğümüz bulunmaktadır. PARK ASİST olarak işbu Politikanın anlaşılır ve kolay erişilebilir olmasına özen göstermekteyiz. Aydınlatma yükümlülüğümüzü, İnternet sitemiz üzerinden veya fiziki yerleşkelerimizde yer alan panolar veya ilgili kişi gruplarına ait bilgilendirme metinleri aracılığıyla yerine getirmekteyiz.</li>
            </ul>
          </p>
          <p>
            5.2. Veri güvenliğini sağlama yükümlülüğümüz Veri sorumlusu olarak işlediğimiz kişisel verilerin güvenliğini sağlamak için mevzuatta öngörülen idari ve teknik tedbirleri almaktayız. Veri güvenliğine ilişkin yükümlülükler ve alınan tedbirler işbu Politikanın 11. bölümünde detaylı şekilde açıklanmıştır.
          </p>

        </section>


        <section className="mb-16">
          <h4>7. KİŞİSEL VERİLERİN İŞLENMESİ</h4>
          <p>7.1. Kişisel Verileri İşleme İlkelerimiz Kişisel verileri aşağıda yer alan ilkeler uyarınca işlemekteyiz.</p>

          <ol className="pl-6 numbered-list">
            <li>
              Hukuka ve dürüstlük kurallarına uygun işleme

              Kişisel verileri dürüstlük kurallarına uygun, şeffaf yöntemlerle ve aydınlatma yükümlülüğümüzü yerine getirerek işlemekteyiz.
              Aydınlatma yükümlülüğünü yerine getirirken mümkünse verinin sizden elde edilmesi anında kısaca işleme amacını açıklıyor
              ve işlem ile ilgili ayrıntılı olmayan bilgilere ilgili kişinin erişimini sağlıyoruz.

            </li>
            <li>
              Kişisel verilerin doğruluğunu ve gerektiğinde güncel olmasını sağlama

              İşlenen verilerin doğru ve güncel olmasını sağlamak için veri işleme prosedürlerimizde gerekli idari ve teknik
              tedbirleri almaktayız. Ancak verilerin önemli bir kısmı İlgili Kişilerin beyanı esas alınarak işlendiği için
              bu beyanları en doğru şekilde yansıtmakta ve İlgili Kişilere verilerini güncellemesi ve var ise hataları düzeltmesi
              için başvuruda bulunma olanağı sunmaktayız.

            </li>
            <li>
              Belirli, açık ve meşru amaçlarla işleme PARK ASİST olarak, kişisel verileri kapsamı ve içeriği açıkça belirlenmiş, faaliyetlerimizi mevzuata uygun olarak ve hayatın olağan akışının gerektirdiği çerçevede sürdürmek için belirlenen meşru amaçlarımız dahilinde işlemekteyiz.
            </li>
            <li>
              Kişisel verilerin işlendikleri amaçla bağlantılı, sınırlı ve ölçülü olması Kişisel verileri belirlediğimiz amaçlarla bağlantılı, sınırlı ve ölçülü olarak işlemekteyiz. İlgili olmayan veya işlenmesine ihtiyaç duyulmayan kişisel verilerin işlenmesinden kaçınmaktayız. Bu nedenle, yasal gereklilik olmadığı sürece özel nitelikte kişisel verileri işlememekte veya işlememiz gerektiğinde konuya ilişkin açık rıza almaktayız.

            </li>
            <li>
              Kişisel verilerin kanuni düzenlemelerde öngörülen veya meşru menfaatlerimizin gerektirdiği süreler boyunca saklanması Mevzuattaki birçok düzenleme kişisel verilerin belirli bir süre saklanmasını zorunlu kılmaktadır. Bu nedenle, işlediğimiz kişisel verileri ilgili mevzuatta öngörülen veya kişisel verilerin işlenme amaçları için gerekli olan süre kadar saklamaktayız. Mevzuatta öngörülen saklama süresinin sona ermesi veya işleme amacının ortadan kalkması durumunda kişisel verileri silmekte, yok etmekte veya anonim hale getirmekteyiz.
            </li>
          </ol>
          <p>7.2.Kişisel veri işleme amaçlarımız PARK ASİST olarak kişisel verileri işleme amaçlarımız işlediğimiz her veri kategorisi için kişi kategorileri özelinde hazırlanan Aydınlatma Metinleri’nde ayrıntılı olarak yer almaktadır. Söz konusu aydınlatma metinlerinde sayılan amaçlar kapsamında gerçekleştirilen işleme faaliyetinin, KVKK’nın 5. ve 6. maddesinde öngörülen hukuka uygunluk nedenlerinden herhangi birini karşılamaması halinde, ilgili işleme sürecine yönelik olarak PARK ASİST tarafından açık rızanız alınmaktadır.
          </p>
          <p>7.3.Kişisel veri toplama yöntemlerimiz Kişisel veriler; basılı iletişim/ şikayet formları, çevrimiçi elektronik formlar (örn: İnternet sitesi iletişim formu), e-postalar, tutanaklar, anketler, iş sözleşmesi, mesleki eğitim staj sözleşmesi, sözleşmeler, özgeçmiş, iş yerinde bulunan elektronik takip ve fiziksel erişim kontrol sistemleri, (örn: biyometrik ve kartlı geçiş sistemleri, CCTV), bilgi sistemleri ve elektronik cihazlar (örn: telekomünikasyon altyapısı, bilgisayar ve telefonlar), çevrimiçi platformlar (İnternet sitesi, telefon uygulaması vb.), çevrimiçi platformlarımız tarafından yaratılan Çerezler/Cookieler, üçüncü taraflarca yaratılan Takip Çerezleri/Tracking Cookieler (örn:Hotjar), site kullanımı ölçüm sistemleri (örn: Google Analytics) ve İlgili Kişi tarafından beyan edilen diğer belgeler vasıtasıyla toplanmaktadır.</p>
          <p>7.4. Kişisel verilerin toplanmasına ilişkin hukuki sebeplerimiz Kişisel veriler, PARK ASİST ve PARK ASİST adına veri işleyen gerçek ya da tüzel kişiler tarafından; yukarıda veri kategorilerine özgü olarak belirtilen amaçların gerçekleştirilmesi doğrultusunda, Kanun’un 5. maddesinde belirtilen
            <ul className="list-[circle] pl-6">
              <li>“Kanunlarda açıkça öngörülme”,</li>
              <li>“Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması”,</li>
              <li> “Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması”</li>
              <li>“Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması”,</li>
              <li>“İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” hukuki sebeplerine dayanılarak toplanmaktadır."</li>
            </ul>
          </p>
          <p>Özel nitelikli kişisel verilerin toplanmasına ilişkin hukuki sebeplerimiz Sağlık bilgileri, KVKK’nın 6. maddesinde belirtilen “kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından açık rıza aranmaksızın işlenebileceği” hukuki sebebine dayanılarak PARK ASİST tarafından işlenmektedir. Bununla birlikte, sağlık bilgilerinin Kanun’un 6. maddesinde belirtilen amaçlardan farklı bir amaçla işlenmesinin öngörüldüğü durumlarda, söz konusu bilgiler İlgili Kişinin açık rızası alınarak işlenmektedir. Biyometrik veriler kapsamındaki parmak izi bilgisi, yukarıda ilgili kategori altında belirtilen amaçlar doğrultusunda, Kanun’un 6. maddesi uyarınca İlgili Kişinin açık rızası alınarak işlenmektedir. Ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili kişisel veriler, yukarıda ilgili kategori altında belirtilen amaçlar doğrultusunda, Kanun’un 6. maddesinde belirtilen “Sağlık ve cinsel hayat dışındaki özel nitelikli kişisel verilerin, kanunlarda öngörülen hâllerde İlgili Kişinin açık rızası aranmaksızın işlenebileceği” hukuki sebebine dayanılarak işlenmektedir. Bununla birlikte, kanunlarda öngörülen durumlar haricinde özel nitelikli kişisel veriler Kanun’un 6. maddesi uyarınca İlgili Kişinin açık rızası alınarak işlenmektedir.</p>
          <p>7.6. Kişisel verilerin ve özel nitelikli kişisel verilerin işlenmesi</p>

          <ol className="">
            <li>
              7.6.1.Kişisel verilerin açık rıza alınması yoluyla işlenmesi Mevzuat gereği, kişisel veriler İlgili Kişi’nin açık rızası olmaksızın işlenemez. Açık rıza, KVKK’da “belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza” şeklinde tanımlanmıştır. İşlenen verilerin özel nitelikli kişisel veri olması durumunda işbu Politika’da yer alan açıklamalar geçerlidir. Söz konusu bilgilendirmeler aydınlatma metinlerimiz aracılığıyla yapılmaktadır.
            </li>
            <li>
              7.6.2.Kişisel verilerin işlenmesinde açık rızanın aranmadığı haller Aşağıda sayılan hallerde kişisel verileri açık rıza olmaksızın işleyebiliriz:
              <ul className="list-[circle] pl-6">
                <li>Kanunlarda açıkça öngörülmesi İlgili Kişi’nin kişisel verileri, kanunlarda açıkça öngörüldüğü hallerde hukuka uygun olarak işlenebilecektir (Örneğin, çalışana ait özlük bilgilerinin kanun gereği tutulması).</li>
                <li>Fiilî imkansızlık sebebiyle ilgilinin açık rızasının alınamaması Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatının veya beden bütünlüğünün korunması için kişisel verilerin işlenmesinin zorunlu olması durumunda kişisel veriler açık rıza olmaksızın işlenebilecektir</li>
                <li> Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması halinde açık rıza alınmaksızın kişisel verilerin işlenmesi mümkündür (Örneğin, müşteriye siparişin ulaştırılabilmesi için müşteri şirketin adres bilgilerinin kaydedilmesi).</li>
                <li>Bir hukuki yükümlülüğün yerine getirilebilmesi için zorunlu olması Bir hukuki yükümlülüğün yerine getirilebilmesi için işlenmesi zorunlu olan kişisel veriler, İlgili Kişinin açık rızası olmaksızın işlenebilecektir (Örneğin, resmi kurum ve otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme gibi hukuki yükümlülüklerinin yerine getirilmesi; bankacılık, enerji, sermaye piyasaları gibi alanlara özel denetimlerde bilgi paylaşımı yapılması.).</li>
                <li>İlgili Kişinin kendisi tarafından alenileştirilmiş olması İlgili Kişinin kendisi tarafından alenileştirilen, bir başka ifadeyle herhangi bir şekilde kamuoyuna açıklanmış olan kişisel veriler açık rıza aranmaksızın işlenebilecektir.</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması durumunda kişisel veriler açık rıza aranmaksızın işlenebilecektir (Örneğin, işten ayrılan bir çalışana ait gerekli bilgilerin dava zamanaşımı boyunca saklanması).</li>
                <li>Meşru menfaatler kapsamında veri işlemenin zorunlu olması İlgili Kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, PARK ASİST’ın meşru menfaatleri için veri işlenmesinin zorunlu olması durumunda da kişisel veriler açık rıza aranmaksızın işlenebilecektir (Örneğin, PARK ASİST’ın otoparklarının ve tesislerinin güvenliğinin sağlanabilmesi amacıyla, CCTV ekipmanlarıyla izlenmesi).</li>
              </ul>
            </li>
            <li>
              7.6.3.Özel nitelikli kişisel verilerin işlenmesi Özel nitelikli kişisel veriler (sağlık ve cinsel hayata ilişkin veriler hariç), KVK Kurulu’nun öngördüğü idari ve teknik tedbirler alınarak, İlgili Kişinin açık rızasının varlığı halinde veya mevzuatın zorunlu kıldığı hallerde tarafımızca işlenir. Sağlık ve cinsel hayata ilişkin özel nitelikli kişisel veriler, kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından açık rıza aranmaksızın işlenebilmektedir.            </li>
          </ol>

          <p>7.7. İnternet sitemizde yer alan çerezler üzerinden toplanan kişisel verilerin işlenmesi www.parkasist.com adresli internet sitelerimiz üzerinden çerezler aracılığıyla kişisel verilerinizi toplamaktayız. Çerezleri, internet sitemizin işleyiş biçimini ve kullanımını geliştirmek ve kolaylaştırmak, internet sitemizin çeşitli özelliklerinin düzgün bir şekilde çalışmasını sağlamak amacıyla kullanmakta ve internet sitemizde geçirdiğiniz vakti daha verimli ve keyifli hale getirmeye çalışmaktayız. Bunlara ek olarak, internet sitelerimizde yaptığınız tercihleri hatırlamaya yönelik bazı çerezlerden yararlanmakta ve bu sayede size geliştirilmiş ve kişiselleştirilmiş bir deneyim sağlamaktayız. İnternet sitemizde yer alan çerezler üzerinden kişisel verilerinizi toplayabilir, aktarabilir, saklayabilir ve başka şekillerde işleyebiliriz. Çerezler üzerinden topladığımız veriler, kimliğinizin belirlenmesi, şahsınıza özel profilleme ve hedefleme yapılması veya internet sitemiz haricindeki internet faaliyetlerinizin takibi amacıyla kullanılmamaktadır. Kişisel verilerinizin çerezler aracılığıyla toplanıp işlenmesini istemiyorsanız internet sitemizde yer alan çerezleri reddedebilirsiniz. Çerezleri reddetmeniz durumunda internet sitelerimizin gerektiği gibi çalışmayabileceğini ve hizmetlerin görüntülenmesi veya sunulmasında aksaklıklar meydana gelebileceğini hatırlatırız. İnternet sitemizde kullandığımız çerezlere ilişkin detaylı bilgi için ilgili sitemizde yayınlanmakta olan Çerez Politikasını inceleyebilirsiniz.</p>
          <p>7.8. Kablosuz ağa erişim kapsamında toplanan kişisel verilerin işlenmesi Şirket içinde kablosuz internet hizmeti verilmekte olup söz konusu hizmet kapsamında ilgili mevzuat gereği PARK ASİST, “İnternet Toplu Kullanım Sağlayıcı” olarak tanımlanmaktadır. Şirket içinde kablosuz ağa erişimler gerçekleştirilmekte olup söz konusu hizmetten faydalanmak isteyen kullanıcıların tanımlanması, IP adres bilgisi, kullanıma başlama ve bitirme zamanı, hedef IP bilgisi gibi erişim kayıtlarının elektronik ortamda sisteme kaydedilmesi İnternet Toplu Kullanım Sağlayıcı’nın yükümlülükleri arasındadır. Bu kayıtlara ek olarak, 5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun2 ve ilgili mevzuat gereğince log bilgileri de saklanmaktadır. </p>
          <p>7.9. İnsan kaynakları ve istihdam amaçlarıyla toplanan kişisel verilerin işlenmesi Çalışan adayı olarak yapacağınız başvurular sürecinde bizlerle paylaştığınız kişisel verilerinizi Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi başta olmak üzere aşağıdaki amaçlar kapsamında işlemekte ve rızanızın bulunması halinde PARK ASİST bünyesinde gelecekte açılacak pozisyonlarda değerlendirilmesi amacıyla gerekli süre boyunca saklamaktayız. Çalışan adayı olarak paylaştığınız kişisel verilerin işlenmesi işbu Politikada belirtilen ilke ve kurallar uyarınca yürütülmektedir. Çalışan adaylarına ait kişisel veriler:
            <ul className="list-[circle] pl-6">
              <li>İnsan Kaynakları Süreçlerinin Planlanması,</li>
              <li>Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi,</li>
              <li>İletişim Faaliyetlerinin Yürütülmesi,</li>
              <li>Sözleşme Süreçlerinin Yürütülmesi amaçlarıyla işlenmekte olup aşağıdaki araç ve yöntemlerle toplanmaktadır:</li>
              <li>Çalışan adaylarının PARK ASİST’ın elektronik posta, posta vb. yöntemlerle iletmiş oldukları özgeçmişler,</li>
              <li> Elektronik formlar. Çalışanlarımız kişisel verilerinin işlenmesine ilişkin kurallarla alakalı olarak ayrıca bilgilendirilmektedir.</li>
            </ul>
          </p>

          <p>7.10. Genel güvenliğin sağlanması kapsamında kişisel verilerin işlenmesi PARK ASİST olarak çalışanlarımızın, müşterilerimizin, iş ortaklarımızın, stajyerlerimizin, taşeron işçilerimizin ve ziyaretçilerimizin kişisel verilerini fiziksel mekan güvenliğinin temini ve faaliyetlerin mevzuata uygun yürütülmesi amaçlarıyla işlemekteyiz. Bu kapsamda tesislerimizde bulunan kişilerin kamera görüntülerini CCTV (kapalı devre kamera kayıt sistemleri) vasıtasıyla temin etmekte ve bu kayıtları ilgili mevzuatın öngördüğü süreler boyunca saklamakta ve veri saklama ve imha politika ve prosedürlerimize uygun olarak silmekte, yok etmekte ve anonim hale getirmekteyiz.</p>
        </section>

        <section className='mb-16'>
          <h4>8. KİŞİSEL VERİLERİN AKTARILMASI</h4>
          <p>
            8.1. Kişisel verilerin yurt içine aktarımı PARK ASİST olarak, kişisel verilerin aktarılması konusunda KVKK’da öngörülen düzenlemelere ve KVK Kurulu tarafından alınan kararlara uygun bir şekilde hareket etmekteyiz. Mevzuatta yer alan hukuka uygunluk nedenleri saklı kalmak kaydıyla, kişisel veriler ve özel nitelikli veriler İlgili Kişinin açık rızası olmadan üçüncü kişilere aktarılmaz.
          </p>
          <p>
            8.2. Kişisel verilerin yurt dışına aktarımı Kişisel veriler kural olarak İlgili Kişinin açık rızası olmaksızın yurt dışına aktarılamaz. Bununla birlikte, işbu Politikada yer alan hukuka uygunluk nedenlerinden birisinin varlığı varlığı ve yurt dışına aktarım yapılacak olan üçüncü kişinin:
            <ul className=" list-[upper-roman] pl-4">
              <li>KVK Kurulu tarafından güvenli kabul edilen ülkelerden birinde yerleşik olması,</li>
              <li>KVK Kurulu tarafından güvenli kabul edilen ülkelerden birinde yerleşik olmaması halinde ise, PARK ASİST ve güvenli olmayan ülkedeki veri sorumlusunun, yeterli bir korumayı yazılı olarak taahhüt etmeleri ve KVK Kurulu’nun ilgili yurt dışı aktarımına izninin bulunması, hallerinde kişisel veriler açık rızaya bağlı olmaksızın yurt dışına aktarılabilecektir.</li>
            </ul>
          </p>
          <p>
            8.4. Kişisel verilerin hukuka uygun olarak aktarılmasını sağlamak için aldığımız tedbirler
          </p>
          <p>
            8.4.1. Teknik tedbirler Kişisel verileri korumak için, aşağıda sayılanlarla sınırlı olmamak üzere, çeşitli tedbirler almaktayız. Bu kapsamda;
            <ol className="pl-6 numbered-list">
              <li>Kişisel verilerin mevzuata uygun olarak işlenmesi ve saklanması için PARK ASİST bünyesindeki teknik organizasyonu yapmakta,</li>
              <li> Kişisel verilerinizin saklanacağı veri tabanlarının güvenliğini sağlamak için gerekli teknik alt yapıyı oluşturmakta,</li>
              <li>Oluşturulan teknik alt yapının süreçlerini takip etmekte ve denetimlerini yapmakta,</li>
              <li>Aldığımız teknik tedbirlerin ve denetim süreçlerinin raporlanmasına ilişkin prosedürleri belirlemekte,</li>
              <li>Teknik tedbirleri periyodik olarak güncellemekte ve yenilemekte,</li>
              <li>Riskli durumları yeniden inceleyerek gerekli teknolojik çözümleri üretmekte,</li>
              <li>Virüs koruma sistemleri, güvenlik duvarı ve benzeri yazılımsal veya donanımsal güvenlik ürünleri kullanmakta ve teknolojik gelişmelere uygun güvenlik sistemleri kurmakta ve</li>
              <li>Teknik konularda uzman çalışanlar istihdam etmekteyiz.</li>
            </ol>
          </p>
          <p>
            8.4.2. İdari tedbirler Kişisel verileri korumak için, aşağıda sayılanlarla sınırlı olmamak üzere, çeşitli tedbirler almaktayız. Bu kapsamda;
            <ol>
              <li>PARK ASİST bünyesindeki çalışanlar da dahil olmak üzere kişisel verilere erişim politika ve prosedürleri oluşturmakta,</li>
              <li>Çalışanlarımızı kişisel verilerin hukuka uygun bir şekilde korunması ve işlenmesine ilişkin bilgilendirmekte ve eğitmekte,</li>
              <li>Çalışanlarımız ile yaptığımız sözleşmelerde ve/veya oluşturduğumuz politikalarda, çalışanlarımız tarafından kişisel verilerin hukuka aykırı olarak işlenmesi durumlarında alınacak tedbirleri kayıt altına almakta ve</li>
              <li>Birlikte çalıştığımız veri işleyenler veya veri işleyenlerin ortaklarının kişisel verilerin işlenmesi faaliyetlerini denetlemekteyiz.</li>
            </ol>
          </p>

        </section>
        <section className='mb-16'>
          <h4>9. KİŞİSEL VERİLERİN SAKLANMASI</h4>
          <p>
            9.1. Kişisel verilerin mevzuatta öngörülen süre veya işlendikleri amaç için gerekli olan süre kadar saklanması Kişisel verileri mevzuatta öngörülen saklama süreleri saklı kalmak kaydıyla, kişisel verilerin işleme amacının gerektirdiği süre boyunca ve “Kişisel Veri Saklama ve İmha Politikamız” kapsamında saklamaktayız. Kişisel verileri birden fazla amaç ile işlediğimiz hallerde, verinin işleme amaçlarının hepsinin ortadan kalkması veya İlgili Kişi’nin talebi üzerine, verilerin silinmesine mevzuatta bir engel olmaması durumunda veriler silinir, yok edilir veya anonim hale getirilerek saklanır. Yok etme, silme veya anonim hale getirme hususlarında mevzuat hükümleri ve KVK Kurulu kararlarına uyulur.
          </p>
          <p>
            9.2. Kişisel verilerin saklanmasına ilişkin aldığımız tedbirler
          </p>
          <p>
            9.2.1. Teknik Tedbirler
            <ol className="list-decimal pl-4 ">
              <li> Kişisel verilerin silinmesi, yok edilmesi ve anonim hale getirilmesi için teknik alt yapılar ve bunlara ilişkin denetim mekanizmaları oluşturmakta,</li>
              <li> Kişisel verilerin güvenli şekilde saklanması için gerekli tedbirleri almakta,</li>
              <li>Teknik uzmanlığı olan çalışanlar istihdam etmekte,</li>
              <li>Oluşabilecek risklere karşı iş sürekliliği ve acil durum planları oluşturup bunların uygulanmasına ilişkin sistemler geliştirmekte ve</li>
              <li>Kişisel verilerin saklama alanlarına ilişkin teknolojik gelişmeler uyarınca güvenlik sistemleri kurmaktayız</li>
            </ol>
          </p>
        </section>
        <section className='mb-16'>
          <h4>10. KİŞİSEL VERİLERİN SİLİNMESİ, YOK EDİLMESİ VEYA ANONİM HALE GETİRİLMESİ</h4>
          <p>
            İşleme amaçlarımız kapsamında toplanan kişisel veriler işleme amaçlarımız ve yürürlükteki kanunlar kapsamında işlenmekte ve saklanmaktadır. Kişisel veriler;
            <ul className="list-[circle] pl-6">
              <li> İşleme amaçlarımızın tamamen sona ermesi veya</li>
              <li>İlgili Kişinin talebi halinde silinir, yok edilir veya anonim hale getirilir. Söz konusu silme, yok etme ve anonim hale getirme işlemleri ilgili mevzuat hükümleri saklı kalmak kaydıyla Kişisel Veri Saklama ve İmha Politikamız kapsamında yapılır. Kişisel verileriniz, silinirken, yok edilirken veya anonim hale getirilirken işbu Politikada yer alan güvenlik tedbirleri alınır. Kişisel verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi için yapılan işlemlere dair kayıtlar diğer kanun ve mevzuat hükümleri saklı kalmak üzere en az 3 yıl boyunca saklanır. PARK ASİST, aksi KVK Kurulu tarafından belirtilmediği sürece kişisel verileri silme, yok etme veya anonim hale getirme yöntemlerinden uygun olanını seçer. İlgili Kişinin talebi halinde ise uygun yöntem gerekçesi açıklanarak seçilir.</li>
            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h4>11. KİŞİSEL VERİLERİN GÜVENLİĞİ</h4>
          <p>
            11.1. Kişisel verilerin güvenliğine ilişkin yükümlülüklerimiz PARK ASİST olarak;
            <ul className="list-[circle] pl-6">
              <li> Kişisel verilerin hukuka aykırı olarak işlenmesini önlemek,</li>
              <li>Kişisel verilere hukuka aykırı olarak erişilmesini önlemek ve</li>
              <li>Kişisel verilerin hukuka uygun olarak saklanmasını sağlamak için teknolojik olanaklar ve uygulama maliyetlerine göre idari ve teknik tedbirler almaktayız.</li>
            </ul>
          </p>
          <p>
            11.2. Kişisel verilerin hukuka aykırı olarak işlenmesini önlemek için aldığımız tedbirler            
            <ul className="list-[circle] pl-6">
             <li>Ağ ve uygulama güvenliğini sağlamakta,</li>
             <li> Ağ yoluyla kişisel veri aktarımlarında kapalı sistem ağ kullanmakta,</li>
             <li>Anahtar yönetimi kullanmakta,</li>
             <li>Bilgi teknolojileri sistemleri tedarik, geliştirme ve bakımı kapsamında gerekli önlemleri almakta,</li>
             <li>Çalışanlar için veri güvenliği konusunda belli aralıklarla eğitim ve farkındalık çalışmaları yapmakta,</li>
             <li> Çalışanlar için yetki matrisi oluşturmakta,</li>
             <li>Erişim, bilgi güvenliği, kullanım, saklama ve imha konularında kurumsal politikalar uygulamakta,</li>
             <li> Gizlilik taahhütnameleri yapmakta,</li>
             <li>Görev değişikliği olan ya da işten ayrılan çalışanların bu alandaki yetkilerini kaldırmakta,</li>
             <li>Güncel anti-virüs sistemleri kullanmakta,</li>
             <li>Güvenlik duvarları kullanmakta,</li>
             <li>İmzalanan sözleşmelere veri güvenliği hükümleri eklemekte,</li>
             <li>Kişisel veri güvenliği politika ve prosedürleri oluşturmakta,</li>
             <li>Kişisel veri güvenliği sorunlarını hızlı bir şekilde raporlamakta,</li>
             <li>Kişisel veri güvenliği takibini yapmakta,</li>
             <li>Kişisel veri içeren fiziksel ortamlara giriş çıkışlarla ilgili gerekli güvenlik önlemlerini almakta,</li>
             <li>Kişisel veri içeren fiziksel ortamların dış risklere (yangın,sel vb) karşı güvenliğini sağlamakta,</li>
             <li>Kişisel veri içeren ortamların güvenliğini sağlamakta,</li>
             <li>Kişisel verileri mümkün olduğunca azaltmakta,</li>
             <li>Kişisel verileri yedeklemekte ve yedeklenen kişisel verilerin güvenliğini de sağlamakta,</li>
             <li>Kullanıcı hesap yönetimi ve yetki kontrol sistemlerini uygulamakta ve bu sistemlerin takibini yapmakta,</li>
             <li>Saldırı tespit ve önleme sistemleri kullanmakta,</li>
             <li>Sızma testi uygulamakta,</li>
             <li> Siber güvenlik önlemlerini almakta ve alınan güvenlik önlemlerini periyodik olarak kontrol etmekte,</li>
             <li> Veri işleyen hizmet sağlayıcılarının veri güvenliği konusunda belli aralıklarla denetimini gerçekleştirmekte ve</li>
             <li>Veri işleyen hizmet sağlayıcılarının farkındalığını sağlamaktayız.</li>
            
            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h4>12. İLGİLİ KİŞİ’NİN HAKLARI</h4>
        
          <p>
          Aydınlatma yükümlülüğümüz kapsamında İlgili Kişi’yi bilgilendirmekte ve bu bilgilendirmeye ilişkin gerekli sistem ve alt yapıları kurmaktayız. İlgili Kişi’nin kişisel verilerine ilişkin haklarını kullanması için gerekli olan teknik ve idari düzenlemeleri yapmaktayız. İlgili Kişi, kendisine ait kişisel veriler ile ilgili olarak aşağıda sayılan haklara sahiptir:
          <ul className="list-[circle] pl-6">
              <li> Kişisel verilerin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel veriler işlenmişse buna ilişkin bilgi talep etme,</li>
              <li> Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li> Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
              <li> Kişisel verilerin işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Yukarıda bahsedilen düzeltme, silme veya yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li> İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhe bir sonuç ortaya çıkmasına itiraz etme ve</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme.</li>
            </ul>
          </p>
        </section>
        <section className='mb-16'>
          <h4>13. POLİTİKA’NIN YAYINLANMASI VE SAKLANMASI</h4>
          <p>
          İşbu Politika basılı kâğıt ve elektronik ortamda olmak üzere iki farklı ortamda saklanır. Islak imzalı nüshalar ve kontrollü kopyalar Yazı İşleri ve Sosyal Etkinlikler Şefliğinde saklanır ve gerektiğinde Bölüm Yöneticisinin yazılı onayı ile Yazı İşleri ve Sosyal Etkinlikler Şefi tarafından imha edilir.
          </p>
        </section>
        <section className='mb-16'>
          <h4>14. GÜNCELLEME SIKLIĞI</h4>
          <p>
          İşbu Politika herhangi bir bildirimde bulunmaksızın yılda en az bir kez gözden geçirilir ve ihtiyaç görülmesi halinde güncellenir. Bu sebeple, belirli aralıklarla Politikayı gözden geçirmeniz tavsiye edilir.
          </p>
        </section>
        <section className='mb-16'>
          <h4>15. YÜRÜRLÜK</h4>
          <p>
          İşbu Politika, www.parkasist.com internet sitesinde yayınlanmasının ardından yürürlüğe girmiş kabul edilir.
          </p>
        </section>
      </div>
    </div>
  )
}

export default KVKK
