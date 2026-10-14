// ===== PODACI =====
const kompanije = [
    {id: 1, naziv: "NVIDIA", godina: 1993, direktor: "Jensen Huang", zaposlenih: "42 000"},
    {id: 2, naziv: "Apple", godina: 1976, direktor: "John Ternus", zaposlenih: "166 000"},
    {id: 3, naziv: "Alphabet", godina: 2015, direktor: "Sundar Pichai", zaposlenih: "198 000"},
    {id: 4, naziv: "Microsoft", godina: 1975, direktor: "Satya Nadella", zaposlenih: "223 000"},
    {id: 5, naziv: "Amazon", godina: 1994, direktor: "Andy Jassy", zaposlenih: "1 500 000"}
];

const tijelo = document.getElementById("tijelo");
const forma = document.getElementById("forma");
let filterAktivan = false;

// ===== DAN 1: array metode =====

// filter: da li kompanija prolazi trenutni filter
function prolaziFilter(kompanija) {
    return !filterAktivan || kompanija.godina < 1990;
}

// map + join: pretvaramo niz objekata u HTML string
function prikazi() {
    tijelo.innerHTML = kompanije
        .filter(prolaziFilter)
        .map(k => `
            <tr data-id="${k.id}">
                <td class="naziv">${k.naziv}</td>
                <td>${k.godina}</td>
                <td>${k.direktor}</td>
                <td>${k.zaposlenih}</td>
                <td><button class="obrisi">Obriši</button></td>
            </tr>
        `)
        .join("");
}

// find: primjer pronalaska jedne kompanije (pogledaj konzolu)
const microsoft = kompanije.find(k => k.naziv === "Microsoft");
console.log("find:", microsoft);

document.getElementById("filterBtn").addEventListener("click", () => {
    filterAktivan = true;
    prikazi();
});

document.getElementById("prikaziSveBtn").addEventListener("click", () => {
    filterAktivan = false;
    prikazi();
});

// ===== DAN 2: DOM manipulacija =====

// Pravi jedan red tabele kao DOM element (za dodavanje novog reda)
function napraviRed(k) {
    const red = document.createElement("tr");
    red.dataset.id = k.id;
    red.innerHTML = `
        <td class="naziv">${k.naziv}</td>
        <td>${k.godina}</td>
        <td>${k.direktor}</td>
        <td>${k.zaposlenih}</td>
        <td><button class="obrisi">Obriši</button></td>
    `;
    return red;
}

// 1) DODAVANJE novog elementa
forma.addEventListener("submit", (e) => {
    e.preventDefault(); // spriječi osvježavanje stranice

    const nova = {
        id: Date.now(), // jedinstveni ID
        naziv: document.getElementById("naziv").value.trim(),
        godina: Number(document.getElementById("godina").value),
        direktor: document.getElementById("direktor").value.trim(),
        zaposlenih: document.getElementById("zaposlenih").value.trim()
    };

    kompanije.push(nova);

    // dodaj red na stranicu samo ako prolazi trenutni filter
    if (prolaziFilter(nova)) {
        tijelo.appendChild(napraviRed(nova));
    }

    forma.reset();
});

// Jedan listener na cijeli tbody (event delegation) - radi i za redove
// koji su dodani tek kasnije.
tijelo.addEventListener("click", (e) => {
    const red = e.target.closest("tr");
    if (!red) return;
    const id = Number(red.dataset.id);

    // 2) BRISANJE elementa
    if (e.target.classList.contains("obrisi")) {
        const index = kompanije.findIndex(k => k.id === id);
        kompanije.splice(index, 1); // ukloni iz niza
        red.remove();               // ukloni sa stranice
        return;
    }

    // 3) PROMJENA SADRŽAJA na klik
    if (e.target.classList.contains("naziv")) {
        const novi = prompt("Novi naziv kompanije:", e.target.textContent);
        if (novi && novi.trim() !== "") {
            const kompanija = kompanije.find(k => k.id === id);
            kompanija.naziv = novi.trim();     // ažuriraj niz
            e.target.textContent = kompanija.naziv; // ažuriraj stranicu
        }
    }
});

// Početni prikaz
prikazi();