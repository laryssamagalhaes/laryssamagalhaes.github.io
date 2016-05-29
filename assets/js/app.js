window.onload = function() {
	var menuIcon = document.getElementById("menuIcon");
	var closeIcon = document.getElementById("closeIcon");
	var menu = document.getElementById("menu");


	menuIcon.addEventListener("click", function(){
		menu.classList.remove("bounceOutUp");
    	menu.classList.add("animated");
    	menu.classList.add("bounceInDown");
	});

	closeIcon.addEventListener("click", function(){
    	menu.classList.add("animated");
    	menu.classList.remove("bounceInDown");
    	menu.classList.add("bounceOutUp");

	});
}