var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var css = document.querySelector("h3");
var bdy = document.querySelector("body");


 function setGradient() {
	bdy.style.background =
		 "linear-gradient(to right, " 
		+ colorOne.value + ", " + 
		colorTwo.value + ")";
	
	css.innerText = 
		"linear-gradient(to right, " 
		+ colorOne.value + ", " 
		+ colorTwo.value + ")";
}

colorOne.addEventListener("input", setGradient)

colorTwo.addEventListener("input", setGradient)