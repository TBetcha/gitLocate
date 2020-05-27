/** @format */

class Github {
	constructor() {
		this.client_id = 'ea79d0b63582f37fc31d';
		this.client_secret = 'db96edd928afaec220ec482f9b94e482cf92ecc8';
	}

	//get 1. users and 2. repos
	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();

		return {
			profile,
		};
	}
}
