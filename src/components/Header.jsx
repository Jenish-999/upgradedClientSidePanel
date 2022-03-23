import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const isMemberLogin = useSelector((state) => state.members.isMemberLogin);

  // is use to display welcome msg to user
  const memberDetails = useSelector((state) => state.members.fullMemberDetails);

  const handleClick = () => {
    dispatch({ type: "MEMBER_LOGOUT_SUCCESS" });
  };

  return (
    <>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-nav">
                {/* ***** Logo Start ***** */}

                <Link to="/" className="logo">
                  Digital Society
                </Link>

                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  {isMemberLogin && isMemberLogin ? (
                    <li>
                      <Link to="/details" activeClassName="active">
                        Details
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  <li className="scroll-to-section">
                    <NavLink to="/gallery" activeClassName="active">
                      Photogravure
                    </NavLink>
                  </li>

                  <li className="scroll-to-section">
                    <NavLink to="/about" activeClassName="active">
                      About Us
                    </NavLink>
                  </li>
                  <li className="scroll-to-section">
                    <NavLink to="/inquery" activeClassName="active">
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
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </>
  );
};

export default Header;
