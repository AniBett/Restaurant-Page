import removeContent from "./removeContent";
import reorderContent from "./reorderContent";
export default function menuPage() {
  removeContent();
  console.log("Hello from menuPage");
  const container = document.getElementById("content");
  const menuTable = document.createElement("div");
  menuTable.className = "menuTable";
  const numMenuItem = 6;
  const names = [
    "Veggie",
    "Pepperonni",
    "Anchovie",
    "Tomato",
    "Pineapple",
    "Meat",
  ];
  for (let i = 0; i < numMenuItem; i++) {
    let menuitem = document.createElement("div");
    let nameContainer = document.createElement("div");
    let pizzaContainer = document.createElement("div");
    pizzaContainer.id = "item" + i;
    pizzaContainer.className = "item";
    nameContainer.className = "nameTag";
    nameContainer.innerHTML = names[i];
    menuitem.className = "menuContainer";
    menuitem.appendChild(pizzaContainer);
    menuitem.appendChild(nameContainer);
    menuTable.appendChild(menuitem);
  }
  //container.appendChild(menuTable);
  reorderContent(container, menuTable);
  return;
}
