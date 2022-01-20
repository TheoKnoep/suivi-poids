let myWeights = new Weights(); 

window.addEventListener('DOMContentLoaded', () => {
	displayHistoric(); 
})



const formWeight = document.querySelector('#weight-form'); 


formWeight.addEventListener('submit', (event) => {
	event.preventDefault(); 
	let data = new FormData(formWeight); 
	console.log(data.weight); 

	for (let [key, value] of data) {
		console.log(key, value); 
		myWeights.addWeight(value); 
	}
	document.querySelector('.form').innerHTML = `<div class="card-panel green accent-2">Enregistré !</div>`; 
})



const historic = document.querySelector('#historic'); 
function displayHistoric() {
	let data = myWeights.retrieveWeight(); 
	console.log(data); 
	if (data.length < 4) {return}
	for (let i = data.length-1; i > data.length-4; i--) {
		console.log(i, data[i].kg); 
		console.log(new Date(data[i].date).toLocaleDateString(), ' - ', new Date(data[i].date).toLocaleTimeString()); 
		let newInsert = `<li>${new Date(data[i].date).toLocaleDateString()} &ndash; ${new Date(data[i].date).toLocaleTimeString()} : ${data[i].kg} kg</li>`; 
		historic.insertAdjacentHTML('beforeend', newInsert); 
	}
}




const exportBtn = document.getElementById('export-data'); 
exportBtn.addEventListener('click', event => {
	console.log(JSON.stringify( myWeights.retrieveWeight() ));
	let exported = JSON.stringify( myWeights.retrieveWeight() ); 
	document.querySelector('main').insertAdjacentHTML('beforeend', exported); 
})