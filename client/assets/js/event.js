
const DisplayEvents = (data) =>{
    let count = 0;
    data.forEach(e =>{
        const container = document.createElement("div");
        const title = document.createElement("h1");
        const content = document.createElement("p1");
        
        container.classList.add("EventBox");

        title.textContent = e.name;
        content.innerHTML = `Time: ${e.time} Place: ${e.place}<br> ${e.description}`

        container.appendChild(title);
        container.appendChild(content);
        document.getElementById("EventBody").appendChild(container)
    })
}
const getEvents  = async()=>{
    try{
        const resp = await fetch('https://council-app-backend.onrender.com/events')
        if (resp.ok){
            const data = await resp.json()
            DisplayEvents(data);
        }
    }
    catch {
        console.log("unable to get any events")
    }
}
getEvents()

