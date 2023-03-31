const baseURL = 'https://council-app-backend.onrender.com/';
const recycleList = document.getElementById('recycleList');
const modalBody = document.getElementById('modal-body');
var recycleListCount = 0;
document.getElementsByTagName('BODY')[0].style.display = 'none';

const storeLink= async(id)=>{
if (!localStorage.getItem("username")){
	window.location.assign("../views/sighnup.html")
}
try{
	const resp = await fetch(baseURL+"/user/linkItem"+id+localStorage.getItem("username"))
	if(resp.ok){
		const data = await resp.json()
	}
}
catch{
	console.log("Unable to link items")
}
}
const DisplayRecycleList = (data) => {

	data.forEach((event) => {
		var card = document.querySelector('.card');
		if (recycleListCount > 0) {
			var cardClone = card.cloneNode(true);
			cardClone.children[0].children[0].innerHTML = event.category;
			cardClone.children[0].children[1].innerHTML = event.description;
			cardClone.children[0].children[3].name = event.category;
			recycleList.appendChild(cardClone);
		} else {
			recycleListCount++;
			card.children[0].children[0].innerHTML = event.category;
			card.children[0].children[1].innerHTML = event.description;
			card.children[0].children[3].name = event.category;
		}
	});
};
const getRecycleList = async () => {
	try {
		const resp = await fetch(baseURL + 'items');
		if (resp.ok) {
			const data = await resp.json();
			var tempCate = []
			const filteredData = data.filter((event) => {
				if (!tempCate.includes(event.category)) {
					tempCate.push(event.category)
					return event
				}
			});
			DisplayRecycleList(filteredData);
			document.getElementsByTagName("BODY")[0].style.display = "block";

		}
	} catch {
		console.log('unable to get any events');
	}
};
getRecycleList();
function id_on_click(name) {
	getItemsByCategory(name);
}
async function getItemsByCategory(category) {
	try {
		const resp = await fetch(baseURL + 'items/' + category);
		if (resp.ok) {
			const data = await resp.json();
			showModelData(data, category);
		}
	} catch {}
}
function showModelData(items, category) {
	modalBody.innerHTML = null;
	document.querySelector('.modal-title').innerHTML = category;
	var categoryTag = document.createElement('p');
	categoryTag.innerHTML =
		category + ' items collection - ' + randomDay() + ' every week';
	modalBody.appendChild(categoryTag);
	const h6 = document.createElement('h6');
	h6.innerHTML = 'Here are some of the ' + category + ' items';
	h6.classList.add('mt-3');
	modalBody.appendChild(h6);
	items.forEach((item) => {
		var listItem = document.createElement('li');
		listItem.innerHTML = item.name;
		modalBody.appendChild(listItem);
	});
}
const randomDay = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	return days[Math.floor(Math.random() * days.length)];
};

