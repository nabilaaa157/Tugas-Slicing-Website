
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


const orderForm = document.getElementById("orderForm");

const resultText = document.getElementById("resultText");
const totalHarga = document.getElementById("totalHarga");


orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const acara = document.getElementById("acara").value;
    const paket = document.getElementById("paketSelect").value;
    const jumlah = Number(document.getElementById("jumlah").value);

    let hargaPerPorsi = 0;
    let namaPaket = "";

    if (paket === "nasi campur") {

        hargaPerPorsi = 26000;
        namaPaket = "nasi campur";

    } else if (paket === "nasi sop") {

        hargaPerPorsi = 24000;
        namaPaket = "nasi sop";

    } else if (paket === "nasi liwet") {

        hargaPerPorsi = 25000;
        namaPaket = "nasi liwet";

    } else if (paket === "nasi kuning") {

        hargaPerPorsi = 24000;
        namaPaket = "nasi kuning";

    } else if (paket === "nasi daging") {

        hargaPerPorsi = 28000;
        namaPaket = "nasi daging";

    }

    const total = hargaPerPorsi * jumlah;

    const totalRupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(total);

    resultText.innerHTML =
        `Halo <strong>${nama}</strong>!<br>
        Untuk acara <strong>${acara}</strong><br>
        Paket yang dipilih: <strong>${namaPaket}</strong><br>
        Jumlah: <strong>${jumlah} porsi</strong>`;

    totalHarga.textContent = totalRupiah;

});