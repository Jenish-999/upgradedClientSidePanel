import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { viewDataFunction } from "../../redux/viewReducer/action";
import AOS from "aos";

const ProfileEvents = () => {
  const getAllEvents = useSelector((state) => state.events.viewDataStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewDataFunction());
  }, []);
  // console.log("Events List: ", getAllEvents);

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      {/* ***** Main Profile & Events Area Start ***** */}
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading" data-aos="zoom-in">
                <h2>Profile & Events</h2>
              </div>
            </div>
            {/* Profile Start */}
            {/* <div > */}
            <div className="col-lg-4">
              <div className="categories">
                <h4>Secretary Profile</h4>
                <div className="container-fluid p-1">
                  <ProfileManage className="d-flex justify-content-between align-items-center">
                    <div className="img-container">
                      <img
                        src="assets/images/Profiles/secretory.jpg"
                        alt="profileImg"
                        className="img-fluid shadow-lg"
                        style={{
                          borderRadius: "50%",
                          height: "100px",
                          width: "100px",
                          backgroundPosition: "center",
                          // backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="content-container">
                      <p className="text-dark fs-6 text-bold p-2 text-uppercase">
                        Rajesh Kankotiya
                      </p>
                    </div>
                  </ProfileManage>
                </div>
                <div className="main-button-red">
                  <Link to="/inquery">Send Query || Complains</Link>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* Events Start */}
            <div className="col-lg-8">
              <div className="row">
                {getAllEvents && getAllEvents !== ""
                  ? Object.keys(getAllEvents).map((id, indx) => {
                      var d = new Date(getAllEvents[id].eventDate);
                      var dateNum = d.getDate();
                      var monthName = months[d.getMonth()]; // "July" (or current month)
                      return (
                        <div className="col-lg-6" key={id}>
                          <div className="meeting-item">
                            <div className="thumb"></div>
                            <div className="down-content">
                              <div className="date">
                                <h6>
                                  {monthName} <span>{dateNum}</span>
                                </h6>
                              </div>
                              <a href="/">
                                <h4>{getAllEvents[id].subject}</h4>
                              </a>
                              <p>{getAllEvents[id].description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main Profile & Events Area End ***** */}
    </>
  );
};

export const ProfileManage = Styled.div`
@media screen and (max-width : 729px){   
  flex-direction: column;
}
`;

export default ProfileEvents;
