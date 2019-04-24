/* parseInt() */
var numero1="1109";
document.write (parseInt(numero1));
document.write('<br>');	
document.write (parseInt("123",10));
document.write('<br>');	
document.write (parseInt("13",10));
document.write('<br>');	
document.write (parseInt("dasfsh",10));
document.write('<br>');	
document.write (parseInt("10.2abc",10));
document.write('<br>');	
document.write (parseInt("10.2abc",10));
document.write('<br>');	

/* + "" */
var numero2="4911";
document.write (+ numero2);
document.write('<br>');	
document.write (+ "45576");
document.write('<br>');	
document.write (+ "10.2abc");
document.write('<br>');		

/* isFinite() */
var numero3="-1/0";
document.write (isFinite(numero3));
document.write('<br>');	
document.write (isFinite(1/0));
document.write('<br>');	
document.write (isFinite(-Infinity));
document.write('<br>');	
document.write (isFinite (NaN));
document.write('<br>');	

/* isNaN() */
var numero4="11Septiembre";
document.write (isNaN(numero3));
document.write('<br>');	
document.write (isNaN(NaN));
document.write('<br>');	
document.write (isNaN(+"10.2abc"));