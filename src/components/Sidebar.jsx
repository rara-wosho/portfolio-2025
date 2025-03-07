import React from "react";

const Sidebar = ({ setSidebar }) => {
  return (
    <div onClick={() => setSidebar((s) => !s)} className="backdrop--sidebar">
      <div className="--sidebar h-100 glass-card p-3 shadow">
        <div className="d-flex align-items-center">
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
            className="lucide lucide-arrow-right-to-line me-2 pointer"
          >
            <path d="M17 12H3" />
            <path d="m11 18 6-6-6-6" />
            <path d="M21 5v14" />
          </svg>
          <img
            style={{ width: 16, height: 16 }}
            src="/logo/rd_logo.png"
            alt=""
          />
          <p className="mb-0 ms-1 text-secondary">Rael</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
