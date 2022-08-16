import React from "react";
import "./About.css";
import me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>

            <article className="about_card">
            <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>4+ years Working</small>
            </article>

            <article className="about_card">
            <FaAward className="about_icon" />
              <h5>Hour code</h5>
              <small>2000+</small>
            </article>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's a Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
