import PrimaryBtn from "./ui/PrimaryBtn";
import OutlineBtn from "./ui/OutlineBtn";
import TypingAnimation from "./ui/TypingAnimation";
import ToggleDarkmode from "./ui/ToggleDarkmode";

const Introduction = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="d-flex align-items-center introduction mb-3"
      >
        <img
          src="/images/IMG_0188.JPG"
          alt="profile"
          className="rounded-circle intro-profile shadow-sm"
        />

        <div className="d-flex flex-column ms-3 ms-md-4 w-100">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="mb-0 text-montserrat fw-bold intro-name">
              Israel De Vera
            </p>

            <div style={{ gap: 12 }} className="profile-actions d-flex">
              <ToggleDarkmode />
            </div>
          </div>

          <p className="mb-1 text-secondary text-montserrat fw-semibold intro-details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business me-2"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            Aspiring{" "}
            <TypingAnimation
              typingSpeed={40}
              deletingSpeed={20}
              delay={1800}
              textStyle="text-danger fw-semibold"
              words={[
                "Full-Stack Developer",
                "Entrepreneur",
                "Software Engineer",
              ]}
            />
          </p>

          <p className="mb-1 text-montserrat text-secondary intro-details mb-1">
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
              className="lucide lucide-graduation-cap me-2"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            BS Information Technology
          </p>

          <p className="mb-1 text-montserrat text-secondary intro-details mb-1">
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
              className="lucide lucide-map-pin me-2"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Iligan City, Philippines
          </p>
        </div>
      </div>
      {/* buttons  */}
      <div
        data-aos="fade-right"
        style={{ gap: 5 }}
        className="d-flex align-items-center mb-4"
      >
        <a href="mailto:raeldevprojects@gmail.com">
          <PrimaryBtn
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail me-1 me-md-2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
            label="Contact Me"
            containerStyle="intro-btns"
          />
        </a>
        <a
          href="https://www.instagram.com/rae.zionn/"
          target="_blank"
          className="p-0 btn"
        >
          <OutlineBtn
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            }
            label="Follow"
            containerStyle="intro-btns"
          />
        </a>
        <a
          href="https://www.facebook.com/rae.zionn"
          target="_blank"
          className="p-0 btn"
        >
          <OutlineBtn
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            }
            label="Add Friend"
            containerStyle="intro-btns"
          />
        </a>
      </div>
    </>
  );
};

export default Introduction;
