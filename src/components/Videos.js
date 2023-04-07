import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IonIcon } from "react-ion-icon";
import "./Videos.css";
import Carousel from "react-bootstrap/Carousel";

const Videos = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=DkhQoVPrhrM"
  );
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  function getID(url) {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }

  function VideoCarousel() {
    return (
      <Carousel controls={false} interval={null} keyboard={true}>
        <Carousel.Item>
          <ReactPlayer
            style={{ backgroundColor: "black" }}
            url={"https://www.youtube.com/watch?v=DkhQoVPrhrM"}
            playing={false}
            controls
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ReactPlayer
            style={{ backgroundColor: "black" }}
            url={"https://youtu.be/t-CPXAVWhDQ"}
            playing={false}
            controls
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ReactPlayer
            style={{ backgroundColor: "black" }}
            url={"https://www.youtube.com/watch?v=XTSNW2cMFkY"}
            playing={false}
            controls
            width="100%"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <div id="videos">
      <section id="video" className="py-5">
        <div className="container-fluid text-center ">
          <h3 className="text-center sm-p-5">
            <IonIcon
              className="reveal fade-bottom"
              name="radio-outline"
            ></IonIcon>
            <p className="reveal fade-bottom2">Videos</p>
          </h3>
          <div className="video-playlist row pt-5 reveal fade-right ">
            <div className="pr-0" style={{ width: "80%" }}>
              <ReactPlayer
                style={{ backgroundColor: "black" }}
                url={videoUrl}
                playing={false}
                controls
                width="100%"
                height="600px"
              />
            </div>
            <div
              className="pl-0"
              style={{
                width: "20%",
                overflow: "scroll",
                height: "600px",
                overflowX: "hidden",
              }}
              id="style-4"
            >
              <div>
                <div>
                  <img
                    src={`https://img.youtube.com/vi/${getID(
                      "https://www.youtube.com/watch?v=DkhQoVPrhrM"
                    )}/0.jpg`}
                    alt=""
                    width="100%"
                    height="210px"
                    onClick={() =>
                      setVideoUrl("https://www.youtube.com/watch?v=DkhQoVPrhrM")
                    }
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      color: "white",
                      textAlign: "left",
                      paddingTop: "10px",
                    }}
                  >
                    Induction Video
                  </p>
                </div>
                <img
                  src={`https://img.youtube.com/vi/${getID(
                    "https://youtu.be/t-CPXAVWhDQ"
                  )}/0.jpg`}
                  alt=""
                  width="100%"
                  height="100%"
                  onClick={() => setVideoUrl("https://youtu.be/t-CPXAVWhDQ")}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "white",
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "25px",
                  }}
                >
                  Nerdception
                </p>
              </div>
              <div>
                <img
                  src={`https://img.youtube.com/vi/${getID(
                    "https://www.youtube.com/watch?v=XTSNW2cMFkY"
                  )}/0.jpg`}
                  alt=""
                  width="100%"
                  height="200px"
                  onClick={() =>
                    setVideoUrl("https://www.youtube.com/watch?v=XTSNW2cMFkY")
                  }
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "white",
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "25px",
                  }}
                >
                  World Theatre Day
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 videoCarousel  ">
            <VideoCarousel />
          </div>
        </div>
      </section>
      <section className="lg_image-gallery_sec"></section>
    </div>
  );
};

export default Videos;
