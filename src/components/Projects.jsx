import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={200}
      className="rounded-3 p-3 h-100 bg-hover-primary overflow-hidden glass-card border-secondary shadow-sm"
    >
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
          <ProjectCard imgUrl="" title="QFlow App" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="/images/sabuag.PNG" title="Sabuag Portal" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="/images/Capture8.PNG" title="EventTasker" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="" title="Client Portfolio" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="" title="Library Digital Logbook" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="/images/web-design.PNG" title="UniNation" />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard
            imgUrl="/images/capture9.PNG"
            title="Expense Tracker App"
          />
        </div>
        <div className="col mb-3 px-2">
          <ProjectCard imgUrl="/images/Capture4.PNG" title="FurniFlex" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
