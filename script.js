document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.getElementById("btnTema");
    const btnSapa = document.getElementById("btnSapa");
    const greeting = document.getElementById("greeting");

    btnTema.addEventListener("click", () => {
        console.log("Tombol tema diklik");
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "Ubah ke Light Mode";
        } else {
            btnTema.textContent = "Ubah ke Dark Mode";
        }
    });

    btnSapa.addEventListener("click", () => {
        console.log("Tombol Sapa diklik");
        let nama = prompt("Masukkan nama kamu");

        if (nama && nama.trim() !== " ") {
            greeting.textContent = "Halo, " + nama + "!";
        } else {
            Greeting.textContent = "Halo, Pengunjung!";
        }
    });
});

