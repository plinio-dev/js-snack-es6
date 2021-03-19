// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

// 1 creare un array di oggetti Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

let biciclette = [
  {
  'nome' : 'atala',
  'peso' : '6000',
  },
  {
  'nome' : 'bottecchia',
  'peso' : '5000',
  },
  {
  'nome' : 'rider',
  'peso' : '8000',
  },

];


// 2 Stampare a schermo la bici con peso minore
let biciLeggera = biciclette[0];

for (var i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso > biciLeggera[0]) {
    biciLeggera = biciclette[i];
  }

}


let string = 'atala';
let stringtwo = 6000;

const {nome, peso} = biciLeggera;

// destructuring
console.log(nome, peso);
// template literal
console.log(`la bici più leggere si chiama ${string} e pesa ${6000}`) ;
