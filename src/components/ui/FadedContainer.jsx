const FadedContainer = ({ children }) => {
  return (
    <div className="rounded-3 mb-3 faded-container position-relative">
      <div className="inner-box">{children}</div>
    </div>
  );
};

export default FadedContainer;
