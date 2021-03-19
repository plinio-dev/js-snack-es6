
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
  {
  'nome' : 'Roma',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Spal',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Varese',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Benevento',
  'pFatti' : 0,
  'fSubiti': 0
  },
];


// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

function getRandom(min,max) {
  return Math.floor(Math.random()*(max - min +1))+ min;
}

for (var i = 0; i < squadre.length; i++) {

  squadre[i].pFatti = getRandom(1,30);
  squadre[i].fSubiti = getRandom(1,30);

  console.log(squadre[i]);
};


// 3 step:
// // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const array2 = [];


for (var i = 0; i < squadre.length; i++) {
  const {nome, fSubiti} = squadre[i];

  array2.push({
    nome,
    fSubiti
  });
}

const [squadra1, squadra2, squadra3, squadra4] = array2;

console.log(array2);
