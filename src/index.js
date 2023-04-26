import printMe from "./print.js";
import "./style.css";
import pizza from "./pizza.jpg";
import peperonni from "./peperonni.png";
import veggie from "./veggie.png";
import tomato from "./tomato.png";
import meat from "./meat.png";
import pineapple from "./pineapple.png";
import fish from "./anchovie.png";
import menuPage from "./menu_tab.js";
import homePage from "./home_tab.js";
import contactPage from "./contact_tab.js";
import removeContent from "./removeContent.js";
import pizzaGuy from "./pizzaGuy.png";
import reorderContent from "./reorderContent.js";
function makebuttons() {
  const totalContainer = document.createElement("div");
  totalContainer.className = "totalContainer";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  const title = document.createElement("div");
  title.className = "title";
  title.innerHTML = "Generic Pizza";
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  btn1.className = "button";
  btn2.className = "button";
  btn3.className = "button";
  let buttons = [btn1, btn2, btn3];
  //Home Button
  btn1.innerHTML = "Home";
  btn1.addEventListener("click", homePage);
  //Menu Button
  btn2.innerHTML = "Menu";
  btn2.addEventListener("click", menuPage);
  //Contact Button
  btn3.innerHTML = "Contact";
  btn3.addEventListener("click", contactPage);

  //Add buttons to element

  buttonContainer.appendChild(btn1);
  buttonContainer.appendChild(btn2);
  buttonContainer.appendChild(btn3);

  totalContainer.appendChild(title);
  totalContainer.appendChild(buttonContainer);
  return totalContainer;
}
function footer() {
  let footer = document.createElement("div");
  footer.className = "footer";
  return footer;
}
const content = document.getElementById("content");
content.appendChild(makebuttons());
content.appendChild(footer());
