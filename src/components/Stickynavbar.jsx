import React, { useState, useEffect } from "react";

import PrimaryBtn from "./ui/PrimaryBtn";
import OutlineBtn from "./ui/OutlineBtn";
import GlowingBtn from "./ui/GlowingBtn";

const Stickynavbar = ({ setSidebar }) => {
  const [isSticky, setIsSticky] = useState(false);

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value based on when you want the background to appear
      const scrollPosition = window.scrollY;

      // If scrolled past threshold, make sticky
      if (scrollPosition > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`d-flex align-items-center sticky-navbar mb-1 py-2 py-md-3 rounded-3 fade-opacity ${
        isSticky ? "sticky-active shadow-sm px-2 px-md-3 glass-card" : ""
      }`}
    >
      <a
        className="text-decoration-none"
        href="mailto:raeldevprojects@gmail.com"
      >
        <GlowingBtn
          label="Contact Me"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail me-1 me-md-2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
        />
      </a>
      <a
        href="https://www.instagram.com/rae.zionn/"
        target="_blank"
        className="p-0 btn"
      >
        <OutlineBtn
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          }
          label="Follow"
          containerStyle="intro-btns"
        />
      </a>
      <a
        href="https://www.facebook.com/rae.zionn"
        target="_blank"
        className="p-0 btn"
      >
        <OutlineBtn
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          }
          label="Add Friend"
          containerStyle="intro-btns"
        />
      </a>

      <div
        onClick={() => setSidebar((s) => !s)}
        className="sidebar-icon ms-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </div>
  );
};

export default Stickynavbar;
