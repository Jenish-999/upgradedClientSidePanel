import React from "react";

const OwlCarousel = () => {
  return (
    <>
      {/* ***** Main Owl Carousel Area Start  ***** */}
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-01.png" alt="img" />
                  </div>
                  <div className="down-content">
                    <h4>Solar Facilities</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-02.png" alt="img" />
                  </div>
                  <div className="down-content">
                    <h4>Maintanance Service</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-01.png" alt="img" />
                  </div>
                  <div className="down-content">
                    <h4>Events Buddy</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-03.png" alt="img" />
                  </div>
                  <div className="down-content">
                    <h4>Contribuation Funds</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main Owl Carousel Area End  ***** */}
    </>
  );
};

export default OwlCarousel;
