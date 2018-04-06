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

/* -------------------------------------- CARDS ------------------------------------------ */

function card_hover_up(type) {
    type.classList.remove("card_hover_down");
    type.classList.add("card_hover_up");
}

function card_hover_down(type) {
    type.classList.remove("card_hover_up");
    type.classList.add("card_hover_down");
}

/* --------------------------------- MINI SLIDESHOW -------------------------------------- */

var currentMiniSlide = 1;
var totalMiniSlides = document.getElementsByClassName("mini_slides");
var totalMiniSlide = document.getElementsByClassName("mini_slide");
var totalMiniSlideCZG = document.getElementsByClassName("mini_slide_css_zen_garden");
var totalMiniSlideTRP = document.getElementsByClassName("mini_slide_the_red_panda");
var totalMiniSlideDE = document.getElementsByClassName("mini_slide_digital_ethics");

function prevMiniCZG() {
    
    if (currentMiniSlide > 1) {
        currentMiniSlide--;
    } else {
        currentMiniSlide = totalMiniSlideCZG.length;
    }
    
    changeMiniSlideCZG(currentMiniSlide);
}

function nextMiniCZG() {
    if (currentMiniSlide < totalMiniSlideCZG.length) {
        currentMiniSlide++;
    } else {
        currentMiniSlide = 1;
    }
    
    changeMiniSlideCZG(currentMiniSlide);
}

function changeMiniSlideCZG(num) {
    for (i = 0; i < totalMiniSlideCZG.length; i++) {
        totalMiniSlideCZG[i].style.display = "none";
    }
    
    totalMiniSlideCZG[num - 1].style.display = "block";
}

function prevMiniTRP() {
    if (currentMiniSlide > 1) {
        currentMiniSlide--;
    } else {
        currentMiniSlide = totalMiniSlideTRP.length;
    }
    
    changeMiniSlideTRP(currentMiniSlide);
}

function nextMiniTRP() {
    if (currentMiniSlide < totalMiniSlideTRP.length) {
        currentMiniSlide++;
    } else {
        currentMiniSlide = 1;
    }
    
    changeMiniSlideTRP(currentMiniSlide);
}

function changeMiniSlideTRP(num) {
    for (i = 0; i < totalMiniSlideTRP.length; i++) {
        totalMiniSlideTRP[i].style.display = "none";
    }
    
    totalMiniSlideTRP[num - 1].style.display = "block";
}

function prevMiniDE() {
    if (currentMiniSlide > 1) {
        currentMiniSlide--;
    } else {
        currentMiniSlide = totalMiniSlideDE.length;
    }
    
    changeMiniSlideDE(currentMiniSlide);
}

function nextMiniDE() {
    if (currentMiniSlide < totalMiniSlideDE.length) {
        currentMiniSlide++;
    } else {
        currentMiniSlide = 1;
    }
    
    changeMiniSlideDE(currentMiniSlide);
}

function changeMiniSlideDE(num) {
    for (i = 0; i < totalMiniSlideDE.length; i++) {
        totalMiniSlideDE[i].style.display = "none";
    }
    
    totalMiniSlideDE[num - 1].style.display = "block";
}

function disappearTotalMiniSlides() {
    for (i = 0; i < totalMiniSlides.length; i++) {
        totalMiniSlides[i].style.display = "none";
    }
}

function disappearTotalMiniSlide() {
    for (i = 0; i < totalMiniSlide.length; i++) {
        totalMiniSlide[i].style.display = "none";
    }
}

function appearMiniSlideshow(type) {
    
    resetIndex();
    
    mini_slideshow = document.getElementById("mini_slideshow");
    mini_slideshow.style.display = "block";
    
    disappearTotalMiniSlides();
    disappearTotalMiniSlide();
    
    document.getElementsByClassName(type)[0].style.display = "block";
    
    switch (type) {
        case "mini_slides_css_zen_garden":
            document.getElementsByClassName("mini_slide_css_zen_garden")[0].style.display = "block";
            break;
        case "mini_slides_the_red_panda":
            document.getElementsByClassName("mini_slide_the_red_panda")[0].style.display = "block";
            break;
        case "mini_slides_digital_ethics":
            document.getElementsByClassName("mini_slide_digital_ethics")[0].style.display = "block";
            break;
        default:
            console.log("error");
    }
    
    //window.scrollTo(0, 1700);
}

/* ---------------------------- DISPLAY / READ / VIDEO ----------------------------------- */

var totalDisplay = document.getElementsByClassName("display");
var totalRead = document.getElementsByClassName("read");
var totalVideo = document.getElementsByClassName("video");

