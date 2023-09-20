import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

const WoWeAre = () => {
  return (
    <>
      <main className="bg-light mt-5" style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className="fw-bold fs-4 text-dark">Who We Are?</h1>
              <p className="mb-4" style={{ fontWeight: "400" }}>
                Consumer Rights Organisation is a voluntary consumer
                organisation. CRO was established in April 2010 and is working
                PAN India basis. Consumer Rights Organisation works for consumer
                awareness, consumer education, and consumer protection. The CRO
                has its presence in 24 states of India.
              </p>
              <p className="mb-4" style={{ fontWeight: "400" }}>
                <b className="fw-bolder">OUR VISION:</b> A new India in which
                every consumer keeps thorough knowledge of his rights and their
                correct uses.
              </p>
              <p className="mb-4" style={{ fontWeight: "400" }}>
                <b className="fw-bolder">OUR MISSION:</b> To organize, educate
                and make consumers aware of their rights, make the best effort
                to stop unfair trade practices, and solve consumer's
                problems/complaints.
              </p>
            </div>
            <div className={`col-md-4 px-3 py-4 ${styles.member}`}>
              <div className="row mb-3 align-items-center ">
                <div className="col-4">
                  <FontAwesomeIcon
                    style={{ fontSize: "4vmax", color: "white" }}
                    icon={faUsers}
                  />
                </div>
                <div className="col-8">
                  <h1 className="text-dark">
                    Become A<br />
                    Member
                  </h1>
                </div>
              </div>
              <div className="row">
                <h4 className="text-white">Be a Leader</h4>
                <p style={{ fontWeight: "400" }} className="text-white">
                  Spread awareness and help people so that they can lead a
                  peaceful life in the society and educate their children about
                  their rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WoWeAre;
