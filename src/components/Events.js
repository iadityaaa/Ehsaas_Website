import { IonIcon } from "react-ion-icon";
import logo from "../Images/ehsaasredlogo.png";
import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
import "./Events.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Events = ({ auth }) => {
  const [events, setEvents] = useState([]);
  const [cookies, setCookie] = useCookies("username");
  const cards = Array(events.length > 4 ? 4 : events.length);
  console.log(events);
  cards.fill(1, 0);
  const navigate = useNavigate();
  useEffect(() => {
    const getEvents = async () => {
      const promise = await fetch(`http://127.0.0.1:4000/api/v1/events`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const response = await promise.json();
      setEvents(response.data.events);
    };
    getEvents();
  }, []);
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
  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Are You sure? Once deleted, the file cannot be recovered"
    );
    if (!confirmation) {
      return;
    }
    const promise = await fetch(`http://127.0.0.1:4000/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.user,
      },
    });
    const response = await promise.json();
    if (response.status === "success") {
      const newEvent = events.filter((event) => {
        return event._id != id;
      });
      console.log(newEvent);
      setEvents(newEvent);
    }
  };
  const handleEdit = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div id="#events">
      <section
        className="bg light pt-5"
        style={{
          boxSizing: "border-box",
        }}
        id="events"
      >
        <div className="container-fluid">
          <h3 className="text-center">
            <IonIcon className="reveal fade-bottom" name="radio-outline" />
            <p className="reveal fade-bottom2">Upcoming Events</p>
          </h3>

          <div className="wrapper reveal fade-right" id="card_wrapper">
            <ul className="stage">
              {events.length &&
                cards.map((el, i) => {
                  return (
                    <li className="scene" id={`card${i}`}>
                      <Card
                        image={events[i].image}
                        number={i}
                        title={events[i].name}
                        content={events[i].description}
                      />
                      {auth && (
                        <div className="card__event__button">
                          <button
                            className="btn btn-secondary  event__delete"
                            onClick={() => {
                              handleDelete(events[i]._id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-secondary mx-4 event__edit"
                            onClick={() => {
                              handleEdit(events[i]._id);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
          {/* <div className="reveal fade-right">
            <center>
              <a id="mob_card" href="#mobcard">
                <ion-icon name="clipboard"></ion-icon>
              </a>
            </center>
          </div> */}

          <div className="extra_event" style={{ height: "5px" }}></div>
        </div>
      </section>

      <section className="lg_video_sec"></section>
    </div>
  );
};

export default Events;