function disappearTotalRead() {
    for (i = 0; i < totalRead.length; i++) {
        totalRead[i].style.display = "none";
    }
}

function disappearTotalVideo() {
    for (i = 0; i < totalVideo.length; i++) {
        totalVideo[i].style.display = "none";
    }
}

function appearDisplay(type) {
    
    read_container = document.getElementById("read_container");
    
    for (i = 0; i < totalDisplay.length; i++) {
        totalDisplay[i].style.display = "none";
    }
    
    disappearTotalMiniSlides();
    disappearTotalMiniSlide();
    disappearTotalRead();
    disappearTotalVideo();
    
    document.getElementsByClassName(type)[0].style.display = "flex";
    
    if (type == 'display_lor' || type == 'display_survive_cambodia' || type == 'display_rpo') {
        read_container.style.display = "block";
    } else {
        if (read_container !== null) {
            read_container.style.display = "none";
        }
    }
    
    //window.scrollTo(0, 1000);
}

function appearRead(type) {
    disappearTotalRead();
    document.getElementsByClassName(type)[0].style.display = "flex";
    
    //window.scrollTo(0, 1600);
}

function appearVideo(type) {
    disappearTotalVideo();
    document.getElementsByClassName(type)[0].style.display = "block";
    
    //window.scrollTo(0, 1500);
}

/* ------------------------------------- FORM -------------------------------------------- */

function focusInput(input) {
    input.style.backgroundColor = "Yellow";
}

function blurInput(input) {
    input.style.backgroundColor = "White";
}

function checkName(name) {
    
    name = name.trim();
    
    if (name.length == 0) {
        console.log("Please enter your name.");
        document.getElementsByName("inputName")[0].style.borderColor = "#ff0000";
    } else {
        document.getElementsByName("inputName")[0].style.borderColor = "#000000";
        document.getElementsByName("inputName")[0].style.backgroundColor = "#90EE90";
    }
}

function checkEmail(email) {
    if (!email.includes("@") || !email.includes(".") || email.length == 0) {
        console.log("Please enter a valid email address.");
        document.getElementsByName("inputEmail")[0].style.borderColor = "#ff0000";
    } else {
        document.getElementsByName("inputEmail")[0].style.borderColor = "#000000";
        document.getElementsByName("inputEmail")[0].style.backgroundColor = "#90EE90";
    }
}

function checkMessage(message) {
    
    message = message.trim();
    
    if (message.length == 0) {
        console.log("Please enter a message.");
        document.getElementsByName("inputMessage")[0].style.borderColor = "Red";
    } else {
        document.getElementsByName("inputMessage")[0].style.borderColor = "#000000";
        document.getElementsByName("inputMessage")[0].style.backgroundColor = "#90EE90";
    }
}

function submitForm() {
    myForm = document.getElementsByName("myForm")[0];
    inputName = document.getElementsByName("inputName")[0];
    inputEmail = document.getElementsByName("inputEmail")[0];
    inputMessage = document.getElementsByName("inputMessage")[0];
    
    var displayForm = "";
    
    if (inputName.value.length == 0 || inputEmail.value.length == 0 || inputMessage.value.length == 0) {
        displayForm += "<p style=\"text-align: center;\">Uh ho. It seems like you're missing something.</p>";
        
        if (inputName.value.trim().length == 0) {
            document.getElementsByName("inputName")[0].style.borderColor = "Red";
        }
        
        if (inputEmail.value.length == 0) {
            document.getElementsByName("inputEmail")[0].style.borderColor = "Red";
        }
        
        if (inputEmail.value.trim().length == 0) {
            document.getElementsByName("inputMessage")[0].style.borderColor = "Red";
        }
    } else {
        displayForm += "<p>Name: " + inputName.value + "</p>";
        displayForm += "<br>";
        displayForm += "<p>Email: " + inputEmail.value + "</p>";
        displayForm += "<br>";
        displayForm += "<p>Your message to me:</p>";
        displayForm += "<p style=\"padding: 10px\">" + inputMessage.value + "</p>";
        displayForm += "<br>";
        displayForm += "<br>";
        displayForm += "<p style=\"text-align: center;\">Thanks for the message! I'll be in touch whenever I can.</p>"; 
    }
    
    document.getElementById("formInfo").innerHTML = displayForm;
}

/* ----------------------------------- UNIVERSAL ----------------------------------------- */

function resetIndex() {
    currentMiniSlide = 1;
}

function closeButton(type) {
    disappearTotalMiniSlides();
    disappearTotalMiniSlide();
    resetIndex();
    disappearTotalRead();
    disappearTotalVideo();
    document.getElementsByClassName(type)[0].style.display = "none";
    document.getElementById("mini_slideshow").style.display = "none";
}