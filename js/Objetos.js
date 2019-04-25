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

document.write(obj["nombre"]);
document.write('<br>');
document.write(obj.detalles.color);
document.write('<br>');
document.write(obj.detalles.habitat);
document.write('<br>');
document.write(obj["detalles"]["color"]);
document.write('<br>');

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
document.write(P1["apellido"]);
document.write(" - ");
document.write(P1["edad"]);
document.write(" - ");
document.write(P1["sexo"]);
document.write('<br>');
document.write(P2["apellido"]);
document.write(" - ");
document.write(P2["edad"]);
document.write(" - ");
document.write(P2["sexo"]);
document.write('<br>');
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

document.write(mp(P1,"P1"));
document.write('<br>');
document.write(mp(P2,"P2"));	
