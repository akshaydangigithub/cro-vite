import React, { useEffect } from "react";
import styles from "./style.module.css";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import animationData from "../../assets/anim.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Feedback = () => {
  // const feedbackArr = [
  //   {
  //     feedback:
  //       "CRO relieved me of the frustrations of dealing with uncooperative company. CRO helped in resolving this matter with a proper satisfactory resolution.",
  //     name: "Arun Mishra",
  //     state: "Tamil Nadu",
  //     image:
  //       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  //   },
  //   {
  //     feedback:
  //       "I would like to thank you both very much for the excellent cooperation; we would really like to work with you again.",
  //     name: "Arun Mishra",
  //     state: "Tamil Nadu",
  //     image:
  //       "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  //   },
  //   {
  //     feedback:
  //       "They are highly motivated and always go above and beyond to provide us with quality and timely services.this is best cro have worked with",
  //     state: "Tamil Nadu",
  //     image:
  //       "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  //   },
  // ];
  return (
    <>
      <div style={{ marginTop: 50 }}>
        <div className="container-fluid">
          <div className="row d-flex justify-content-around">
            <div className="col-md-5 mb-5 d-flex align-items-center justify-content-center">
              {/* <h2 className='text-center' style={{ color: "white" }}>FEEDBACK</h2>
              <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  {feedbackArr.map((feedback, index) => (
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      key={index}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div style={{ backgroundColor: "#21306f", height: "40vh" }} className="carousel-inner">
                  {
                    feedbackArr.map((feedback, index) => {
                      return <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <div className={styles.feed}>
                          <p>{feedback.feedback}</p>
                          <div className={styles.personal_info}>
                            <div className={styles.self_image}>
                              <img src={feedback.image} alt="alt" />
                            </div>
                            <div>
                              <h4>{feedback.name}</h4>
                              <h5>{feedback.state}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div> */}

              <Player
                src={animationData}
                className="player"
                loop
                autoplay
                height={300}
                width={300}
              />
            </div>

            <div style={{ padding: 20 }} className="col-md-6 mb-5 bg-light">
              <h2 className="text-center">LATEST NEWS</h2>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators mt-5">
                  <button
                    style={{ backgroundColor: "black" }}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    style={{ backgroundColor: "black" }}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    style={{ backgroundColor: "black" }}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    style={{ padding: "3.2vmax 0" }}
                    className="carousel-item active"
                  >
                    <div
                      className="d-flex justify-content-center"
                      style={{ gap: 20 }}
                    >
                      <img src={news1} height={250} alt="alt" />
                      <img src={news2} height={250} alt="alt" />
                    </div>
                  </div>
                  <div style={{ padding: "3vmax 0" }} className="carousel-item">
                    <div
                      className="d-flex mt-3 justify-content-center"
                      style={{ gap: 20 }}
                    >
                      <img src={news1} height={250} alt="alt" />
                      <img src={news2} height={250} alt="alt" />
                    </div>
                  </div>
                  <div style={{ padding: "3vmax 0" }} className="carousel-item">
                    <div
                      className="d-flex mt-3 justify-content-center"
                      style={{ gap: 20 }}
                    >
                      <img src={news1} height={250} alt="alt" />
                      <img src={news2} height={250} alt="alt" /> alt="alt"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
