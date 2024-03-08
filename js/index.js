console.log("Hello world!");
function suma(x, y) {
  let resultado;
  debugger; //Paro el codigo para ver los valores de las variables en la consola del navegador
  resultado = x + y;
  return resultado;
}
let boton = document.querySelectorAll(".buttns");
boton.name = "botones";
let facebook = document.createElement("button");
let texto = document.createTextNode("facebook");
facebook.appendChild(texto);
let contenedorDeBotones = document.querySelector(".button-container");
contenedorDeBotones.appendChild(facebook);
