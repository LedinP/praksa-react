import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GameForm from "./components/GameForm";
import { igre as pocetneIgre } from "./data/igre";
import "./App.css";

function App() {
  // STATE: lista igara. Kad se promijeni preko setIgre, React ponovo iscrta komponentu.
  const [igre, setIgre] = useState(pocetneIgre);

  function dodajIgru(novaIgra) {
    // Stanje se nikad ne mijenja direktno (npr. push), nego pravimo NOVI niz:
    // sve postojeće igre + nova na kraju.
    setIgre((prethodne) => [...prethodne, { ...novaIgra, id: Date.now() }]);
  }

  return (
    <>
      <Header />

      <main className="container">
        <h1 className="naslov">Baza <span>video igara</span></h1>

        {/* Šaljemo funkciju formi kao prop */}
        <GameForm onDodaj={dodajIgru} />

        <p className="brojac">Ukupno igara: {igre.length}</p>

        <section id="igre" className="grid">
          {igre.map((igra) => (
            <Card
              key={igra.id}
              naziv={igra.naziv}
              slika={igra.slika}
              zanr={igra.zanr}
              godina={igra.godina}
              opis={igra.opis}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;