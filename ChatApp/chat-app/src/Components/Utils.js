function randomName() {
  const names = [
    "Eugenija",
    "Veldin",
    "Šantina",
    "Ettore",
    "Nevia",
    "Behija",
    "Francisko",
    "Grujo",
    "Den",
    "Anni",
    "Dea",
    "Nuri",
    "Christopher",
    "Bernadica",
    "Ilda",
    "Remzi",
    "Stijepan",
    "Darina",
    "Dimitrija",
    "Nidija",
    "Timon",
    "Ljiljanka",
    "Brigitta",
    "Bepa",
    "Verena",
    "Dania",
    "Bojka",
    "Avdija",
    "Dylan",
    "Ante",
  ];
  const lastNames = [
    "Brunec",
    "Petrac",
    "Lepej",
    "Grujin",
    "Slapnilar",
    "Brown",
    "Mehmedović",
    "Narančić",
    "Levec",
    "Raguž",
    "Malinac",
    "Zdilar",
    "Pulig",
    "Kegelj",
    "Mucić",
    "Milko",
    "Dunatov",
    "Pečenić",
    "Kump",
    "Zavorski",
    "Koljdjeraj",
    "Šest",
    "Milovuković",
    "Peršinec",
    "Francić",
    "Faj",
    "Merklin",
    "Dreta",
    "Umek",
    "Strizić",
  ];

  // generiram nasumičan broj između 0 i dužine liste "names" pomoću Math.random
  //Math floor -> zaokruživanje prema dolje na prvi cijeli broj
  const name = names[Math.floor(Math.random() * names.length)];

  // generiranje na isti način kao i name
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  // nasumično vraća ime i prezime
  return name + " " + lastName;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export { randomName, randomColor };
