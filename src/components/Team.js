import React from "react";
import { IonIcon } from "react-ion-icon";

import "./Team.css";

// Exe Body image import
//Fac Ad
import FacAd from "../Images/Exe Body/Faculty Advisor.jpeg";
//4th Year
import President from "../Images/Exe Body/Akansha.JPG";
import Joint_President from "../Images/Exe Body/Pratichi Rai.jpg";
import Vice_President1 from "../Images/Exe Body/Sushal.JPG";
import Vice_President2 from "../Images/Exe Body/JASVEEN SINGH KOHLI.jpg";
//3rd Year
import Gen_Sec1 from "../Images/Exe Body/Sai Ishwaram.jpeg";
import Gen_Sec2 from "../Images/Exe Body/YASH TEKRIWAL.jpg";
import Joint_Secretary1 from "../Images/Exe Body/AASTHA SAH.jpg";
import Joint_Secretary2 from "../Images/Exe Body/Aditya.jpg";
import Treasurer from "../Images/Exe Body/Prakhar Chauhan.jpg";
import Joint_Treasurer from "../Images/Exe Body/AYUSH.jpg";
//Art Form Heads
import Stageplay_Shortfilm from "../Images/Exe Body/Vibhor Chaubey.jpg";
import Standup_Monoact1 from "../Images/Exe Body/HARSH SINGH.jpg";
import Standup_Monoact2 from "../Images/Exe Body/ROHAN SAXENA.jpg";
import Musical_Skit from "../Images/Exe Body/ANJALI BHARDWAJ.jpg";
import Production_Head from "../Images/Exe Body/Abhishek.jpg";
//Publicity Heads
import PublicityHead1 from "../Images/Exe Body/Harsh Kashyap Upadhyay.jpg";
import PublicityHead2 from "../Images/Exe Body/Shreya Singh.jpg";

