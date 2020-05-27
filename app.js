/** @format */

//init github
const GitHub = new Github();

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
			} else {
				//show profile
			}
		});
		console.log(userText);
	} else {
		//clear profile
	}
});
