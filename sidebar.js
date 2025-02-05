const sidebar = `
<button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation" style="position: fixed; left: 10px; z-index: 1050;">
    ☰
</button>
<div id="sidebar" class="sidebar text-white collapse" style="position: fixed; overflow: auto; max-height: 93vh; width: 250px; background-color: #232323; padding: 20px; padding-bottom: 120px; transition: width 0.3s ease-in-out, height 0.3s ease-in-out;">
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="/buku/bab1.html">Hardware dan Software</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#1-pendahuluan">Pendahuluan</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#2-hardware">Hardware</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#3-software">Software</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#4-kesimpulan">Kesimpulan</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="/buku/bab2.html">Pemrograman Dasar</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#1-pendahuluan">Pendahuluan</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#2-konsep-dasar-pemrograman">Konsep Dasar Pemrograman</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#3-fungsi">Fungsi</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#4-array-dan-list">Array dan List</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#5-pemrograman-berorientasi-objek">Pemrograman Berorientasi Objek</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#6-debugging-dan-error-handling">Debugging dan Error Handling</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab2.html#7-kesimpulan">Kesimpulan</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="/buku/bab3.html">Jaringan dan Internet</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#1-pendahuluan">Pendahuluan</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#2-jaringan-komputer">Jaringan Komputer</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#3-protokol-dalam-jaringan-komputer">Protokol dalam Jaringan Komputer</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#4-model-osi">Model OSI</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#5-internet">Internet</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#6-keamanan-jaringan-komputer">Keamanan Jaringan Komputer</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#7-tren-terkini">Tren Terkini</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab3.html#8-kesimpulan">Kesimpulan</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="/buku/bab4.html">Pengembangan Web</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#1-pendahuluan">Pendahuluan</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#2-teknologi-pengembangan-web">Teknologi Pengembangan Web</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#3-jenis-situs-web">Jenis Situs Web</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#4-pengembangan-web-responsif">Pengembangan Web Responsif</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#5-proses-pengembangan-web">Proses Pengembangan Web</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#6-ui-dan-ux">UI dan UX</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#7-search-engine-optimization">Search Engine Optimization</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab4.html#8-kesimpulan">Kesimpulan</a></li>
    </ul>
</div>
`
document.getElementById("headerjs").insertAdjacentHTML("afterend", sidebar);

document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let content = document.querySelector(".content");
    
    sidebar.addEventListener("show.bs.collapse", function () {
        content.style.marginLeft = "270px";
    });
    sidebar.addEventListener("hide.bs.collapse", function () {
        content.style.marginLeft = "50px";
    });
});

// Force Reload
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a.bar").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            const url = new URL(this.href, window.location.origin);
            const anchor = url.hash; // Get the anchor part (e.g., #2-hardware)
            url.hash = ""; // Remove hash temporarily
            var randomNumber = (Math.random()*5).toFixed(3);
            url.searchParams.set("r", randomNumber); // Add random param
            url.hash = anchor; // Restore anchor

            window.location.href = url.href; // Navigate to updated URL
        });
    });
});