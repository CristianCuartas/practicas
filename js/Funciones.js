/*Ejemplo de una función*/
function add(x, y) {
  var total = x + y;
  return total;
}
var total = add(2, 4);
document.write(total);
document.write("<br>");
document.write("<br>");
/*Ejemplo 2 de una función*/
function add2() {
  var m = 1;

  for (var i = 0, j = arguments.length; i < j; i++) {
    m = m * arguments[i];
  }
  return m;
}

var m = add2(1, 2, 3, 2, 2);
document.write(m);
