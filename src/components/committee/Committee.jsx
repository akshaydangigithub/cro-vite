import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";
import "./committee.css";
import Footer from "../footer/Footer";
import sanjayImage from "../../assets/sanjay.jpg";
import rayuluImage from "../../assets/pcrayulu.jpg";
import nallashekhar from "../../assets/nallashekhar.jpg";
import dipeshjain from "../../assets/dipeshjain.jpg";
import sanjayyadav from "../../assets/sanjayyadav.jpg";
import vegad from "../../assets/vegad.jpg";
import venkata from "../../assets/venkata.jpg";
import pdbari from "../../assets/pdbari.jpg";
import vinod from "../../assets/vinod.jpg";
import ankit from "../../assets/ankit.jpg";
import aruntiwari from "../../assets/aruntiwari.jpg";
import mishra from "../../assets/mishra.jpg";
import haribabu from "../../assets/haribabu.jpg";
import gorlenaydu from "../../assets/gorlenaydu.jpg";
import navin from "../../assets/navin.jpg";
import routrayi from "../../assets/routrayi.jpg";
import mahendra from "../../assets/mahendra.jpg";
import achu from "../../assets/achu.jpg";

const patronMembers = [
  {
    name: "Mr. Sanjay Paswan",
    position: "MLC Bihar, Ex Union Minister",
    image: sanjayImage,
  },
  {
    name: "Mr. Parakash Javadeker",
    position: "(MP - RAJYA SABHA) EX UNION MINISTER",
    image: "https://www.thecro.in/wp-content/uploads/2017/03/P_Javadekar.jpg",
  },
  {
    name: "K NATWAR SINGH",
    position: "EX FOREIGN MINISTER",
    image: "https://www.thecro.in/wp-content/uploads/2017/03/natwar_singh.jpg",
  },
  {
    name: "MR. ASLAM SHER KHAN    ",
    position: "EX UNION MINISTER & HOCKEY PLAYER    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/Aslam-Sher-Khan.jpeg",
  },
  {
    name: "FAGGAN SINGH KULASTE",
    position: "UNION MINISTER OF STATE    ",
    image: "https://www.thecro.in/wp-content/uploads/2017/03/faggan.jpg",
  },
  {
    name: "MAJEED MENON    ",
    position: "EX MEMBER OF PARLIAMENT - RAJYA SABHA    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/majeed-1-250x250.jpg",
  },
  {
    name: "DR. UDIT RAJ    ",
    position: "EX MEMBER OF PARLIAMENT    ",
    image: "https://www.thecro.in/wp-content/uploads/2017/03/udit-250x250.jpg",
  },
];

