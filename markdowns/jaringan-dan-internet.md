# Bab 3: Jaringan dan Internet

## 1. Pendahuluan
Jaringan komputer merupakan salah satu elemen penting dalam perkembangan teknologi informasi. Jaringan ini memungkinkan perangkat untuk saling terhubung dan berkomunikasi satu sama lain, baik dalam ruang lingkup lokal maupun global. Internet, sebagai jaringan terbesar di dunia, memberikan akses informasi dan layanan yang sangat beragam bagi penggunanya.

## 2. Jaringan Komputer
Jaringan komputer adalah sistem yang menghubungkan beberapa perangkat, seperti komputer, printer, atau perangkat lainnya, untuk berbagi informasi atau sumber daya. Jaringan ini dapat terbentuk dengan berbagai topologi dan skala.

### 2.1 Jenis-Jenis Jaringan Komputer
Jaringan komputer dapat diklasifikasikan berdasarkan cakupan geografis dan fungsinya, antara lain:

- **LAN (Local Area Network)**: Jaringan lokal yang menghubungkan perangkat dalam area kecil, seperti satu gedung atau kantor.
- **WAN (Wide Area Network)**: Jaringan yang menghubungkan perangkat di area geografis yang lebih luas, seperti antar kota atau negara.
- **MAN (Metropolitan Area Network)**: Jaringan yang lebih besar dari LAN namun lebih kecil dari WAN, seperti jaringan antar kampus.
- **PAN (Personal Area Network)**: Jaringan yang menghubungkan perangkat dalam area sangat terbatas, misalnya perangkat pribadi seperti smartphone dan laptop.

### 2.2 Komponen Jaringan Komputer
Komponen utama dalam jaringan komputer terdiri dari perangkat keras dan perangkat lunak.

- **Perangkat Keras (Hardware)**:
  - **Router**: Menghubungkan jaringan dan mengatur pengiriman data antar jaringan.
  - **Switch**: Menghubungkan perangkat dalam satu jaringan untuk berbagi data.
  - **Hub**: Perangkat yang memungkinkan beberapa komputer untuk terhubung dalam jaringan, tetapi tidak seefisien switch.
  - **Modem**: Menghubungkan jaringan lokal ke internet melalui sinyal telepon atau kabel.

- **Perangkat Lunak (Software)**:
  - **Sistem Operasi Jaringan**: Seperti Windows Server atau Linux, yang mengelola komunikasi antar perangkat.
  - **Protokol**: Aturan yang digunakan dalam komunikasi antar perangkat, seperti TCP/IP dan HTTP.

## 3. Protokol dalam Jaringan Komputer
Protokol adalah aturan yang digunakan untuk mengatur komunikasi antar perangkat dalam jaringan. Beberapa protokol penting yang digunakan dalam jaringan komputer adalah:

### 3.1 TCP/IP (Transmission Control Protocol/Internet Protocol)
Protokol dasar yang digunakan di internet dan jaringan komputer lainnya. TCP/IP mengatur bagaimana data dikirimkan melalui jaringan, dengan memastikan data sampai pada tujuan dengan benar.

### 3.2 HTTP (Hypertext Transfer Protocol)
Protokol yang digunakan untuk mentransfer data di World Wide Web, seperti pengambilan halaman web atau file.

### 3.3 FTP (File Transfer Protocol)
Protokol yang digunakan untuk mentransfer file antar komputer dalam jaringan.

### 3.4 DNS (Domain Name System)
Mengubah nama domain (seperti www.google.com) menjadi alamat IP yang dapat dipahami oleh perangkat.

## 4. Model Referensi OSI
Model OSI (Open Systems Interconnection) adalah model konseptual yang menggambarkan bagaimana komunikasi terjadi dalam jaringan komputer. Model ini terdiri dari tujuh lapisan yang masing-masing memiliki fungsinya sendiri. Berikut adalah tujuh lapisan dalam model OSI:

### 4.1 Lapisan 1: Physical Layer
Lapisan ini bertanggung jawab untuk pengiriman data secara fisik melalui media komunikasi. Ini termasuk pengaturan sinyal listrik atau optik yang mentransmisikan data.

- Contoh perangkat: Kabel, Hub, Transceiver, dan Modem.

### 4.2 Lapisan 2: Data Link Layer
Lapisan ini mengatur pengiriman data antar perangkat dalam satu jaringan. Selain itu, lapisan ini juga menangani pengalamatan fisik (MAC address) dan pengendalian kesalahan (error control).

- Contoh perangkat: Switch, NIC (Network Interface Card).

