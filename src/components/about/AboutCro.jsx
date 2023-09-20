import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";

const AboutCro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 pt-5">
        <h4 className="text-center mb-4 mt-4 fw-bolder ">
          HISTORY BEHIND THE FORMATION OF CRO
        </h4>
        <div className="row px-5">
          <div className="col">
            <p>
              In 2010 Late Mr. D.P.Sharma and four activists started CRO they
              felt that something needed to be done to improve the situation of
              the common consumer. In this age the moral ethics in trade or
              business has fallen on ground for maximum profits. Even eatables
              are being adulterated in search of money making. This is an
              important concern for the founders. These all aspects which are
              happening with consumers were the reason behind the formation of
              Upbhokta Adhikar Sangthan (CRO - Consumer Rights Organization).
            </p>
          </div>
        </div>
        <div className="row px-5">
          <h4 className="text-center mb-4 mt-4 fw-bolder ">
            INTRODUCTION TO CRO
          </h4>
          <p>
            Upbhokta Adhikar Sangthan Regd. No. 05/23/01/08574/10, we are
            India’s largest organization, working Pan India basis having
            presence in 24 states and union territories of India.
          </p>
          <p>
            We are working for Consumer Awareness, Consumer Education and
            Consumer Protection. We work on specially designed activities to
            aware consumers regarding Consumer Rights, Responsibilities, Food
            Quality, Food Fortification, CPA, Consumer Grievance, duplicate
            product, adulterated food products, misleading advertisements etc.
            From past 13 years our teams in various parts of India is regularly
            conducting Training, Survey, Signature Drive, Workshop, Public
            Meetings, Rally, Seminar in schools/colleges and Ground Exhibition
            in Public places in Rural & Urban areas so that more and more people
            can connect with us and know their rights as a responsible
            consumers.
          </p>
          <p>
            Of the several laws that have been enacted to protect the rights of
            consumers in India, the most significant is the Consumer Protection
            Act, 2019. Under this law, everyone, including individuals, a Hindu
            undivided family, a firm, and a company, can exercise their consumer
            rights for the goods and services purchased by them. It is important
            that, as consumers, we know at least our basic rights and about the
            courts and procedures that deal with the infringement of our rights.
          </p>
        </div>
        <div className="row bg-light py-3">
          <h4 className="text-center mb-4 mt-4 fw-bolder">OUR OBJECTIVES</h4>
          <div className="col-md-6 mt-3">
            <ul>
              <li className="mb-3">Organize and aware consumers</li>
              <li className="mb-3">
                Protect and publicize all the rights of consumer
              </li>
              <li className="mb-3">
                Execute the programs related to consumer education, their rights
                and their responsibilities, with the help of government and
                administration
              </li>
              <li className="mb-3">
                Actively provide support in proper implementation of Consumer
                Protection Act
              </li>
              <li className="mb-3">
                Make best effort to stop monopolistic, restrictive and unfair
                trade practices
              </li>
              <li className="mb-3">
                Give and receive moral support for the consumer interest to
                other organizations while working under the rules of the
                organization
              </li>
              <li className="mb-3">
                Put into practice statutory measures under the civil rights for
                the achievement of Organizational objectives
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-3">
            <ul>
              <li className="mb-3">
                To protect consumers interests, their basic needs and rights
                such as health, education, water, electricity, roads,
                entertainment, catering, traffic, etc
              </li>
              <li className="mb-3">
                Operate consumer information center in all districts of India
                with the help of government
              </li>
              <li className="mb-3">
                Organizing and conducting consumer related programs to get aid
                and grants from the central government, state governments,
                agencies and organizations
              </li>
              <li className="mb-3">
                Through the organization implement and operate the various
                consumer related schemes of Central Government and State
                Governments
              </li>
              <li className="mb-3">
                Through the organization legally present the consumer problems
                and complaints before the Consumer Forum and the Commission
              </li>
              <li className="mb-3">
                Solve problems of general consumers and our members
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutCro;