const nationalCommittee = [
  {
    name: "MR. NAVEEN P. SHARMA",
    position: "NATIONAL PRESIDENT    ",
    image: "https://www.thecro.in/wp-content/uploads/2017/03/naveen.jpg",
    fit: "cover",
  },
  {
    name: "MR. SARDAR JOGINDER SINGH    ",
    position: "NATIONAL GENERAL SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working3.jpg",
    fit: "cover",
  },
  {
    name: "MR. ASHOK KAPOOR    ",
    position: "NATIONAL GENERAL SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working4.jpg",
    fit: "cover",
  },
  {
    name: "MR. SANDEEP BANSAL    ",
    position: "NATIONAL VICE PRESIDENT    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working18.jpg",
    fit: "cover",
  },
  {
    name: "MR. P. C. RAYULU    ",
    position: "NATIONAL VICE PRESIDENT    ",
    image: rayuluImage,
    fit: "cover",
  },
  {
    name: "MR. DHIRENDRA KUMAR DUBEY    ",
    position: "NATIONAL TREASURER    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working10.jpg",
    fit: "cover",
  },
  {
    name: "MRS. VANDANA TRIPATHI    ",
    position: "NATIONAL SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working8.jpg",
    fit: "cover",
  },
  {
    name: "DR. SEEMA MALIK    ",
    position: "NATIONAL SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working7.jpg",
    fit: "cover",
  },
  {
    name: "MR. N. NALLASHEKHAR    ",
    position: "NATIONAL SECRETARY    ",
    image: nallashekhar,
    fit: "unset",
  },
  {
    name: "MR. VIKAS PANDEY    ",
    position: "NATIONAL SECRETARY & SPOKESPERSON    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-2.jpg",
    fit: "cover",
  },
  {
    name: "MR. DIPESH JAIN    ",
    position: "NATIONAL SPOKESPERSON    ",
    image: dipeshjain,
    fit: "cover",
  },
  {
    name: "MR. SANJAY KUMAR YADAV    ",
    position: "NATIONAL ORGANISATION SECRETARY    ",
    image: sanjayyadav,
    fit: "cover",
  },
  {
    name: "MR. ASHISH VEGAD    ",
    position: "NATIONAL ORGANISATION SECRETARY    ",
    image: vegad,
    fit: "cover",
  },
  {
    name: "MR. VENKATA RAO MULA    ",
    position: "NATIONAL ORGANISATION SECRETARY    ",
    image: venkata,
    fit: "cover",
  },
  {
    name: "MR. UNNAT SHARMA    ",
    position: "NATIONAL ORGANISATION SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working17.jpg",
    fit: "cover",
  },
  {
    name: "MR. ASHISH NAG    ",
    position: "DEPUTY SECRETARY    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/national-working14.jpg",
    fit: "cover",
  },
  {
    name: "MR P.D. BARI    ",
    position: "OFFICE SECRETARY    ",
    image: pdbari,
    fit: "unset",
  },
];

const statePresidents = [
  {
    name: "MR. VINOD KINLEKAR    ",
    position: "STATE PRESIDENT GOA    ",
    image: vinod,
    fit: "cover",
  },
  {
    name: "MR. ANKIT AHLUWALIA",
    position: "STATE PRESIDENT - HIMACHAL PRADESH    ",
    image: ankit,
    fit: "cover",
  },
  {
    name: "MR. PANKAJ SOOD    ",
    position: "STATE PRESIDENT - PUNJAB    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-13.jpg",
    fit: "cover",
  },
  {
    name: "MR. DEVINDER SINGH SETHI (SUNNY)    ",
    position: "STATE PRESIDENT - NEW DELHI    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/DEVENIDER-SINGH.jpg",
    fit: "cover",
  },
  {
    name: "MR. ARNAB DESAI    ",
    position: "STATE PRESIDENT - GUJARAT    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-17.jpg",
    fit: "cover",
  },
  {
    name: "MR. ARUN TIWARI ",
    position: "STATE PRESIDENT - MADHYA PRADESH    ",
    image: aruntiwari,
    fit: "unset",
  },
  {
    name: "MR. C.B. MISHRA    ",
    position: "STATE PRESIDENT - CHHATTISGARH    ",
    image: mishra,
    fit: "cover",
  },
  {
    name: "MR. RAMAGIRI HARI BABU    ",
    position: "STATE PRESIDENT - TELANGANA    ",
    image: haribabu,
    fit: "cover",
  },
  {
    name: "MR. GORLE SRINIVASA NAIDU    ",
    position: "STATE PRESIDENT - ANDHRA PRADESH    ",
    image: gorlenaydu,
    fit: "cover",
  },
  {
    name: "DR. GEETHA KUMARI    ",
    position: "STATE PRESIDENT - TAMILNADU    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-15.jpg",
    fit: "cover",
  },
  {
    name: "MR. NAVIN KAWAL    ",
    position: "STATE PRESIDENT - KARNATAKA    ",
    image: navin,
    fit: "cover",
  },
  {
    name: "MR. BIKRAM KESHRI ROUTRAY    ",
    position: "STATE PRESIDENT - ODISHA    ",
    image: routrayi,
    fit: "unset",
  },
  {
    name: "DR. MAHENDRA SINGH",
    position: "STATE PRESIDENT - RAJASTHAN    ",
    image: mahendra,
    fit: "cover",
  },
  {
    name: "MRS. SANTOSHI MORE",
    position: "STATE PRESIDENT- MAHARASHTRA    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-1.jpg",
    fit: "cover",
  },
  {
    name: "MR. DHANAJAY SINGH    ",
    position: "STATE PRESIDENT- JHARKHAND    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-22.jpg",
    fit: "cover",
  },
  {
    name: "MR. PANKAJ PATHAK     ",
    position: "STATE PRESIDENT - ASSAM    ",
    image:
      "https://www.thecro.in/wp-content/uploads/2017/03/state-president-8.jpg",
    fit: "cover",
  },
  {
    name: "MR. ACHU BAGANG    ",
    position: "STATE PRESIDENT - ARUNACHAL PRADESH",
    image: achu,
    fit: "unset",
  },
];

