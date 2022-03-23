import React from "react";

const HeadingDisplay = ({ subject, desp }) => {
  return (
    <>
      {/* **** Main Heading Display Start **** */}
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
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