const Team = () => {
  const CoreTeam = [
    {
      name: "Akansha Singh",
      position: "President",
      image: President,
      instagram: "https://www.instagram.com/ellipticalhyperbola/",
      linkedin: "https://www.linkedin.com/in/singhakanksha01/",
    },
    {
      name: "Pratichi Rai",
      position: "Joint President",
      image: Joint_President,
      instagram: false,
      linkedin: false,
    },
    {
      name: "Sushal Badavath",
      position: "Vice President",
      image: Vice_President1,
      instagram: "https://www.instagram.com/_hustler_sn/?igshid=YmMyMTA2M2Y%3D",
      linkedin: "https://www.linkedin.com/in/sushal-badavath-72aa981aa/",
    },
    {
      name: "Jasveen Singh Kohli",
      position: "Vice President & Nukkad Head",
      image: Vice_President2,
      instagram: "https://www.instagram.com/jasveen18/",
      linkedin: "https://www.linkedin.com/in/jasveen-singh-kohli-478456197/",
    },

    {
      name: "Sai Ishwaram",
      position: "General Secretary",
      image: Gen_Sec1,
      instagram: "https://www.instagram.com/saiishwaram20",
      linkedin: "https://www.linkedin.com/in/saiishwaram/",
    },

    {
      name: "Yash Tekriwal",
      position: "General Secretary",
      image: Gen_Sec2,
      instagram: "https://www.instagram.com/tekriwalyash/",
      linkedin: false,
    },
    {
      name: "Aastha Sah",
      position: "Joint Secretary",
      image: Joint_Secretary1,
      instagram: "http://www.instagram.com/aasthasah02",
      linkedin: "https://www.linkedin.com/in/aastha-sah-547346204/",
    },
    {
      name: "Kumar Aditya",
      position: "Joint Secretary",
      image: Joint_Secretary2,
      instagram: "https://www.instagram.com/tekriwalyash/",
      linkedin: "https://www.linkedin.com/in/kumar-aditya-a904aa1b7/",
    },
    {
      name: "Prakhar Chauhan",
      position: "Treasurer",
      image: Treasurer,
      instagram: "https://www.instagram.com/prakharchauhan29",
      linkedin: false,
    },
    {
      name: "Ayush",
      position: "Joint Treasurer",
      image: Joint_Treasurer,
      instagram: "https://www.instagram.com/momosareoverrated/",
      linkedin: false,
    },
  ];

  const ArtFormHeads = [
    {
      name: "Vibhor Chaubey",
      position: "Stage Play & Short Film Head",
      image: Stageplay_Shortfilm,
      instagram: "https://www.instagram.com/vibhorchaubey19/",
      linkedin: false,
    },
    {
      name: "Anjali Bhardwaj",
      position: "Musical Skit Head",
      image: Musical_Skit,
      instagram: "https://instagram.com/_felidae_19?igshid=YmMyMTA2M2Y=",
      linkedin: "https://www.linkedin.com/in/anjali-bhardwaj-a01b51199/",
    },
    {
      name: "Harsh Singh",
      position: "Stand-Up & Monoact Head",
      image: Standup_Monoact1,
      instagram: "https://instagram.com/harsh.is.dead?igshid=YmMyMTA2M2Y=",
      linkedin: false,
    },
    {
      name: "Abhishek Raj Shekhar",
      position: "Production Head",
      image: Production_Head,
      instagram: "https://www.instagram.com/abhishek_rj_shekhar/",
      linkedin: "https://www.linkedin.com/in/abhishek-raj-shekhar-3841321b2/",
    },
    {
      name: "Rohan Saxena",
      position: "Stand-Up & Monoact Head",
      image: Standup_Monoact2,
      instagram: "https://www.instagram.com/__rohansaxena",
      linkedin: false,
    },
  ];

  const PublicityHeads = [
    {
      name: "Harsh Kashyap",
      position: "Publicity & Social Media Head",
      image: PublicityHead1,
      instagram:
        "https://www.instagram.com/invites/contact/?i=1nzllj085zc9f&utm_content=2i7inib",
      linkedin: false,
    },
    {
      name: "Shreya Singh",
      position: "Publicity & Social Media Head",
      image: PublicityHead2,
      instagram: "https://www.instagram.com/sshreya2611",
      linkedin: false,
    },
  ];

  return (
    <div className="team container-fluid" id="team">
      <h3 className="text-center " style={{ color: "rgb(178, 62, 62)" }}>
        <IonIcon className="reveal fade-bottom" name="radio-outline"></IonIcon>
        <p className="reveal fade-bottom2 mb-5">Our Team</p>
      </h3>
      <div className="team-card" style={{ margin: "0 auto", width: "65%" }}>
        <div className="row">
          <div className="col-3 image-section">
            <div className="circular--portrait">
              <img src={FacAd} alt="profile" />
            </div>
          </div>
          <div className="col-9 text-section px-5 ">
            <div className="details">
              <div className="name">Abhishek Naresh</div>
              <h6 className="post">Faculty Advisor</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="team-cards mt-5">
        {CoreTeam.map((ele) => (
          <div className="team-card">
            <div className="row">
              <div className="col-3 image-section">
                <div className="circular--portrait">
                  <img src={ele.image} alt="profile" />
                </div>
              </div>
              <div className="col-9 text-section px-5 ">
                <div className="details">
                  <div className="name">{ele.name}</div>
                  <h6 className="post">{ele.position}</h6>

                  <div className="links">
                    <h5>
                      {ele.instagram && (
                        <a className="pr-2" href={ele.instagram}>
                          <IonIcon name="logo-instagram" color="red" />
                        </a>
                      )}
                      {ele.linkedin && (
                        <a className="px-2" href={ele.linkedin}>
                          <IonIcon name="logo-linkedin" />
                        </a>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center my-5" style={{ color: "rgb(178, 62, 62)" }}>
        Art Form Heads
      </h4>
      <div className="team-cards">
        {ArtFormHeads.map((ele) => (
          <div className="team-card">
            <div className="row">
              <div className="col-3 image-section">
                <div className="circular--portrait">
                  <img src={ele.image} alt="profile" />
                </div>
              </div>
              <div className="col-9 text-section px-5 ">
                <div className="details">
                  <div className="name">{ele.name}</div>
                  <h6 className="post">{ele.position}</h6>

                  <div className="links">
                    <h5>
                      {ele.instagram && (
                        <a className="pr-2" href={ele.instagram}>
                          <IonIcon name="logo-instagram" color="red" />
                        </a>
                      )}
                      {ele.linkedin && (
                        <a className="px-2" href={ele.linkedin}>
                          <IonIcon name="logo-linkedin" />
                        </a>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center my-5" style={{ color: "rgb(178, 62, 62)" }}>
        Publicity & Marketing Heads
      </h4>
      <div className="team-cards">
        {PublicityHeads.map((ele) => (
          <div className="team-card">
            <div className="row">
              <div className="col-3 image-section">
                <div className="circular--portrait">
                  <img src={ele.image} alt="profile" />
                </div>
              </div>
              <div className="col-9 text-section px-5 ">
                <div className="details">
                  <div className="name">{ele.name}</div>
                  <h6 className="post">{ele.position}</h6>

                  <div className="links">
                    <h5>
                      {ele.instagram && (
                        <a className="pr-2" href={ele.instagram}>
                          <IonIcon name="logo-instagram" color="red" />
                        </a>
                      )}
                      {ele.linkedin && (
                        <a className="px-2" href={ele.linkedin}>
                          <IonIcon name="logo-linkedin" />
                        </a>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
      <section className="lg_contact_sec"></section>
    </div>
  );
};

export default Team;
