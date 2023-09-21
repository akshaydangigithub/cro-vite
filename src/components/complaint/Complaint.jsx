import React from "react";
import { Link } from "react-router-dom";
import animationData from "../../assets/anim2.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Complaint = () => {
  return (
    <>
      <div style={{ marginTop: 80 }}>
        <div className="container">
          <h3 className="text-center">
            KNOW YOUR RIGHTS, RAISE YOUR VOICE, WE ARE WITH YOU
          </h3>
          <div className="row mt-5">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>Got a Complaints?</h4>
              <p>
                If you have any complaints regarding any product/service against
                any company/firm/service provider etc., you can register your
                complaint online with us.
              </p>
              <p>
                {" "}
                <Link to="https://www.thecro.org/">
                  FILE YOUR COMPLAINT{" "}
                </Link>{" "}
                or contact us at +91 9977 252 252
              </p>
            </div>
            <div className="col-md-6">
              <Player
                src={animationData}
                loop
                autoplay
                style={{ height: 300, width: 300 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaint;
