
if (document.getElementById("hide_show_confirm-password") !=null) {
	document.getElementById("hide_show_confirm-password").addEventListener("click", function(event) {
		event.preventDefault();
		var hide_show = document.getElementById("confirm-password");
		const element = document.getElementById("hide_show_confirm-password");
		if(hide_show.type === "password") {
			hide_show.type = "text";
			element.innerHTML = "visibility_off";
		}
		else {
			hide_show.type = "password";
			element.innerHTML = "visibility";
		}
	});
}
document.getElementById("hide_show_password").addEventListener("click", function(event) {
	event.preventDefault();
	var hide_show = document.getElementById("password");
	const element = document.getElementById("hide_show_password");
	if(hide_show.type === "password") {
		hide_show.type = "text";
		element.innerHTML = "visibility_off";
	}
	else {
		hide_show.type = "password";
		element.innerHTML = "visibility";
	}
});