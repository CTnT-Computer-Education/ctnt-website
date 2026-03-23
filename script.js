// MOBILE MENU
function toggleMenu(){
const nav = document.getElementById("nav");
nav.classList.toggle("show");
}


// COUNTER ANIMATION ON SCROLL
const counters = document.querySelectorAll(".counter");

function startCounters(){

counters.forEach(counter => {

const target = parseInt(counter.getAttribute("data-target"));
let count = 0;

const increment = target / 100;

function updateCounter(){

count += increment;

if(count < target){
counter.innerText = Math.floor(count);
setTimeout(updateCounter,15);
}else{
counter.innerText = target + "+";
}

}

updateCounter();

});

}


// SCROLL TRIGGER
const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

if(entries[0].isIntersecting){

startCounters();
observer.disconnect();

}

});

observer.observe(statsSection);



// COURSE SLIDER
document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider-container");

let index = 0;
let interval;

const totalSlides = slides.length;


/* UPDATE SLIDE */

function updateSlider(){

track.style.transform = "translateX(-" + (index * 100) + "%)";

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");

}


/* NEXT BUTTON */

nextBtn.addEventListener("click", function(){

index++;

if(index >= totalSlides){
index = 0;
}

updateSlider();

});


/* PREVIOUS BUTTON */

prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = totalSlides - 1;
}

updateSlider();

});


/* DOT NAVIGATION */

dots.forEach((dot, i) => {

dot.addEventListener("click", function(){

index = i;
updateSlider();

});

});


/* AUTO SLIDE */

function startSlider(){

interval = setInterval(function(){

index++;

if(index >= totalSlides){
index = 0;
}

updateSlider();

},5000);

}


/* AUTO PAUSE ON HOVER */

slider.addEventListener("mouseenter", function(){

clearInterval(interval);

});


slider.addEventListener("mouseleave", function(){

startSlider();

});


startSlider();

});

function filterCourses(category){

const cards = document.querySelectorAll(".course-card");
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => btn.classList.remove("active"));
event.target.classList.add("active");

cards.forEach(card => {

if(category === "all"){
card.style.display = "block";
}
else if(card.classList.contains(category)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}

function openCertificate(){
document.getElementById("certificateModal").style.display="flex";
}

function closeCertificate(){
document.getElementById("certificateModal").style.display="none";
}

/* DISABLE RIGHT CLICK */

document.addEventListener("contextmenu", function(e){
if(e.target.tagName === "IMG"){
e.preventDefault();
}
});

function openCertificate(){
document.getElementById("certificateModal").style.display="flex";
}

function closeCertificate(){
document.getElementById("certificateModal").style.display="none";
}

/* ---------------------------------------------------------------- */

/* -----------------SCRIPT FOR COURSES.HTML------------------------ */

/* ---------------------------------------------------------------- */

function filterCourses(category){

const courses = document.querySelectorAll(".course-card");

courses.forEach(course => {

if(category === "all"){
course.style.display = "block";
}
else if(course.classList.contains(category)){
course.style.display = "block";
}
else{
course.style.display = "none";
}

});

}