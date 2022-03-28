import React, { useEffect } from "react";
import AOS from "aos";

const HeadingDisplay = ({ subject, desp }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {/* **** Main Heading Display Start **** */}
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="zoom-in-down">
              <h6>{subject}</h6>
              <h2>{desp}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* **** Main Heading Display End **** */}
    </>
  );
};

export default HeadingDisplay;
