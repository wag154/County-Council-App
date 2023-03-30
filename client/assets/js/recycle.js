const baseURL = "https://council-app-backend.onrender.com/"
const recycleList = document.getElementById('recycleList')
const modalBody = document.getElementById('modal-body')
var recycleListCount = 0


const DisplayRecycleList = (data) =>{
    data.forEach(element => {
        const listNameDiv = document.querySelector(".listNameDiv")
        if (recycleListCount > 0) {
            var listNameDivClone = listNameDiv.cloneNode(true)
            listNameDivClone.innerHTML = `<strong>${element.name}</strong><br> ${element.description}`
            listNameDivClone.id = element.id
            recycleList.appendChild(listNameDivClone)        
        }
        else {
            recycleListCount++
            listNameDiv.innerHTML = element.name
            listNameDiv.id = element.id

        }
    });
    
}
const getRecycleList  = async()=>{
    try{
        const resp = await fetch(baseURL + 'items')
        if (resp.ok){
            const data = await resp.json()
            DisplayRecycleList(data);
            console.log(data)
        }
    }
    catch {
        console.log("unable to get any events")
    }
}
getRecycleList()
function id_on_click (id) {
    getItemsByID(id)

const DisplayRecycleList = (data) => {
	data.forEach((element) => {
		const listNameDiv = document.querySelector('.listNameDiv');
		if (recycleListCount > 0) {
			var listNameDivClone = listNameDiv.cloneNode(true);
			listNameDivClone.innerHTML = element.name;
			listNameDivClone.id = element.id;
			recycleList.appendChild(listNameDivClone);
		} else {
			recycleListCount++;
			listNameDiv.innerHTML = element.name;
			listNameDiv.id = element.id;
		}
	});
};
const getRecycleList = async () => {
	try {
		const resp = await fetch(baseURL + 'items');
		if (resp.ok) {
			const data = await resp.json();
			DisplayRecycleList(data);
			console.log(data);
		}
	} catch {
		console.log('unable to get any events');
	}
};
getRecycleList();
function id_on_click(id) {
	getItemsByID(id);
}
async function getItemsByID(id) {
	try {
		const resp = await fetch(baseURL + 'items/' + id);
		if (resp.ok) {
			const data = await resp.json();
			console.log(data);
			const items = [data];
			showModelData(items);
		}
	} catch {}
}
function showModelData(items) {
	modalBody.innerHTML = null;

	items.forEach((item) => {
		console.log(item);
		var listItem = document.createElement('p');
		// listItem.innerHTML = 'The' + item.name + 'items collection - ' + randomDay() + 'every week'.
		listItem.innerHTML =
			'The ' + item.name + ' items collection - ' + randomDay() + ' every week';

		modalBody.appendChild(listItem);
		console.log(randomDay());
	});
}
const randomDay = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	return days[Math.floor(Math.random() * days.length)];
};
