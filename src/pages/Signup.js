import "./form.css";
import "./Signup.css";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { useCookies } from "react-cookie";
const Signup = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCnfrmPassword] = useState("");
  const [secretCode, setSecretcode] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setAlertMessage] = useState("");
  const [cookies, setCookie] = useCookies("username");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let promise = await fetch(`http://127.0.0.1:4000/api/v1/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.user,
      },
      body: JSON.stringify({
        email: username,
        password: password,
        name,
        confirmPassword,
        Secret_Code: secretCode,
      }),
    });
    const response = await promise.json();
    console.log(response);
    setAlertMessage(response.message);
    setAlert(true);
  };
  return (
    <>
      <Modal
        setAlert={setAlert}
        alert={alert}
        message={message}
        id="alert_box"
      />
      <div className="signup">
        <div className="signup__container">
          <div className="signup__container__heading">SignUp</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {/* <label htmlFor="name" className="">
                Name
              </label> */}
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                id="username"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="UserName"
              />
              {/* <label htmlFor="username" className="">
                Username
              </label> */}
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {/* <label htmlFor="password" className="">
                Password
              </label> */}
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setCnfrmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              {/* <label htmlFor="confirmPassword" className="">
                Confirm Password
              </label> */}
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="secretCode"
                value={secretCode}
                onChange={(e) => setSecretcode(e.target.value)}
                placeholder="Secret Code"
              />
              {/* <label htmlFor="secretCode" className="">
                Secret Code
              </label> */}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