### 4.3 Lapisan 3: Network Layer
Lapisan ini bertanggung jawab untuk pengalamatan dan pengaturan rute pengiriman data antar jaringan yang berbeda. Protokol utama pada lapisan ini adalah IP (Internet Protocol).

- Contoh perangkat: Router.

### 4.4 Lapisan 4: Transport Layer
Lapisan ini mengatur komunikasi antara perangkat di jaringan dan memastikan data dikirim secara utuh dan tanpa kesalahan. Protokol utama di lapisan ini adalah TCP (Transmission Control Protocol) dan UDP (User Datagram Protocol).

- Contoh: TCP, UDP.

### 4.5 Lapisan 5: Session Layer
Lapisan ini mengatur sesi komunikasi antara aplikasi yang berjalan di perangkat yang berbeda. Ini memastikan bahwa sesi komunikasi dapat dimulai, dipelihara, dan dihentikan dengan benar.

- Contoh: NetBIOS, RPC (Remote Procedure Call).

### 4.6 Lapisan 6: Presentation Layer
Lapisan ini bertanggung jawab untuk mengubah format data agar dapat dipahami oleh aplikasi. Di lapisan ini juga dilakukan enkripsi dan kompresi data.

- Contoh: JPEG, GIF, SSL/TLS.

### 4.7 Lapisan 7: Application Layer
Lapisan ini adalah lapisan teratas yang berfungsi untuk menyediakan layanan aplikasi kepada pengguna. Di lapisan ini, aplikasi berinteraksi langsung dengan jaringan, seperti dalam pengambilan data web atau pengiriman email.

- Contoh: HTTP, FTP, SMTP, DNS.

## 5. Internet
Internet adalah jaringan global yang menghubungkan berbagai perangkat di seluruh dunia. Pengguna dapat mengakses berbagai informasi dan layanan seperti email, media sosial, dan streaming melalui internet.

### 5.1 Sejarah Internet
Internet awalnya dikembangkan pada tahun 1960-an oleh ARPANET, sebuah proyek milik Departemen Pertahanan Amerika Serikat. Seiring berjalannya waktu, internet berkembang pesat dan menjadi bagian penting dalam kehidupan manusia.

### 5.2 Layanan Internet
Beberapa layanan yang dapat diakses melalui internet antara lain:
- **WWW (World Wide Web)**: Platform untuk mengakses informasi berbasis web.
- **Email**: Layanan surat elektronik yang memungkinkan komunikasi antara pengguna.
- **VoIP (Voice over IP)**: Teknologi yang memungkinkan panggilan suara melalui internet.
- **Streaming**: Layanan yang memungkinkan pengguna menonton atau mendengarkan media secara langsung.

## 6. Keamanan Jaringan Komputer
Keamanan jaringan sangat penting untuk melindungi data dan perangkat dari ancaman yang dapat merusak sistem. Beberapa teknologi yang digunakan untuk meningkatkan keamanan jaringan antara lain:

### 6.1 Firewall
Firewall berfungsi untuk membatasi akses ke jaringan dan menghalangi lalu lintas yang tidak diinginkan.

### 6.2 Enkripsi
Enkripsi digunakan untuk mengubah data menjadi format yang tidak dapat dibaca tanpa kunci dekripsi, sehingga mencegah pencurian data.

### 6.3 VPN (Virtual Private Network)
VPN membuat koneksi aman antara perangkat dan jaringan, dengan cara mengenkripsi data yang dikirimkan.

## 7. Tren Terkini dalam Jaringan dan Internet
Perkembangan teknologi terus mempengaruhi jaringan dan internet. Beberapa tren terkini yang patut dicermati antara lain:

### 7.1 5G
Teknologi jaringan seluler generasi kelima yang menawarkan kecepatan internet yang lebih cepat dan latensi yang lebih rendah dibandingkan 4G.

### 7.2 IoT (Internet of Things)
IoT memungkinkan perangkat fisik untuk terhubung ke internet dan saling berkomunikasi, seperti smart home devices dan perangkat wearable.

### 7.3 Cloud Computing
Cloud computing memungkinkan penyimpanan data dan aplikasi di server remote yang dapat diakses melalui internet, memberikan fleksibilitas dan efisiensi.

## 8. Kesimpulan
Jaringan komputer dan internet telah menjadi bagian integral dalam kehidupan sehari-hari. Memahami dasar-dasar jaringan komputer sangat penting untuk dapat memanfaatkan teknologi ini dengan baik dan aman, serta mengikuti perkembangan tren terbaru dalam dunia teknologi informasi.
