import React from "react";

const TimelineCard = ({ text, year, containerStyle }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center timeline-card position-relative  ${containerStyle}`}
    >
      <div
        // data-aos="fade-left"
        style={{ maxWidth: 400, zIndex: 20 }}
        className="timeline-card-wrapper w-100"
      >
        {year && <p className="mb-2 fw-semibold text-secondary">{year}</p>}
        <div className="p-3 glass-card d-flex align-items-center rounded-3 content mb-3">
          <p className="mb-0 text-secondary fs-7">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
