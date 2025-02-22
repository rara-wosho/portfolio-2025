import { useState } from "react";

const Versions = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="p-2 versions-btn shadow rounded-pill d-flex align-items-center justify-content-center position-fixed"
    >
      {toggle && (
        <div className="actions">
          <a
            target="_blank"
            href="https://raeldev.vercel.app"
            className="px-3 py-2 bg-black fs-7 border-secondary shadow rounded-2 mb-2"
          >
            Version 1
          </a>
          <p className="px-3 py-2 bg-black fs-7 border-secondary shadow rounded-2 mb-0">
            Version 2
          </p>
        </div>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layers"
      >
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </svg>
    </div>
  );
};

export default Versions;
