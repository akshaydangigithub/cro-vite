import React, { useEffect } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import pdf from "../../assets/act.pdf";

const Navbar = () => {
  const clickHandler = () => {
    window.open(pdf);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg position-fixed  ${styles.custom_nav}`}
      >
        <div className="container">
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                className="d-inline-block mb-2"
                height={60}
                width={60}
                alt=""
              />
            </Link>
            <div>
              <h5
                className="me-3 logoText fw-bolder"
                style={{ fontSize: "1.2rem", marginBottom: "0" }}
              >
                उपभोक्ता अधिकार संगठन <br />
                <span style={{ fontSize: "1rem" }}>
                  Consumer Rights Organisation
                </span>
              </h5>
              <h5
                className="me-3 logoText fw-bolder"
                style={{ fontSize: "1.11rem" }}
              ></h5>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3 ">
                <a
                  style={{ fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item me-3 dropdown">
                <a
                  style={{
                    fontWeight: 700,

                    fontSize: 14,
                  }}
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/about/aboutcro">
                      About CRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={clickHandler}
                      className="dropdown-item"
                    >
                      About Consumer Act
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about/aboutconsumer">
                      About Consumer Rights
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3 dropdown">
                <a
                  style={{
                    fontWeight: 700,

                    fontSize: 14,
                  }}
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MOVEMENT
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/movement/billlekedekho"
                    >
                      Bill Leke Dekho
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movement/educationSys">
                      Education System
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movement/foodAdult">
                      Food Adulteration Matters
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movement/nationalInte">
                      National Integration
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <Link
                  style={{ fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  to="/committee"
                >
                  COMMITTEE
                </Link>
              </li>
              {/* <li className="nav-item me-3">
                <Link
                  style={{  fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  LETTERS
                </Link>
              </li>
              <li className="nav-item me-3">
                <a
                  style={{  fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  COMPLAINTS
                </a>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  style={{
                    fontWeight: 700,
                    
                    fontSize: 14,
                  }}
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GALLERY
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Ntional Mett Photos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bill Leke Dekho Photos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Events Photos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video Gallry
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <a
                  style={{  fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  EVENTS
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  style={{  fontSize: 14 }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  CONTACT US
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
