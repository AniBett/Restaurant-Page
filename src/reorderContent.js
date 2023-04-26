export default function removeContent(container, addItem) {
  const footer = container.children[1];
  container.insertBefore(addItem, footer);
  container.appendChild(footer);
  return container;
}
