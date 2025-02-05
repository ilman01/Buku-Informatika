const header = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
    <div class="container">
        <a class="navbar-brand fs-4 fw-bold" href="/">Buku Informatika</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-3">
                <li class="nav-item"><a class="nav-link text-white" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="/buku/bab1.html">Buku</a></li>
            </ul>
        </div>
    </div>
</nav>
`
document.querySelector("body").insertAdjacentHTML("afterbegin", header);