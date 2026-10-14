import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { igre } from "./data/igre";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <h1 className="naslov">Baza <span>video igara</span></h1>

        <section id="igre" className="grid">
          {/* Isto kao map iz Dana 1, samo što umjesto HTML stringa vraćamo komponentu.
              "key" mora biti jedinstven za svaki element liste. */}
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