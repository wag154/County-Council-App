const baseURL = 'https://council-app-backend.onrender.com/';

var EventListCount = 0;
const eventsListDiv = document.getElementById('event-list-div');
document.getElementsByTagName("BODY")[0].style.display = "none";
// const DisplayEvents = (data) => {
// 	data.forEach((event) => {
// 		var eventsListDivChild = document.querySelector('.event-list-div');

// 		if (EventListCount > 0) {
// 			var eventsListDivClone = eventsListDivChild.cloneNode(true);
// 			eventsListDivClone.children[0].innerHTML = event.name;
// 			eventsListDivClone.children[1].innerHTML = event.time;
// 			eventsListDivClone.children[2].innerHTML = event.place;
// 			eventsListDivClone.children[3].innerHTML = event.description;

// 			eventsListDiv.appendChild(eventsListDivClone);
// 		} else {
// 			EventListCount++;
// 			eventsListDivChild.children[0].innerHTML = event.name;
// 			eventsListDivChild.children[1].innerHTML = event.time;
// 			eventsListDivChild.children[2].innerHTML = event.place;
// 			eventsListDivChild.children[3].innerHTML = event.description;
// 		}
// 	});
// };
const DisplayEvents = (data) => {
	data.forEach((event) => {
		var card = document.querySelector('.card');
		console.log(event)
		if (EventListCount > 0) {
			var cardClone = card.cloneNode(true);
			cardClone.children[0].children[0].innerHTML = event.name;
			cardClone.children[0].children[1].innerHTML = 'Event date - ' + event.time
			cardClone.children[0].children[2].innerHTML = 'Place - ' + event.place;
			cardClone.children[0].children[3].innerHTML = event.description;

			cardDiv.appendChild(cardClone);
		} else {
			EventListCount++;
			card.children[0].children[0].innerHTML = event.name;
			card.children[0].children[1].innerHTML = 'Event date - ' + event.time
			card.children[0].children[2].innerHTML = 'Place - ' + event.place;
			card.children[0].children[3].innerHTML = event.description;

		}
	});
};
const getEvents = async () => {
	try {
		const resp = await fetch(baseURL + 'events');
		if (resp.ok) {
			const data = await resp.json();
			console.log(data);
			DisplayEvents(data);
			document.getElementsByTagName("BODY")[0].style.display = 'block';

		}
	} catch {
		console.log('unable to get any events');
	}
};
getEvents();
