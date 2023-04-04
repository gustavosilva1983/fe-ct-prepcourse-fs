/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const sortedCharsObj = {};
   let charsArray = string.split("").sort();
   for (let i = 0; i < charsArray.length; i++) {
      sortedCharsObj[charsArray[i]] = sortedCharsObj[charsArray[i]] ? 
         sortedCharsObj[charsArray[i]] + 1 : 1;
      }
    return sortedCharsObj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let strMin = [];
   let strMay = [];
   for (let i = 0; i < string.length; i++) {
      if(string[i] == string[i].toUpperCase()){
         strMay.push(string[i]); 
      } else{
         strMin.push(string[i]);
      }
   }
   return joinArray = strMay.concat(strMin).join('')

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let separatePhrase = frase.split(' ');
   let phraseMirror = '';
   for (let i = 0; i < separatePhrase.length; i++) {
      phraseMirror += `${separatePhrase[i].split('').reverse().join('')} `
   }
   
   return phraseMirror.slice(0, -1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let invertedNumber = numero.toString().split('').reverse().join('');
   return invertedNumber == numero ? "Es capicua" : "No es capicua"
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = string.split('')
   let workComplete = ''
    for (let i = 0; i < newString.length; i++) {
      newString[i] == 'a' || newString[i] == 'b' || newString[i] == 'c' ? workComplete += newString[i].replace(newString[i],''): workComplete += newString[i] 
   }
   return workComplete
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   newArray = arrayOfStrings.sort((a,b) => {return a.length - b.length})
   return newArray
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const intersection = array1.filter(x => array2.indexOf(x) !== -1)
   return intersection
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
