const btnJob = document.getElementById("btn-job");
const eventTitle = document.getElementById("event-title");
const signUpForm  = document.querySelector(".centreDis form");
let login = false;
const userLogin = async(username,password) =>{
  options ={
      method: "GET",
      Header:{
          authorization : true
      },
      body:JSON.stringify( {
          Username : username,
          Password : password
      })
  }
  
  try{
      const resp = fetch("/user/login",options)
      if (resp.ok){
          const data = resp.json();
      }
  }
  catch {
      console.log("Unable to login")
  }
}
const register = async(username,password)=>{
  const options = {
      method : "POST",
      Header:{
          "content-Type" :"Application/json"
      },
      body : JSON.stringify({
          Username : username,
          Password : password
      })
      
  }
  try{
      const resp = await fetch ("https://council-app-backend.onrender.com/user/register",options);
      if (resp.ok){
          const data = resp.json();
      }
  }catch{
      console.log("Unable to register")
  }
}
const getInfo = (e) =>{
  e.preventDefault();
  if (login == true){
      userLogin(e.target.Username.value,e.target.Password.value);
      localStorage = ("username",e.target.Username.value);
  }
  else {
      register(e.target.Username.value,e.target.Password.value);
      localStorage = ("username",e.target.Password.value);
  }

  e.target.Username.value = '';
  e.target.Password.value = '';
}
const userSwitch = async() =>{

  const title = document.querySelector("#RegHeader")
  const button = document.querySelector("#SignupSwitcher")

  if (login == false){
      title.textContent = "Sigh Up";
      button.textContent = "Login";
      login = true;
  }
  else{
      title.textContent = "Login";
      button.textContent = "Sign Up";
      login = false;
  }
}

signUpForm.addEventListener("submit",getInfo)