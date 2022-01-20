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
		this.pushToLocal(); 
	}

	deleteAllWeights() {
		localStorage.removeItem('weights'); 
		this.collection = []; 
	}

	importData(array) {
		for (let i in array) {
			this.collection.push(array[i]); 
		}
		this.pushToLocal(); 
	}

	pushToLocal() {
		localStorage.setItem("weights", JSON.stringify(this.collection));
	}

	sortWeightsByDate() {
		this.collection.sort(function compare (a, b) {
			if (a.date < b.date)
				return 1; 
			if (a.date > b.date)
				return -1;  
			return 0; 
		})
		return this.collection; 
	}
}