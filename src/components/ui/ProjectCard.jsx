import React from "react";

const ProjectCard = ({ title, desc }) => {
  return (
    <div className="rounded-1 overflow-hidden project-card position-relative">
      <img
        style={{ width: "100%", aspectRatio: 9 / 5, objectFit: "cover" }}
        src="/images/bg.jpg"
        alt=""
      />

      <div className="project-details w-100 px-2 pb-1">
        <p className="mb-0 text-white fs-6 fw-semibold">{title}</p>
        <p className="mb-0 text-secondary fs-7">Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
};

export default ProjectCard;
