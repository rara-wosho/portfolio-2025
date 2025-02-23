import React from "react";

const PrimaryBtn = ({ label, containerStyle, icon }) => {
  return (
    <div
      style={{ color: "rgb(250,250,250)" }}
      className={`${containerStyle} px-2 px-md-3 py-2 pointer bg-primary-linear rounded-3 d-inline-flex align-items-center primary-btn`}
    >
      {icon && icon}
      <p style={{ color: "rgb(250,250,250)" }} className="mb-0 fw-semibold">
        {label}
      </p>
    </div>
  );
};

export default PrimaryBtn;
