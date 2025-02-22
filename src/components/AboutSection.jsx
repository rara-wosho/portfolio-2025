import SectionTitle from "./ui/SectionTitle";

const AboutSection = () => {
  return (
    <div className="border-secondary mb-3 p-3 glass-card rounded-2 shadow-sm">
      <SectionTitle
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round me-2"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        }
        title="About"
      />

      <p style={{ lineHeight: 2 }} className="mb-0 text-secondary fs-7 mt-3">
        A former BSBA-MM student with an interest in entrepreneurship, but ended
        up diving into coding.
      </p>
      <p style={{ lineHeight: 2 }} className="mb-0 text-secondary fs-7 mt-3">
        I am a passionate and driven IT student with a keen interest in
        front-end development and design. I thrive on crafting innovative
        solutions and creating engaging digital experiences that leave a lasting
        impact. My journey into the world of technology began with a fascination
        for the endless possibilities it offers to shape the future.
      </p>
    </div>
  );
};

export default AboutSection;
