import React from "react";

const Sidebar = ({ setSidebar }) => {
  return (
    <div
      onClick={() => setSidebar((s) => !s)}
      className="backdrop--sidebar fade-opacity"
    >
      <div className="--sidebar overflow-hidden h-100 bg-dark p-3 shadow">
        <div className="d-flex align-items-center">
          <img
            style={{ width: 16, height: 16 }}
            src="/logo/rd_logo.png"
            alt=""
          />
          <p className="mb-0 ms-1 fw-vold text-secondary">Rael</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right-to-line ms-auto pointer"
          >
            <path d="M17 12H3" />
            <path d="m11 18 6-6-6-6" />
            <path d="M21 5v14" />
          </svg>
        </div>

        <p className="mb-0 text-secondary fs-7 mt-3 text-nowrap fs-8 mt-2">
          This portfolio is currently under maintenance.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
