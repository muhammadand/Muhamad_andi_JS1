// Menentukan harga tiket
var hargaTiket = 100; // Harga tiket dalam satuan mata uang

// Input jumlah tiket yang akan dibeli
var jumlahTiket = prompt("Berapa jumlah tiket yang ingin Anda beli?");

// Menghitung total harga tiket
var totalHarga = hargaTiket * jumlahTiket;

// Mengecek apakah ada diskon berdasarkan jumlah tiket yang dibeli
var diskon = 0; // Inisialisasi diskon awal

if (jumlahTiket >= 10) {
  // Jika pembelian lebih dari atau sama dengan 10 tiket, berikan diskon 10%
  diskon = totalHarga * 0.1;
}

// Menghitung total harga setelah diskon
var hargaSetelahDiskon = totalHarga - diskon;

// Menampilkan hasil kepada pengguna
console.log("Harga Tiket: " + hargaTiket + " satuan mata uang");
console.log("Jumlah Tiket: " + jumlahTiket);
console.log("Total Harga: " + totalHarga + " satuan mata uang");

if (diskon > 0) {
  console.log("Anda mendapatkan diskon sebesar " + diskon + " satuan mata uang.");
}

console.log("Harga Setelah Diskon: " + hargaSetelahDiskon + " satuan mata uang");
