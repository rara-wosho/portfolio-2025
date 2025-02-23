import React from "react";

const SectionTitle = ({ title, icon, textStyle }) => {
  return (
    <p
      className={`${textStyle} text-gradient fw-bold fs-6 mb-0 d-inline-flex align-items-center section-title`}
    >
      {icon && icon}
      {title}
    </p>
  );
};

export default SectionTitle;
