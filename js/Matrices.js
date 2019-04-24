/* Almacenar en una matriz */
var a=[1,2,3,4,5,6,7,8,9,10];
var b=['Cristian', 'Ricardo', 'Juan', 'Mabel', 'Javier'];
var c=['Hola',788,[0,1,2,3]];
/*Acceder a la matriz*/
console.log(a[0]);
console.log(b[0]);
console.log(c[0]);

/*Acceder a una matriz multidimensional*/
console.log(c[2][0]);

/* Modificar la matriz*/
console.log(a[0]="Uno");
console.log(b[0]="Maria");
console.log(c[0]="Chao");

console.log(a[0]);
console.log(b[0]);
console.log(c[0]);

/*Encontrar la longitud de una matriz*/
console.log(b.length);

/*Recorre todos los elementos de una matriz*/
for (var i=0;i<b.length;i++){
		console.log(b[i]);
}
/* Métodos útiles de matrices*/
/*1.) Conversión entre matrices y cadenas*/
var myString='Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray=myString.split(',');
console.log(myArray);
console.log(myArray.length);
var myNewArray=myArray.join(',');
console.log(myNewArray);
console.log(myArray.toString());

/*2.) Agregrar y eliminar elementos de la matriz*/

myArray.push('Bogotá','Cucúta');
console.log(myArray);
/* Almacenar la longitud de la matriz en una variable*/
var newLength=myArray.push('anything');
console.log(myArray);
console.log(newLength);
/*Eliminar el último elemento de una matriz*/
myArray.pop();
console.log(myArray);

var removedItem = myArray.pop();
	console.log(myArray);
	console.log(removedItem);
	

