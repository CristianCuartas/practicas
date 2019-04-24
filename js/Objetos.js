/* Inicializar una Objeto */

var obj={
	nombre:"Cebra",
		
	detalles:
	{
		color:"Blanco con negro",
		habitat:"Tierras secas"
	}

}

/* Acceso a atributos */

console.log(obj["nombre"]);
console.log(obj.detalles.color);
console.log(obj.detalles.habitat);
console.log(obj["detalles"]["color"]);

/* Objeto prototipo */
function Persona(apellido, edad, sexo) {
  this.apellido = apellido;
  this.edad = edad;
  this.sexo = sexo;
}

/* Definimos el objeto */
var P1= new Persona("Cuartas",18,"M");
var P2= new Persona("Cortés", 15,"F");

		  /* Acceder al objeto */
console.log(P2[""]);
console.log(P2[""]);
console.log(P2[""]);

 		  /* Mostrar todas la propiedades con for / in */
function mp(Objeto, nombreObjeto){
	var resultado = "";
	for (var i in Objeto){
		if (Objeto.hasOwnProperty(i)){
			resultado += nombreObjeto +	"." + i + " = " + Objeto[i] + "\n"; 
		}
	}
	return resultado;
}
		/* Acceder a la funncion mp */

console.log(mp(P1,"P1"));
console.log(mp(P2,"P2"));	
