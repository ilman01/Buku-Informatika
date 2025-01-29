const header = `
<div class="container-fluid bg-dark text-white py-2">
    <div class="container d-flex justify-content-between align-items-center">
        <div><a href="/" class="fs-4 fw-bold text-white text-decoration-none">Buku Informatika</a></div>
        <div class="d-flex gap-3">
            <div class="nav-item"><a href="/" class="text-white text-decoration-none">Home</a></div>
            <div class="nav-item"><a href="/buku/introduction.html" class="text-white text-decoration-none">Buku</a></div>
            <div class="nav-item"><a href="#" class="text-white text-decoration-none">About</a></div>
        </div>
    </div>
</div>
`
document.querySelector("body").insertAdjacentHTML("afterbegin", header);