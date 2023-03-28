const btnEvents = document.getElementById("btn-events");
const btnRecycle = document.getElementById("btn-recycle");
const btnJob = document.getElementById("btn-job");
const eventTitle = document.getElementById("event-title");
const EventDesc = document.querySelector("#event-title p");
const signUpForm  = document.querySelector(".centreDis form");
const recyclingParent = document.querySelector("#displayTest")

let login = false;
let currentDotMenuIndex = 0;


const getInfo = (e) =>{
    e.preventDefault();

    if (login == true){
        userLogin(e.target.Username.value,e.target.Password.value);
    }
    else {
        register(e.target.Username.value,e.target.Password.value);
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
        const resp = await fetch ("",options);
        if (resp.ok){
            const data = resp.json();
        }
    }catch{
        console.log("Unable to register")
    }
}
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
            //function here
        }
    }
    catch {
        console.log("Unable to login")
    }
}
const displayEvents = async(data)=>{
    let EventName = [];
    let EventDescription = [];
    let eventPlace = [];
    let eventTime = [];

    data.forEach(element => {
        EventName.push(element.event_name);
        EventDescription.push(element.Event_description);
        eventPlace.push(element.event_place);
        eventTime.push(element.event_time);
    });
    if (!currentDotMenuIndex){
        console.log("CurrentDotMenuIndex not defined")
        return
    }
    eventTitle.textContent = EventName[currentDotMenuIndex];
    EventDesc.innerHTML = `${EventDescription[currentDotMenuIndex]} <br> Time :${eventTime[currentDotMenuIndex]} <br> Place: ${eventPlace[currentDotMenuIndex]}` ;
}
const getEvents = async()=>{
    try{
       const resp = await fetch("/events/")
       if (resp.ok){
        const data = await resp.json();
        displayEvents(data)
       }
    }
    catch {
        console.log("unable to get events")
        alert("Unable to get events")
    }
}

async function getEventList(){
    try{
        const res = await fetch("")
        const data = await res.json()
        return data.result()
    }
    catch {
        console.log("Unable to get event list")
    }
}

signUpForm.addEventListener("submit",getInfo)
btnEvents.addEventListener('click', () => {
window.location.href = "./assets/views/events.html"
})
btnRecycle.addEventListener('click', () => {
    window.location.href = "./assets/views/recycles.html"
})
btnJob.addEventListener('click', () => {
    window.location.href = "./assets/views/jobs.html"
})
eventTitle.innerText = "Join new football team"