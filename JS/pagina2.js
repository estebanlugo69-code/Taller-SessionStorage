
function mostrarNombre() {
    const nombre = localStorage.getItem("nombre");
    const ciudad = localStorage.getItem("ciudad");

    if (nombre,ciudad === null) {
    document.getElementById("saludo").textContent = "No hay ningun nombre ni ciudad guardado";
    } else {
    document.getElementById("saludo").textContent = "Hola " + nombre + " de " + ciudad;
    }
    
}

function borrar() {
    localStorage.clear();
    mostrarNombre();
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
