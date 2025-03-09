import PrimaryBtn from "./ui/PrimaryBtn";
import OutlineBtn from "./ui/OutlineBtn";
import TypingAnimation from "./ui/TypingAnimation";
import ToggleDarkmode from "./ui/ToggleDarkmode";
import Stickynavbar from "./Stickynavbar";

const Introduction = ({ setSidebar }) => {
  return (
    <>
      <div
        // data-aos="fade-down"
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

          <p className="mb-1 text-secondary text-montserrat intro-details">
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
              className="lucide lucide-mail me-2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            raeldevprojects@gmail.com
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

      <Stickynavbar setSidebar={setSidebar} />
    </>
  );
};

export default Introduction;
