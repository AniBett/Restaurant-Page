import removeContent from "./removeContent";
import reorderContent from "./reorderContent";
export default function homePage() {
  removeContent();
  console.log("Home Page");
  const container = document.getElementById("content");
  //const footer = container.children[1];
  const picBox = document.createElement("div");
  picBox.className = "picBox";
  const innerPicBox = document.createElement("div");
  innerPicBox.className = "innerPicBox";
  const caption = document.createElement("div");
  caption.className = "caption";
  caption.innerHTML = "Pizza Guy: Making Pizza for 20 Years";

  picBox.appendChild(innerPicBox);
  picBox.appendChild(caption);
  reorderContent(container, picBox);
  //container.insertBefore(picBox, footer);
  //container.appendChild(footer);
  return;
}
