"use client";
import { useEffect } from "react";
//  NAVIGATION WILL APPEAR when scroll down

const navbar = document.getElementById('navbar');
const active = document.getElementById('active');

const smallNav = document.getElementById('small-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');

    smallNav.classList.remove('transparent');
    smallNav.classList.add('solid');

    active.classList.add('actual-active');

  } else {
    navbar.classList.remove('solid');
    navbar.classList.add('transparent');

    smallNav.classList.remove('solid');
    smallNav.classList.add('transparent');
    active.classList.remove('actual-active');
  }

});

// -----------------------------------------------------------------------------
// for responsive page !!!

function toggleForm() {
    const quickOptions = document.getElementById("quick-navigation");
    const quickArea = document.getElementById("quick-navigation-area");
    const mainArea = document.getElementById("main-categories-area");
    const mainOptions = document.getElementById("main-categories");


    

    if (window.innerWidth < 768) {
      quickOptions.style.display = "block";
      quickArea.style.display = "none";
      mainArea.style.display = "none";
      mainOptions.style.display = "block";


      navbar.style.display = "none" ;


    } else {
      quickOptions.style.display = "none";
      quickArea.style.display = "flex";
      mainArea.style.display = "flex";
      mainOptions.style.display = "none";


      navbar.style.display = "flex" ;

    }
  }

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
const btn = document.getElementById("toggle-btn");
const nav = document.getElementById("right-nav");

btn.onclick = (e) => {
    nav.classList.add("show");
    btn.classList.add("hidden");

    // Stop this click from propagating
    e.stopPropagation();
};

// Close nav if user clicks outside of nav
document.addEventListener("click", (e) => {
    // If nav is open AND click is outside nav
    if (nav.classList.contains("show") && !nav.contains(e.target)) {
        nav.classList.remove("show");
        btn.classList.remove("hidden");
    }
});

// Prevent clicks inside the nav from closing it
nav.addEventListener("click", (e) => {
    e.stopPropagation();
});

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


// Run when page loads and when resized
window.addEventListener("load", toggleForm);
window.addEventListener("resize", toggleForm); 
