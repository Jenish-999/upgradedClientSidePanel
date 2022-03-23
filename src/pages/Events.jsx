import React from "react";
import Wrapper from "../commonComponets/Wrapper";
import HeadingDisplay from "../components/HeadingDisplay";

const Events = () => {
  return (
    <>
      <Wrapper>
        <div>
          <HeadingDisplay
            subject={"All Heart Touching Events"}
            desp={"Acces Upcoming Events"}
          />
          {/* Main section content area Start */}
          <section className="meetings-page" id="meetings">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row pb-5">
                    <div className="col-lg-12">
                      <div className="meeting-single-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$14.00</span>
                          </div>
                          <div className="date">
                            <h6>
                              Nov <span>12</span>
                            </h6>
                          </div>
                          <a href="#">
                            <img
                              src="assets/images/single-meeting.jpg"
                              alt="Img"
                            />
                          </a>
                        </div>
                        <div className="down-content">
                          <a href="#">
                            <h4>Online Teaching and Learning Tools</h4>
                          </a>
                          <p>
                            Recreio dos Bandeirantes, Rio de Janeiro - RJ,
                            22795-008, Brazil
                          </p>
                          <p className="description">
                            This is an edu meeting HTML CSS template provided by{" "}
                            <a href="#">TemplateMo website</a>. This is a
                            Bootstrap v5.1.3 layout. If you need more free
                            website templates like this one, please visit our
                            website TemplateMo. Please tell your friends about
                            our website. Thank you. If you want to get the
                            latest collection of HTML CSS templates for your
                            websites, you may visit <a>Too CSS website</a>. If
                            you need a working contact form script, please visit{" "}
                            <a href="#">our contact page</a> for more info.
                            <br />
                            <br />
                            You are allowed to use this edu meeting CSS template
                            for your school or university or business. You can
                            feel free to modify or edit this layout. You are not
                            allowed to redistribute the template ZIP file on any
                            other template website. Please contact us for more
                            information.
                          </p>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="hours">
                                <h5>Hours</h5>
                                <p>
                                  Monday - Friday: 07:00 AM - 13:00 PM
                                  <br />
                                  Saturday- Sunday: 09:00 AM - 15:00 PM
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="location">
                                <h5>Location</h5>
                                <p>
                                  Recreio dos Bandeirantes,
                                  <br />
                                  Rio de Janeiro - RJ, 22795-008, Brazil
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="book now">
                                <h5>Book Now</h5>
                                <p>
                                  010-020-0340
                                  <br />
                                  090-080-0760
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="share">
                                <h5>Share:</h5>
                                <ul>
                                  <li>
                                    <a href="#">Facebook</a>,
                                  </li>
                                  <li>
                                    <a href="#">Twitter</a>,
                                  </li>
                                  <li>
                                    <a href="#">Linkedin</a>,
                                  </li>
                                  <li>
                                    <a href="#">Behance</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Main section content area End */}
        </div>
      </Wrapper>
    </>
  );
};

export default Events;
