import React from "react";

const OutlineBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      className={`${containerStyle} bg-hover-primary shadow-sm rounded d-inline-flex align-items-center outline-btn`}
    >
      {icon && icon}
      <p className="mb-0 ms-2 d-none d-md-inline-block text-secondary">
        {label}
      </p>
    </div>
  );
};

export default OutlineBtn;
