const eventList = [
    {"events_id": 1, "event_name": "Marathon", "event_description": "Marathon for charity", "event_place": "Florin", "event_time": "30 March 2023 7 am"},
    {"events_id": 2, "event_name": "Football Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "30 April 2023 10 am"}

]
eventList.forEach(getEventList)
async function getEventList(event) {

    // const res = await fetch("")
    // const data = await res.json()
    // return data.result()

    
    document.getElementById("event-title").innerHTML = event.event_name
    document.getElementById("event-desc").innerHTML = event.event_description  
    console.log(event)
}
//getEventList()