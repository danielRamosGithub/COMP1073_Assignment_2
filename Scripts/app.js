/*
 * App.js
 * Author: Daniel Costa Ramos - 200354269
 * Web	site: Mini-Portfolio
 * Description: JavaScript file to inject and control the content from the pages.
 */

//adding padding to the body, so the nav be fixed on top and bottom without problems
var body = document.body;
body.style.padding = "70px";

//fixing the logo on the nav-brand
var navBrand = document.getElementById("logo");
navBrand.style.paddingTop = "5px";

// giving more space between the social media icons in the fotter
var socialMedia = document.getElementsByClassName("socialMedia");
socialMedia[0].style.marginLeft = "80px";
socialMedia[0].style.padding = "15px";
socialMedia[1].style.padding = "15px";
socialMedia[2].style.padding = "15px";

// function to show what menu is active
$('ul.nav > li').click(function () {
    // changing background from the links in the nav
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');
});

// Variables to check which page the user is, so I can append the innerHtml withou errors.
var aboutMe = document.getElementById("aboutMe");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");

// ABOUT ME PAGE

// IF to test if the user is on ABOUT ME page.
if (aboutMe != null) {
    // Adding the image
    var personalImage = document.getElementById("personalImage");
    personalImage.innerHTML = '<img src="Assets/Images/profile-pic.jpg" alt="Personal Image">';

    // Ading a title before the short paragraph
    var whoAmI = document.getElementById("whoAmI");
    whoAmI.innerText = "Who am I?";

    // Adding the text from my short paragraph that outlines mine personal mission.
    var shortParagraph = document.getElementById("shortParagraph");
    shortParagraph.innerText = "My name is Daniel. I am a three year experienced developer, creating web systems using Java language with object orientation. Knowledge of Javascript, HTML5 and CSS3 technologies, together with Oracle DataBase. Now, I am expanding my knowledge on web development and taking a Web Desgin course at Georgian College hoping in the future to be a better developer, coder, thinker and person.";
}

// PROJECTS PAGE

// IF to test if the user is on PROJECTSs page.
if (projects != null) {
    // Project 1
    var project1captionH4 = document.getElementById("project1captionH4");
    var project1captionP = document.getElementById("project1captionP");
    project1captionH4.innerText = 'Project: Movie Poster';
    project1captionP.innerText = 'Replicate a movie poster using online HTML and CSS.';
    // Project 2
    var project2captionH4 = document.getElementById("project2captionH4");
    var project2captionP = document.getElementById("project2captionP");
    project2captionH4.innerText = 'Project: Navigation with lists';
    project2captionP.innerText = 'Sample website using lists.';
    // Project 3
    var project3captionH4 = document.getElementById("project3captionH4");
    var project3captionP = document.getElementById("project3captionP");
    project3captionH4.innerText = 'Project: Responsive design';
    project3captionP.innerText = 'Reponsive layout good for any type of device.'
}                           