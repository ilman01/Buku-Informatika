const sidebar = `
<div class="sidebar text-white" style="height: 100vh; position: fixed; width: 250px; background-color: #232323; padding: 20px; border-right: 1px solid #000000;">
    <h4>Materi-Materi</h4>
    <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link text-white-50" href="/buku/introduction.html">Introduction</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section2">Getting Started</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section3">Components</a></li>
        <li class="nav-item"><a class="nav-link text-white-50" href="#section4">API Reference</a></li>
    </ul>
</div>
`
document.getElementById("headerjs").insertAdjacentHTML("afterend", sidebar);