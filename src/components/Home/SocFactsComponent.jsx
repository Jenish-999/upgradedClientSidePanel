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
                        <div className="count-title">Succesed Services</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">852</div>
                        <div className="count-title">A Wings Points</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">2345</div>
                        <div className="count-title">Current Members</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">562</div>
                        <div className="count-title">B Wings Points</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">245</div>
                        <div className="count-title">C Wing Points</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">854</div>
                        <div className="count-title">D Wing Points</div>
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
