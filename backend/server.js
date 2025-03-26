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

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Kullanıcı doğrulama
    const user = data.find(user => user.username === username && user.password === password);

    if (user) {
        res.json({ success: true, message: "Giriş başarılı", user: { id: user.id, name: user.name } });
    } else {
        res.status(401).json({ success: false, message: "Geçersiz kullanıcı adı veya şifre" });
    }
});


// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});

