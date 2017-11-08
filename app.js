function boardActive() {
    /*identifico el campo oculto*/
    var contenedor = document.getElementById("form")

    /*lo hago visible a traves de display block*/
    contenedor.style.display = "block";
}

function boardInactive() {
    /*identifico el campo (input) que quiero ocultar*/
    var inactive = document.getElementById("addText");

    /*Lo oculto a traves de display none*/
    inactive.style.display = "none";

}