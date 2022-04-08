import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const dispatch = useDispatch();
  const isMemberLogin = useSelector((state) => state.members.isMemberLogin);
  const [isOpen, setIsOpen] = useState(false);

  // is use to display welcome msg to user
  const memberDetails = useSelector((state) => state.members.fullMemberDetails);

  const handleClick = () => {
    dispatch({ type: "MEMBER_LOGOUT_SUCCESS" });
  };

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="main-nav">
                  {/* ***** Logo Start ***** */}

                  <Link to="/" className="logo" style={{ fontSize: "16px" }}>
                    Digital Society
                  </Link>

                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul
                    className={`custom-nav ${
                      isOpen ? `open-nav` : "close-nav"
                    }`}
                  >
                    <li className="scroll-to-section ">
                      <NavLink to="/" activeclassname="active">
                        Home
                      </NavLink>
                    </li>
                    {isMemberLogin && isMemberLogin ? (
                      <li>
                        <NavLink to="/details" activeclassname="active">
                          Details
                        </NavLink>
                      </li>
                    ) : (
                      ""
                    )}

                    <li className="scroll-to-section">
                      <NavLink to="/gallery" activeclassname="active">
                        Photogravure
                      </NavLink>
                    </li>

                    <li className="scroll-to-section">
                      <NavLink to="/about" activeclassname="active">
                        About Us
                      </NavLink>
                    </li>
                    <li className="scroll-to-section">
                      <NavLink to="/inquery" activeclassname="active">
                        Contact Us
                      </NavLink>
                    </li>
                    {isMemberLogin && isMemberLogin ? (
                      <li className="scroll-to-section">
                        <Link to="" onClick={handleClick}>
                          LogOut
                        </Link>
                      </li>
                    ) : (
                      <li className="scroll-to-section">
                        <Link to="/login">Login</Link>
                      </li>
                    )}
                  </ul>
                  <a className="menu-trigger" onClick={handleMenu}>
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
      {/* ***** Header Area End ***** */}
    </>
  );
};

const Wrapper = styled.div`
  .main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-nav {
    display: flex;
    gap: 30px;

    a {
      color: #fff;
      text-transform: uppercase;
      transition: all 1s !important;

      :hover {
        color: #ffb319;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .main-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .custom-nav {
      transition: all 1s !important;
      display: block !important;
      position: fixed;
      top: 0 !important;
      left: 0;
      width: 60%;
      height: 100vh;
      margin-top: 0;
      padding-left: 0;
      gap: 50px !important;
      color: #fff !important;
      // background: rgba(0, 0, 0, 0.2);
      background: #dbd0c04b;
      backdrop-filter: saturate(120%) blur(5px);

      .scroll-to-section {
        border-bottom: 1px solid #8e806a;
        padding: 10px 0;
        transition: all 0.6s !important;
        a {
          color: #fff;
          text-transform: uppercase;
          :hover {
            color: #ffb319;
          }
        }
        :hover {
          background: rgba(0, 0, 0, 0.5);
        }
      }
    }

    .open-nav {
      left: 0;
      transition: all 0.8s !important;
    }
    .close-nav {
      left: -60%;
      transition: all 0.9s !important;
    }
  }
`;

export default Header;
