import React from "react";

const PrimaryBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      className={`${containerStyle} px-2 px-md-3 py-2 pointer hover-glow bg-primary-linear rounded-3 text-white d-inline-flex align-items-center primary-btn`}
    >
      {icon && icon}
      <p className="mb-0 fw-semibold text-secondary">{label}</p>
    </div>
  );
};

export default PrimaryBtn;
