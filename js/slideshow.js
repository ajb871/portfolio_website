var slideIndex = 1;
//var n;

/*plusSlides = (n) => {
	clearInterval(myTimer);
	this.showSlides(slideIndex += n);
	if (n = -1){
		myTimer 
	}
}*/

/*plusSlides = () =>{
	slideIndex ++;
	this.showSlides(slideIndex);
}*/


currentSlide = (n) =>{
	this.showSlides(slideIndex = n);
	//reset timer here
}

showSlides = () => {

	console.log(slideIndex);
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	//if (slideIndex < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display="none";
	}

	for(i=0; i < dots.length; i ++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

	slideIndex ++;
	if (slideIndex > 2) {slideIndex = 1}
}

setInterval(showSlides, 9000);