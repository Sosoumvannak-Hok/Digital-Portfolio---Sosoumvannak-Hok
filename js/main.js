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

/* ---------------------------------- DISPLAY (RES) -------------------------------------- */

function appear() {
    
}

/*

            <div class="display">
                <img src="http://via.placeholder.com/350x250" alt="">
                <div class="display_text">
                    <h1>Education</h1>
                    <p><b>Center for Advanced Research and Technology</b> (Aug. 2017-present)</p>
                    <ul>
                        <p><b><i>Web Application Development Lab </i></b>(Aug. 2017-present)</p>
                        <li>Collaborated productively with team members to develop rich websites</li>
                        <li>Developed skills in web design</li>
                        <li>Studied HTML, CSS and JavaScript</li>
                        <li>Produced and presented formal PowerPoint presentations</li>
                        <li>Guided a team to construct informational websites</li>
                    </ul>
                    <p><b>Sunnyside High</b> (Aug. 2015-present)</p>
                    <ul>
                        <li>Advanced Placement Class - Human Geography</li>
                        <li>Honor Class - Trigonometry</li>
                        <li>GATE Classes - Geometry, Algebra II, English II</li>
                        <li>GPA ???</li>
                        <p><b><i>Video Production Academy</i></b> (Aug. 2016-present)</p>
                        <li>Developed skills in video editing and recording</li>
                        <li>Experienced pre-production, production, and post-production in film making</li>
                    </ul>
                </div>
            </div>

*/

/* ---------------------------------- DISPLAY (WEB) -------------------------------------- */

function webObject(img ,name, occu, tech, soft, date, text, link) {
    this.img = img;
    this.name = name;
    this.occu = occu;
    this.tech = tech;
    this.soft = soft;
    this.date = date;
    this.text = text;
    this.link = link;
    this.displayWebObject = displayWebObject;
}

var webItems = new Array();

webItems[0] = new webObject("http://via.placeholder.com/350x250", "CSS Zen Garden", "Web Assignment", "HTML5, CSS", "Brackets", "October 2017", "???", "???");
webItems[1] = new webObject("http://via.placeholder.com/350x250", "The Red Panda", "Team Project", "HTML5, CSS", "Brackets, Adobe Photoshop", "October 2017", "???", "???");
webItems[2] = new webObject("http://via.placeholder.com/350x250", "Digital Ethics", "Class Project", "HTML5, CSS", "Brackets, Adobe Photoshop", "January 2018", "???", "???");

var webItemLength = webItems.length;
var webHTML = "";

function displayWebObject() {
    var displayWebHTML = document.getElementById("display_web_js");
    
    /*
    
            <div class="display display_css_zen_garden">
                <img src="http://via.placeholder.com/350x250" alt="">
                <div class="display_text">
                    <div class="display_title">
                        <h1>CSS Zen Garden</h1>
                        <a><i class="fa fa-close"></i></a>
                    </div>
                    <p>Occupation: Web Assignment</p>
                    <p>Technologies: <i>HTML5</i>, <i>CSS3</i></p>
                    <p>Software: <i>Brackets</i></p>
                    <p>Date: October 2017</p>
                    <br>
                    <p>While I was taking Web Development classes, I've received an assignment to experiment with CSS on a given HTML prompt. "CSS Zen Garden" is a website dedicated to CSS-based design where anyone could use their HTML code to create custom designs for it. I used Brackets as my text editor and w3schools.com as my reference tool. I've learned so much more about CSS after completing the assignment, creating a website design that I thought was too complex for me to do. I had encountered some situations where the reference tool I was using alone wasn't enough to cope with my design. I managed to get the design I was looking for through research on the Web, where there was tons of information on CSS design. Since then, my design skills for web pages have improved strikingly.</p>
                    <br>
                    <p>Link: <a href="link/zengarden/zengarden.html" target="_blank">zengarden.html</a></p>
                </div>
            </div>
    
    */
    
    webHTML = "";
    webHTML += "<div class=\"display\">";
    webHTML += "<img src=\"" + this.img + "\" alt=\"\">";
    webHTML += "<div class=\"display_text\">";
    webHTML += "<div class=\"display_title\">";
    webHTML += "<h1>" + this.name + "</h1>";
    webHTML += "<a><i class=\"fa fa-close\"></i></a>";
    webHTML += "</div>";
    webHTML += "<p>Occupation: " + this.occu + "</p>";
    webHTML += "<p>Technologies: " + this.tech + "</p>";
    webHTML += "<p>Software: " + this.soft + "</p>";
    webHTML += "<p>Date: " + this.date + "</p>";
    webHTML += "<br>";
    webHTML += "<p>" + this.text + "</p>";
    webHTML += "<br>";
    webHTML += "<p>Link: " + this.link + "</p>";
    webHTML += "</div>";
    webHTML += "</div>";
    
    displayWebHTML.innerHTML = webHTML;
}

/* ---------------------------------- DISPLAY (VID) -------------------------------------- */

function vidObject(vid, name, occu, soft, date, text) {
    this.vid = vid;
    this.name = name;
    this.occu = occu;
    this.soft = soft;
    this.date = date;
    this.text = text;
    this.displayVidObject = displayVidObject;
}

