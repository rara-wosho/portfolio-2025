import SectionTitle from "./ui/SectionTitle";
import TechBadge from "./ui/TechBadge";

const TechStack = () => {
  return (
    <div className="glass-card p-3 rounded-2 border-secondary">
      <SectionTitle
        title="Tech Stack"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-laptop-minimal me-2"
          >
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
        }
      />

      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Frontend</p>
      <div style={{ gap: 8 }} className="d-flex align-items-center flex-wrap">
        <TechBadge label="React JS" />
        <TechBadge label="React Native" />
        <TechBadge label="Javascript" />
        <TechBadge label="Tailwind CSS" />
        <TechBadge label="Bootstrap" />
        <TechBadge label="HTML" />
        <TechBadge label="CSS" />
        <TechBadge label="Material UI" />
      </div>
      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Backend</p>
      <div style={{ gap: 8 }} className="d-flex align-items-center flex-wrap">
        <TechBadge label="PHP" />
        <TechBadge label="MySQL" />
        <TechBadge label="Java" />
        <TechBadge label="Rest API" />
        <TechBadge label="Firebase" />
      </div>
      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Others</p>
      <div style={{ gap: 8 }} className="d-flex align-items-center flex-wrap">
        <TechBadge label="Figma" />
        <TechBadge label="Git" />
        <TechBadge label="Jira" />
        <TechBadge label="Trello" />
      </div>
    </div>
  );
};

export default TechStack;
