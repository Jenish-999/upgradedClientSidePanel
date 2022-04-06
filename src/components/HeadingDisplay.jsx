import React, { useEffect } from "react";
import AOS from "aos";
import Styled from "styled-components";

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
            <div className="col-lg-12 text-light" data-aos="zoom-in-down">
              <h6>{subject}</h6>
              <Htag>{desp}</Htag>
            </div>
          </div>
        </div>
      </section>
      {/* **** Main Heading Display End **** */}
    </>
  );
};

export const Htag = Styled.p`
  font-size: 1.80em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  @media screen and (max-width : 729px){ 
      font-size: 1em;
      font-weight: 200;
  }
`;

export default HeadingDisplay;
