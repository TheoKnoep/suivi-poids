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
	let data = myWeights.sortWeightsByDate();  
	for (let i = 0; i < 3 ; i++) {
		if (data[i]) {
			// console.log(i, data[i].kg); 	
			// console.log(new Date(data[i].date).toLocaleDateString(), ' - ', new Date(data[i].date).toLocaleTimeString()); 
			let newInsert = `<li>${new Date(data[i].date).toLocaleDateString()} &ndash; ${new Date(data[i].date).toLocaleTimeString()} : ${data[i].kg} kg</li>`; 
			historic.insertAdjacentHTML('beforeend', newInsert); 
		}
	}
}



