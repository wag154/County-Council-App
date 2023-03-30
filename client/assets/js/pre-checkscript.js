const displayNew = document.querySelector(".d-flex");
const button = document.querySelector("#Logger")
let display = true;
const removeLocal = () =>{
  console.log("Removing username")
  localStorage.removeItem("username")
  location.reload()
}
const DisplayUser = async()=>{
  const container = document.createElement("div")
  button.style.border = "none"
  button.textContent = "Logout?"
  button.href = "#"
  button.addEventListener("click",()=>{
    removeLocal()
  })
  const username = document.createElement("p1")
  username.textContent=`Username: ${localStorage.getItem("username")}`
  username.classList.add("disUsername");

  container.appendChild(username);
  container.appendChild(button);
  displayNew.appendChild(container);
}
if (localStorage.getItem("username")){
  DisplayUser()
}
else if (!localStorage.getItem("username")){
  console.log("User not signed in")
}