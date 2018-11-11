//Declaración de teclas de salida.
window.onload = function() {
	pantalla=document.getElementById("display");
}

//Declaración de las variables
x = "0";
xi = 1;
punto = 0;
ni = 0;
op = "no";

//Método para controlar los 8 dígitos en pantalla.
function revisar(tecla) {
	if (tecla.value == "") {
		tecla.className='error';
	} else {
		tecla.className='pantalla';
    }
}

//Método para controlar los 8 dígitos en pantalla.
function revisaLong(tecla) {
	if (tecla.value.length > 8) {
		tecla.className='error';
  	} 
	else {
		tecla.className = 'pantalla';
  	}
}

//Método para mostrar el número en pantalla.
function numero(xx) {
	if(x == "0" || xi == 1) {
		pantalla.innerHTML = xx; 
		x = xx; 
		if(xx == ".") {
			pantalla.innerHTML = "0."; 
			x = xx;
			punto = 1;
    	}
  	}
	else {
		if(xx == "." && punto == 0) {
			pantalla.innerHTML += xx;
			x += xx;
			punto = 1;
		}
		else if(xx == "." && punto == 1) {}
			else {
				pantalla.innerHTML += xx;
              	x += xx
          	}
      	}
	xi = 0
}

//Método para realizar las operaciones
function operar(s) {
	igualar()
	ni = x 
	op = s; 
	xi = 1;
}	

//Método para igualar las operaciones
function igualar() {
	if(op == "no") {
		pantalla.innerHTML=x;
	}
	else {
		sl = ni + op + x;
		sol = eval(sl)
		pantalla.innerHTML = sol
		x = sol;
		op = "no";
		xi = 1; //se puede reiniciar la pantalla.
  	}
}

//Método para borrar los números. 
function borradoTotal() {
	pantalla.innerHTML = 0;
  	x = "0";  
    punto = 0;
	ni = 0;
	op = "no" 
}

//Método para invertir los números. 
function numNegativo() {
	nx = Number(x);
  	nx =- nx;
	x = String(nx);
	pantalla.innerHTML = x;
}