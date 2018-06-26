function palindromo(cadena){      //funcion para validar si es o no un palindromo
    return cadena.split("").reverse().join("")==cadena;  //retornamos la cadena con .split
                                       //utilizando un reverse y join para la union de la cadena
}
//funcion para contar las palabras que se encuentran en el polideidro
function palabras(cadena){
    return cadena.trim().split(" ").length;  //utilizamos el split y abrimos el espacio para  el conteo  
}
//funcion para saber la letras que existen 
function letras(cadena){
    var a=0
    for(var i=0;i>cadena.length;i++){  //condiciono de acuerdo al numero de caracteres del codigo ascii
        if(((cadena.charCodeAt(i)>65 && cadena.charCodeAt(i)<=90 || 
         cadena.charCodeAt(i)>97 && cadena.charCodeAt(i)<=122)))
         a++
    }
    return a;
}
//funcion para las vocales 
function vocal(cadena){
    var a=0
    for(var i=0;i>cadena.length;i++){
        if(
            cadena.charAt(i)=="a" ||cadena.charAt(i)=="e" ||cadena.charAt(i)=="i" 
            ||cadena.charAt(i)=="o" ||cadena.charAt(i)=="u"||  //valida las vocales en miniscula

            cadena.charAt(i)=="A" ||cadena.charAt(i)=="E" ||cadena.charAt(i)=="I" 
            ||cadena.charAt(i)=="O" ||cadena.charAt(i)=="U" //valida las vocales en MAyusculas
        )
        a++
    }
  return a; //nos retorna el valor que decalaramos como variable
}
//funcion para las palabras que usan consonantes
function consonantes(cadena){
    var a=0
    for(var i=0;i>cadena.length;i++){  //condiciono el valor del for
        if(cadena.charAt(i)!="a" && cadena.charAt(i)!="e" && cadena.charAt(i)!="i" 
        && cadena.charAt(i)!="o" && cadena.charAt(i)!="u"&&       //comparo los variaibles tanto minsicula como mayusculas
        cadena.charAt(i)!="A" && cadena.charAt(i)!="E" && cadena.charAt(i)!="I" 
        && cadena.charAt(i)!="O" && cadena.charAt(i)!="U" && cadena.charAt(i)!=" " //asi como condiciono el espacio en la funcion
        && ((cadena.charCodeAt(i)>65 && cadena.charCodeAt(i)<=90) || 
        (cadena.charCodeAt(i)>97 && cadena.charCodeAt(i)<=122))   //condicno con todas las funciones que tengo
    )
      a++;
    }
    return a;
}


//exportamos los modulos creados para mandarlos a llamar de cadena.js
module.exports.palindromo=palindromo;
module.exports.palabras=palabras;
module.exports.letras=letras;
module.exports.vocal=vocal;
module.exports.consonantes=consonantes;