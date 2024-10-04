const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
let body = document.querySelector("body");
let topBaneer = document.querySelector(".top-banner");
let navBar = document.querySelector(".navbar");
let navNew = document.querySelector(".nav-new");
let cross = document.querySelector(".cross");

hamburger.addEventListener('click', () => {
    navNew.style.display = "flex";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
});

cross.addEventListener("click",()=>{
  navNew.style.display = "none";
  body.style.height = "auto";
  body.style.overflowY = "auto";
 })

function closeBanner() {
    const banner = document.querySelector('.top-banner');
    banner.style.display = 'none'; // Hide the banner
}
const words = ["Data Structures in C++", "Data Structures in Java.", "Web Development."];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.getElementById('typing-text');
const cursorElement = document.getElementById('cursor');

// Adjust typing and deleting speed
const typingSpeed = 300; // Typing speed (slower)
const deletingSpeed = 150; // Deleting speed
const delayBeforeStartDeleting = 1500; // Delay before deleting starts
const delayBeforeNextWord = 700; // Delay before starting next word

function typeEffect() {
  const word = words[wordIndex];
  
  // Check if we're deleting or typing
  if (isDeleting) {
    currentWord = word.substring(0, charIndex--); 
  } else {
    currentWord = word.substring(0, charIndex++); 
  }
  
  typingElement.textContent = currentWord;
  
  
  if (!isDeleting && currentWord === word) {
    isDeleting = true;
    setTimeout(typeEffect, delayBeforeStartDeleting); 
  } 
  // If word is deleted, move to the next word
  else if (isDeleting && currentWord === "") {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, delayBeforeNextWord); 
  } 

  else {
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed); 
  }
}

typeEffect();
const cardWrapper = document.getElementById('cardWrapper0');

 function scrollleft() {
  cardWrapper.scrollBy({
      left: -300,
      behavior: 'smooth'
  });
}

function scrollRight() {
  console.log('right arrow clicked'); 
    cardWrapper.scrollBy({
        left: 300, 
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');


  // hamburger.addEventListener('click', () => {
  //     navLinks.classList.toggle('active');
  //     hamburger.classList.toggle('open');  
  // });

  // Optional: Close the menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('open');
      }
  });
});

// View More and Less Changes

function toggleText(element){
  let parent = element.parentElement;
  let dots = parent.querySelector(".dots");
  let more = parent.querySelector(".more");

  // view less situation
  if(dots.style.display === "none"){
    element.innerHTML = "View More →";
    dots.style.display = "inline";
    more.style.display = "none";
  }
  // view more situation
  else{
    element.innerHTML = "View Less";
    dots.style.display = "none";
    more.style.display = "inline"
  }
}