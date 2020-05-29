/** @format */

//init github
const GitHub = new Github();

//init ui
const ui = new UI();

//search user
const searchUser = document.getElementById('searchUser');

//search input event listerner
searchUser.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;

	if (userText !== '') {
		//make http call
		GitHub.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				//show alert
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				//show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
		console.log(userText);
	} else {
		//clear profile
		ui.clearProfile();
	}
});
