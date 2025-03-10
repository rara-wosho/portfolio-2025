import React from "react";

const GlowingBtn = ({ label, icon, containerStyle, textStyle }) => {
  return (
    <div
      className={`${containerStyle} glowing-primary-btn-container shadow-sm overflow-hidden position-relative rounded-3`}
    >
      <div className="glowing-border"></div>
      <div
        className={`${textStyle} glowing-primary-btn pointer px-3 px-md-3 rounded-3 py-2 py-md-2 d-flex align-items-center`}
      >
        {icon && icon}
        <p style={{ color: "rgb(248,248,248)" }} className="mb-0 fs-7">
          {label}
        </p>
      </div>
    </div>
  );
};

export default GlowingBtn;
