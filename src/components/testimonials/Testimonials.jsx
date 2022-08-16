import React from "react";
import img1 from "../../assets/pexels-stefan-stefancik-91227.jpg";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">

        <article className="testimonials">
          <div className="client_avatar">
            <img src={img1} alt="" />
          </div>
          <h5 className="client_name">Ernest Zacary</h5>
          <small className="client_review">
            Lorem Ipsum Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.m is simply dummy text of the
            printing and typesetting industry. is simply dummy text of the
            printing and typesetting industry.
          </small>
        </article>

        <article className="testimonials">
          <div className="client_avatar">
            <img src={img1} alt="" />
          </div>
          <h5 className="client_name">Ernest Zacary</h5>
          <small className="client_review">
            Lorem Ipsum Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.m is simply dummy text of the
            printing and typesetting industry. is simply dummy text of the
            printing and typesetting industry.
          </small>
        </article>

        <article className="testimonials">
          <div className="client_avatar">
            <img src={img1} alt="" />
          </div>
          <h5 className="client_name">Ernest Zacary</h5>
          <small className="client_review">
            Lorem Ipsum Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.m is simply dummy text of the
            printing and typesetting industry. is simply dummy text of the
            printing and typesetting industry.
          </small>
        </article>

        <article className="testimonials">
          <div className="client_avatar">
            <img src={img1} alt="" />
          </div>
          <h5 className="client_name">Ernest Zacary</h5>
          <small className="client_review">
            Lorem Ipsum Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.m is simply dummy text of the
            printing and typesetting industry. is simply dummy text of the
            printing and typesetting industry.
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
