import React, { useEffect, useState } from "react";
import {
  Button_Icon,
  Container,
  Logincls,
  Login_Input,
  Login_Submit,
  Login__Field,
  Screen,
  Screen_Background,
  Screen_Content,
  Screen__Background__Shape,
  Social_Login,
} from "../../pages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { memberLoginFunction } from "../../redux/membersRedux/action";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const errorIcon = <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />;

  const dispatch = useDispatch();

  // state for spinner
  const [loadPage, setLoadPage] = useState(false);

  // Formik Validation
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = " 6 or more ";
    }

    return errors;
  };
  // Formik FormHandle
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoadPage(true);
      if (values && values !== "") {
        dispatch(memberLoginFunction(values));
        setLoadPage(false);
        resetForm(values);
      }
    },
  });

  // REDUX CODE IMPLIMENTATION
  const isMemberLogin = useSelector((state) => state.members.isMemberLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (isMemberLogin) {
      // console.log("Hello I am LogIn");
      // <Navigate to="/details" />;
      navigate("/details");
      toast.success("Success Notice");
    } else {
      // console.log("Hello I am Logout");
    }
  }, [isMemberLogin]);

  return (
    <>
      {/* Main Login Section Area Start */}
      <div className="position-relative" style={{ zIndex: "100" }}>
        <Container>
          <Screen>
            <Screen_Content>
              <Logincls onSubmit={formik.handleSubmit}>
                <h4 className="text-secondary">Gain Access</h4>
                <Login__Field>
                  <i
                    className=" fas fa-user"
                    style={{
                      position: "absolute",
                      top: "30px",
                      color: "#7875b5",
                    }}
                  ></i>
                  <Login_Input
                    type="text"
                    placeholder="User name / Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small className="text-uppercase text-danger">
                      {errorIcon}
                    </small>
                  ) : null}
                </Login__Field>
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-uppercase text-danger">
                    {formik.errors.email}
                  </small>
                ) : null}
                <Login__Field>
                  <i
                    className=" fas fa-lock"
                    style={{
                      position: "absolute",
                      top: "30px",
                      color: "#7875b5",
                    }}
                  ></i>
                  <Login_Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small className="text-uppercase text-danger">
                      {errorIcon}
                    </small>
                  ) : null}
                </Login__Field>
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-uppercase text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
                <Login_Submit type="submit" className="button">
                  <span className="button__text">Log In Now</span>
                  {loadPage ? (
                    <Button_Icon>
                      <div
                        class="spinner-border text-success float-right"
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    </Button_Icon>
                  ) : (
                    <Button_Icon className=" fas fa-chevron-right"></Button_Icon>
                  )}
                </Login_Submit>
              </Logincls>
              <Social_Login>
                <h3 className="text-white" style={{ margin: "20px 0 10px 0" }}>
                  Digital Society
                </h3>
                <footer
                  className="text-center"
                  style={{
                    fontSize: "5px",
                    fontWeight: "200",
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.322)",
                    color: "white",
                  }}
                >
                  <p className="text-white ">
                    &#169; Proudly developed by Jenish Patel,{" "}
                    {new Date().getFullYear()}
                  </p>
                </footer>
                {/* <Social_Icon>
                  <Social_Login_Icon href="#" className="social-login__icon fab fa-instagram"></Social_Login_Icon>
                  <Social_Login_Icon href="#" className="social-login__icon fab fa-facebook"></Social_Login_Icon>
                  <Social_Login_Icon href="#" className="social-login__icon fab fa-twitter"></Social_Login_Icon>
                </Social_Icon> */}
              </Social_Login>
            </Screen_Content>
            <Screen_Background>
              {/* <span className="screen__background__shape screen__background__shape4"></span> */}
              <Screen__Background__Shape
                style={{
                  height: "540px",
                  width: "190px",
                  background: "linear-gradient(270deg, #5d54a4, #6a679e)",
                  top: "-24px",
                  right: "0",
                  borderRadius: "32px",
                }}
              ></Screen__Background__Shape>
              <Screen__Background__Shape
                style={{
                  height: "220px",
                  width: "220px",
                  background: "#4a5157",
                  top: "-172px",
                  right: "0",
                  borderRadius: "32px",
                }}
              ></Screen__Background__Shape>
              <Screen__Background__Shape
                style={{
                  height: "520px",
                  width: "520px",
                  background: "#fff",
                  top: "-50px",
                  right: "120px",
                  borderRadius: "0 72px 0 0",
                }}
              ></Screen__Background__Shape>
            </Screen_Background>
          </Screen>
        </Container>
      </div>
      {/* Main Login Section Area End */}
    </>
  );
};

export default LoginComponent;
