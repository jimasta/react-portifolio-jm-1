import React from "react";
import "./Portifolio.css";

import img1 from "../../assets/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg";

const data = [
  { id: 1, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 2, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 3, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 4, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 5, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 6, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 7, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 8, image: img1, title: "my project test react js", github: "#", demo: "#" },
  { id: 9, image: img1, title: "my project test react js", github: "#", demo: "#" },
];

function Portifolio() {
  return (
    <section id="Portifolio">
      <h5>My Recents Works and More</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio_container">
       {

        data.map(({id, image, title, github, demo})=>{
          return(
            <article className="portifolio_item">
            <div className="portifolio_item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="item-cta">
              <a href={github} className="btn">
                Github
              </a>
              <a href={demo} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  );
}

export default Portifolio;
