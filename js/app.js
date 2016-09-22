window.onload = function () {
	var boton = document.getElementById("boton");
	var agregar = document.getElementById("agregar");
	var escribir = document.getElementById("escribir");
	var none = document.getElementById("none");
	var body = document.querySelector("body");
 	

	none.classList.add("no"); 
	agregar.addEventListener("click", function() {
			agregar.classList.add("no");
			none.classList.remove("no"); 
			none.classList.add("si"); 
	});
	none.addEventListener("mouseover", function() {
			agregar.classList.add("no");
			none.classList.remove("no"); 
			none.classList.add("si"); 
	});		
	none.addEventListener("mouseout", function() {
			agregar.classList.remove("no");
			none.classList.remove("si");
			none.classList.add("no"); 
	});

	boton.addEventListener("click", function(e){
		e.preventDefault();
		var contenedor = document.getElementById("contenedor");
		var cuadro= document.createElement("div");
		cuadro.classList.add("cuadro");
		cuadro.classList.add("primero");
		cuadro.classList.add("border");
		contenedor.appendChild(cuadro);

		var titulo = escribir.value;
		var title = document.createElement("div");
		title.innerHTML = titulo;
		title.classList.add("titulo");
		cuadro.insertBefore(title, cuadro.childNodes[0]);

		var input = document.createElement("input");
		cuadro.insertBefore(input, cuadro.childNodes[1]);
		escribir.value= "";
	});
	
}
	/*  
boton.addEventListener("click", function(e) {
		e.preventDefault();

	}
none.addEventListener("mouseout" , function() {
		
			none.addEventListener("click", function() {
		agregar.classList.add("no");
		none.classList.add("si"); 
		body.addEventListener("click", function() {
			agregar.classList.add("si");
			none.classList.add("no"); 	
		});
	});

	none.addEventListener("click", function() {
		agregar.classList.add("no");
		none.classList.add("si"); 
	});

		body.addEventListener("click", function() {
		none.addEventListener("mouseout" , function() {
			if (agregar.classList.add("no")) {
				agregar.classList.add("si");
				none.classList.add("no"); 
			}
			
		});

	});	
}*/