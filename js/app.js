window.onload = function () {
	var boton = document.getElementById("boton");
	var agregar = document.getElementById("agregar");
	var none = document.getElementById("none");
	var body = document.querySelector("body");

	
	agregar.addEventListener("click", function() {
		agregar.classList.add("no");
		none.classList.add("si");
	});
	
	}
	/*boton.addEventListener("click", function(e) {
		e.preventDefault();

	}
}*/