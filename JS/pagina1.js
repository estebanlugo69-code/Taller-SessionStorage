function guardar() {
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const error = document.getElementById("mensaje");
    if (nombre === "" || ciudad === ""){
        error.textContent = "Necesitas ingresar lo solicitado";
    } else {
        window.location.href = "pagina2.html";
        localStorage.setItem("ciudad", ciudad);
        localStorage.setItem("nombre", nombre);
    }
}
document.addEventListener("DOMContentLoaded", () =>(
    document.getElementById("btn-guardar").addEventListener("click", guardar)
))