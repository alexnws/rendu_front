import React from "react";
import { Layout } from "../components/struct/layout.js";
import "../components/styles/contact.css";
export const Contact = () => {
  return (
    <div className="contact">
      <Layout />
      <h1> Nous contacter</h1>
      <div id="after_submit"></div>
      <form
        id="contact_form"
        action="#"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="row">
          <label class="required" for="name">
            Votre:
          </label>
          <br />
          <input
            id="name"
            class="input"
            name="name"
            type="text"
            value=""
            size="30"
          />
          <br />
          <span id="name_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="email">
            Votre mail:
          </label>
          <br />
          <input
            id="email"
            class="input"
            name="email"
            type="text"
            value=""
            size="30"
          />
          <br />
          <span id="email_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="message">
            Votre message:
          </label>
          <br />
          <textarea
            id="message"
            class="input"
            name="message"
            rows="7"
            cols="30"
          ></textarea>
          <br />
          <span id="message_validation" class="error_message"></span>
        </div>

        <input id="submit_button" type="submit" value="Send email" />
      </form>
      <br />
      <footer>copyright @2023</footer>
    </div>
  );
};

export default Contact;
