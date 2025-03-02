const Footer = () => {
  return (
    <div className="glass-card px-3 rounded border-secondary mt-3 py-4 d-flex align-items-center">
      <img
        style={{ width: 14, height: 14, objectFit: "contain" }}
        src="/logo/physics.png"
        className="me-2"
      />
      <p className="mb-0 fs-8 text-uppercase fw-semibold text-secondary">
        Israel De Vera
      </p>
      <p className="mb-0 fs-8 ms-auto text-uppercase fw-semibold text-secondary">
        V2
      </p>
    </div>
  );
};

export default Footer;
