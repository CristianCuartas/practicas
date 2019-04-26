
document.addEventListener("DOMContentLoaded", function(e) {

  var miForm = document.getElementById('miForm');

  miForm.onsubmit = function(e) {
    e.preventDefault(); 
    var formData = new FormData(miForm);
    var jsonData = {};
    for (var [k, v] of formData) {
      jsonData[k] = v;
    }
    console.log(jsonData);
  }

});