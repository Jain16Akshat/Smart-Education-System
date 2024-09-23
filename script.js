// JavaScript to toggle the menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function closeBanner() {
    document.querySelector('.bannerr').style.display = 'none';
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
    currentWord = word.substring(0, charIndex--); // Delete characters
  } else {
    currentWord = word.substring(0, charIndex++); // Add characters
  }
  
  typingElement.textContent = currentWord; // Set the text
  
  // If word is complete, wait before starting delete animation
  if (!isDeleting && currentWord === word) {
    isDeleting = true;
    setTimeout(typeEffect, delayBeforeStartDeleting); // Wait before starting to delete
  } 
  // If word is deleted, move to the next word
  else if (isDeleting && currentWord === "") {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
    setTimeout(typeEffect, delayBeforeNextWord); // Start typing the next word after a pause
  } 
  // Continue the typing/deleting animation with slower speed
  else {
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed); // Adjust typing/deleting speed
  }
}

// Start the typing effect
typeEffect();
const cardWrapper = document.getElementById('cardWrapper0');

 function scrollleft() {
  cardWrapper.scrollBy({
      left: -300, // Adjust this value for how much you want to scroll left
      behavior: 'smooth'
  });
}

function scrollRight() {
  console.log('right arrow clicked'); 
    cardWrapper.scrollBy({
        left: 300, // Adjust this value for how much you want to scroll right
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Toggle the 'active' class on click to open/close menu
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');  // Optional class for hamburger icon animation
  });

  // Optional: Close the menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('open');
      }
  });
});