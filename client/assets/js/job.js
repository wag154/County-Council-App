const baseURL = "http://127.0.0.1:3000/"
var EventListCount = 0
const cardDiv = document.getElementById("cardDiv")

const DisplayJobs = (data) =>{
    data.forEach(event => {
        var card = document.querySelector(".card")
       
        if (EventListCount > 0) {
            
            var cardClone = card.cloneNode(true)
            cardClone.children[0].children[0].innerHTML = event.title
            cardClone.children[0].children[2].innerHTML = event.description
            cardDiv.appendChild(cardClone)
            
        }
        else {
            EventListCount++
            card.children[0].children[0].innerHTML = event.title
            card.children[0].children[2].innerHTML = event.description
    
        }
        
    })
    
}
const getJobs  = async()=>{
    try{
        const resp = await fetch(baseURL + "jobs")
        if (resp.ok){
            const data = await resp.json()
            DisplayJobs(data);
        }
    }
    catch {
        console.log("unable to get any events")
    }
}
getJobs()

const getRandomColor = () => {
    const letters = '0123456789ABCDEF'.split('')
    var color = '#'

    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const displayJobs = async(data)=>{
  data.forEach(e=>{
    const container = document.createElement("div");
    const jobTitle = document.createElement("h1");
    const jobContent = document.createElement("p1");
    const applyButton = document.createElement("button");
    
    applyButton.onclick = ()=>{
      const username = 
    } //func here
    jobTitle.textContent = e.title;
    jobContent.innerHTML = `${e.description}`;
    applyButton.textContent = "Apply";

    container.appendChild(jobTitle);
    container.appendChild(jobContent);
    container.appendChild(applyButton);

    container.classList.add("JobBox");
    document.getElementById("JobDisplay").appendChild(container);
  })
}
const getJobs = async()=>{
  try{
   const options = {
    method:"GET"
   }
    const resp = fetch("https://council-app-backend.onrender.com/jobs",options)
    const data =  await (await resp).json()
    displayJobs(data)
  }
  catch {
    console.log("Unable to get jobs")
  }
}
getJobs()