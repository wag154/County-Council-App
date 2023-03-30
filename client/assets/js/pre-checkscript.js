const displayNew = document.querySelector(".d-flex");
const button = document.querySelector("#Logger")
const username = document.createElement("p1")
username.style.display = "none"
let display = true;
const container = document.createElement("div")
const removeLocal = () =>{
  if (confirm("Do you want to log out?") == true){
    console.log("Removing username")
    localStorage.removeItem("username")
    location.reload()
  }
  else {
    alert("Not logged out")
  }
  
}
const DisplayUser = async()=>{
  username.style.display = "block"
  button.style.border = "none"
  button.textContent = "Logout?"
  button.href = "#"
  button.addEventListener("click",()=>{
    removeLocal()
  })
  username.textContent=`Username: ${localStorage.getItem("username")}`
  username.classList.add("disUsername");

  container.appendChild(username);
  container.appendChild(button);
  displayNew.appendChild(container);
}
if (localStorage.getItem("username")){
  DisplayUser()
  button.removeEventListener("click");
}
else if (!localStorage.getItem("username")){
  console.log("User not signed in")
  button.addEventListener("click",()=>{
    window.location.assign("./assets/views/signup.html")
  })
}