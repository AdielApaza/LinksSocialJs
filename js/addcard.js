const createCardNode = () => {
  // debugger
  const imagen = document.createElement("img");
  imagen.setAttribute("alt", "avatar");
  imagen.src = "./assets/images/avatar-jessica.jpeg";
  const imageContainer = document.createElement("div");
  imageContainer.className = "imgavt";
  imageContainer.appendChild(imagen);
  const parrafo = document.createElement("pt");
  const text = document.createTextNode("Jessica Randall");
  parrafo.appendChild(text);
  const parrafo2 = document.createElement("p");
  const text1 = document.createTextNode("London, United Kingdom");
  parrafo2.appendChild(text1);
  const parrafo3 = document.createElement("p1");
  const text2 = document.createTextNode(
    '"Front-end developer and avid reader."'
  );
  parrafo3.appendChild(text2);
  const textcont = document.createElement("div");
  textcont.className = "text";
  const buttncont = document.createElement("div");
  buttncont.className = "buttns";
  const av1 = document.createElement("a");
  av1.setAttribute("href", "");
  av1.setAttribute("target", "_blank");
  const text3 = document.createTextNode("GitHub");
  av1.appendChild(text3);
  const av2 = document.createElement("a");
  av2.setAttribute("href", "");
  av2.setAttribute("target", "_blank");
  const text4 = document.createTextNode("Frontend Mentor");
  av2.appendChild(text4);
  const av3 = document.createElement("a");
  av3.setAttribute("href", "");
  av3.setAttribute("target", "_blank");
  const text5 = document.createTextNode("LinkedIn");
  av3.appendChild(text5);
  const av4 = document.createElement("a");
  av4.setAttribute("href", "");
  av4.setAttribute("target", "_blank");
  const text6 = document.createTextNode("Twitter");
  av4.appendChild(text6);
  const av5 = document.createElement("a");
  av5.setAttribute("href", "");
  av5.setAttribute("target", "_blank");
  const text7 = document.createTextNode("Instagram");
  av5.appendChild(text7);

  const divmy = document.createElement("div");
  divmy.className = "cont-1";

  divmy.appendChild(imageContainer);
  textcont.appendChild(parrafo);
  textcont.appendChild(parrafo2);
  textcont.appendChild(parrafo3);
  divmy.appendChild(textcont);
  buttncont.appendChild(av1);
  buttncont.appendChild(av2);
  buttncont.appendChild(av3);
  buttncont.appendChild(av4);
  buttncont.appendChild(av5);
  divmy.appendChild(buttncont);

  return divmy;
};

const mountNode = document.querySelector("#principal");
const addCardButton = document.querySelector("button");

const addCard = () => {
  mountNode.appendChild(createCardNode());
};

addCardButton.addEventListener("click", addCard);
