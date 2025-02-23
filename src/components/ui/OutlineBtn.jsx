import React from "react";

const OutlineBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      className={`${containerStyle} bg-hover-primary py-2 px-2 px-md-3 rounded-3 d-inline-flex align-items-center outline-btn`}
    >
      {icon && icon}
      <p className="mb-0 fw-semibold ms-2 d-none d-md-inline-block text-secondary">
        {label}
      </p>
    </div>
  );
};

export default OutlineBtn;
