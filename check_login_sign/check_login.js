document.getElementById("login-button").addEventListener("click", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value === "" || password.value === "") {
    alert("Vui lòng nhập tài khoản và mật khẩu!");
    username.style.borderColor= 'red';
    return;
  }

  if (password.value.length < 8) {
    alert("Mật khẩu phải có ít nhất 8 ký tự!");
    password.style.borderColor ='red';
    password.value = "";
    return;
  }

});

document.getElementById("hide_show").addEventListener("click", function(event) {
	
	event.preventDefault();
	var hide_show = document.getElementById("password");
	if(hide_show.type === "password") {
		hide_show.type = "text";
	}
	else {
		hide_show.type = "password";
	}
});
  
