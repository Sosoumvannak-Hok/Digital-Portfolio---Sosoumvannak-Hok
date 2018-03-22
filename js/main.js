/* ------------------------------------- SLIDESHOW --------------------------------------- */

var currentSlide = 1;
var totalSlide = document.getElementsByClassName("slide");

function prev() {
    if (currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = totalSlide.length;
    }
    changeSlide(currentSlide);
}

function next() {
    if (currentSlide < totalSlide.length) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    changeSlide(currentSlide);
}

function changeSlide(num) {
    for (i = 0; i < totalSlide.length; i++) {
        totalSlide[i].style.display = "none";
    }
    totalSlide[num - 1].style.display = "block";
}

/* ------------------------------------- DISPLAY ----------------------------------------- */

var totalDisplay = document.getElementsByClassName("display");

function appearDisplay(type) {
    
    for (i = 0; i < totalDisplay.length; i++) {
        totalDisplay[i].style.display = "none";
    }
    
    console.log(type);
    document.getElementsByClassName(type)[0].style.display = "flex";
}
