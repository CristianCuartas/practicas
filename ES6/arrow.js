//Función arrow
 setInterval(()=>{				 //() = function y si no hay argumento dentro de la función ()=>
 	console.log("Version ES6");
 },10);
 clearInterval(10);

 var anything = ['1','1','0','9'];
 anything.forEach(value=>{				//cuando la funcion tiene argumento no usamos parentesis.
 	console.log('anything : ' + value); // function(value){} pasa a  value =>{}
 });

var restar=(a,b)=> a-b; //Cuando la funcion tiene más de un argumento ponemos parentesis.
console.log(restar(5,2)); // function(a,b){return a-b;} pasa a (a,b)=>a-b;
