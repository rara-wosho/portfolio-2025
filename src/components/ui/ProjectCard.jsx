import React from "react";

const ProjectCard = ({ title, imgUrl }) => {
  return (
    <div
      data-aos="fade-left"
      className="rounded-2 h-100 overflow-hidden project-card position-relative"
    >
      <div
        style={{
          width: "100%",
          aspectRatio: 9 / 5,
        }}
        className="img-container"
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          // src={imgUrl ? imgUrl : "/images/placholderjpg.jpg"}
          src=""
          alt="maintenance"
        />
      </div>

      <div className="project-details w-100 px-3">
        <p
          style={{ color: "rgb(240,240,240)" }}
          className="mb-0 fs-7 fw-semibold"
        >
          {title}
        </p>
        {/* <p className="mb-0 text-secondary fs-7">Lorem ipsum dolor sit.</p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
