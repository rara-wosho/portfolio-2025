import React from "react";
import SectionTitle from "./ui/SectionTitle";
import TimelineCard from "./ui/TimelineCard";

const Timeline = () => {
  return (
    <div
      // data-aos="fade-up"
      className="p-3 timeline-section overflow-hidden bg-hover-primary border-secondary h-100 glass-card rounded-3"
    >
      <SectionTitle
        textStyle="mb-3"
        title="Timeline"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clock-3 me-2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16.5 12" />
          </svg>
        }
      />

      <div className="wrapper d-flex flex-column position-relative">
        <TimelineCard year={2024} text="React Native & Expo" />
        <TimelineCard text="Firebase" />
        <TimelineCard containerStyle="mb-3" text="Tailwind CSS" />
        <TimelineCard year={2023} text="PHP & MySQL" />
        <TimelineCard text="Javascript & React JS library" />
        <TimelineCard containerStyle="mb-3" text="Bootstrap" />
        <TimelineCard year={2022} text="Learned HTML & CSS" />
        <TimelineCard text="Wrote my first Hello World using JAVA programming language" />
      </div>
    </div>
  );
};

export default Timeline;
