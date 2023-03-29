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
        
const DisplayJobs = async(data)=>{
    try{
        data.forEach(e=>{
           const jobContainer = document.createElement("div") 
           const JobHeader = document.createElement("h1");
           const jobDescription = document.createElement("p1");
           const applyBtn = document.createElement("button")
/*
            jobConatiner.style = "style";
            JobHeader.style = "style";
            jobDescription.style = "style";
            applyBtn.style = "style"
*/
           jobDescription.innerHTML = `${e[job_pay]}<br>${e.job_description}<br>${e.job_contactInfo}`;
           jobContainer.appendChild(JobHeader);
           jobContainer.appendChild(jobDescription);
           jobContainer.appendChild(applyBtn);
           //add parent container here by ID
           //$("ParentIDHere").appendChild(jobContainer)
        })
    }
    catch {
        throw "unable to display jobs"
    }

}

const getAllCurrentJobs = async() =>{
    try{
        const resp = fetch ("/jobs/")
        if (resp.ok){
            const data = resp.JSON();
            DisplayJobs(data)
        }
    }
    catch {
        console.log("Unable to get all current jobs")
    }
}
const makeToken = async(filename) =>{
    if (localStorage.getItem("username") != null){
        options = {
            headers:{
                "authorization": "MKTK"
            },
            body:json.stringify({
                Username:username
            })
        }
        const resp = await fetch ("/CreateToken",options);
        if (resp.ok){
            const data = resp.json();
            localStorage.setItem("token",data);
            localStorage.setItem("pageReturner",`../views/${filename}`)
        }
    }
    else {
        console.log("User has to login")
        window.location.assign("../views/signup.html")
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
        localStorage.setItem("username",e.target.Password.value);
    }
    if (localStorage.getItem("pageReturner") != null){
        window.location.assign(`../views/${localStorage.getItem("pageReturner")}`)
    }
    else {
        window.location.assign("../../index.js")
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
        const resp = await fetch ("/user/register",options);
        if (resp.ok){
            const data = resp.json();
            localStorage.setItem("username",data.username);
            return
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

            localStorage.setItem("username",data.username)
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