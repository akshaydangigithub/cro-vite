import React, { useEffect } from "react";
import styles from "./style.module.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Hero = () => {

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className={`carousel slide ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={`carousel-item active ${styles.image}`}>
            <img src={slider1} className="d-block w-100" alt="alt" />
          </div>
          <div className={`carousel-item ${styles.image}`}>
            <img src={slider2} className="d-block w-100" alt="alt" />
          </div>
          <div className={`carousel-item ${styles.image}`}>
            <img src={slider3} className="d-block w-100" alt="alt" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
