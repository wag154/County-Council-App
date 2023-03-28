
const btnEvents = document.getElementById("btn-events")
btnEvents.addEventListener('click', () => {
    window.location.href = "./assets/views/events.html"
})

const btnRecycle = document.getElementById("btn-recycle")
btnRecycle.addEventListener('click', () => {
    window.location.href = "./assets/views/recycles.html"
})

const btnJob = document.getElementById("btn-job")
btnJob.addEventListener('click', () => {
    window.location.href = "./assets/views/jobs.html"
})
async function getEventList() {

    const res = await fetch("")
    const data = await res.json()
    return data.result()

}

const eventTitle = document.getElementById("event-title")
eventTitle.innerText = "Join new football team"