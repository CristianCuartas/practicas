/* if - else */
var nombre = "gatito";
if (nombre == "mascotas") {
  nombre += "!";
} else if (nombre == "gatito") {
  nombre += "!!";
} else {
  nombre = "!" + nombre;
}
document.write(nombre);
document.write('<br>');	
document.write('<br>');	
/* while - do-while */
document.write("Numeros del 1 al 10");
document.write('<br>');	
document.write('<br>');	
var a=1; 
while (a<=10){
 document.write(" "+a+" ");
 a=a+1;
} 
document.write('<br>');	
document.write('<br>');	

document.write("Serie de Fibonacci hasta 10.000");
document.write('<br>');	
document.write('<br>');	
var b=0;
var c=1;
do{
document.write(" "+b+" ",c);
document.write('<br>');			
b=b+c;
c=c+b;
}
while(c<=15000);
document.write('<br>');	
document.write('<br>');	
/* for */
document.write("Números del 0 al 5");
document.write('<br>');	
document.write('<br>');	
for(var d=0; d<=5;d++){
document.write(" "+d+" ");
}
document.write('<br>');	
document.write('<br>');	
document.write("Tabla del 5");
document.write('<br>');	
document.write('<br>');	
var x=5;
var z=0;
var y=0;
for (var z=0; z<=10;z++){	
	y=x*z;
	document.write(x +" x "+z+" = "+ y);
	document.write('<br>');	
} 
