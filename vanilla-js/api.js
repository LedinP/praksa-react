// Adresa API-ja (endpoint). "?limit=12" je query parametar: traži samo 12 proizvoda.
const API_URL = "https://dummyjson.com/products?limit=24";

const kontejner = document.getElementById("proizvodi");
const poruka = document.getElementById("poruka");
const ucitajBtn = document.getElementById("ucitajBtn");

// async funkcija omogućava korištenje "await" unutar nje
async function ucitajProizvode() {
    poruka.textContent = "Učitavanje...";
    kontejner.innerHTML = "";

    try {
        // 1) Šaljemo HTTP GET zahtjev i čekamo odgovor
        const odgovor = await fetch(API_URL);

        // 2) fetch ne baca grešku za 404/500, pa status provjeravamo sami
        if (!odgovor.ok) {
            throw new Error(`Greška servera: ${odgovor.status}`);
        }

        // 3) Tijelo odgovora pretvaramo iz JSON teksta u JS objekt
        const podaci = await odgovor.json();

        // DummyJSON vraća objekt: { products: [...], total, skip, limit }
        prikaziProizvode(podaci.products);
        poruka.textContent = "";
    } catch (greska) {
        // Ovdje završavamo i kad nema interneta
        poruka.textContent = "Nije moguće dohvatiti podatke. Provjeri internet vezu.";
        console.error(greska);
    }
}

// Isto kao u Danu 1: map + join pretvara niz objekata u HTML
function prikaziProizvode(proizvodi) {
    kontejner.innerHTML = proizvodi.map(p => `
        <div class="kartica">
            <img src="${p.thumbnail}" alt="${p.title}">
            <div class="kartica-tijelo">
                <h3>${p.title}</h3>
                <p class="kategorija">${p.category}</p>
                <p class="opis-kartice">${p.description}</p>
                <div class="kartica-dno">
                    <span class="cijena">$${p.price}</span>
                    <span class="ocjena">★ ${p.rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    `).join("");
}

ucitajBtn.addEventListener("click", ucitajProizvode);

// Automatski učitaj podatke kad se stranica otvori
ucitajProizvode();