import React, { useState } from "react";
import "./Contact.css";

import { db } from "../../firebase";

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
    <form className="form1" onSubmit={handleSumbit}>
      <h2>Contact Me</h2>

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
        style={{ background: loader ? "#ccc" : "#33475a" }}
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
