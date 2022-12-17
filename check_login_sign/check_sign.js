document.getElementById("sign-button").addEventListener("click", function(event) {
	event.preventDefault();
  
	var username = document.getElementById("username");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var confirmPassword = document.getElementById("confirm-password");
  
	if (username.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
	  alert("Vui lòng điền đầy đủ thông tin!");
	  return;
	}
  
	if (password.value.length < 8) {
	  alert("Mật khẩu phải có ít nhất 8 ký tự!");
	  password.style.borderColor = 'red';
	  password.value ="";
	  confirmPassword.value ="";
	  return;
	}
  
	if (password.value !== confirmPassword.value) {
	  alert("Mật khẩu và xác nhận mật khẩu không khớp!");
	  confirmPassword.style.borderColor = 'red';
	  confirmPassword.value ="";
	  return;
	}

	if(!isValidEmail(email.value)) {
		alert("Vui lòng điền đúng định dạng email (VD: name123@gmail.com)");
		email.style.borderColor = 'red';
		return;
	}
});
  
function isValidEmail(email) {
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(email);
}
  

document.getElementById("hide_show").addEventListener("click", function(event) {
	event.preventDefault();
	var hide_show = document.getElementsByClassName("password");
	if(hide_show[0].type === "password") {
		hide_show[0].type = "text";
		hide_show[1].type = "text";
	}
	else {
		hide_show[0].type = "password";
		hide_show[1].type = "password";
	}
});
  