import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <img src="./icons/chevron-right.svg" alt="chevron-right" />
    </div>
  );
};

export default NextArrow;
