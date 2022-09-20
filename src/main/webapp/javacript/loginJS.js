/**
 * 
 */

function validate() {
	var user = loginForm.uname.value;
	var pass = loginForm.psw.value;
	if (user == "" && pass == "") {
		loginForm.uname.style.borderColor = "red";
		loginForm.psw.style.borderColor = "red";
		return false;
	} else if (user == "" && pass != "") {
		loginForm.uname.borderColor = "red";
		return false;
	} else if (user != "" && pass == "") {
		loginForm.psw.style.borderColor = "red";
		return false;
	}
	return true;
}
