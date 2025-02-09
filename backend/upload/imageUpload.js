const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.use(express.json({ limit: "20mb" }));  // Base64 şəkil üçün daha böyük ölçü ilə qəbul etmək

// Şəkil yükləmək üçün POST sorğusu
router.post("/upload", (req, res) => {
    const { image } = req.body;  // 'image' Base64 verilənini alırıq

    if (!image) {
        return res.status(400).send("Şəkil verilənləri mövcud deyil!");
    }

    // Base64 məlumatını temizləyirik
    const Base64Data = image.replace(/^data:image\/\w+;base64,/, "");  // 'data:image/png;base64,'-i çıxarırıq
    const buffer = Buffer.from(Base64Data, "base64");  // Base64-i buffer-ə çeviririk

    // Şəkil faylını serverə yazmaq
    const filePath = path.join(__dirname, "uploads", `image-${Date.now()}.png`);  // Faylın adını zaman damğası ilə yaradın

    fs.writeFile(filePath, buffer, (err) => {
        if (err) {
            console.error("Xəta baş verdi", err);
            return res.status(500).send("Fayl yüklənərkən xəta baş verdi.");
        } else {
            res.status(200).send(`Şəkil uğurla yükləndi: ${filePath}`);  // Yüklənən faylın yolu
        }
    });
});

module.exports = router;
