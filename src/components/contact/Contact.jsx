import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail  className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>dummy@gmail.com</h5>
          <a href="mailto:jorgeilya@gmail.com">Send a message</a>
        </article>

        <article className="contact_option">
          <BsWhatsapp className="contact_option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+55 115456359</h5>
          <a href="https://api.whatsapp.com/send?phone=+5511952179759">Send a message</a>
        </article>

        <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon" />
          <h4>Email</h4>
          <h5>jorgeilya@gmail.com</h5>
          <a href="mailto:jorgeilya@gmail.com">Send a message</a>
        </article>
        </div>

        {/*END OPTION CONTACT*/}

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your E-mail" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
