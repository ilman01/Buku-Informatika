const sidebar = `
<button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation" style="position: fixed; left: 10px; z-index: 1050;">
    ☰
</button>
<div id="sidebar" class="sidebar text-white collapse" style="position: fixed; overflow: auto; max-height: 93vh; width: 250px; background-color: #232323; padding: 20px; transition: width 0.3s ease-in-out, height 0.3s ease-in-out;">
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="/buku/bab1.html">Hardware dan Software</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#1-pendahuluan">Pendahuluan</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#2-hardware">Hardware</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#3-software">Software</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/bab1.html#4-kesimpulan">Kesimpulan</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="#">Buku Informatika</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="/buku/introduction.html">Introduction</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="#section2">Getting Started</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="#section3">Components</a></li>
        <li class="nav-item"><a class="nav-link text-white-50 bar" href="#section4">API Reference</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="#">Buku Informatika</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50" href="/buku/introduction.html">Introduction</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section2">Getting Started</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section3">Components</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section4">API Reference</a></li>
    </ul>
    <h4 style="padding-top: 40px;"><a class="text-white text-decoration-none" href="#">Buku Informatika</a></h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50" href="/buku/introduction.html">Introduction</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section2">Getting Started</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section3">Components</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section4">API Reference</a></li>
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

document.querySelectorAll('.bar').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        fullReload(this.href);
    });
});
  
function fullReload(url) {
    window.location.href = url;
    window.location.reload(true);
}
  
/*document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function (event) {
            console.log("test!")
            window.location.reload() // Force a full reload
        });
    });
});*/