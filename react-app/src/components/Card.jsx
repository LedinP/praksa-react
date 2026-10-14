// Komponenta prima podatke kao "props" (objekt), a ovdje ih odmah
// razdvajamo na zasebne varijable (destructuring).
function Card({ naziv, slika, zanr, godina, opis }) {
  return (
    <div className="card">
      <img src={slika} alt={naziv} />
      <div className="card-body">
        <h3 className="card-title">{naziv}</h3>
        <p className="card-meta">{zanr} • {godina}</p>
        <p className="card-text">{opis}</p>
      </div>
    </div>
  );
}

export default Card;
