const baseURL = "http://127.0.0.1:3000/"

var EventListCount = 0
const eventsListDiv = document.getElementById("event-list-div")

const DisplayEvents = (data) =>{
    data.forEach(event => {
        var eventsListDivChild = document.querySelector(".event-list-div")
    
        if (EventListCount > 0) {
            
            var eventsListDivClone = eventsListDivChild.cloneNode(true)
            eventsListDivClone.children[0].innerHTML = event.name
            eventsListDivClone.children[1].innerHTML = event.time
            eventsListDivClone.children[2].innerHTML = event.place
            eventsListDivClone.children[3].innerHTML = event.description

            eventsListDiv.appendChild(eventsListDivClone)
            
        }
        else {
            EventListCount++
            eventsListDivChild.children[0].innerHTML = event.name
            eventsListDivChild.children[1].innerHTML = event.time
            eventsListDivChild.children[2].innerHTML = event.place
            eventsListDivChild.children[3].innerHTML = event.description
        }
        
    })
}
const getEvents  = async()=>{
    try{
        const resp = await fetch( baseURL + 'events')
        if (resp.ok){
            const data = await resp.json()
            console.log(data)
            DisplayEvents(data);
        }
    }
    catch {
        console.log("unable to get any events")
    }
}
getEvents()


