import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";

const BillLekeDekho = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h4 className="text-center fw-bolder my-4">BILL LEKE DEKHO</h4>
        <p>
          We are in a country where consumers are taken for a ride as they are
          not aware about their basic consumer rights. Consumers are being
          looted by business mafias by spreading rumors about the legitimate
          bills & taxes, because of that many consumers refrain from taking a
          bill thinking that they'll have to pay more money unnecessarily.
        </p>
        <p>
          A country benefits when the citizen pay their taxes, as it becomes a
          source of income for the development of the country. Unfortunately, In
          our country we have businesses running where people for their personal
          benefit fool people by not providing any type of receipt to the
          consumer for their purchases. In India we find many small businesses
          flourishing by hoodwinking the consumer & the government by finding
          ways to escape paying taxes, and one such way is by not providing
          bills, the consumer as well contributes to this apathy by foregoing
          the bill assuming that they have been given some sort of discount.
        </p>
        <p>
          In order to spread awareness the Consumer Rights Organisation started
          a campaign pan India basis known as "BILL LEKE DEKHO" in year 2013,
          wherein the organisation members throughout the country conducted 168
          consumer awareness programs, 1072 signature campaigns, 126 seminars
          and 93 public meetings in 18 states to educate consumer that their
          rights start when they receive a bill for whatever items purchased,
          and this will protect & safeguard them from unethical business
          practices.
        </p>
        <p>
          The Consumer Rights Organisation in the endeavor to educate consumers
          informed about the benefits of taking a receipt as it gives the
          consumers a Lawful Right in case of redressal, and protects the
          consumer from any unwarranted issues such as damaged goods,
          unfulfilled services etc. The consumers were also made aware that by
          taking a bill they would contribute to the development of
          infrastructure and defense capabilities of the country . It also
          prevents money laundering and terrorist activities.
        </p>
        <p>
          We Consumer Rights Organisation will continue this campaign until each
          & every consumer of our country gets the respect they command and we
          as an organisation will continue to strive for each & every consumer
          rights in this country.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BillLekeDekho;
