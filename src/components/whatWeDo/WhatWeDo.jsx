"use client";

import React from "react";
import styles from "./style.module.css";
import awarness from "../../assets/awareness.png";
import education from "../../assets/education.png";
import protection from "../../assets/protection.png";

const WhatWeDo = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center fs-2" style={{ color: "#FF5D49" }}>
        What We Are Doing?
      </h3>
      <h1 className="text-center fs-4" style={{ color: "#002D5B" }}>
        Advocacy, Communication and
        <br />
        Social Mobilization
      </h1>
      <div className="row mt-4 justify-content-around">
        <div className="col-md-4 p-4">
          <div className={`shadow rounded-5 py-5 ${styles.card}`}>
            <div className="row">
              <div className="col">
                <div className={`${styles.icon} shadow`}>
                  <img
                    src={awarness}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="text-center fw-bolder ">Consumer Awareness</h4>
                <p className="mb-2 text-center ">Signature campaign</p>
                <p className="mb-2 text-center ">Rally</p>
                <p className="mb-2 text-center ">street plays </p>
                <p className="mb-2 text-center ">Folk songs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className={`shadow rounded-5 py-5 ${styles.card}`}>
            <div className="row">
              <div className="col">
                <div className={`${styles.icon} shadow`}>
                  <img
                    src={education}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="text-center fw-bolder ">Consumer Education</h4>
                <p className="mb-2 text-center ">Seminar</p>
                <p className="mb-2 text-center ">Workshop</p>
                <p className="mb-2 text-center ">Survey</p>
                <p className="mb-2 text-center ">Quiz</p>
                <p className="mb-2 text-center ">Social Media</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className={`shadow rounded-5 py-5 px-3 ${styles.card}`}>
            <div className="row">
              <div className="col">
                <div className={`${styles.icon} shadow`}>
                  <img
                    src={protection}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="text-center fw-bolder ">Consumer Protection</h4>
                <p className="mb-2 text-center ">
                  Educate consumer about duplicate products.
                </p>
                <p className="mb-2 text-center ">
                  Spread awareness about misleading advertisements.
                </p>
                <p className="mb-2 text-center ">
                  Providing assistance and legal guidance to consumer for filing
                  case and attaining justice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
