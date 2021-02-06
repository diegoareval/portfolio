import React, { useState } from "react";
import { contact, section5Title, social } from "../../profile";
import { validateEmail } from "../../helper/helper";
import { ALERT_TYPES, smallAlert } from "../../helper/alert";
import { sendMessage } from "../../lib/requests";

const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      smallAlert(ALERT_TYPES.INFO, "Debes Ingresar un correo valido");
      return;
    }
    if (name.length < 3) {
      smallAlert(ALERT_TYPES.Info, "Debes Agregar tu nombre");
      return;
    }

    if (message.length < 8) {
      smallAlert(ALERT_TYPES.Info, "Debes enviar un mensaje");
      return;
    }
    const payload = {
      email,
      message,
      name,
    };
    sendMessage(payload).then((response) => {
      const { status, message } = response;
      if (status) {
        cleanFields();
        smallAlert(ALERT_TYPES.SUCCESS, message);
      } else {
        smallAlert(ALERT_TYPES.ERROR, message);
      }
    });
  };
  const cleanFields = () => {
    setemail("");
    setName("");
    setMessage("");
  };
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <center>
          <div className="git-head-div">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </center>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Your name"
                  required
                ></input>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  required
                ></input>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="msg"
                  name="message"
                  value={message}
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  style={{ cursor: "pointer" }}
                  type="submit"
                  onClick={handleOnSubmit}
                >
                  <label style={{ cursor: "pointer" }} id="not-dark">
                    Send Message
                  </label>
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <center>
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Visit Facebok profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.facebook}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                  {social.resume && (
                    <a title="Download Resume" href={social.resume} download>
                      <i className="fas fa-download"></i>
                    </a>
                  )}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        2020 © Copyright <strong>{contact.copyright}</strong>. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Contact;
