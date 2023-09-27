import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";
import cr1 from "../../assets/crn-1.jpg";
import cr2 from "../../assets/crn-2.jpg";
import cr3 from "../../assets/crn-3.jpg";
import cr4 from "../../assets/crn-4.jpg";
import cr5 from "../../assets/crn-5.jpg";
import cr6 from "../../assets/crn-6.jpg";
import "../../components/style.css"

const AboutConsumer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h4 className="text-center fw-bolder mt-5">
          BASIC CONSUMER RIGHTS EVERYONE MUST KNOW
        </h4>
        <div className="row mt-5 ">
          <div className="col-md-5 image-con">
            <img src={cr1} alt="" />
          </div>
          <div className="col-md-7 pt-4">
            <h5 className="fw-bolder mb-4">RIGHT TO SAFETY </h5>
            <p style={{ lineHeight: 2 }}>
              Means right to be protected against the marketing of goods and
              services, which are hazardous to life and property. Businesses are
              responsible for ensuring that their products/offerings meet
              quality standards and do not pose any unreasonable risks to
              consumer&#39;s health &amp; safety. While purchasing the goods or
              services, Consumer must look for standard quality mark such as
              ISI, Hallmark, Agmark, ISO, FSSAI etc.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-con">
            <img src={cr6} alt="" />
          </div>
          <div className="col-md-7 pt-2">
            <h5 className="fw-bolder mb-4">RIGHT TO CHOOSE </h5>
            <p style={{ lineHeight: 2 }}>
              Means right to be assured, wherever possible of access to variety
              of goods and services at competitive price. In case of monopolies,
              it means right to be assured of satisfactory quality and service
              at a fair price. The consumers can choose the brand they find
              suitable from their point of view. Freedom of choice means that
              the person is able to choose his own course of action and his own
              pattern of living, subject to the requirement that he shall not
              act so as to violate the freedom of choice of others.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-con">
            <img src={cr2} alt="" />
          </div>
          <div className="col-md-7 pt-2">
            <h5 className="fw-bolder mb-4">RIGHT TO BE INFORMED </h5>
            <p style={{ lineHeight: 2 }}>
              Means right to be informed about the quality, quantity, potency,
              purity, standard and price of goods so as to protect the consumer
              against unfair trade practices. Consumer should insist on getting
              all the information about the product or service before making a
              choice or a decision. This will enable them to act wisely and
              responsibly and also enable them to desist from falling prey to
              high pressure selling techniques.
            </p>
          </div>
        </div>
        \
        <div className="row mt-5">
          <div className="col-md-5 image-con">
            <img src={cr3} alt="" />
          </div>
          <div className="col-md-7">
            <h5 className="fw-bolder mb-2">RIGHT TO CONSUMER EDUCATION </h5>
            <p className="mb-2" style={{ lineHeight: 1.5 }}>
              Means the right to acquire the knowledge and skill to be an
              informed consumer throughout life. Ignorance of consumers,
              particularly of rural consumers, is mainly responsible for their
              exploitation. Consumer education is the preparation of an
              individual to be capable of making informed decisions when it
              comes to purchasing products in a consumer culture.
            </p>
            <p style={{ lineHeight: 1.5 }}>
              Do not get carried away by advertisements only or believe on the
              words of the seller, customer must look for market
              review/feedbacks. Consumer must insist on getting complete
              information regarding quality, quantity, utility etc. of the
              product/service and contact details of grievance mechanism of the
              company.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-con">
            <img src={cr4} alt="" />
          </div>
          <div className="col-md-7 pt-4">
            <h5 className="fw-bolder mb-4">RIGHT TO BE HEARD </h5>
            <p style={{ lineHeight: 2 }}>
              Means that consumer&#39;s interests will receive due consideration
              at appropriate forums. It also includes right to be represented in
              various forums to consider the consumer&#39;s welfare. The
              Consumers should form non-political and non-commercial consumer
              organizations which can be given representation in various
              committees formed by the Government and other bodies in matters
              relating to consumers.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-con">
            <img src={cr5} alt="" />
          </div>
          <div className="col-md-7 pt-2">
            <h5 className="fw-bolder mb-4">RIGHT TO SEEK REDRESSAL </h5>
            <p style={{ lineHeight: 2 }}>
              Means right to seek redressal against unfair trade practices or
              unscrupulous exploitation of consumers. It also includes right to
              fair settlement of the genuine grievances of the consumer. They
              can also take the help of consumer organisations in seeking
              redressal of their grievances. The compensation can be money,
              repair of defective goods or replacement of goods according to the
              issue of the consumer. Consumer must file a complaint if not
              satisfied with the quality of products/services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutConsumer;
