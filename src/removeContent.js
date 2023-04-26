export default function removeContent() {
  console.log("Remove Function Called!!");
  const test = document.getElementById("content");
  let children = test.children; //Always check the second child
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.className != "footer" && child.className != "totalContainer") {
      console.log(child.className);
      test.removeChild(child);
    }
  }
  return;
}
