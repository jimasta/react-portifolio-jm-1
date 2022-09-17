import React from "react";
import "./testimonials.css";
import "../../index.css";
import AVTR from "../../assets/pexels-stefan-stefancik-91227.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur cursus neque vitae dapibus. Nunc consequat elit vitae viverra tincidunt",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur cursus neque vitae dapibus. Nunc consequat elit vitae viverra tincidunt",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur cursus neque vitae dapibus. Nunc consequat elit vitae viverra tincidunt",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur cursus neque vitae dapibus. Nunc consequat elit vitae viverra tincidunt",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
