/*La idea es qué cuando demos clic en el boton de agregar/salvar/guardar 
se tomen los datos del formulario y los enviemos a la función que creamos en la funcionalidad para agregar 
los campos al Objeto JSON. */

var addFriend= function (pcodigo, pusuario, pcumpleaños, pciudad,pemail){
	var newFriend=[
		"NuevaPersona":{
	//  propiedad    : valor
		"codigo"     : txtCodigo.value,
		"usuario"    : txtUsuario.value,
		"cumpleaños" : txtCumpleaños.value,
		"ciudad"     : txtCiudad.value,
		"email"      : txtEmail.value
					    }
				  ]
};
console.log(newFriend);
	

document.addEventListener("DOMContentLoaded", function(go){
var trythis = document.getElementById('trythis');
 
trythis.onsubmit= function (go){
	var sCodigo = document.querySelector('txtCodigo'),
		sUsuario = document.querySelector('txtUsuario'),
		sCumpleaños = document.querySelector('txtCumpleaños'),
		sCiudad = document.querySelector('txtCiudad'),
		sEmail = document.querySelector('txtEmail')
addFriend(sCodigo,sUsuario,sCumpleaños,sCiudad,sEmail);		
}

});

