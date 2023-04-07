import React from "react";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { IonIcon } from "react-ion-icon";

const ContactUs = () => {
  return (
    <div className="contact-us container-fluid" id="Contact_us">
      <h3 className="text-center sm-p-5" style={{ color: "rgb(178, 62, 62)" }}>
        <IonIcon className="reveal fade-bottom" name="radio-outline"></IonIcon>
        <p className="reveal fade-bottom2">Contact Us</p>
      </h3>
      <div className="row m-auto mt-5 reveal fade-right">
        <div className="col-lg-5 col-md-12 mt-5">
          <div className="leftHalf col-md-6">
            <IonIcon
              className="location reveal fade-bottom"
              name="location"
              style={{ color: "rgb(178, 62, 62)" }}
              size="large"
            />
            <span className="mx-3">Find Us</span>
            <p
              className="mt-2"
              style={{ color: "white", fontFamily: "monospace" }}
            >
              Birla Institute of Technology, Mesra Ranchi 835215, Jharkhand,
              India
            </p>
            <div className="pt-5">
              <IonIcon
                className=" location reveal fade-bottom"
                name="mail-open-outline"
                style={{ color: "rgb(190, 30, 30)" }}
                size="large"
              />
              <span className="mx-3">Write to us</span>
              <p
                className="mt-2"
                style={{ color: "white", fontFamily: "monospace" }}
              >
                ehsaas@bitmesra.ac.in
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 py-5">
          <Form>
            <div className="row ">
              <div className="col-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Your Name*" />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Your Email Address*" />
                </Form.Group>
              </div>
            </div>

            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Message*"
                rows={3}
                style={{ height: "150px" }}
              />
            </Form.Group>

            <Button
              style={{ width: "100%", backgroundColor: "rgb(178, 62, 62)" }}
            >
              Message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
