const btnJob = document.getElementById("btn-job");
const eventTitle = document.getElementById("event-title");
const signUpForm  = document.querySelector(".centreDis form");

let ExistsChecker = false;
const userLogin = async(Username,Password) =>{
  try{
    const resp = await fetch(`https://council-app-backend.onrender.com/user/login/${Username}&${Password}`)
      alert("Logged in!")
      if (resp.ok){
          const data = await resp.json();
          console.log(data)
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
      const resp = await fetch ("https://council-app-backend.onrender.com/user/register",options);
      if (resp.ok){
        const data = await resp.json();
        if (data == "Already Exists"){
          alert("Please enter another username")
          ExistsChecker = true;

        }
        else{
          alert("Successfully registered!")
        }
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
  if (ExistsChecker == false){
    //window.location.assign("../../index.html")
    console.log()
  }

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