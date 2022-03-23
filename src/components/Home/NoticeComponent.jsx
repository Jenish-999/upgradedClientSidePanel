import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allNoticeDisplayFunction } from "../../redux/noticeReducer/action";

const NoticeComponent = () => {
  const allNoticeStorage = useSelector(
    (state) => state.notice.allNoticeStorage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNoticeDisplayFunction());
  }, []);

  console.log("All Notice Data", allNoticeStorage);

  return (
    <>
      {/* ***** Main Notice Now Area Start ***** */}
      <section className="apply-now" id="apply">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="item">
                    <h3>Access Photo Gallery</h3>
                    <p>
                      This piece of section will redirect you to the flourished
                      & relish moments of our society
                    </p>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <Link to="/gallery">Take me !</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <h3>Point the Inquery or Complains</h3>
                    <p>
                      You are free bird to make inqueries and complains about
                      any service or facilities for society or it's members.
                      Also feel free to offer advice to take one step ahead
                      towards improvement.
                    </p>
                    <div className="main-button-yellow">
                      <div className="scroll-to-section">
                        <Link to="/inquery">Take Charge !</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordions is-first-expanded h-auto">
                <article className="accordion">
                  <div className="accordion-head">
                    <h4>
                      Access
                      <span className="text-secondary custom-text-underline">
                        {" "}
                        NOTICE BOARD
                      </span>
                    </h4>
                  </div>
                  {/* Main notice Area Start */}
                  <div className="container-fluid p-2 border border-light shadow rounded my-3 bg-grad-color-secondary">
                    <div className="d-flex flex-column align-items-left justify-content-between">
                      <p className="text-uppercase text-bold text-secondary">
                        Important Notices
                      </p>

                      {Object.keys(allNoticeStorage).map((id, indx) => {
                        return (
                          <p className="f-5 text-capitalize text-dark" key={id}>
                            • {allNoticeStorage[id]}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  {/* Main notice Area End */}
                  {/* Main notice Area Start */}
                  <div className="container-fluid p-2 border border-light shadow rounded my-3 bg-grad-color-primary">
                    <div className="d-flex flex-row align-items-left justify-content-between mb-2">
                      <p className="text-uppercase text-bold text-secondary">
                        Rules & Regulations
                      </p>
                    </div>
                    {/* Quick event particle Area Start */}
                    <div className="d-flex flex-column border p-1 rounded align-items-left justify-content-between mb-2">
                      <div className="f-5 text-capitalize text-dark">
                        <ul>
                          <li className="border-bottom">
                            ► Penalties are applied against the damaged caused
                            while shifting the household goods in lifts,
                            corridors, garden areas etc by any member of the
                            society.{" "}
                          </li>
                          <li className="border-bottom">
                            ► No member can occupy the area near their front
                            doors, corridors, passage for their personal usage.
                          </li>
                          <li className="border-bottom">
                            ► Salesmen, vendors or any other sellers are not
                            allowed to enter the premises. Owners residing are
                            not allowed to rent their flats for any commercial
                            use as this might create trouble to other society
                            members.
                          </li>
                          <li className="border-bottom">
                            ► Wastage and over usage of water is not allowed.
                            Flat owners will be considered responsible for this
                            act and they have to pay the penalty costs for the
                            same.
                          </li>
                          <li className="border-bottom">
                            ► Maintenance charges should be paid from to time.
                            If failed after multiple warnings, any legal action
                            can be processed against the respective person.
                          </li>
                          <li className="border-bottom">
                            ► Washing of vehicles, cars, bikes etc in the
                            premises is strictly prohibited. Instead you can use
                            washing area of the society.
                          </li>
                          <li>
                            ► Smoking in lobbies, passage is not allowed. If any
                            irresponsible person is found smoking in the no
                            smoking zone, he/she shall be charged with penalty.
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Quick event particle Area End */}
                  </div>
                  {/* Main notice Area End */}
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main notice Now Area End ***** */}
    </>
  );
};

export default NoticeComponent;
