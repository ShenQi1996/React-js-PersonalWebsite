import React, { useState } from "react";
import "./Contact.css";

import { db } from "../../firebase";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSumbit = e => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted ✨");
        setLoader(false);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      data-aos="zoom-out-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="form1"
      onSubmit={handleSumbit}
    >
      <h2>CONTTACT ME</h2>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        disabled={!name | (!email & !message)}
        style={{ background: loader ? "transparent" : "#414139" }}
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
