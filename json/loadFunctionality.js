/*var lista=[

function addFriend(pcodigo, pusuario, pcumpleaños, pciudad,pemail){

	var newFriend={
	//propiedad    : valor
		"codigo"     : "pcodigo",
		"usuario"    : "pusuario",
		"cumpleaños" : "pcumpleaños",
		"ciudad"    : "pciudad",
		"email"      : "pemail"

	};

	console.log(newFriend);
	//Agregar el Objeto newFriend a la variable lista
	lista.push(newFriend);

}
];*/

var addFriend = function(
	pcodigo,
	pusuario,
	pcumpleaños,
	pciudad,
	pemail
  ) {
	var newFriend = {
	  //  propiedad    : valor
	  "codigo": txtCodigo.value,
	  "usuario": txtUsuario.value,
	  "cumpleaños": txtCumpleaños.value,
	  "ciudad": txtCiudad.value,
	  "email": txtEmail.value
	};
	document.write(newFriend);
  };

  document.addEventListener("DOMContentLoaded", function(go) {
	var trythis = document.getElementById("trythis");
	go.preventDefault();
	trythis.onsubmit = function(go) {
	  var sCodigo = document.querySelector("txtCodigo"),
			sUsuario = document.querySelector("txtUsuario"),
		sCumpleaños = document.querySelector("txtCumpleaños"),
		sCiudad = document.querySelector("txtCiudad"),
		sEmail = document.querySelector("txtEmail");
	  addFriend(sCodigo, sUsuario, sCumpleaños, sCiudad, sEmail);
	};
  });