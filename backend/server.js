require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data = require("./data"); // data.js dosyasını import ediyoruz

const app = express();
app.use(cors());
app.use(express.json());

app.get("/carparks", (req, res) => {
    res.json(data);
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});

