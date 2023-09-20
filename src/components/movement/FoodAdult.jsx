import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";

const FoodAdult = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <Navbar />
    <div className="container mt-5 pt-5">
      <h4 className="text-center fw-bolder my-4">
        FOOD ADULTERATION IN INDIA
      </h4>
      <p>
        Food is the basic necessity of life. It should be pure, nutritious,
        and free from any type of adulteration for proper maintenance of human
        health. One works hard and earns to satisfy hunger, but at the end of
        day we are not sure of what we are eating. Adulteration is done by
        antisocial persons who want to make easy money. We might be eating a
        dangerous dye, sawdust, industrial starch or other contaminated
        products which are a major source of disease. And thus, we invite
        diseases rather than good health. Food adulteration is basically
        lowering the quality of food for sale either by admixture,
        substitution of other inferior substances or by removal of some
        valuable nutritious ingredient.
      </p>
      <p>
        Food adulteration is a serious crime which is punishable under the
        law. Consumption of adulterated food can cause serious health issues
        and even death. The Bureau of Indian standards inspects the various
        food products manufactured and issues certificates, if the product
        meets the standard quality needed. The various certificates of
        reliability are the FPO (Food Products Order) mark, The ISI (Indian
        Standards Institution) mark and the AGMARK (Agriculture Marketing).
      </p>
      <p>
        There is hardly any item in the Indian market, which is not
        adulterated. The research has shown that even fruits, vegetables and
        cereals, sold in the market are said to contain high levels of toxic
        metals like lead, nickel etc. Adulteration spares nothing when a
        spirit of becoming quickly rich over-rules the moral ground. The
        Indian government has taken several measures to address the issue of
        food adulteration. The FSSAI is responsible for setting food safety
        standards, regulating food products, and ensuring compliance with food
        safety regulations. <b>The Food Safety and Standards Act, 2006,</b> provides
        the legal framework for regulating food safety in India.
      </p>
      <p>
        We Consumer Rights Organisation (CRO) started a revolutionary campaign
        all over India in the year of 2014 against "Food Adulteration" and
        successfully conducted 324 awareness programs in various schools &
        colleges, 73 public rallies, 34 banner campaign and through social
        media in 12 states with the valuable support of BIS department, FSSAI
        officials, Medical officers, Officials from Legal Metrology department
        and the local Doctors. Here it is the question of everybody's health,
        and broadly speaking, it is the question of Nation's health. If the
        people are to be saved from the clutches of adulterators so that they
        can lead healthy & disease free life, strict steps should be taken
        against the recalcitrant. Adulteration should be treated like any
        other crime and the perpetrators should not be left off just for
        political or any other consideration.
      </p>
      <p>
        We Consumer Rights Organisation (CRO) and all our members are bound to
        fight against the Adulteration and protect our consumers.
      </p>
    </div>
    <Footer />
  </>
  )
}

export default FoodAdult