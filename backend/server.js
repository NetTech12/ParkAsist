require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Veritabanına bağlanırken hata:", err);
    } else {
        console.log("MySQL bağlantısı başarılı.");
    }
});
app.get("/carparks", (req, res) => {
    db.query("SELECT * FROM carparks", (err, results) => {
        if (err) {
            console.error("Veri alınırken hata:", err);
            return res.status(500).json({ success: false, message: "Veri alınırken hata oluştu." });
        }
        res.json(results);
    });
});



// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});

