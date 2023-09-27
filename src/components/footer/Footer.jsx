import React from "react";
import styles from "./style.modul.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logoanim.gif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <main>
        <div className={`container ${styles.footer}`}>
          <div className="row row1">
            <div className="col-md-2 mb-4">
              <img
                src={logo}
                className="d-inline-block mb-2"
                height={80}
                width={140}
                alt=""
              />
            </div>
            <div className="col-md-5 mb-4">
              <h4 className="mb-3">Contact Info</h4>
              <a href="#" className="text-white">
                REGD. OFFICE :Basant Vihar, Near Old Post Office, Burhar, Dist.
                Shahdol (M.P.) 484110
              </a>{" "}
              <br /> <br />
              <a href="#" className="text-white">
                Head Office :B16, Pamposh Enclave, GK1, New Delhi
              </a>{" "}
              <br /> <br />
              <a href="#" className="text-white">Phone : 9977 252 252</a> <br /> <br />
              <a href="#" className="text-white">Email : office@thecro.org</a>
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
                If you want to know more about our organisation, please provide
                your email.
              </a>{" "}
              <br /> <br />
              <input type="email" placeholder="Email Address" />
              <button>Send</button>
              <div className="row mt-4">
                <h5>Follow Us</h5>
                <div className="col-2 mt-2">
                  <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fthecroindia">
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
                  </Link>
                </div>
                <div className="col-2 mt-2">
                  <Link to="https://www.facebook.com/thecroindia?mibextid=ZbWKwL">
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
                  </Link>
                </div>
                <div className="col-2 mt-2">
                  <Link to="https://www.instagram.com/thecroindia/?igshid=MzRlODBiNWFlZA==">
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
                  </Link>
                </div>
                <div className="col-2 mt-2">
                  <Link to="https://www.youtube.com/@consumerrightsorganisation7290">
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
                  </Link>
                </div>
                <div className="col-2 mt-2">
                  <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGfnSYU5uxVPgAAAYrLrWyYhA0WN8Z7vjxuSf_HCqMTWhj3-Z8Jy-wazHDIDPsHrST9GIivr6aR32gLVuo2H9WEsWSm1436D29yieRScqzqJ6jBF8G6cs3PoW8wGiVbNxLs-OA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fconsumer-rights-organisation%2F">
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
                  </Link>
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
