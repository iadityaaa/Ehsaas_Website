import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
// import EventCalendar from "./pages/EventCalendar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbars from "./components/Navbars";
import Eventedit from "./pages/Eventedit";
import CreateEvent from "./pages/CreateEvent";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import React, { useState, useEffect } from "react";
function App() {
  const [auth, setAuth] = useState(false);
  const [cookies, setCookie] = useCookies("username");
  let { decodedToken, isExpired, reEvaluateToken } = useJwt(cookies.user);
  useEffect(() => {
    if (decodedToken)
      if (decodedToken.id && !isExpired) {
        setAuth(true);
      }
  }, [decodedToken]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbars auth={auth} />}>
          <Route index element={<Home auth={auth} />}></Route>
          <Route path="/event/:id" element={<Eventedit auth={auth} />} />
          <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/addEvent" element={<CreateEvent />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
