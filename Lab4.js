var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function Register(){
var username = document.getElementById("UserName").value;
var password = document.getElementById("Password").value;
alert ("Account Created");
window.location = "success.html"; // Redirecting to other page.

}

function SignIn(){
	var username2 = document.getElementById("UserName").value;
	var password2 = document.getElementById("Password").value;
		if(username2 = username && password2 == password){
			alert ("You have signed in!")
		}

}
