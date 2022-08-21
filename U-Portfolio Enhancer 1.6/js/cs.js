var s = document.getElementsByClassName("btn-md bg-orange");


s[0].addEventListener('click', toggle, true); 

function toggle() { 
	window.onbeforeunload = null;
	window.scrollTo(0, 0);
};


var t = document.getElementsByClassName("btn-md bg-blue");

t[1].addEventListener('click', toggle, true); 

function toggle() { 
	window.onbeforeunload = null;
	window.scrollTo(0, 0);
};