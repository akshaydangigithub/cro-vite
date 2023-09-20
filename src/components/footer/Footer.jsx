import React from "react";
import styles from "./style.modul.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main>
        <div className={`container ${styles.footer}`}>
          <div className="row row1">
            <div className="col-md-2 mb-4">
              <h1>CRO</h1>
            </div>
            <div className="col-md-5 mb-4">
              <h4 className="mb-3">Contact Info</h4>
              <a href="#">
                REGD. OFFICE :Basant Vihar, Near Old Post Office, Burhar, Dist.
                Shahdol (M.P.) 484110
              </a>{" "}
              <br /> <br />
              <a href="#">
                Head Office :B16, Pamposh Enclave, GK1, New Delhi
              </a>{" "}
              <br /> <br />
              <a href="#">Phone : 9977 252 252</a> <br /> <br />
              <a href="#">Email : office@thecro.org</a>
            </div>
            {/* <div className="col-md-3 mb-4">
              <h4 className="mb-3">Important Link</h4>
              <a href="#">View Project</a> <br />
              <a href="#">Contact Us</a> <br />
              <a href="#">Testimonial</a> <br />
              <a href="#">Proparties</a> <br />
              <a href="#">Support</a> <br />
            </div> */}
            <div className="col-md-5 mb-4">
              <h4 className="mb-3">Newsletter</h4>
              <a>
                Heaven fruitful doesn't over lesser in days. Appear creeping.
              </a>{" "}
              <br /> <br />
              <input type="email" placeholder="Email Address" />
              <button>Send</button>
              <div className="row mt-4">
                <h5>Important Links</h5>
                <div className="col-2 mt-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineTwitter className="text-black fs-4" />
                  </div>
                </div>
                <div className="col-2 mt-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FaFacebookF className="text-black fs-4" />
                  </div>
                </div>
                <div className="col-2 mt-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <AiFillInstagram className="text-black fs-4" />
                  </div>
                </div>
                <div className="col-2 mt-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <AiFillYoutube className="text-black fs-4" />
                  </div>
                </div>
                <div className="col-2 mt-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <AiFillLinkedin className="text-black fs-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row reserved">
            <div className="col">
              <p>
                Copyright ©2023 All rights reserved | Designed & Developed By{" "}
                <a href="#">Softseeker Infotech Pvt Ltd</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
