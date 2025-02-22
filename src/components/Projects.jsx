import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div className="rounded-2 p-3 glass-card border-secondary mb-3 shadow-sm">
      <SectionTitle
        textStyle="mb-3"
        title="Projects I Made"
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
            className="lucide lucide-briefcase me-2"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        }
      />

      <div className="row row-cols-1 row-cols-md-2 px-1">
        <div className="col mb-3 px-2">
          <ProjectCard title="QFlow App" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="Sabuag Portal" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="EventTasker" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="Client Portfolio" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="Library Digital Logbook" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="UniNation" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="Expense Tracker App" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard title="FurniFlex" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
