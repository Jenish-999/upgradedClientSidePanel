import React, { useEffect } from "react";
import AOS from "aos";
import { NavLink } from "react-router-dom";
const BannerComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {/* ***** Main Banner Area Start ***** */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="assets/images/ArchitectureVideo.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Members</h6>
                  <h2 data-aos="fade-right">Welcome to Green Park Luxuria</h2>
                  <p data-aos="fade-left">
                    Green Luxuria offers multiple upgraded services to society
                    members. Create your own fresh experiences, or build
                    powerful digital relationship with members and also go
                    digital. If you have query always seek for services are
                    avaiable. Do not pause, take action.
                  </p>
                  <div className="main-button-red">
                    <div className="scroll-to-section">
                      <NavLink to="/about">About Us</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main Banner Area End ***** */}
    </>
  );
};

export default BannerComponent;
