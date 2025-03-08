import React from "react";

const GlowingBtn = ({ label, icon }) => {
  return (
    <div className="glowing-primary-btn-container overflow-hidden position-relative rounded-3">
      <div className="glowing-border"></div>
      <div className="glowing-primary-btn pointer px-3 rounded-3 py-2 d-flex align-items-center">
        {icon && icon}
        <p style={{ color: "rgb(248,248,248)" }} className="mb-0 fw-bold fs-7">
          {label}
        </p>
      </div>
    </div>
  );
};

export default GlowingBtn;
