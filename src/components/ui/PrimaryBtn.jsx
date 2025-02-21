import React from "react";

const PrimaryBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      className={`${containerStyle} px-2 px-md-3 py-2 pointer hover-glow bg-primary-linear rounded-2 text-white d-inline-flex align-items-center primary-btn`}
    >
      {icon && icon}
      {label}
    </div>
  );
};

export default PrimaryBtn;
