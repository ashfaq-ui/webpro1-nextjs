"use client";
import { useEffect } from "react";

export default function useGlobalScripts() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const active = document.getElementById("active");
    const smallNav = document.getElementById("small-nav");
    const btn = document.getElementById("toggle-btn");
    const nav = document.getElementById("right-nav");

    // --- Scroll Behavior ---
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

    // --- Responsive Navigation ---
    const toggleForm = () => {
      const quickOptions = document.getElementById("quick-navigation");
      const quickArea = document.getElementById("quick-navigation-area");
      const mainArea = document.getElementById("main-categories-area");
      const mainOptions = document.getElementById("main-categories");

      if (window.innerWidth < 768) {
        quickOptions && (quickOptions.style.display = "block");
        quickArea && (quickArea.style.display = "none");
        mainArea && (mainArea.style.display = "none");
        mainOptions && (mainOptions.style.display = "block");
        navbar && (navbar.style.display = "none");
      } else {
        quickOptions && (quickOptions.style.display = "none");
        quickArea && (quickArea.style.display = "flex");
        mainArea && (mainArea.style.display = "flex");
        mainOptions && (mainOptions.style.display = "none");
        navbar && (navbar.style.display = "flex");
      }
    };

    // --- Toggle Right Nav ---
    const handleButtonClick = (e) => {
      nav?.classList.add("show");
      btn?.classList.add("hidden");
      e.stopPropagation();
    };

    const handleDocumentClick = (e) => {
      if (nav?.classList.contains("show") && !nav.contains(e.target)) {
        nav.classList.remove("show");
        btn?.classList.remove("hidden");
      }
    };

    const handleNavClick = (e) => e.stopPropagation();

    // Add Event Listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", toggleForm);
    window.addEventListener("resize", toggleForm);
    btn?.addEventListener("click", handleButtonClick);
    nav?.addEventListener("click", handleNavClick);
    document.addEventListener("click", handleDocumentClick);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", toggleForm);
      window.removeEventListener("resize", toggleForm);
      btn?.removeEventListener("click", handleButtonClick);
      nav?.removeEventListener("click", handleNavClick);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
}