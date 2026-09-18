const kompanije = [
    {naziv: "NVIDIA", godina: 1993, direktor: "Jensen Huang", zaposlenih: "42 000"},
    {naziv: "Apple", godina: 1976, direktor: "John Ternus", zaposlenih: "166 000"},
    {naziv: "Alphabet", godina: 2015, direktor: "Sundar Pichai", zaposlenih: "198 000"},
    {naziv: "Microsoft", godina: 1975, direktor: "Satya Nadella", zaposlenih: "223 000"},
    {naziv: "Amazon", godina: 1994, direktor: "Andy Jassy", zaposlenih: "1 500 000"}
];

const tijelo = document.getElementById("tijelo");

const redovi = kompanije.map(kompanija => `
    <tr>
        <td>${kompanija.naziv}</td>
        <td>${kompanija.godina}</td>
        <td>${kompanija.direktor}</td>
        <td>${kompanija.zaposlenih}</td>
    </tr>
`).join("");

tijelo.innerHTML = redovi;

document.getElementById("filterBtn").addEventListener("click", () => {
    const filtrirane = kompanije.filter(k => k.godina < 1990);
    tijelo.innerHTML = filtrirane.map(k => `
        <tr>
            <td>${k.naziv}</td>
            <td>${k.godina}</td>
            <td>${k.direktor}</td>
            <td>${k.zaposlenih}</td>
        </tr>
    `).join("");
});

const microsoft = kompanije.find(kompanija => kompanija.naziv === "Microsoft");
console.log(microsoft); 