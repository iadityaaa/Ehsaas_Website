import React from "react";
import { IonIcon } from "react-ion-icon";
import TrailerVideo from "../Images/trailer.mp4";
import "./Trailer.css";

const Trailer = () => {
  return (
    <div>
      <div className="trailer">
        <video src={{ TrailerVideo }} controls="true" preload="auto"></video>
        <h1>
          <IonIcon
            name="close-outline"
            className="close"
            onclick="togglevideo()"
            style={{ width: "500px" }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Trailer;
