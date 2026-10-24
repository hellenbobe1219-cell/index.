// 1. Mostrar fecha actual
var hoy = new Date();
document.write("<p>📅 Hoy es: " + hoy.toLocaleDateString() + "</p>");

// 2. Detectar tecla presionada
document.addEventListener("keydown", function(event) {
    var elemento = document.getElementById("teclaPresionada");
    if (elemento) {
        elemento.innerHTML = "⌨️ Tecla presionada: " + event.key;
    }
});

// 3. Enviar donación
function enviarDonacion() {
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("cantidad").value;
    var resultado = document.getElementById("resultado");

    if (!nombre || !cantidad || nombre === "" || cantidad === "") {
        resultado.innerHTML = "⚠️ Completa tu nombre y la cantidad de árboles.";
        resultado.style.color = "orange";
        return;
    }

    resultado.innerHTML = "🌱 ¡Gracias " + nombre + "! Has donado " + cantidad + " árbol(es). ¡Eres parte del cambio! 💚";
    resultado.style.color = "#2d6a4f";
}

// 4. Limpiar formulario
function limpiarTodo() {
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("resultado").innerHTML = "";
    var contacto = document.getElementById("contacto");
    if (contacto) contacto.style.display = "none";
}

// 5. Mostrar contacto
function mostrarMensaje() {
    var contacto = document.getElementById("contacto");
    if (contacto) {
        contacto.style.display = "block";
    }

    }
