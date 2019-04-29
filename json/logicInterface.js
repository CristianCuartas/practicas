/*La idea es qué cuando demos clic en el boton de agregar/salvar/guardar 
se tomen los datos del formulario y los enviemos a la función que creamos en la funcionalidad para agregar 
los campos al Objeto JSON. */

var lista = [];
var addFriend = function(pcodigo, pusuario, pcumpleaños, pciudad, pemail) {
  var newFriend = {
    //  propiedad    : valor
    codigo: txtCodigo,
    usuario: txtUsuario.value,
    cumpleaños: txtCumpleaños.value,
    ciudad: txtCiudad.value,
    email: txtEmail.value
  };
  lista.push(newFriend);
  console.log(lista);
};
document.querySelector('button');
document.addEventListener("click", save);

function save(){
	var sCodigo = document.querySelector("txtCodigo"),
      sUsuario = document.querySelector("txtUsuario"),
      sCumpleaños = document.querySelector("txtCumpleaños"),
      sCiudad = document.querySelector("txtCiudad"),
      sEmail = document.querySelector("txtEmail");
    addFriend(sCodigo, sUsuario, sCumpleaños, sCiudad, sEmail);
}


  /*var trythis = document.getElementById("trythis");

  trythis.onsubmit = function(go) {
    var sCodigo = document.querySelector("txtCodigo"),
      sUsuario = document.querySelector("txtUsuario"),
      sCumpleaños = document.querySelector("txtCumpleaños"),
      sCiudad = document.querySelector("txtCiudad"),
      sEmail = document.querySelector("txtEmail");
    addFriend(sCodigo, sUsuario, sCumpleaños, sCiudad, sEmail);
  };
});*/
