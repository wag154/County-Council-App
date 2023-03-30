const btnJob = document.getElementById("btn-job");
const eventTitle = document.getElementById("event-title");
const signUpForm  = document.querySelector(".centreDis form");

const userLogin = async(Username,Password) =>{
  try{
    const resp = await fetch(`http://127.0.0.1:3000/user/login/${Username}&${Password}`)
      alert("Logged in!")
      if (resp.ok){
          const data = await resp.json();
      }
  }
  catch {
      console.log("Unable to login")
  }
}
const register = async(username,password)=>{
    const data = {
        username:username,
        password:password
    }
  const options = {
      method : "POST",
      headers:{
        Accept :"application/json",  
        "Content-Type" :"application/json"
      },
      body : JSON.stringify(data)
  }
  try{
      const resp = await fetch ("http://127.0.0.1:3000/user/register",options);
      alert("Successfully registered!")
      if (resp.ok){
          const data = await resp.json();
      }
  }catch{
      console.log("Unable to register")
  }
}
const getInfo = (e) =>{
  e.preventDefault();
  if (login == true){
      userLogin(e.target.Username.value,e.target.Password.value);
      localStorage.setItem("username",e.target.Username.value);
  }
  else {
      register(e.target.Username.value,e.target.Password.value);
      localStorage.setItem("username",e.target.Username.value);
  }
    window.location.assign("../../index.html")

  e.target.Username.value = '';
  e.target.Password.value = '';
}
let login = false;
const userSwitch = async() =>{

  const title = document.querySelector("#RegHeader")
  const button = document.querySelector("#SignupSwitcher")

  if (login == false){
      title.textContent = "Login";
      button.textContent = "Sign Up";
      login = true;
  }
  else{
      title.textContent = "Sign Up";
      button.textContent = "Login";
      login = false;
  }
}

signUpForm.addEventListener("submit",getInfo)