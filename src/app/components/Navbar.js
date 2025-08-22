"use client";
import { useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const active = document.getElementById("active");
    const smallNav = document.getElementById("small-nav");
    const btn = document.getElementById("toggle-btn");
    const nav = document.getElementById("right-nav");
    const quickOptions = document.getElementById("quick-navigation");
    const quickArea = document.getElementById("quick-navigation-area");
    const mainArea = document.getElementById("main-categories-area");
    const mainOptions = document.getElementById("main-categories");

    // Handle scroll effect for navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.remove("transparent");
        navbar?.classList.add("solid");

        smallNav?.classList.remove("transparent");
        smallNav?.classList.add("solid");

        active?.classList.add("actual-active");
      } else {
        navbar?.classList.remove("solid");
        navbar?.classList.add("transparent");

        smallNav?.classList.remove("solid");
        smallNav?.classList.add("transparent");

        active?.classList.remove("actual-active");
      }
    };

    // Handle responsive view toggle
    const toggleForm = () => {
      if (!quickOptions || !quickArea || !mainArea || !mainOptions || !navbar) return;

      if (window.innerWidth < 768) {
        quickOptions.style.display = "block";
        quickArea.style.display = "none";
        mainArea.style.display = "none";
        mainOptions.style.display = "block";

        navbar.style.display = "none";
      } else {
        quickOptions.style.display = "none";
        quickArea.style.display = "flex";
        mainArea.style.display = "flex";
        mainOptions.style.display = "none";

        navbar.style.display = "flex";
      }
    };

    // Handle opening right-side nav
    const handleNavOpen = (e) => {
      nav?.classList.add("show");
      btn?.classList.add("hidden");
      e.stopPropagation();
    };

    // Close nav when clicking outside
    const handleOutsideClick = (e) => {
      if (nav?.classList.contains("show") && !nav.contains(e.target)) {
        nav.classList.remove("show");
        btn?.classList.remove("hidden");
      }
    };

    const stopPropagation = (e) => e.stopPropagation();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", toggleForm);
    window.addEventListener("resize", toggleForm);
    btn?.addEventListener("click", handleNavOpen);
    document.addEventListener("click", handleOutsideClick);
    nav?.addEventListener("click", stopPropagation);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", toggleForm);
      window.removeEventListener("resize", toggleForm);
      btn?.removeEventListener("click", handleNavOpen);
      document.removeEventListener("click", handleOutsideClick);
      nav?.removeEventListener("click", stopPropagation);
    };
  }, []);

  return (
    /* Navigation AREA */
    <div className="intro-video-area">
      <video className="intro-video" autoPlay muted loop>
        <source src="/videos/introVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className="navbar transparent" id="navbar">
        <img className="pic-nav" src="/mainLogo.jpg" alt="logo" />

        <ul className="nav-links">
          <li>
            <Link href="/" className="active" id="active">Home</Link>
          </li>
          <li>
            <Link href="/iphone-page">iPhone</Link>
          </li>
          <li>
            <Link href="/mac">Mac</Link>
          </li>
          <li>
            <Link href="/ipad">iPad</Link>
          </li>
          <li>
            <Link href="/watch">Watch</Link>
          </li>
          <li>
            <Link href="/airpods">AirPods</Link>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
          </li>
        </ul>

        <ul className="nav-links">
          <li><a href="#">
            {/* Search icon */}
            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30" height="30" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.3"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </a></li>

          <li><a href="#">
            {/* Profile icon */}
            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30" height="30"
              fill="none"
              viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </a></li>

          <li><a href="#">
            {/* Cart icon */}
            <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30" height="30"
              fill="none"
              viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>
          </a></li>
        </ul>
      </nav>

      {/* Small navigation */}
      <div className="small-nav transparent" id="small-nav">
        <div id="toggle-btn">☰</div>

        <div id="right-nav">
          <div id="options">
            <a href="#">Home</a>
            <a href="#">IPhone</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">Watch</a>
            <a href="#">Accessories</a>
          </div>

          <div id="bottom-options">
            <ul className="socialmedia-footer">
              <li><a href="#"><i className="bx bxl-facebook-circle"></i></a></li>
              <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
              <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
              <li><a href="#"><i className="bx bxl-youtube"></i></a></li>
              <li><a href="#"><i className="bx bxl-tiktok"></i></a></li>
            </ul>
          </div>
        </div>

        <img className="pic-small-nav" src="/mainLogo.jpg" alt="logo" />
      </div>
    </div>
  );
}