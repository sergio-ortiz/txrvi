import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="spacer"></div>
        <h2>Contact Us</h2>

        <form id="myForm" name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />

          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            id="number"
            type="text"
            name="number"
            placeholder="number"
            required
          />
          <input
            id="zipcode"
            type="text"
            name="zipcode"
            placeholder="zipcode"
          />
          <textarea
            placeholder="message"
            name="message"
            id="message"
          ></textarea>
          <input type="submit" value="Send" />
        </form>

        <div className="numbers">
          <p>Phone:</p>
          <br />
          <a href="tel:2026308110">202-630-8110</a>
        </div>
        <a
          className="whatsapp-button"
          href="https://api.whatsapp.com/send?phone=12407315552&text=&source=&data=&app_absent="
        >
          whatsapp <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="copyright">
        <p>&copy; Copyright All Rights Reserved TerminateVirus 2022</p>
      </div>
      <div className="spacer"></div>
    </footer>
  );
}

export default Footer;
