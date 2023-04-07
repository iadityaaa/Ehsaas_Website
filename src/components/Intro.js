import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import IntroLogo from "../Images/ehsaasredlogo.png";
import ReactPlayer from "react-player";
import Trailer from "../Images/trailer.mp4";

import "./Intro.css";

const Intro = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10000);
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backdropFilter: "blur(20px)" }}
      >
        <ReactPlayer
          muted={true}
          style={{ backgroundColor: "black" }}
          url={Trailer}
          playing={true}
          playbackRate={2.0}
          controls
          width="100%"
          height="100%"
        />
      </Modal>

      <section id="intro" className="masthead">
        <div className="container text-light px-0 margin-0" id="intro_con">
          <div className="row align-items-center px-0 margin-">
            <div
              className="col-xl-6 col-lg-12 text-center text-md-start "
              id="main_text"
            >
              <h2>
                <div className="display-2 fw-bolder ">
                  EHSAAS DRAMATICS SOCIETY
                </div>
                <div className=" text-muted">Welcomes You</div>
              </h2>
              <button
                className="btn btn-secondary btn-large"
                onClick={handleShow}
              >
                Watch Us
              </button>
            </div>
            <div
              className="col-xl-4 text-center d-none d-xl-block"
              id="bouncing_logo"
            >
              <img className="" src={IntroLogo} height="540" alt="" />
            </div>
            <div className="text-center d-none d-md-block d-lg-none">
              <img className="" src={IntroLogo} height="380" alt="" />
            </div>
            <div className="text-center d-md-none" id="bouncing_logo_mob">
              <img className="" src={IntroLogo} height="320" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="lg_up_events"></section>
    </div>
  );
};

export default Intro;
