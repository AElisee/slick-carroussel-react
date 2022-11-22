import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="next-arrow">
      <p onClick={onClick}>Next</p>
    </div>
  );
};

export default NextArrow;
