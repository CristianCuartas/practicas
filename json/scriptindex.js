
  /*
  document.addEventListener('click',function(e){
    var sCodigo = document.querySelector("txtCodigo"),
    sUsuario = document.querySelector("txtUsuario"),
    sCumpleaños = document.querySelector("txtCumpleaños"),
    sCiudad = document.querySelector("txtCiudad"),
    sEmail = document.querySelector("txtEmail");
    addFriend(sCodigo, sUsuario, sCumpleaños, sCiudad, sEmail);
    e.preventDefault(); // Cancel the native event
    e.stopPropagation();// Don't bubble/capture the event
   }, false);*/


  function HandleChangeCodigo() {
    var Codigo = document.getElementById("txtCodigo").value;
    console.log("Codigo:", Codigo);
  }
  function UserNameCodigo() {
    var Usuario = document.getElementById("txtUsuario").value;
    console.log("Usuario:", Usuario);
  }
  function DateofBirth() {
    var FNacimiento = document.getElementById("txtCumpleaños").value;
    console.log("Fecha de nacimiento:", FNacimiento);
  }
  function CityCodigo() {
    var Ciudad = document.getElementById("txtCiudad").value;
    console.log("Ciudad:", Ciudad);
  }
  function EmailCodigo() {
    var CElectronico = document.getElementById("txtEmail").value;
    console.log("Correo electónico:", CElectronico);
  } 
  var sendInfo=[]