
document.getElementById("menu").addEventListener("click", function(event) {
		event.preventDefault();
		const nav = document.getElementById("nav_style");
		const menu = document.getElementById("menu");
		const body = document.getElementById("body_main");
		if(nav.style.display === "none") {
			nav.style.display = "grid";
			menu.innerHTML= "close";
			body.style.filter = "blur(4px)";
			return;
		}
		else {
			nav.style.display = "none";
			menu.innerHTML= "menu";
			body.style.filter = "blur(0px)";
			return;
		}
});