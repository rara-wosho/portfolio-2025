import React from "react";

const Commission = () => {
  return (
    <div
      data-aos="fade-left"
      className="p-3 rounded glass-card bg-hover-primary border-secondary"
    >
      <p className="mb-3 fw-semibold text-secondary">
        Want to have a portfolio like this?
      </p>

      <a
        style={{ textDecoration: "none" }}
        href="https://www.facebook.com/rae.zionn"
        className="rounded-2 text-secondary  p-3 glass-card d-flex align-items-center"
      >
        <img
          style={{ width: 18, height: 18 }}
          src="/logo/messenger.png"
          className="me-2"
        />
        Message Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right ms-auto"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Commission;
