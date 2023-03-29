
const eventList = [
    {"events_id": 1, "event_name": "2mile Marathon", "event_description": "Marathon for charity", "event_place": "Florin", "event_time": "30 March 2023 7 am"},
    {"events_id": 2, "event_name": "Football Match", "event_description": "On local youth demand", "event_place": "Florin", "event_time": "30 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"}
]
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

