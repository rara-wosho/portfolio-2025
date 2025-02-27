import SectionTitle from "./ui/SectionTitle";
const Connect = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={200}
      className="p-3 h-100 bg-hover-primary glass-card rounded-3 border-secondary overflow-hidden"
    >
      <SectionTitle
        title="Connect"
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
            className="lucide lucide-signal me-2"
          >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
          </svg>
        }
      />

      <div className="row row-cols-1 px-2 mt-3">
        <div className="col mb-3 px-1 d-flex flex-column">
          <div
            data-aos="fade-right"
            style={{ paddingInline: 12 }}
            className="d-flex bg-gray rounded-2 flex-column py-2 mb-2"
          >
            <p className="mb-0 d-flex text-secondary fs-8">
              Email
              <span className="ms-auto">
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </p>
            <p className="mb-0 text-secondary fs-7 fw-semibold">
              raeldevprojects@gmail.com
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={100}
            style={{ paddingInline: 12 }}
            className="d-flex bg-gray rounded-2 flex-column py-2 mb-2"
          >
            <p className="mb-0 d-flex text-secondary fs-8">
              Instagram
              <span className="ms-auto">
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </p>
            <p className="mb-0 text-secondary fs-7 fw-semibold">rae.zionn</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={200}
            style={{ paddingInline: 12 }}
            className="d-flex bg-gray rounded-2 flex-column py-2 mb-2 mb-md-0"
          >
            <p className="mb-0 d-flex text-secondary fs-8">
              Facebook
              <span className="ms-auto">
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </p>
            <p className="mb-0 text-secondary fs-7 fw-semibold">Rael De Vera</p>
          </div>
        </div>
        <div className="col px-1">
          <div data-aos="fade-left" className="bg-gray rounded p-3 h-100">
            <p className="mb-2 text-secondary fw-semibold">
              Speaking Engagements
            </p>
            <p className="mb-0 text-secondary fs-7">
              I'm always excited to dive into discussions about tech stacks,
              coding, and exploring new ideas—especially when I get the chance
              to learn from others and expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
