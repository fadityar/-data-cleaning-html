# Xero Data Cleaning Tool

Tool profesional untuk membersihkan data Excel/CSV dari Xero dengan mudah dan cepat.

## 🎯 Fitur Utama

✨ **Upload Excel & CSV** - Drag & drop atau pilih file dengan mudah  
🧹 **Multiple Cleaning Options** - Pilih operasi pembersihan yang diinginkan  
📊 **Real-time Preview** - Lihat data sebelum dan sesudah dibersihkan  
📈 **Detailed Statistics** - Laporan lengkap tentang perubahan data  
💾 **Export Fleksibel** - Download hasil dalam format Excel atau CSV  
🎨 **User-Friendly UI** - Antarmuka modern dan responsif  
⚡ **Client-side Processing** - Semua proses terjadi di browser (aman & cepat)  

## 🚀 Fitur Pembersihan Data

1. **Trim Whitespace** - Hapus spasi berlebih di awal dan akhir setiap sel
2. **Remove Empty Rows** - Hilangkan baris yang tidak memiliki data
3. **Remove Duplicates** - Buang data yang identik/duplikat
4. **Fix Formatting** - Standarkan format tanggal, angka, dan currency
5. **Remove Special Characters** - Bersihkan karakter yang tidak perlu
6. **Convert Types** - Ubah tipe data ke format yang sesuai

## 📦 Cara Penggunaan

### 1. **Upload File**
- Buka aplikasi di browser (buka `index.html`)
- Drag & drop file Excel/CSV Xero atau klik tombol "Pilih File"
- Aplikasi akan menampilkan preview data

### 2. **Pilih Opsi Pembersihan**
- Centang opsi pembersihan yang diinginkan
- Semua opsi direkomendasikan untuk hasil maksimal
- Baca deskripsi setiap opsi untuk memahami fungsinya

### 3. **Jalankan Pembersihan**
- Klik tombol "Jalankan Pembersihan"
- Aplikasi akan memproses data dengan opsi yang dipilih
- Lihat statistik perubahan (baris dihapus, duplikat, dll)

### 4. **Ekspor Hasil**
- Klik "Download Excel" untuk menyimpan dalam format `.xlsx`
- Atau klik "Download CSV" untuk format `.csv`
- File akan diberi nama dengan format: `xero_data_clean_YYYY-MM-DD.xlsx`

## 📋 Format Data yang Didukung

### Ekstensi File
- `.xlsx` - Microsoft Excel (2007+)
- `.xls` - Microsoft Excel (97-2003)
- `.csv` - Comma Separated Values

### Format CSV
```
Header1,Header2,Header3
Value1,Value2,Value3
...
```

## 🔧 Persyaratan

### Browser
- Chrome/Chromium 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Tidak ada instalasi yang diperlukan!
Aplikasi ini berjalan 100% di browser tanpa memerlukan:
- Node.js
- Python
- Database
- Server

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur markup
- **CSS3** - Styling & responsive design
- **JavaScript (Vanilla)** - Logika aplikasi
- **XLSX.js** - Library parsing Excel
- **Font Awesome** - Icon library

## 📊 Library Dependencies

Aplikasi menggunakan CDN eksternal:
```html
<!-- XLSX Library untuk parsing Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.min.js"></script>

<!-- Font Awesome untuk icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 💡 Tips & Trik

### Gunakan dengan Efektif
1. **Backup data asli** - Selalu simpan file original sebelum cleaning
2. **Preview dulu** - Periksa data preview sebelum menjalankan pembersihan
3. **Pilih opsi dengan bijak** - Tidak semua opsi cocok untuk semua dataset
4. **Verifikasi hasil** - Cek hasil cleaning sebelum menggunakan data

### Kompatibilitas Xero
Tool ini dirancang khusus untuk data export dari Xero yang biasanya memiliki:
- Format: Invoice, Bill, Contact, Product, dll
- Kolom standar Xero yang terdefinisi
- Cara terbaik: Gunakan untuk semua tipe export Xero

## ❓ FAQ

**Q: Apakah data saya aman?**  
A: Ya! Semua proses terjadi di browser Anda. Data tidak dikirim ke server manapun.

**Q: Berapa ukuran file maksimal?**  
A: Tergantung RAM browser, biasanya bisa menangani file hingga 50MB+

**Q: Bisakah saya membatalkan operasi?**  
A: Ya, klik tombol "Reset" untuk memulai dari awal dengan file baru.

**Q: Apa jika ada error?**  
A: Pesan error akan ditampilkan. Cek format file dan coba lagi.

## 🚦 Troubleshooting

### Masalah: File tidak terbaca
**Solusi:**
- Pastikan format file adalah .xlsx, .xls, atau .csv
- Coba buka file dengan Excel terlebih dahulu untuk memastikan tidak corrupt
- Jika CSV, pastikan menggunakan comma sebagai separator

### Masalah: Data preview kosong
**Solusi:**
- Periksa bahwa file memiliki header di baris pertama
- Pastikan file bukan file template (tanpa data)

### Masalah: Download tidak berfungsi
**Solusi:**
- Aktifkan pop-up di browser Anda
- Cek setting download di browser
- Coba browser lain

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan komersial maupun personal.

## 🤝 Kontribusi

Saran dan perbaikan sangat diterima. Buka issue atau pull request di repository ini.

## 👤 Author

**Fadityar** - [GitHub Profile](https://github.com/fadityar)

## 📧 Support

Jika ada pertanyaan atau masalah, buka issue di repository ini.

---

**Dibuat dengan ❤️ untuk memudahkan proses pembersihan data Xero**
