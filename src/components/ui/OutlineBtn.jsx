import React from "react";

const OutlineBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      className={`${containerStyle} py-2 px-2 px-md-3 rounded-2 d-inline-flex align-items-center outline-btn`}
    >
      {icon && icon}
      {label}
    </div>
  );
};

export default OutlineBtn;
