import React from "react";
import { IonIcon } from "react-ion-icon";
import "./AboutUs.css";
import mime from "../Images/ANK_0098.JPG";

const AboutUs = () => {
  const aboutus =
    "All the world's a stage, And all the men and women merely players; They have their exits and their entrances, And one man in his time plays many parts, from scripting and staging Plays to performing Mimes on stage, from making Short Movies to shouting his heart out in Nukkads and this is what fills the vein of every member of our beloved Dramatics Club. The cooperative process and methodical practice with individuals full of zeal make the Ehsaas Dramatics Club the most prestigious and rewarding cultural Club of BIT Mesra. We provide a plethora of opportunities to teach and foster theatre, creativity, and social responsibility among its members and develop the intellectual spirit to take initiative in changing perspectives. For, acting has the power to make people believe in things they know are not true.";

  return (
    <div>
      <div id="aboutUs" className="container-fluid pb-5">
        <h3 className="text-center">
          <IonIcon className="reveal fade-bottom" name="radio-outline" />
        </h3>

        <div className="row text-center pt-5">
          <div className="col-lg-12 col-xl-6 pt-5 px-5 text-xl-end text-lg-center">
            <h1 style={{ color: "white" }}>About ''Ehsaas''</h1>

            <h5 style={{ color: "rgb(178, 62, 62,0.6)" }}>
              THE DRAMATIC SOCIETY OF EHSAAS BIT MESRA
            </h5>

            <div className="about pt-5 ">{aboutus}</div>
          </div>
          <div className="col-lg-12 col-xl-6 pt-5">
            <img src={mime} alt="mime img" style={{ height: "580px" }} />
          </div>
        </div>
      </div>
      <section className="lg_aboutus_sec"></section>
    </div>
  );
};

export default AboutUs;
