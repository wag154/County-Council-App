const baseURL = 'https://council-app-backend.onrender.com/';
var EventListCount = 0;
const cardDiv = document.getElementById('cardDiv');

const DisplayJobs = (data) => {
	data.forEach((event) => {
		var card = document.querySelector('.card');

		if (EventListCount > 0) {
			var cardClone = card.cloneNode(true);
			cardClone.children[0].children[0].innerHTML = event.title;
			cardClone.children[0].children[2].innerHTML = event.description;
			cardDiv.appendChild(cardClone);
		} else {
			EventListCount++;
			card.children[0].children[0].innerHTML = event.title;
			card.children[0].children[2].innerHTML = event.description;
		}
	});
};
const getJobs = async () => {
	try {
		const resp = await fetch(baseURL + 'jobs');
		if (resp.ok) {
			const data = await resp.json();
			DisplayJobs(data);
		}
	} catch {
		console.log('unable to get any events');
	}
};
console.log("Hello")
getJobs();