var vidItems = new Array();

vidItems[0] = new vidObject("http://via.placeholder.com/350x250", "Rush Hour 3 Swede", "Team Project", "Adobe Premiere Pro", "May 2017", "???");
vidItems[1] = new vidObject("http://via.placeholder.com/350x250", "Sunnyside Girls' Varsity Basketball", "Video Assignment", "Adobe Premiere Pro", "February 2018", "???");

var vidItemLength = vidItems.length;
var vidHTML = "";

function displayVidObject() {
    var displayVidHTML = document.getElementById("display_vid_js");
    
    /*
    
            <div class="display display_rush_hour_3_swede">
                <img src="http://via.placeholder.com/350x250" alt="">
                <div class="display_text">
                    <div class="display_title">
                        <h1>Rush Hour 3 Swede</h1>
                        <a><i class="fa fa-close"></i></a>
                    </div>
                    <p>Occupation: Team Project</p>
                    <p>Software: <i>Adobe Premiere Pro</i></p>
                    <p>Date: May 2017</p>
                    <br>
                    <p>As a final project in my first year of Video Production, I had to get into a team to produce a movie swede, a reenactment of a movie scene using no budget whatsoever. My team and I decided doing a scene from Rush Hour 3 called "He is Mi and I am Yu". We thought it was going to be a fun and easy assignment, but it became tough once we were doing the actual production. Each of us had to take on more than one role; I was the director, actor, and video editor. We also had to gather props that were free for us to grab, and it was a struggle. After the production, the final edit of the swede was submitted to my instructor and at the end of the year, my team and I received an award for best swede. It was a funny video to laugh at, and it most accurately mirrored the actual scene in Rush Hour 3. After that, I have gained experience in all the stages of video production.</p>
                </div>
            </div>
    
    */
    
    vidHTML = "";
    vidHTML += "<div class=\"display\">";
    vidHTML += "<img src=\"" + this.vid + "\" alt=\"\">";
    vidHTML += "<div class=\"display_text\">";
    vidHTML += "<div class=\"display_title\">";
    vidHTML += "<h1>" + this.name + "</h1>";
    vidHTML += "<a><i class=\"fa fa-close\"></i></a>";
    vidHTML += "</div>";
    vidHTML += "<p>Occupation: " + this.occu + "</p>";
    vidHTML += "<p>Software: " + this.soft + "</p>";
    vidHTML += "<p>Date: " + this.date + "</p>";
    vidHTML += "<br>";
    vidHTML += "<p>" + this.text + "</p>";
    vidHTML += "<br>";
    vidHTML += "<p>Link: " + this.link + "</p>";
    vidHTML += "</div>";
    vidHTML += "</div>";
    
    displayVidHTML.innerHTML = vidHTML;
}

/* ---------------------------------- DISPLAY (WRI) -------------------------------------- */

function wriObject(img, name, occu, soft, date, text) {
    this.img = img;
    this.name = name;
    this.occu = occu;
    this.soft = soft;
    this.date = date;
    this.text = text;
    this.displayWriObject = displayWriObject;
}

var wriItems = new Array();

wriItems[0] = new wriObject("survive_cambodia.jpg", "Survive Cambodia", "English Assignment", "Microsoft Word", "December 2016", "???");

var wriItemsLength = wriItems.length;
var wriHTML = "";


function displayWriObject() {
    var displayWriHTML = document.getElementById("display_wri_js");
    
    /*
    
            <div class="display display_survive_cambodia">
                <img src="img/survive_cambodia.jpg" alt="">
                <div class="display_text">
                    <div class="display_title">
                        <h1>Survive Cambodia</h1>
                        <a><i class="fa fa-close"></i></a>
                    </div>
                    <p>Occupation: English Assignment</p>
                    <p>Software: <i>Microsoft Word</i></p>
                    <p>Date: December 2016</p>
                    <br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti neque, aut consequatur sint accusantium facere! Doloremque, repellat deserunt numquam assumenda vero reiciendis dignissimos consectetur quaerat repudiandae ducimus labore, totam itaque!</p>
                </div>
            </div>
    
    */
    
    wriHTML = "";
    wriHTML += "<div class=\"display\">";
    wriHTML += "<img src=\"img/" + this.img + "\" alt=\"\">";
    wriHTML += "<div class=\"display_text\">";
    wriHTML += "<div class=\"display_title\">";
    wriHTML += "<h1>" + this.name + "</h1>";
    wriHTML += "<a><i class=\"fa fa-close\"></i></a>";
    wriHTML += "</div>";
    wriHTML += "<p>Occupation: " + this.occu + "</p>";
    wriHTML += "<p>Software: " + this.soft + "</p>";
    wriHTML += "<p>Date: " + this.date + "</p>";
    wriHTML += "<br>";
    wriHTML += "<p>" + this.text + "</p>";
    wriHTML += "<br>";
    wriHTML += "<p>Link: " + this.link + "</p>";
    wriHTML += "</div>";
    wriHTML += "</div>";
    
    displayWriHTML.innerHTML = wriHTML;
}