var index= require("./index");

var mycadena= "Anita lava la ropa";

console.log("Es palindromo? "+index.palindromo(mycadena));

console.log("Existen "+ index.palabras(mycadena)+" palabras ");

console.log("Existen " +index.letras(mycadena)+" letras ");

console.log("Existen "+index.vocal(mycadena)+" vocales");

console.log("Existen "+index.consonantes(mycadena)+" consonantes");