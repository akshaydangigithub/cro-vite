import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";

const NationalInte = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h4 className="text-center fw-bolder mb-2 mt-4">NATIONAL INTEGRATION</h4>
        <h6 className="text-center fw-bolder mb-4">
          Consumer Rights Organisation (CRO) with National Integration
        </h6>
        <p>
          National Integration is the feeling of togetherness or oneness towards
          one's own country irrespective of their individual differences with
          regards to religion, region, race, culture or caste. India is a
          multi-racial and multilingual country. These diversities are the
          features of India. Our country is an excellent example of "Unity in
          Diversity". Foreign invasion and conquests from time to time could not
          crush the spirit of unity in our culture.
        </p>
        <p>
          Foreign powers and some anti-social groups keep trying to conspire
          against the unity of our countrymen and thus it creates a need to
          preserve the national integrity of our country. The feeling of oneness
          among the citizen is important for overall stability and growth of the
          country.
        </p>
        <p>
          In this regard we the Consumer Rights Organisations (CRO) started a
          movement to support the 'National Integrity & Consumer
          Responsibilities' in all over India. We are using same flag in every
          part of India, the flag was made in Vizag - Andhra Pradesh, in 17
          days, where 29 people were involved in making of this 1008 feet
          Tricolor flag.
        </p>
        <p>
          We have started this movement from the city of destiny Vishakhapatnam
          - Andhra Pradesh (680 participants, 2.8 km) with thousands of citizen
          taking up the mantle of rekindling the spirit of unity and integrity,
          and taking out a rally with 1008 feet tricolor flag. Each & every
          citizen carried the tricolor on their shoulder with oneness and pride
          in their heart. The Consumer Rights Organisation (CRO) has taken upon
          themselves to spread the awareness of unity in diversity by organising
          the similar type of rallies in Noida - Uttar Pradesh (820
          participants, 3 km), Chennai - Tamilnadu (530 participants, 1.4 km),
          Vadodara - Gujarat (1800 participants, 4.3 km) and this will be taken
          to each & every individual of the country, no matter if we belong to
          different states, community, religion or creed but at the end of the
          day we belong to one nation and we all are proud Indians.
        </p>
        <p>
          The CRO has clear plans to conduct the similar activity in every state
          of India and we are on the way. " If we begin to embrace the idea of
          Unity in Diversity right now, the world will be a better place"
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NationalInte;
