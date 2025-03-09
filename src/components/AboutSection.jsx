import GlowingBadge from "./ui/GlowingBadge";
import SectionTitle from "./ui/SectionTitle";
import TypingAnimation from "./ui/TypingAnimation";

const AboutSection = () => {
  return (
    <div
      // data-aos="fade-left"
      // data-aos-delay={100}
      className="border-secondary mb-3 p-3 glass-card rounded-3 shadow-sm"
    >
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

      <p className="mb-1 pt-3 pb-0 text-secondary text-montserrat fw-semibold">
        Aspiring{" "}
        <TypingAnimation
          typingSpeed={40}
          deletingSpeed={20}
          delay={1800}
          textStyle="text-danger fw-semibold"
          words={["Full-Stack Developer", "Entrepreneur", "Software Engineer"]}
        />
      </p>

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

      <p className="mb-0 fs-8 text-uppercase mt-3 mb-2 text-danger">
        Specializing in
      </p>
      <div style={{ gap: 6 }} className="d-flex align-items-center">
        <GlowingBadge label="Web Development" />
        <GlowingBadge label="App Development" />
      </div>
    </div>
  );
};

export default AboutSection;
