/* ------------------------------------- SLIDEBAR ---------------------------------------- */

function toggleSidebar() {
    
    sidebar = document.getElementById("sidebar");
    
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

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

/* --------------------------------- DISPLAY & READ -------------------------------------- */

var totalDisplay = document.getElementsByClassName("display");
var totalRead = document.getElementsByClassName("read");

function disappearTotalRead() {
    for (i = 0; i < totalRead.length; i++) {
        totalRead[i].style.display = "none";
    }
}

function appearDisplay(type) {
    for (i = 0; i < totalDisplay.length; i++) {
        totalDisplay[i].style.display = "none";
    }
    
    document.getElementsByClassName(type)[0].style.display = "flex";
    
    if (type == 'display_lor') {
        document.getElementById("read_container").style.display = "block";
    } else {
        disappearTotalRead();
        
        if (document.getElementById("read_container") !== null) {
            document.getElementById("read_container").style.display = "none";
        }
    }
}

function appearRead(type) {
    disappearTotalRead();
    document.getElementsByClassName(type)[0].style.display = "flex";
}

function closeButton(type) {
    disappearTotalRead();
    document.getElementsByClassName(type)[0].style.display = "none";
}