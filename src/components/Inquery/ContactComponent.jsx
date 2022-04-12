import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { messageSendFunction } from "../../redux/inquiryReducer/inquiryAction";

const ContactComponent = () => {
  const dispatch = useDispatch();

  // Formik Form Validation
  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  // Formik Form Submit
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (values && values !== "") {
        // console.log("Values: ", values);
        dispatch(messageSendFunction(values));
        resetForm(values);
      }
    },
  });

  // err icon
  const errorIcon = <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />;

  return (
    <>
      {/* ***** Main Contact Area Start ***** */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        {formik.touched.fullName && formik.errors.fullName ? (
                          <small className="text-uppercase text-danger">
                            {errorIcon}
                          </small>
                        ) : null}
                        <fieldset>
                          <input
                            name="fullName"
                            type="text"
                            id="name"
                            placeholder="YOURNAME...*"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            onBlur={formik.handleBlur}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        {formik.touched.email && formik.errors.email ? (
                          <small className="text-uppercase text-danger">
                            {errorIcon}
                          </small>
                        ) : null}
                        <fieldset>
                          <input
                            name="email"
                            type="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="YOUR EMAIL..."
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        {formik.touched.mobileNumber &&
                        formik.errors.mobileNumber ? (
                          <small className="text-uppercase text-danger">
                            {errorIcon}
                          </small>
                        ) : null}
                        <fieldset>
                          <input
                            name="mobileNumber"
                            type="number"
                            id="subject"
                            placeholder="Mobile...*"
                            onChange={formik.handleChange}
                            value={formik.values.mobileNumber}
                            onBlur={formik.handleBlur}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        {formik.touched.message && formik.errors.message ? (
                          <small className="text-uppercase text-danger">
                            {errorIcon}
                          </small>
                        ) : null}
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            id="message"
                            className="form-control"
                            placeholder="YOUR MESSAGE..."
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            onBlur={formik.handleBlur}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" className="button">
                            SEND MESSAGE NOW
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <img src="" alt="" />
                {/* <ul>
                  <li>
                    <h6>Phone Number</h6>
                    <span>991-022-3344</span>
                  </li>
                  <li>
                    <h6>Email Address</h6>
                    <span>digitalSoc@gmail.com</span>
                  </li>
                  <li>
                    <h6>Street Address</h6>
                    <span>
                      6R5W+2QX, Opposite Rajhans Point, Ramdarshan Society,
                      Varachha, Surat, Gujarat 395006
                    </span>
                  </li>
                  <li>
                    <h6>Social Links</h6>
                    <div className="d-flex justify-content-between">
                      <span className="mx-2">
                        <SocialMediaIconsReact
                          roundness="50%"
                          borderColor="rgba(0,0,0,0.25)"
                          icon="twitter"
                          iconColor="rgba(255,255,255,1)"
                          backgroundColor="rgba(26,166,233,1)"
                          url="https://some-website.com/my-social-media-url"
                          size="35"
                        />
                      </span>
                      <span className="mx-2">
                        <SocialMediaIconsReact
                          roundness="50%"
                          borderColor="rgba(0,0,0,0.25)"
                          icon="facebook"
                          iconColor="rgba(255,255,255,1)"
                          backgroundColor="rgba(26,166,233,1)"
                          url="https://some-website.com/my-social-media-url"
                          size="35"
                        />
                      </span>
                      <span className="mx-2">
                        <SocialMediaIconsReact
                          roundness="50%"
                          borderColor="rgba(0,0,0,0.25)"
                          icon="instagram"
                          iconColor="rgba(255,255,255,1)"
                          backgroundColor="#8a3ab9"
                          url="https://some-website.com/my-social-media-url"
                          size="35"
                        />
                      </span>
                      <span className="mx-2">
                        <SocialMediaIconsReact
                          roundness="50%"
                          borderColor="rgba(0,0,0,0.25)"
                          icon="linkedin"
                          iconColor="rgba(255,255,255,1)"
                          backgroundColor="#0e76a8"
                          url="https://some-website.com/my-social-media-url"
                          size="35"
                        />
                      </span>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main Contact Area End ***** */}
    </>
  );
};

export default ContactComponent;
