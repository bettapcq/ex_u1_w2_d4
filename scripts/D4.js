/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const result = l1 * l2;
  return result;
};

console.log('ESERCIZIIO 1: ', area(12, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    const result = (n1 + n2) * 3;
    return result;
  } else {
    const result = n1 + n2;
    return result;
  }
};

console.log('ESERCIZIIO 2: ', crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (number) {
  let result = number - 19;
  if (result < 0) {
    result = -result;
  }
  if (result > 19) {
    result = result * 3;
    return result;
  } else {
    return result;
  }
};

console.log('ESERCIZIIO 3: ', crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (number) {
  if (number >= 20 && number <= 100) {
    return true;
  } else if (number === 400) {
    return true;
  } else {
    return false;
  }
};

console.log('ESERCIZIIO 4: ', boundary(45));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  if (typeof str === 'string') {
    let splitStr = str.split(' ');
    let strBegin = splitStr[0];
    if (strBegin === 'EPICODE') {
      let joinAgain = splitStr.join();
      return joinAgain;
    } else {
      let addStr = 'EPICODE';
      return addStr.concat(' ', str);
    }
  } else {
    let error = "l'argomento deve essere una stringa!";
    return error;
  }
};

console.log('ESERCIZIIO 5: ', epify('EPICODE ciao a tutti!'));
console.log('ESERCIZIIO 5bis: ', epify('ciao a tutti'));
console.log('ESERCIZIIO 5tris: ', epify(5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (number) {
  if (typeof number === 'number') {
    if (number % 3 === 0 || number % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    let error = "l'argomento deve essere un numero!";
    return error;
  }
};

console.log('ESERCIZIO 6:', check3and7(28));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  if (typeof str === 'string') {
    let splitChars = str.split('');
    console.log(splitChars);
    let reversedStr = [];
    for (let i = splitChars.length - 1; i >= 0; i--) {
      reversedStr.push(splitChars[i]);
    }
    reversedStr = reversedStr.join('');
    return reversedStr;
  } else {
    let error = "l'argomento deve essere una stringa!";
    return error;
  }
};

console.log('ESERCIZIO 7:', reverseString('ciao'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (frase) {
  let splittedFrase = frase.split(' ');
  console.log(splittedFrase);
  let word;
  let lowerRest;
  let upperChar;
  let finalFrase = [];
  for (let i = 0; i < splittedFrase.length; i++) {
    word = splittedFrase[i];
    lowerRest = word.slice(1);
    upperChar = word[0].toUpperCase() + lowerRest;
    finalFrase.push(upperChar);
  }
  return finalFrase.join(' ');
};

console.log(
  'ESERCIZIO 8:',
  upperFirst('ciao sono elisabetta e vengo da torino')
);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// COMPLETATO DOPO :

const cutString = function (str) {
  const noFirstNoLast = str.slice(1, -1);
};

console.log('ESERCIZIO 9:', cutString('elisabetta'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

// SCRIVI QUI LA TUA RISPOSTA

//COMPLETATO DOPO:

const giveMeRandom = function (numeroDiVolte) {
  const array = [];
  for (let i = 0; 1 < numeroDiVolte; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return arr;
};

console.log(giveMeRandom(5));
