class Weights {
	constructor() {
		this.collection = localStorage.getItem('weights') ? JSON.parse(localStorage.getItem("weights")) : [];
	}

	displayWeights() {
		let display = [...this.collection]; 
		console.log(display); 
	}

	retrieveWeight() {
		return JSON.parse(localStorage.getItem('weights')); 
	}

	addWeight(weight) {
		this.collection.push({
			kg: weight,
			date: new Date()
		})
		localStorage.setItem("weights", JSON.stringify(this.collection));
	}

	deleteAllWeights() {
		localStorage.removeItem('weights'); 
		this.collection = []; 
	}
}