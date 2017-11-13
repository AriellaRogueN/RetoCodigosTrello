/*Al hacer click en el botón inicial se visualiza el formulario 
y se oculta el mismo botón*/
function boardActive() {
  /*identifico el campo oculto*/
  var contenedor = document.getElementById("form")

  /*lo hago visible a traves de display block*/
  contenedor.style.display = "block";

  /*identifico el boton inicial*/
  /*---lo oculto a traves de display none---*/
  var btnInit = document.getElementById("addList")
  btnInit.style.display = "none";
}

//Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro 
//donde estará el nombre de la lista agregada.

function save() {
  /*Seleccionar el texto que se va a guardar*/
  var nameList = document.getElementById("nameList").value;

  /*Limpiar el area de texto*/
  document.getElementById("nameList").value = "";

  var container = document.getElementById("form");

  /*creo nuevo div para la lista ya guardada*/
  var saveList = document.createElement("div");


  /*--- Creo nodo de texto--*/

  var newlist = document.createTextNode(nameList);

  var newElement = document.createElement("p");


  /*agrego el texto ingresado (newlist) al nuevo elemento (p)*/

  newElement.appendChild(newlist);

  /*agrego nuevo elemento al div creado*/

  saveList.appendChild(newElement);

  container.appendChild(saveList);

  /*inserto el div creado sobre el form anterior*/
  var name = document.getElementById("nameList")
  container.replaceChild(saveList, name);


  var btn = document.getElementById("btn-2");
  var icon = document.getElementById("boardicon");
  container.removeChild(btn);
  container.removeChild(icon);


  /* creo un botón para añadir una tarjeta y le agrego sus atributos*/

  var cardBtn = document.createElement("button");
  cardBtn.setAttribute("id", "btn-3")
  cardBtn.innerHTML = ("Añadir una Tarjeta...");

  /*agrego al arbol en el div correspondiente*/
  saveList.appendChild(cardBtn);

  /*Le agrego estilos al botón*/
  cardBtn.style.textDecoration = "underline";
  cardBtn.style.height = "30px";
  cardBtn.style.border = "none";
  cardBtn.style.cursor = "pointer";
  cardBtn.style.backgroundColor = "#E3E6E1";

}
/*Al hacer click en el boton creado(cardBtn), se debe mostrar 
un formulario con un textarea y un botón que diga "Añadir", para eso
creo un evento (se hará visible formulario de html)*/


cardBtn.addEventListener("click", function () {

  var toShow = document.getElementById("form-2")

  /*lo hago visible a través de display block*/
  toShow.style.display = "block";
  
/*no lo logre hacer, deje visible el formulario para poder hacer el resto
de la funcionalidad, para ocultarlo hay que colocar display none */
})

/*Al hacer click sobre el boton anadir, debe aparecer el texto
de la tarea debajo del titulo de la lista*/

function añadir() {
  var newText = document.getElementById("card").value;

  document.getElementById("card").value = "";

  var newContainer = document.getElementById("form-2");

  /*creo nuevo div para la lista ya guardada*/
  var addList = document.createElement("div");


  /*--- Creo nodo de texto--*/

  var newAdd = document.createTextNode(card);

  var newElementAdd = document.createElement("p");


  /*agrego el texto ingresado  al nuevo elemento (p)*/

  newElementAdd.appendChild(newAdd);

  /*agrego nuevo elemento al div creado*/

  addList.appendChild(newElementAdd);

  newContainer.insertBefore(addList, card);

}


