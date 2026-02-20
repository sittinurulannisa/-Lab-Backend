<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2a13e20a-b142-4c14-9ed2-ba9c331c9b7a" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/496fbe9e-196d-4e1e-8c71-584c12e06970" />

NPM Version Package License

📚 Panduan Lengkap: Backend REST API dengan NestJS & Prisma
Seri tutorial membangun backend REST API untuk aplikasi blog "Median" (klon sederhana Medium) menggunakan NestJS, Prisma, dan PostgreSQL.

📋 Daftar Chapter
#	Chapter	Topik Utama	Link
1	Membangun REST API	Setup NestJS, PostgreSQL, Prisma, CRUD Articles, Swagger	📖 Buka Chapter 1
2	Validasi Input & Error Handling	ValidationPipe, class-validator, ParseIntPipe, Exception Filter	📖 Buka Chapter 2
3	Data Relasional & User Management	Model User, Relasi One-to-Many, CRUD Users, Sembunyikan Password	📖 Buka Chapter 3
4	Authentication (JWT & Bcrypt)	Passport, JWT Token, Auth Guard, Bcrypt Hashing, Swagger Auth	📖 Buka Chapter 4
🎯 Apa yang Akan Kamu Bangun?
+----------------------------------------------+
|                MEDIAN API                     |
|                                               |
|   Articles   -> CRUD + Relasi ke Author       |
|   Users      -> CRUD + Password Hashing       |
|   Auth       -> Login + JWT Token             |
|   Swagger    -> Dokumentasi API Otomatis       |
|                                               |
|   Tech Stack:                                 |
|   - NestJS      (Framework)                   |
|   - Prisma      (ORM)                         |
|   - PostgreSQL  (Database)                    |
|   - Swagger     (API Docs)                    |
|   - Passport    (Authentication)              |
|   - Docker      (PostgreSQL Container)        |
+----------------------------------------------+
🔧 Teknologi yang Digunakan
Teknologi	Deskripsi
NestJS	Framework backend Node.js
Prisma	ORM (Object-Relational Mapper)
PostgreSQL	Database relasional
Swagger/OpenAPI	Dokumentasi API otomatis
TypeScript	Bahasa pemrograman
Docker	Container untuk PostgreSQL
Passport	Library authentication
JWT	Token-based authentication
Bcrypt	Password hashing
class-validator	Validasi input
🛠️ Prasyarat
Sebelum memulai, pastikan kamu sudah menginstal:

Software	Versi Minimum	Cek Instalasi
Node.js	v14+	node --version
npm	v6+	npm --version
Docker	v20+	docker --version
VS Code	Latest	-
🚀 Cara Menggunakan Tutorial Ini
Ikuti secara berurutan - Setiap chapter membangun di atas chapter sebelumnya
Ketik kode sendiri - Jangan copy-paste, ketik ulang agar lebih paham
Eksperimen - Coba ubah kode dan lihat apa yang terjadi
Baca komentar - Setiap kode dilengkapi penjelasan di komentar
📖 Ringkasan per Chapter
Chapter 1: Membangun REST API
Setup proyek dari nol hingga REST API yang berfungsi penuh dengan dokumentasi Swagger.

Yang dipelajari: NestJS CLI, Docker PostgreSQL, Prisma schema & migration, CRUD operations, Swagger/OpenAPI

Chapter 2: Validasi Input & Error Handling
Membuat API lebih robust dengan validasi input dan penanganan error yang baik.

Yang dipelajari: ValidationPipe, class-validator decorators, ParseIntPipe, Exception Filters, PrismaClientExceptionFilter

Chapter 3: Data Relasional & User Management
Menambahkan model User, relasi dengan Article, dan menyembunyikan data sensitif.

Yang dipelajari: Prisma relations, CRUD Users, ClassSerializerInterceptor, @Exclude decorator

Chapter 4: Authentication (JWT & Bcrypt)
Mengamankan API dengan sistem login dan token-based authentication.

Yang dipelajari: Passport.js, JWT, Auth Guards, bcrypt password hashing, Swagger Bearer Auth

✅ Progress Laporan Praktikum
Instruksi: Gunakan tabel ini sebagai overview progress keseluruhan. Centang chapter yang sudah selesai dikerjakan. Detail checklist ada di masing-masing chapter.

Chapter 1 — Membangun REST API
 Persiapan lingkungan (Node.js, Docker, VS Code)
 Setup proyek NestJS
 Setup database PostgreSQL (Docker)
 Setup Prisma (install, init, schema)
 Model data & migrasi database
 Seed database dengan data awal
 Membuat Prisma Service & Module
 Setup Swagger
 Implementasi CRUD Articles (6 endpoint)
 Konfigurasi Swagger response types
 📋 Lihat detail checklist →
Chapter 2 — Validasi Input & Error Handling
 Validasi input dengan ValidationPipe & class-validator
 Whitelist filtering (buang field yang tidak diinginkan)
 Transformasi parameter URL dengan ParseIntPipe
 Error handling dengan NotFoundException
 Membuat PrismaClientExceptionFilter (P2002, P2025)
 📋 Lihat detail checklist →
Chapter 3 — Data Relasional & User Management
 Membuat model User dan relasi one-to-many dengan Article
 Migrasi dan seed data user
 Implementasi CRUD Users (5 endpoint)
 Menyembunyikan password dengan @Exclude() & ClassSerializerInterceptor
 Menampilkan relasi author di response Article
 📋 Lihat detail checklist →
Chapter 4 — Authentication (JWT & Bcrypt)
 Setup Auth module dengan Passport & JWT
 Membuat endpoint POST /auth/login
 Membuat JWT Strategy & Auth Guard
 Melindungi endpoint Users dengan @UseGuards
 Integrasi Bearer Auth di Swagger
 Hashing password dengan bcrypt
 Update login untuk bcrypt
 📋 Lihat detail checklist →
🏁 Status Keseluruhan
 Chapter 1 selesai
 Chapter 2 selesai
 Chapter 3 selesai
 Chapter 4 selesai
 🎓 SEMUA CHAPTER SELESAI — Praktikum telah diselesaikan seluruhnya
Item	Keterangan
Nama	Sitti Nurul Annisa
NIM	105841115522
Tanggal Mulai	17 Februari 2026
Tanggal Selesai	20 Februari 2026
Tanda Tangan	nisa
