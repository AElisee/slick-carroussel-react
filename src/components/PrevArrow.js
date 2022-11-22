import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="prev-arrow">
      <p onClick={onClick}>Prev</p>
    </div>
  );
};

export default PrevArrow;
