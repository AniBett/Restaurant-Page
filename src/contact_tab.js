import removeContent from "./removeContent.js";
import reorderContent from "./reorderContent";
export default function contactPage() {
  removeContent();
  console.log("Contact Page");
  const container = document.getElementById("content");
  const contactInfo = document.createElement("div");
  contactInfo.className = "contactInfo";
  const phone = document.createElement("div");
  phone.className = "phone";
  phone.innerHTML = "+1 234-567-8910";

  const email = document.createElement("div");
  email.className = "email";
  email.innerHTML = "FakePizzaPlace@gmail.com";

  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);
  //container.appendChild(contactInfo);
  reorderContent(container, contactInfo);
  return;
}
