import React from "react";
import Tilt from "react-vanilla-tilt";
import "./Card.css";

const Card = (props) => {
  console.log("props", props.image);
  return (
    <div className="container" style={{ backgroundColor: "rgb(11, 11, 11)" }}>
      <Tilt
        style={{ backgroundColor: "inherit" }}
        options={{ max: 75, speed: 400, glare: true, "max-glare": 1 }}
      >
        <div className="card" style={{ backgroundColor: "black" }}>
          <div className="poster">
            <img src={props.image} alt="" height="210px" />
          </div>
          <div className="content">
            <h2>{props.number}</h2>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <a href="#register">Register Now...</a>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
