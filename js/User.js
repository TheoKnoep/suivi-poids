class User {
	constructor() {
		this.userInfos = localStorage.getItem('userInfos') ? JSON.parse(localStorage.getItem("userInfos")) : []; 
	}

	defineUserInfos(name, size) {
		this.userInfos.push({ name: name, size: size }); 
		localStorage.setItem('userInfos', JSON.stringify(this.userInfos)); 
	}
}