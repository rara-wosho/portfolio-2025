import React from "react";

const SectionTitle = ({ title, icon, textStyle }) => {
  return (
    <p
      className={`${textStyle} fw-bold fs-6 mb-0 d-flex align-items-center section-title`}
    >
      {icon && icon}
      {title}
    </p>
  );
};

export default SectionTitle;
