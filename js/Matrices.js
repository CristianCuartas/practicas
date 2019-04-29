/* Almacenar en una matriz */
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = ["Cristian", "Ricardo", "Juan", "Mabel", "Javier"];
var c = ["Hola", 788, [0, 1, 2, 3]];
/*Acceder a la matriz*/
document.write(a[0]);
document.write(" - ");
document.write(b[0]);
document.write(" - ");
document.write(c[0]);
document.write("<br>");
/*Acceder a una matriz multidimensional*/
document.write(c[2][0]);
document.write("<br>");
/* Modificar la matriz*/
document.write((a[0] = "Uno"));
document.write(" - ");
document.write((b[0] = "Maria"));
document.write(" - ");
document.write((c[0] = "Chao"));

document.write("<br>");
document.write(a[0]);
document.write(" - ");
document.write(b[0]);
document.write(" - ");
document.write(c[0]);
document.write("<br>");
/*Encontrar la longitud de una matriz*/
document.write(b.length);
document.write("<br>");
/*Recorre todos los elementos de una matriz*/
for (var i = 0; i < b.length; i++) {
  document.write(b[i]);
  document.write("  ");
}
document.write("<br>");
/* Métodos útiles de matrices*/
/*1.) Conversión entre matrices y cadenas*/
var myString = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
var myArray = myString.split(",");
document.write(myArray);
document.write("<br>");
document.write(myArray.length);
document.write("<br>");
var myNewArray = myArray.join(",");
document.write(myNewArray);
document.write("<br>");
document.write(myArray.toString());
document.write("<br>");

/*2.) Agregrar y eliminar elementos de la matriz*/

myArray.push("Bogotá", "Cucúta");
document.write(myArray);
document.write("<br>");
/* Almacenar la longitud de la matriz en una variable*/
var newLength = myArray.push("anything");
document.write(myArray);
document.write("<br>");
document.write(newLength);
document.write("<br>");
/*Eliminar el último elemento de una matriz*/
myArray.pop();
document.write(myArray);
document.write("<br>");
var removedItem = myArray.pop();
document.write(myArray);
document.write("<br>");
document.write(removedItem);
