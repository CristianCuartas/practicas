function check1(box) {
  if (box.checked) {
    document.getElementById("checkbox2").checked = false;
  }
}
function check2(box) {
  if (box.checked) {
    document.getElementById("checkbox1").checked = false;
  }
}




document.addEventListener("DOMContentLoaded", function(e) {
  var miForm = document.getElementById("tryrhis");

  trythis.onsubmit = function(e) {
    e.preventDefault();
    var formData = new FormData(trythis);
    var jsonData = {};
    for (var [k, v] of formData) {
      jsonData[k] = v;
    }

    console.log(jsonData);
  };
});
