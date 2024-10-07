const hodinovka = 300
const pocetHodin = prompt("Zadej počet hodin zaměstnance", "160")
const premie = Number (prompt("zadej mimořádnou odměnu v Kč")) // "tu odměnu co tam napíšeme to vezme jako string"
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p> Pepa Novák si vydělal:" + plat + "Kč."


