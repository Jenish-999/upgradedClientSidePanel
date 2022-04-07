import React from "react";
import { Player } from "video-react";

const SocFactsComponent = () => {
  return (
    <>
      {/* ***** Main facts Area Start  ***** */}
      <section className="our-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <h2>A Few Facts About Our Green Park Luxuria</h2>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content percentage">
                        <div className="count-digit">90</div>
                        <div className="count-title">Accomplished Services</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">52</div>
                        <div className="count-title">Security (CCTV)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">208</div>
                        <div className="count-title">Annual Home</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">10</div>
                        <div className="count-title">Domestic Workers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">500</div>
                        <div className="count-title">Celebrations</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">4</div>
                        <div className="count-title">Total wings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              {/* <div className="video">
                  <a
                    href="https://www.youtube.com/watch?v=HndV87XpkWg"
                    target="_blank"
                  >
                    <img src="assets/images/play-icon.png" alt="img" />
                  </a>
                </div> */}
              <div className="video shadow-lg shadow-light">
                <Player
                  playsInline
                  autoPlay
                  muted
                  poster="/assets/poster.png"
                  src="assets/images/ArchitectureVideo.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main facts Area End  ***** */}
    </>
  );
};

export default SocFactsComponent;
