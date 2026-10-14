// Props su podaci koje roditelj šalje komponenti. Komponenta ih samo čita, nikad ne mijenja.
function Card({ naziv, slika, zanr, godina, opis }) {
  return (
    <div className="card">
      {/* Uslovno renderiranje: ako slika postoji prikaži je, inače rezervni blok */}
      {slika ? (
        <img src={slika} alt={naziv} />
      ) : (
        <div className="card-placeholder">🎮</div>
      )}
      <div className="card-body">
        <h3 className="card-title">{naziv}</h3>
        <p className="card-meta">{zanr} • {godina}</p>
        <p className="card-text">{opis}</p>
      </div>
    </div>
  );
}

export default Card;