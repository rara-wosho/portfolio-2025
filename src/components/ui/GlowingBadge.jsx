const GlowingBadge = ({ label }) => {
  return (
    <div className="glowing-badge-container rounded-3 overflow-hidden d-inline-block position-relative">
      <div className="glowing-border"></div>
      <p className="mb-0 fs-8 glowing-text rounded-3 px-3 py-1">{label}</p>
    </div>
  );
};

export default GlowingBadge;
