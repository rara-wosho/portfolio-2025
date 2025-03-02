import SectionTitle from "./ui/SectionTitle";
import TechBadge from "./ui/TechBadge";

const TechStack = () => {
  return (
    <div
      data-aos="fade-right"
      className="glass-card p-3 bg-hover-primary rounded-3 mb-3 border-secondary shadow-sm"
    >
      <div className="d-flex align-items-center">
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

        <p className="mb-0 text-secondary border-secondary fs-7 px-3 rounded-pill ms-auto">
          15
        </p>
      </div>

      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Frontend</p>
      <div className="row row-cols-4 px-2">
        <div className="col mb-2 px-1">
          <TechBadge logo="/logo/physics.png" label="React JS" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={50} logo="/logo/physics.png" label="React Native" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={100} logo="/logo/js.png" label="Javascript" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge
            delay={150}
            logo="/logo/icons8-tailwind-css-48.png"
            label="Tailwind CSS"
          />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge logo="/logo/bootstrap.png" label="Bootstrap" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={50} logo="/logo/html.png" label="HTML" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={100} logo="/logo/css-3.png" label="CSS" />
        </div>
      </div>

      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Backend</p>
      <div className="row row-cols-4 px-2">
        <div className="col mb-2 px-1">
          <TechBadge logo="/logo/php.png" label="PHP" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={50} logo="/logo/java.png" label="Java" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={100} logo="/logo/mysql.png" label="MySQL" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge
            delay={150}
            logo="/logo/icons8-firebase-48.png"
            label="Firebase"
          />
        </div>
      </div>

      <p className="mb-2 fw-semibold mt-3 text-secondary fs-7">Others</p>
      <div className="row row-cols-4 px-2 overflow-hidden">
        <div className="col mb-2 px-1">
          <TechBadge logo="/logo/figma.png" label="Figma" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge delay={50} logo="/logo/github.png" label="Github" />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge
            delay={100}
            logo="/logo/cloudinary-removebg-preview.png"
            label="Cloudinary"
          />
        </div>
        <div className="col mb-2 px-1">
          <TechBadge
            delay={150}
            logo="/logo/icons8-material-ui-48.png"
            label="Material UI"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
