/* ------------------------------------- SIDEBAR ----------------------------------------- */

var toggle_sidebar = false;

function toggleSidebar() {
    
    sidebar = document.getElementById("sidebar");
    
    if (toggle_sidebar == true) {
        sidebar.setAttribute("class", "sidebar sidebar_disappearleft");
        toggle_sidebar = false;
    } else {
        sidebar.setAttribute("class", "sidebar sidebar_appearleft");
        toggle_sidebar = true;
    }
}

function toggleSidebarDropdown() {
    
    sidebar_dropdown = document.getElementById("sidebar_dropdown");
    
    if (sidebar_dropdown.style.display === "block") {
        sidebar_dropdown.style.display = "none";
    } else {
        sidebar_dropdown.style.display = "block";
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
    
    read_container = document.getElementById("read_container");
    
    for (i = 0; i < totalDisplay.length; i++) {
        totalDisplay[i].style.display = "none";
    }
    
    document.getElementsByClassName(type)[0].style.display = "flex";
    
    if (type == 'display_lor' || type == 'display_survive_cambodia') {
        read_container.style.display = "block";
    } else {
        disappearTotalRead();
        
        if (read_container !== null) {
            read_container.style.display = "none";
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