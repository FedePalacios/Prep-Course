// No cambies los nombres de las funciones.
// comparado con clase Vimeo 5 de Agosto

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // a continuación en verde es como lo hizo la compañera en slack, en colores esta como lo 
  // hice yo e igual pasó
  //var shift = array.shift()
 // return shift;
 return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //a continuación en verde es como lo hizo la compañera en slack, en colores esta como lo 
  // hice yo e igual pasó
  // var pop = array.pop()
  // return pop;
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  //array.length;
  //return array[array.length]; Yo hice de esas dos formas y no pasó, la compañera lo hizo como sigue y le pasó
    var longitud = array.length;
    return longitud;

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var sumaUno = [];
  for (var i = 0; i < array.length; i++){
    var suma = array[i] + 1;
    sumaUno.push(suma);
  }
    return sumaUno;
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = palabras.join(" ");
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // ej: elemento ==> 5
  //     array [1,3, "hola", 5, "chao"]

  for(var i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
    return false;
 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for (var i = 0; i < numeros.length; i++){
    total = total + numeros[i];
  }
  return total;   
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var cantidad = resultadosTest.length;

  for (var i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
 // return total / resultadosTest.length;  Yo lo hice asi sin declarar la variable cantidad//
 // y había declarado la variable total = 0
    return suma / cantidad;
    // tambien se puede hacer var promedio = suma / cantidad
    // return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // return numeros[numeros.max]
 // for (var i = 0; i < numeros.length; i++){
   // if(numeros[i] === numeros.max )
//  return numeros.max;
  var max = numeros[0]
  for (var i = 0; i < numeros.length; i++){
    if(numeros[i] > max ){
    max = numeros[i];
  }
}
    return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length === 0){
    return 0;
  }
  if(arguments.lenght === 1){
    return arguments[0]
  }
  var total = arguments[0];

for( var i = 1; i < arguments.length; i++){

  total = total * arguments[i];
}
return total;
}
//min 1:09 aprox


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var mayoresA18 = 0
for (var i = 0; i < arreglo.length; i++){
  if(arreglo [i] > 18){
    mayoresA18 = mayoresA18 + 1
  }
}
return mayoresA18;
}
// video min 1:13 exelente explicación (video fecha 5 de agosto)



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  //var finD = 1 === Domingo && 7 === Sabado 
  //var laboral = 2 && 3 && 4 && 5 && 6
if(numeroDeDia === 1 || numeroDeDia === 7){
  return "Es fin de semana";
}else{
  return "Es dia Laboral";
} 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // yo hice este ejercio exactamente igual, pero sin el primer renglon 0
  // var array = etc. y no me pasó el test

  var array = n.toString()

  if(array[0] === "9"){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  //explicacion de este video en minuto: 1:28´
  // el ejemplo fue el siguiente, como el for va haciendo un rulo un bucle
  // lo que comienza a pasar es lo siguiente
  // tenemnos un    arreglo = [97,    100,    48,     104] en la pimera vuelta del rulo for con el if lo que hace es:
  //                compara   [i] con [i + 1]  
  //                arreglo = [97,    100,    48,     104] en la segunda vuelta del rulo for con el if lo que hace es:
  // compara i que se movio           [i] con [i + 1]  
  //                arreglo = [97,    100,    48,     104] en la tercera vuelta del rulo for con el if lo que hace es:
  // compara i que se movio a 48 ej           [i] con [i + 1]      con i + 1 que ya esta en 104
  // OJO: si i, e i + 1 llegaron hasta el final del rulo es porque
  // todos los numeros del arreglo son iguarles ej [109, 109, 109, 109] y por eso devuelve true

  for (var i = 0; i < arreglo.length; i++){
    if(arreglo[i] === arreglo[i + 1]){
      return true;
  }
}
      return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código: 
  // explicacion GENIAL en 1:30´ hora trinta del video del 5 de marzo.

var nuevoArray = []  

for (var i = 0; i < array.length; i++){
  if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    nuevoArray.push(array[i])
  }
}
if(nuevoArray.length < 3){
  return "No se encontraron los meses pedidos";
}
  return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  // Acotación mia: es obvio que en el array están todos los numeros 
  //                desordenados, sino empezaria el for con (var i > 100)
  let nuevoArray = []
  for(var i = 0; i < array.length; i++){
     if(array[i] > 100){
  nuevoArray.push(array[i])
  } 
}
return nuevoArray

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var nuevoArray = []
  var suma = numero

  for (var i = 0; i < 10; i++){
    suma = suma + 2
    if(suma === i) break 
  else{
    nuevoArray.push(suma)
   }
  }  
  if(i < 10){
    return "Se interrumpió la ejecución"
  }else{
    return nuevoArray
  }
} 


  function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
    var array = []
    var suma = numero

    for (var i = 0; i < 10; i++){
      if(i === 5) continue
    else{
      suma = suma + 2
      array.push(suma)
      } 
    }
    return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
