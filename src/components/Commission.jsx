import GlowingBtn from "./ui/GlowingBtn";

const Commission = () => {
  return (
    <div className="p-3 rounded-3 glass-card bg-hover-primary border-secondary overflow-hidden">
      <p
        // data-aos="fade-left"
        className="mb-3 fw-semibold text-secondary"
      >
        Want to have a portfolio like this?
      </p>

      <a
        // data-aos="fade-left"
        // data-aos-delay={50}
        style={{ textDecoration: "none" }}
        href="https://www.facebook.com/rae.zionn"
        className="text-secondary d-flex align-items-center"
      >
        <GlowingBtn
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook me-2"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          }
          containerStyle="w-100"
          textStyle="py-2"
          label="Message Me"
        />
        <div className="border-secondary p-2 ms-2 rounded-circle d-flex align-items-center justify-content-center">
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
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Commission;
