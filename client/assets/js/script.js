
const btnEvents = document.getElementById("btn-events")
btnEvents.addEventListener('click', () => {
        window.location.href = "./assets/views/events.html"

})

const btnRecycle = document.getElementById("btn-recycle")
if(btnRecycle) {
    btnRecycle.addEventListener('click', () => {
        window.location.href = "./assets/views/recycles.html"
    })
}

const btnJob = document.getElementById("btn-job")
if(btnJob) {
    btnJob.addEventListener('click', () => {
        window.location.href = "./assets/views/jobs.html"
    })
}

async function getEventList() {

    // const res = await fetch("")
    // const data = await res.json()
    // return data.result()

    const eventTitle = document.getElementById("event-title")
    eventTitle.innerHTML = "Join new football team"   
}
//getEventList()
// const listOfCategories = ["glass","plastic","electronics","paper","metal","ceramic","rubber"]
// let categoryListIndex = 0;
// GetByCategory(listOfCategories[categoryListIndex])
// const DisplayCategories = (data) =>{
//   data.forEach(e =>{
//     const btn = document.createElement("button")
//     btn.style = "Whatever"//add styling here
//     const btnHeader = document.createElement("h2");
//     const btnDescription = document.createElement("p1");
//     btnHeader.textContent = e["ItemName"];
//     btnDescription.textContent = e["ItemDescription"];
//     btn.appendChild(btnHeader);
//     btn.appendChild(btnDescription);
//   })
//  $(`${listOfCategories[categoryListIndex]}`).appendChild(btn)
// }
// const GetByCategory = async(category) =>{
// try{
// const resp = await fetch ("/recycling/category",category)
// if (resp.ok){
//   const data = resp.json();
//   DisplayCategories(data);
// }}
// catch {
//   console.log("Unable to fetch by category")
// }}

