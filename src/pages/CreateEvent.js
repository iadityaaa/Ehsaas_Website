import "./Eventedit.css";
import "./form.css";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
const CreateEvent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formLink, setFormLink] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies("username");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    const images = document.querySelector(".coverImage");
    if (images.files.length) form.append(`image`, images.files[0]);
    form.append("name", title);
    form.append("description", description);
    form.append("formLink", formLink);
    const res = await fetch(`${process.env.REACT_APP_URL}/events/`, {
      method: "POST",
      headers: { Authorization: "Bearer " + cookies.user },
      body: form,
    });

    const Data = await res.json();
    setAlert(true);
    setAlertMessage(Data.message);
    setLoading(false);
  };
  return (
    <>
      <div>
        <Modal setAlert={setAlert} alert={alert} message={message} />
        <div className="event">
          <div className="event__container">
            <div className="event__container__heading">Event Edit</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="name"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
              </div>
              <div className="form__group">
                <textarea
                  type="textarea"
                  className="form__input__textarea form__input"
                  id="username"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                {/* <label htmlFor="username" className="">
                Username
              </label> */}
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="password"
                  onChange={(e) => setFormLink(e.target.value)}
                  placeholder="Google Form Link"
                />
              </div>
              <div className="form__group">
                <input
                  type="file"
                  className=" coverImage"
                  id="image"
                  accept="image/*"
                  placeholder="Secret Code"
                />
                <label htmlFor="image" className="">
                  Upload Image
                </label>
              </div>
              <button disabled={loading} type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateEvent;
