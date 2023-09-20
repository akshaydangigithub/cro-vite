import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";

const EducationSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <Navbar />
    <div className="container mt-5 pt-5">
      <h4 className="text-center fw-bolder mt-4 mb-2">
        EDUCATION SYSTEM IN INDIA
      </h4>
      <h6 className="text-center fw-bolder mb-4">
        The value system of a country comes from its education system
      </h6>
      <p>
        Lack of education system has been a problem in our country and it has
        been blamed for all sorts of evil for hundreds of years. Even Rabindra
        nath Tagore wrote lengthy articles about how Indian education system
        needs to change. From the colonial times, few things have changed. We
        have established IITs, IIMs, Law schools and other institutions of
        excellence; students now routinely score 90% marks so that even
        students with 90+ percentages find it difficult to get into the
        colleges of their choice.
      </p>
      <p>
        A country benefits when the citizen pay their taxes, as it becomes a
        But establishing many educational institutions is not going to solve
        the education crisis in India. People spend their parent's life
        savings and borrowed money on the education and still do not get
        standard education, and are struggling find employment of their
        choice. Millions of students are victim of unrealistic, pointless,
        mindless rat race. The mind numbing competition and rote learning do
        not only crush the creativity and originality of millions of Indian
        students every year; it also drives students to commit suicide.
      </p>
      <p>
        We Consumer Rights Organisation (CRO) in 2016, started a revolution
        against " The Corrupted Education System in India" it evolved from
        Andhra Pradesh and spread like wild fire all over India.
      </p>
      <p>
        93% schools are not following the rules & regulations, 87% schools are
        getting state affiliation by producing fake/false/managed documents,
        54% schools are following the CBSE syllabus without CBSE affiliation,
        74% schools are selling books, uniforms and other stationeries in
        their premises without any permission from the concerned government.
        Many Business schools, Medical colleges, Engineering colleges and
        schools are owned by the politicians who in the garb of running
        educational institutions acquire vast expanse of lands. We may have
        the most number of engineering graduates in the world, but that
        certainly has not translated into much technological innovation in our
        country. Rather, we are busy running the call centers of the rest of
        the world - that is where our engineering skills end.
      </p>
      <p>
        The goal of our new education system should be to create
        entrepreneurs, innovators, artists, scientists, thinkers and writers
        who can establish the foundation of knowledge based economy rather
        than the low-quality service provider nation that we are turning into.
      </p>
      <h6 className="text-center fw-bolder my-4">
        "And just because you have colleges and universities <br />
        Doesn't mean you have education"
      </h6>
      <p>
        We Consumer Rights Organisation demand the Government of India that
        the corruption and business should be completely out of Education
        system, The Education system should be free from political
        interference and business mafias, that's when education will find its
        meaning and will brighten the future of India.
      </p>
    </div>
    <Footer />
  </>
  )
}

export default EducationSystem