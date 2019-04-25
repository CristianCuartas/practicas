//Variable const
const a=2;
console.log(a);

//Variable let
(function() {
console.log(global); // undefined
//console.log(local); // undefined
if(true) {
var global = "I'm global";
let local = "I'm only local";
let second = "I'm try to broken the varible let";
console.log(local);
console.log(second);
}
console.log(global); // I'm global
//console.log(local);//undefined
})();


//Parámetros por defecto
function greet(
				name, 
				gender='Mr.',
				greeting= 'Hello ' + gender	
			   )
{
		console.log(greeting+ ' ' +name);
};
greet('Peter');	
greet ('Alex', undefined,  'Whats up');

//Parámetros rest 
function printName(
					name,
					...fancyNames){
	var fullName=name;
	fancyNames.forEach(fancyN=>fullName+=' '+fancyN);
	console.log(fullName);
};

printName('Felipe');
printName('Felipe','Cristian','Jose','Carlos');


//Clases y herencia 

//Creación de la clase
class Document{
	constructor (title, author, isPublished){
		this.title=title;
		this.author=author;
		this.isPublished=isPublished;
	}
	publish(){
		this.isPublished=true;
	}
}
//La herencia de clase
class Book extends Document{
	constructor(title, author, topic){
		super (title, author, true);
		this.topic=topic;
	}
}
//Módulos
//archivos: test.js - utils.js
//util.js: encontramos la función que vamos a exportar.
//test.js: encontramos como importar la función que tengamos disponible.

//Importar módulos por el path = ruta.

//Operador de propagación = Spread operator.
function f(a,b,c){}
var arguments=[1,2,3];
f(...arguments);

//example1
function x(g,h,j,k,l){}
var args = [0,1];
f(-1,...args,2,...[3]);

//example2
var parts1 =['cuaderno', 'y una','carpeta'];
var parts2 =['Laptop', 'con conexión a','internet'];
var lyrics =['Yo tengo una',...parts2,'y también un',...parts1];
console.log(lyrics);

//combianar spread operator con new
/*
var dateFields;
var y = new Date(...dateFields);*/

//Destructuring
//Destructuring array
var ñ,z,res;
[ñ,z]=[1,2];

var foo =function(){
	return [175, 75];
};
var [heigth, weigth]=foo();
console.log(foo);

//Destructuring Object
({p,o}={p:1,o:2});
console.log(p,o);

//Destructurin user
var user={
	name:'Cristian',
	surname:'Disorder'
};
var {name, surname}=user;
console.log(user);

 //Destructuring spread operator 
 var r,t,iterableObj;
 [r,t,...iterableObj]=[1,2,3,4,5]
 console.log(...iterableObj);
 
