import React from "react";

const Card = ({ pic }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={pic.photo} alt="" />
      </div>
      <h3> {pic.name}</h3>
      <p> {pic.text}</p>
    </div>
  );
};

export default Card;
