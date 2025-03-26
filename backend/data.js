const data = [
    {
        id: 1,
        name: "NERGİZ OTOPARK",
        city: "ANKARA",
        district: "ALTINDAĞ",
        barrier: "",
        latitude:39.945395,
        longitude:32.855629,
        username:"nergiz",
        password:"nergiz123"
    },
    {
        id: 2,
        name: "ANKARA KIZILAY OTOPARK",
        city: "ANKARA",
        district: "ÇANKAYA",
        barrier: "",
        latitude:39.924171,
        longitude:32.851784,
        username:"kizilay",
        password:"kizilay123"
    },
    {
        id: 3,
        name: "TUNA OTOPARK",
        city: "ANKARA",
        district: "ÇANKAYA",
        barrier: "",
        latitude:39.912936,
        longitude:32.857656,
        username:"tuna",
        password:"tuna123"
    },

    {
        id: 4,
        name: "7 KAPI OTOPARK",
        city: "ANKARA",
        district: "BAHÇELİEVLER",
        barrier: "",
        latitude:39.920386, 
        longitude:32.825899,
        username:"7kapı",
        password:"7kapı123"
    },
    {
        id: 5,
        name: "ENGİN OTOPARK",
        city: "İZMİR",
        district: "BORNOVA",
        barrier: "BARİYERSİZ",
        latitude:38.467338, 
        longitude:27.112841,
        username:"engin",
        password:"engin123"
    },
    {
        id: 6,
        name: "REİS OTOPARK",
        city: "İZMİR",
        district: "KONAK",
        barrier: "BARİYERSİZ",
        latitude:38.437512,
        longitude:27.145654,
        username:"reis",
        password:"reis123"
    },
    {
        id: 7,
        name: "RİTİM İSTANBUL AUTO CLUB OTOPARK",
        city: "İSTANBUL",
        district: "KADIKÖY",
        barrier: "BARİYERSİZ",
        latitude:40.921745,
        longitude:29.158602,
        username:"ritim",
        password:"ritim123"
    },
    {
        id: 8,
        name: "ROYAL 61 KAPALI OTOPARK",
        city: "İSTANBUL",
        district: "KADIKÖY",
        barrier: "BARİYERSİZ",
        latitude:40.9933116,
        longitude:29.027044,
        username:"royal",
        password:"royal123"
    },
    {
        id: 9,
        name: "AKGÜN OTOPARK",
        city: "İZMİR",
        district: "URLA",
        barrier: "BARİYERSİZ",
        latitude:38.323227, 
        longitude:26.764582,
        username:"akgun",
        password:"akgun123"
    },
    {
        id: 10,
        name: "KAPLAN OTOPARK",
        city: "ANKARA",
        district: "SİNCAN",
        barrier: "",
        latitude:39.957420,
        longitude:32.550652,
        username:"kaplan",
        password:"kaplan123"
    },
    {
        id: 11,
        name: "YAMAN OTOPARK",
        city: "İSTANBUL",
        district: "EYÜP",
        barrier: "BARİYERSİZ",
        latitude:41.076675,
        longitude:28.949484,
        username:"yaman",
        password:"yaman123"
    },
    {
        id: 12,
        name: "ÇAMLIK OTOPARK",
        city: "İSTANBUL",
        district: "BEYLİKDÜZÜ",
        barrier: "BARİYERSİZ",
        latitude:41.015141,
        longitude:28.639084,
        username:"camlik",
        password:"camlik123"
    },
    {
        id: 13,
        name: "DENİZ OTOPARK",
        city: "İSTANBUL",
        district: "TOPÇULAR",
        barrier: "BARİYERSİZ",
        latitude:41.043381, 
        longitude:28.917635,
        username:"deniz",
        password:"deniz123"
    },
    {
        id: 14,
        name: "RODİN OTOPARK",
        city: "İSTANBUL",
        district: "BAĞCILAR",
        barrier: "BARİYERSİZ",
        latitude:41.045711, 
        longitude:28.848505,
        username:"rodin",
        password:"rodin123"
    },
    {
        id: 15,
        name: "ÇETİN OTOPARK",
        city: "ANKARA",
        district: "ÇANKAYA",
        barrier: "",
        latitude: 39.944971,
        longitude: 32.853522,
        username:"cetin",
        password:"cetin123"
    },
    {
        id: 16,
        name: "ŞİRİN KATLI OTOPARK",
        city: "İSTANBUL",
        district: "FATİH",
        barrier: "BARİYERSİZ",
        latitude:41.016137, 
        longitude:28.967157,
        username:"sirin",
        password:"sirin123"
    },
    {
        id: 17,
        name: "SÜLEYMANİYE OTOPARK",
        city: "İSTANBUL",
        district: "FATİH",
        barrier: "BARİYERSİZ",
        latitude:41.018260,
        longitude:28.962198,
        username:"suleymaniye",
        password:"suleymaniye123"
    },
    {
        id: 18,
        name: "BEY OTOPARK",
        city: "İZMİR",
        district: "BALÇOVA",
        barrier: "BARİYERSİZ",
        latitude:38.393588, 
        longitude:27.036410,
        username:"bey",
        password:"bey123"
    },
    {
        id: 19,
        name: "ANKO OTOPARK",
        city: "ANKARA",
        district: "ÇANKAYA",
        barrier: "",
        latitude:39.923671,
        longitude:32.851874,
        username:"anko",
        password:"anko123"
    },
    {
        id: 20,
        name: "AVCI OTOPARK",
        city: "İZMİR",
        district: "KONAK",
        barrier: "BARİYERSİZ",
        latitude: 38.432186,
        longitude: 27.147522,
        username:"avci",
        password:"avci123"
    },
    {
        id: 21,
        name: "23 NİSAN KATLI OTOPARK",
        city: "ANKARA",
        district: "ALTINDAĞ",
        barrier: "",
        latitude:39.969336,
        longitude: 32.881530,
        username:"23nisan",
        password:"23nisan123"
    },
    {
        id: 22,
        name: "GARAJ İSTANBUL OTOPARK",
        city: "İSTANBUL",
        district: "BAKIRKÖY",
        barrier: "BARİYERSİZ",
        latitude:40.990991,
        longitude:28.883723,
        username:"garaj",
        password:"garaj123"
    },



];

module.exports = data;
