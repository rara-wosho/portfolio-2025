import React from "react";

const TechBadge = ({ label, logo }) => {
  return (
    <div className="d-flex tech-badge flex-column justify-content-center align-items-center pb-2 pt-3 px-2 border-secondary rounded-2">
      <img style={{ width: 28, aspectRatio: 5 / 5 }} src={logo} alt="" />
      <p style={{ fontSize: 10 }} className="mb-0 mt-2 text-nowrap">
        {label}
      </p>
    </div>
  );
};

export default TechBadge;
