const btnJob = document.getElementById("btn-job");
const eventTitle = document.getElementById("event-title");
const signUpForm  = document.querySelector("#disForm");
 // 127.0.0.1:3000
 //https://council-app-backend.onrender.com
let ExistsChecker = false;
const userLogin = async(Username,Password) =>{
  try{
    const resp = await fetch(`https://council-app-backend.onrender.com/user/login${Username}&${Password}`)
      confirm("Logged in!")
      if (resp.ok){
          const data = await resp.json();
          console.log(data)
        }
  }
  catch {
      console.log("Unable to login")
  }
}
async function register(username,password){
    const data = {
        username:username,
        password:password
    }
    const options = {
      method : "POST",
      headers:{
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
          ExistsChecker = false;
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
setTimeout(() => {
  ExistsCheckerFunc() 
}, 1000);
  e.target.Username.value = '';
  e.target.Password.value = '';
}
let login = false;
const ExistsCheckerFunc =()=>{
  if (ExistsChecker === false){
    console.log("Yes")
    window.location.assign("../../index.html")
  }
}
const userSwitch = async() =>{

  const title = document.querySelector("#RegHeader")
  const button = document.querySelector("#SignupSwitcher");
  const anotherButton = document.querySelector("#submitBtn")
  if (login == false){
      title.textContent = "Login";
      button.textContent = "Want to Sign Up?";
      anotherButton.value = "Login"
      login = true;
  }
  else{
      title.textContent = "Sign Up";
      button.textContent = "Want to Login?";
      anotherButton.value = "Sigh Up"
      login = false;
  }
}

if (signUpForm) {
  signUpForm.addEventListener("submit",getInfo)
}
