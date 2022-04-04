import React, { useEffect, useState } from "react";
import Wrapper from "../commonComponets/Wrapper";
import HeadingDisplay from "../components/HeadingDisplay";
import Styled from "styled-components";
import {
  allMembersDetailsFunction,
  memberDetailsFunction,
} from "../redux/membersRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMaintenanceFunction } from "../redux/maintenanceReducer/action";

const Details = () => {
  const [searchWing, setSearchWing] = useState("");
  const [searchResult, setSearchResult] = useState();

  const memberDetails = useSelector((state) => state.members.fullMemberDetails);

  const isMemberLogin = useSelector((state) => state.members.isMemberLogin);

  const { fullName, age, gender, houseNo, totalMembers, email, image, id } =
    memberDetails;

  const loading = useSelector((state) => state.members.loading);

  const memberData = useSelector((state) => state.members.memberData);

  const maintenanceData = useSelector(
    (state) => state.maintenance.maintenanceStorage
  );

  const allMembersDetails = useSelector(
    (state) => state.members.allMembersDetails
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (memberDetails && memberDetails !== "") {
      console.log("SINGLE USER DATA DETAILS ID", memberDetails);
      dispatch(getMaintenanceFunction(id));
    }
  }, [memberDetails]);

  useEffect(() => {
    dispatch(allMembersDetailsFunction());
  }, []);

  useEffect(() => {
    if (memberData && memberData !== "") {
      dispatch(memberDetailsFunction(memberData.localId));
    }
  }, [memberData]);

  useEffect(() => {
    if (!isMemberLogin) {
      navigate("/");
      dispatch({ type: "EMPTY_DATA_MAINTENANCE" });
    }
  }, [isMemberLogin]);

  const list = {
    allMembersDetails,
  };

  // getWingFunction
  const finalListOfwings = Object.keys(list.allMembersDetails).map(
    (id, indx) => {
      const result = list.allMembersDetails[id];
      return result;
    }
  );

  // Function
  const validWingFunction = () => {
    if (searchWing !== "") {
      const newMemberList = finalListOfwings.filter((item) => {
        // console.log("ITEM", item.wing.toLowerCase());
        // console.log(
        //   "NewMemberFilter : ",
        //   Object.values(item.wing.toLowerCase())
        //     .join("")
        //     .toLowerCase()
        //     .includes(searchWing.toLowerCase())
        // );

        return Object.values(item.wing.toLowerCase())
          .join("")
          .toLowerCase()
          .includes(searchWing.toLowerCase());
      });
      return setSearchResult(newMemberList);
    }
  };

  // console.log("WINGS CHAR :  ", searchWing);
  // console.log("FINAL LIST OF WINGS : ", finalListOfwings);
  // console.log("New Members in Wing : ", searchResult);

  function handleSelectChange(e) {
    console.log(e.target.value);
    setSearchWing(e.target.value);
    console.log(finalListOfwings);
    const selectedWingData = finalListOfwings.filter(
      (item) => item.wing.toLowerCase() === e.target.value.toLowerCase()
    );

    console.log("SelectWingData : ", selectedWingData);
    setSearchResult(selectedWingData);
  }

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Wrapper>
        <HeadingDisplay
          subject={"Get All Details"}
          desp={"Society members detail"}
        />
        {loading ? (
          <div className="container h-50 w-100">
            <div class="spinner-grow" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <ContainerWapper>
            <div className="container-wapper bg-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6  p-4">
                    <div className="container-fluid">
                      <div className="card card-cc">
                        <h5 className="card-header text-dark">
                          Members Details
                        </h5>
                        <div
                          className="d-flex justify-content-between"
                          style={{ backgroundColor: "#219f9533 !important" }}
                        >
                          <div className="card-img-wrapper">
                            <img
                              className="custom-img m-3"
                              src={image}
                              alt="Card image cap"
                            ></img>
                          </div>
                          <div className="card-body ">
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person-badge"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                              </svg>
                              <span className="px-2">
                                {memberDetails && fullName}
                              </span>
                            </h6>
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-envelope-paper-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
                                />
                              </svg>
                              <span className="px-2">
                                {memberDetails && email}
                              </span>
                            </h6>
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-house-door-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                              </svg>
                              <span className="px-2">
                                {memberDetails && houseNo}
                              </span>
                            </h6>
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-circle-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
                                <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" />
                              </svg>
                              <span className="px-2">
                                {memberDetails && age} Years
                              </span>
                            </h6>
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-gender-ambiguous"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
                                />
                              </svg>
                              <span className="px-2">
                                {memberDetails && gender}
                              </span>
                            </h6>
                            <h6 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-people-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path
                                  fillRule="evenodd"
                                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                                />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                              </svg>
                              <span className="px-2">
                                {memberDetails && totalMembers} members
                              </span>
                            </h6>
                            <p className="card-text">
                              Geniun person of our society
                            </p>
                            <a href="#" className="btn btn-primary">
                              Check
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  p-4 ">
                    <div className="container-fluid">
                      <table className="table-fill">
                        <thead>
                          <tr>
                            <th className="text-left">Month</th>
                            <th className="text-left">Paid Date</th>
                            <th className="text-left">Due Date</th>
                            <th className="text-left">Amount</th>
                            <th className="text-left"></th>
                          </tr>
                        </thead>
                        <tbody className="table-hover">
                          {maintenanceData &&
                            Object.keys(maintenanceData).map((id, indx) => {
                              var d = new Date(maintenanceData[id].dueDate);
                              var monthName = months[d.getMonth()]; // "July" (or current month)
                              return (
                                <tr key={id}>
                                  <TableData1 className="text-left">
                                    {monthName}
                                  </TableData1>

                                  <TableData2 className="text-left">
                                    {maintenanceData[id].currentDate}
                                  </TableData2>
                                  <TableData3 className="text-left">
                                    {maintenanceData[id].dueDate}
                                  </TableData3>
                                  <TableData4 className="text-left">
                                    <ul className="px-0">
                                      <li className="d-flex justify-content-between">
                                        <span>Annual Amt :</span>
                                        <span>
                                          {maintenanceData[id].annualAmt}/-
                                        </span>
                                      </li>
                                      <li className="d-flex justify-content-between">
                                        <span>Penalty Amt :</span>
                                        <span>
                                          {maintenanceData[id].panelty}/-
                                        </span>
                                      </li>
                                    </ul>
                                  </TableData4>
                                  <TableData5 className="text-left">
                                    PRINT
                                  </TableData5>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                    {/* <h1 className="text-secondary">JENISH</h1> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12  p-3">
                    <div className="container-fluid">
                      <div className="wrapper-container-for-two mb-1 d-flex justify-content-between">
                        <h5 className="text-uppercase text-left">
                          Members View
                        </h5>
                        <div className="cursor-pointer">
                          <select
                            className="form-select"
                            name="wings"
                            // onChange={wingHandler}
                            onChange={handleSelectChange}
                            value={searchWing}
                          >
                            <option value="">Select Wing</option>
                            <option value="a">A-wing</option>
                            <option value="b">B-wing</option>
                            <option value="c">C-wing</option>
                            <option value="d">D-wing</option>
                          </select>
                        </div>
                      </div>
                      <table className="table-fill text-uppercase">
                        <thead>
                          <tr>
                            <th className="text-left ccc">FullName</th>
                            <th className="text-left ccc">Email</th>
                            <th className="text-left ccc">HouseNo</th>
                            <th className="text-left ccc">Age</th>
                            <th className="text-left ccc">Gender</th>
                            <th className="text-left ccc">Family Members</th>
                            <th className="text-left ccc">Status</th>
                          </tr>
                        </thead>

                        <tbody className="table-hover">
                          {allMembersDetails &&
                          allMembersDetails.length !== 0 ? (
                            searchWing.length < 1 ? (
                              Object.keys(allMembersDetails).map(
                                (id, index) => {
                                  return (
                                    <tr key={id}>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].fullName}
                                      </td>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].email}
                                      </td>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].wing}-
                                        {allMembersDetails[id].houseNo}
                                      </td>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].age}
                                      </td>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].gender}
                                      </td>
                                      <td className="text-left custom-td mini-width">
                                        {/* <button
                                  type="button"
                                  className="btn btn-warning btn-sm"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                </button> */}
                                        {allMembersDetails[id].totalMembers}
                                      </td>
                                      <td className="text-left custom-td">
                                        {allMembersDetails[id].status}
                                      </td>
                                    </tr>
                                  );
                                }
                              )
                            ) : searchResult && searchResult.length !== 0 ? (
                              Object.keys(searchResult).map((id, index) => {
                                return (
                                  <tr key={id}>
                                    <td className="text-left custom-td">
                                      {searchResult[id].fullName}
                                    </td>
                                    <td className="text-left custom-td">
                                      {searchResult[id].email}
                                    </td>
                                    <td className="text-left custom-td">
                                      {searchResult[id].wing}-
                                      {searchResult[id].houseNo}
                                    </td>
                                    <td className="text-left custom-td">
                                      {searchResult[id].age}
                                    </td>
                                    <td className="text-left custom-td">
                                      {searchResult[id].gender}
                                    </td>
                                    <td className="text-left custom-td mini-width">
                                      {/* <button
                                  type="button"
                                  className="btn btn-warning btn-sm"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                >
                                </button> */}
                                      {searchResult[id].totalMembers}
                                    </td>
                                    <td className="text-left custom-td">
                                      {searchResult[id].status}
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td>Empty...Inner</td>
                              </tr>
                            )
                          ) : (
                            <tr>
                              <td>Empty...Main</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContainerWapper>
        )}
      </Wrapper>
    </>
  );
};

export const ContainerWapper = Styled.div`


.card-custom-color {
  background-color: #219f9533 !important;
}

.card-cc {
  overflow: hidden;
  min-height: 450px;
  height: 100%;
      :hover{
        box-shadow: 8px 12px 31px -10px #ab98ab;

            .card-img-wrapper {
                  img{
                          transform: scale(1.15);
                          border-radius: 20%;
                          box-shadow: 1px 1px 1px #ffffff25;
                      }    
            }

            .card-body  {
                height: 70%;
                width: 60%;
                font-size: 10px;
                box-shadow: 1px 1px 3px #066b6388, -1px -1px 3px #066b6388,
                  1px 1px 3px #066b6388, -1px -1px 3px #066b6388;

                      .card-title{
                        margin-bottom: 0.75rem !important;
                      }
            }


      }

  .card-img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    overflow: hidden;

        .custom-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 1px 1px 3px #066b6388, -1px -1px 3px #066b6388,
            1px 1px 3px #066b6388, -1px -1px 3px #066b6388;
        }

        img {
          transition: 1.5s ease;
        }
  }


  .card-body{

    position: absolute;
    bottom: 0;
    left: 40%;
    right: 0;
    height: 44%;
    background-color: rgba(11, 156, 132, 0.322);
    transition: 1.5s ease;
      .card-title {
        margin-bottom: calc(50% + 20px);
        transition: 1.5s ease;
      }
      h6{
        margin-top: 0 !important;
      }
}   
}




/* Tables */
.ccc {
  background-color: rgba(173, 96, 45, 0.658);
}

div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
}

.table-title h3 {
  color: #fafafa6e;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

/*** Table Styles **/

.head-bg {
  background: #f7f7f7;
  padding: 5px;
}

.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: auto;
  /* margin: auto;
  max-width: 600px; */
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  color: #ffffff;
  background: #1b1e24da;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 15px;
  padding: 14px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}

tr {
  border-top: 1px solid #c1c3d1;
  border-bottom-: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 15px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:hover td {
  background: #4e5066;
  color: #ffffff;
  border-top: 1px solid #22262e;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #ebebeb;
}

tr:nth-child(odd):hover td {
  background: #4e5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}

td {
  background: #ffffff;
  padding: 12px;
  text-align: left;
  vertical-align: middle;
  /* font-weight: 300; */
  font-size: 15px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

.custom-td {
  background: #ffffff;
  padding: 5px;
  text-align: left;
  vertical-align: middle;
  /* font-weight: 300; */
  font-size: 15px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

.mini-width {
  width: 10px;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}

`;

const TableData1 = Styled.td`
transition: all 2s ease-in-out;

      :hover{
        color: pink;
      }
`;
const TableData2 = Styled.td`
transition: all 1.5s ease-in-out;

      :hover{
        color: pink;
      }
`;
const TableData3 = Styled.td`
transition: all 1s ease-in-out;

      :hover{
        color: pink;
      }
`;
const TableData4 = Styled.td`
transition: all 0.8s ease-in-out;

      :hover{
        color: pink;
      }
`;
const TableData5 = Styled.td`
transition: all 0.3s ease-in-out;
cursor: pointer;

      :hover{
        color: pink;
      }
`;

export default Details;
