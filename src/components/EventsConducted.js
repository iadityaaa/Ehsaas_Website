import React from "react";
import { IonIcon } from "react-ion-icon";
import "./EventsConducted.css";

// Event Poster imports
import img6 from "../Images/Events Conducted/Bally Hoo.jpg";
import img2 from "../Images/Events Conducted/Kashish.jpg";
import img1 from "../Images/Events Conducted/Dramanite'22.jpg";
import img4 from "../Images/Events Conducted/Dramzest'21.jpg";
import img5 from "../Images/Events Conducted/Ek Shaam Singles ke Naam.jpg";
import img3 from "../Images/Events Conducted/Piece de Theatre.jpg";
import img7 from "../Images/Events Conducted/Bards and Brews.jpg";
import img8 from "../Images/Events Conducted/Apoorv Dramzest.jpg";

const EventsConducted = () => {
  return (
    <div>
      <div id="eventsConducted" className="container-fluid py-5">
        <h3
          className="text-center sm-p-5 "
          style={{ color: "rgb(178, 62, 62)" }}
        >
          <IonIcon
            className="reveal fade-bottom"
            name="radio-outline"
          ></IonIcon>
          <p className="reveal fade-bottom2 " style={{ margin: "0 0 75px 0" }}>
            Events Conducted
          </p>
        </h3>

        <div>
          <div class="reveal fade-bottom event-image-row px-2 mt-5">
            <div class="event-image-column">
              <img src={img1} alt="something" style={{ width: "100%" }} />
              <img src={img8} alt="something" style={{ width: "100%" }} />
            </div>
            <div class="event-image-column">
              <img src={img2} alt="something" style={{ width: "100%" }} />
              <img src={img6} alt="something" style={{ width: "100%" }} />
            </div>
            <div class="event-image-column">
              <img src={img3} alt="something" style={{ width: "100%" }} />
              <img src={img7} alt="something" style={{ width: "100%" }} />
            </div>
            <div class="event-image-column">
              <img src={img4} alt="something" style={{ width: "100%" }} />
              <img src={img5} alt="something" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      <section className="lg_events2_sec"></section>
    </div>
  );
};

export default EventsConducted;