const Committee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-md-4 mb-3 d-flex justify-content-center ">
            <a href="#Patron">
              <button
                className="btn btn-danger me-4"
                style={{ borderRadius: 2 }}
              >
                Honorable National Patron Member
              </button>
            </a>
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center ">
            <a href="#Committee">
              <button
                className="btn btn-danger me-4"
                style={{ borderRadius: 2 }}
              >
                National Working Committee
              </button>
            </a>
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center ">
            <a href="#Presidents">
              <button
                className="btn btn-danger me-4"
                style={{ borderRadius: 2 }}
              >
                Our State Presidents
              </button>
            </a>
          </div>
        </div>

        <div id="Patron" className="row bg-light mt-5 py-4 px-5">
          <h3 className="text-center fw-bolder ">
            HONORABLE NATIONAL PATRON MEMBER
          </h3>
          {patronMembers.map((member, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <div
                className="shadow rounded-4 py-4 custom-card"
                style={{ height: 300 }}
              >
                <div
                  className="mx-auto d-block shadow"
                  style={{
                    height: 140,
                    width: 140,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <div className="col pic">
                    <img src={member.image} alt="" />
                  </div>
                </div>
                <h6 className="text-center fw-bolder mt-4">{member.name}</h6>
                <p
                  className="text-center mt-1 opacity-75 "
                  style={{ fontSize: 13 }}
                >
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div id="Committee" className="row bg-light mt-5 py-4 px-5">
          <h3 className="text-center fw-bolder ">NATIONAL COMMITTEE</h3>
          {nationalCommittee.map((member, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <div className="shadow rounded-4 py-4" style={{ height: 300 }}>
                <div
                  className="mx-auto d-block shadow"
                  style={{
                    height: 140,
                    width: 140,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <div className="col pic">
                    <img
                      style={{ objectFit: member.fit }}
                      src={member.image}
                      alt=""
                    />
                  </div>
                </div>
                <h6 className="text-center fw-bolder mt-4">{member.name}</h6>
                <p
                  className="text-center mt-1 opacity-75 "
                  style={{ fontSize: 13 }}
                >
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div id="Presidents" className="row bg-light mt-5 py-4 px-5">
          <h3 className="text-center fw-bolder ">OUR STATE PRESIDENTS</h3>
          {statePresidents.map((member, index) => (
            <div className="col-md-2 mt-4" key={index}>
              <div
                className="shadow rounded-4 py-4 px-2"
                style={{ height: 270 }}
              >
                <div
                  className="mx-auto d-block shadow"
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <div className="col pic">
                    <img
                      style={{ objectFit: member.fit }}
                      src={member.image}
                      alt=""
                    />
                  </div>
                </div>
                <h6 className="text-center fw-bolder mt-4">{member.name}</h6>
                <p
                  className="text-center mt-1 opacity-75 "
                  style={{ fontSize: 13 }}
                >
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Committee;
