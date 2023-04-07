import React from "react";
import Card from "react-bootstrap/Card";
import "./TeamCard.css";
import profile from "../Images/Aditya.jpg";
import { IonIcon } from "react-ion-icon";

const TeamCard = () => {
  return (
    <div>
      <div className="card team-card">
        <div className="row">
          <div className="col-4">
            <img className="image" src={profile} alt="profile" width="200px" />
          </div>
          <div className="col-8">
            <div className="name">Name</div>
            <div className="post">Post</div>
            <div className="contact">Contact</div>
            <div className="scoial-info">Social Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
