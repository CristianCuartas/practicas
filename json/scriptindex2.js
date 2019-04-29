document.addEventListener("DOMContentLoaded", function(e) {

    var miForm = document.getElementById('tryrhis');
    
    trythis.onsubmit = function(e) {
      e.preventDefault(); 
      var formData = new FormData(trythis);
      var jsonData = {};
      for (var [k, v] of formData) {
        jsonData[k] = v;
      }
      console.log(jsonData);
    }
    
    });
