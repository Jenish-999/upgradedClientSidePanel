import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const OwlCarousel = () => {
  return (
    <>
      {/* ***** Main Owl Carousel Area Start  ***** */}
      {/* <section className="services">
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
      </section> */}
      {/* ***** Main Owl Carousel Area End  ***** */}
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <div className="owl-service-item owl-carousel">
                  <SwiperSlide>
                    <div className="item">
                      <div className="icon">
                        <img
                          src="assets/images/service-icon-01.png"
                          alt="img"
                        />
                      </div>
                      <div className="down-content">
                        <h4 className="text-white">Solar Facilities</h4>
                        <p>
                          Suspendisse tempor mauris a sem elementum bibendum.
                          Praesent facilisis massa non vestibulum.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="icon">
                        <img
                          src="assets/images/service-icon-02.png"
                          alt="img"
                        />
                      </div>
                      <div className="down-content">
                        <h4 className="text-white">Maintanance Service</h4>
                        <p>
                          Suspendisse tempor mauris a sem elementum bibendum.
                          Praesent facilisis massa non vestibulum.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="icon">
                        <img
                          src="assets/images/service-icon-01.png"
                          alt="img"
                        />
                      </div>
                      <div className="down-content">
                        <h4 className="text-white">Events Buddy</h4>
                        <p>
                          Suspendisse tempor mauris a sem elementum bibendum.
                          Praesent facilisis massa non vestibulum.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="icon">
                        <img
                          src="assets/images/service-icon-03.png"
                          alt="img"
                        />
                      </div>
                      <div className="down-content">
                        <h4 className="text-white">Contribuation Funds</h4>
                        <p>
                          Suspendisse tempor mauris a sem elementum bibendum.
                          Praesent facilisis massa non vestibulum.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwlCarousel;
