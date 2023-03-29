const eventList = [
    {"events_id": 1, "event_name": "2mile Marathon", "event_description": "Marathon for charity", "event_place": "Florin", "event_time": "30 March 2023 7 am"},
    {"events_id": 2, "event_name": "Football Match", "event_description": "On local youth demand", "event_place": "Florin", "event_time": "30 April 2023 10 am"},
    {"events_id": 3, "event_name": "Badminton Match", "event_description": "Match for charity", "event_place": "Florin", "event_time": "15 April 2023 10 am"}

]
var EventListCount = 0
const eventsListDiv = document.getElementById("event-list-div")
eventList.forEach(event => {
    var eventsListDivChild = document.querySelector(".event-list-div")

    if (EventListCount > 0) {
        
        var eventsListDivClone = eventsListDivChild.cloneNode(true)
        eventsListDivClone.children[1].innerHTML = event.event_name
        eventsListDiv.appendChild(eventsListDivClone)
        
    }
    else {
        EventListCount++
        eventsListDivChild.children[1].innerHTML = event.event_name
    }
    
})


