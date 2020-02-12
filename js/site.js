//Color Flashing Script

var title = document.getElementById('title-name');
var h = 0;
var s = "69%";
var l = "45%";
var color = "hsl(" + h + ", " + s + ", " + l + ")";
var repeater;
var r = 0;

title.onmouseover = () =>{
	repeater = setInterval("flashColor()", 10);
}
title.onmouseout = () =>{
	clearInterval(repeater);
	title.style.color = "black";
}

var map = (num, in_min, in_max, out_min, out_max) =>{
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var flashColor = () =>	{
	r += 0.1;
	h = map(Math.sin(r), -1, 1, 200, 280);
	color = "hsl(" + h + ", " + s + ", " + l + ")";
	title.style.color = color;
}



// Navigation Menu Class Editing

var dropMenu = () =>{
	var nav = document.getElementsByClassName('mobile');

	for (var i = 0; i < nav.length; i++) {
		if(nav[i].style.display === "block") {
			nav[i].style.display = "none";
		} else{
			nav[i].style.display = "block";
		}
	}
	

	console.log("menu clicked");
}

