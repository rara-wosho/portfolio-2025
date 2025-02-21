import React from "react";

const TechBadge = ({ label }) => {
  return (
    <p className="mb-2 border rounded-2 text-secondary fs-7 px-3">{label}</p>
  );
};

export default TechBadge;
