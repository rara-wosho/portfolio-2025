import SectionTitle from "./ui/SectionTitle";

const BeyondCoding = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={100}
      className="glass-card shadow-sm bg-hover-primary p-3 d-flex flex-column border-secondary h-100  rounded-3"
    >
      <SectionTitle
        title="Beyond Coding"
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
            className="lucide lucide-popcorn me-2"
          >
            <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
            <path d="M10 22 9 8" />
            <path d="m14 22 1-14" />
            <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
          </svg>
        }
      />

      <p className="mb-0 text-secondary fs-7 mt-2">
        When I'm not writing code, you'll probably find me brainstorming ideas
        for my next project, learning new tech stacks, or tweaking my personal
        portfolio. I also contribute to my school’s publication, helping manage
        tasks and workflows.
      </p>
      <p className="mb-0 text-secondary fs-7 mt-3">
        I also like watching movies or youtube tutorials during my free time.
      </p>
    </div>
  );
};

export default BeyondCoding;
