import React from "react";

const GlowingBtn = ({ label, icon, containerStyle }) => {
  return (
    <div
      className={`${containerStyle} glowing-primary-btn-container overflow-hidden position-relative rounded-3`}
    >
      <div className="glowing-border"></div>
      <div className="glowing-primary-btn pointer px-2 px-md-3 rounded-3 py-1 py-md-2 d-flex align-items-center">
        {icon && icon}
        <p
          style={{ color: "rgb(248,248,248)" }}
          className="mb-0 fw-semibold fs-7"
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default GlowingBtn;
