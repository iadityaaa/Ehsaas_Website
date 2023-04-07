import "./modal.css";
import React, { useState, useRef } from "react";
const Modal = ({ message, alert, setAlert }) => {
  const handleAlert = () => {
    setAlert(false);
  };
  setTimeout(() => {
    setAlert(false);
  }, 5000);
  return (
    <div className="alert__box">
      {alert && (
        <div className="alert">
          <h4 className="message">{message}</h4>
          <div className="cross" onClick={handleAlert}>
            {" "}
            &#10060;
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
