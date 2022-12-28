import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Logo from "../../Images/logo-light.png";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { signupSchema } from "../../Services/validations";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../Services/https/Auth";
import toast from "react-hot-toast";
import Loader from "../../shared/Loader";
import Modal from "../../shared/Modal";
import { inviteEmail } from "../../Reducers/EmailInvite/inviteSlice";

function Signup() {
  const [pass, setPass] = useState(false);
  const [cpass, setCpass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [signUpSuccessfull, setSignUpSuccessfull] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = (address) => {
    navigate(`${address}`);
  };
  const { t } = useTranslation();

  const state = useSelector((state) => state.invite);

  const id = new URLSearchParams(location.search).get("inviteid");
  // console.log(id)

  return (
    <section className="auth_layout login_screen signup_screen">
      <Modal
        show={signUpSuccessfull}
        setSignUpSuccessfull={setSignUpSuccessfull}
        description="You have been signed up successfully. Please click here to login"
        footer={
          <div className="group_buttons mt-2">
            <Button
              variant="info"
              className="btn-lg"
              onClick={() => navigation(`/login?inviteid=${id}`)}
            >
              {t("Reset_password.Okay")}
            </Button>
          </div>
        }
      />
      <div className="left_box"></div>

      {loader ? <Loader /> : null}

      <div className="right_box">
        <a href="/" className="logo">
          <img src={Logo} /> Reelkids
        </a>
        <h3 className="title_h3">{t("SignUp.Title")}</h3>
        <div className="auth_form">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signupSchema}
            onSubmit={async (values) => {
              setLoader(true);
              const data = {
                name: values.fullName,
                email: state.email,
                phone: values.phone,
                password: values.password,
                confirm_password: values.confirmPassword,
              };

              // Signup API consumption
              SignUp(data, id, state.role)
                .then((response) => {
                  
                  setLoader(false);
                  console.log(response);
                  if (response?.status === 200) {
                    setSignUpSuccessfull(true)
                  } else if (response?.response?.status === 422) {
                    toast.error(response?.response?.data?.message);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {({
              values,
              initialValues,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    className="form-group-1"
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                  >
                    <Form.Label>{t("SignUp.FullName")}</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {t("SignUp.Validations.FullName")}
                    </Form.Control.Feedback>
                    {errors.fullName && (
                      <div className="error">
                        {touched.fullName && <>{"Full Name is required"}</>}
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-group-1"
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                  >
                    <Form.Label>{t("SignUp.Email")}</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={state.email}
                      defaultValue={state.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                    {
                      <Form.Control.Feedback type="invalid">
                        {t("SignUp.Validations.Email")}
                      </Form.Control.Feedback>
                    }
                  </Form.Group>
                  <Form.Group
                    className="form-group-1"
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                  >
                    <Form.Label>{t("SignUp.Phone")}</Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      placeholder="7780000000"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {t("SignUp.Validations.Phone")}
                    </Form.Control.Feedback>
                    {errors.phone && (
                      <div className="error">
                        {touched.phone && <>{"Phone is required"}</>}
                      </div>
                    )}
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group
                      className="form-group-1 "
                      as={Col}
                      md="6"
                      controlId="validationCustom03"
                    >
                      <Form.Label>{t("SignUp.Password")}</Form.Label>
                      <div className="input_icon">
                        <Form.Control
                          placeholder="********"
                          name="password"
                          type={pass ? "text" : "password"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {pass ? (
                          <i
                            className=" view_password fa-solid fa-eye-slash"
                            onClick={() => setPass((prev) => !prev)}
                          ></i>
                        ) : (
                          <i
                            onClick={() => setPass((prev) => !prev)}
                            className="view_password fa-solid fa-eye"
                          ></i>
                        )}
                      </div>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      {errors.password && (
                        <div className="error">
                          {touched.password && <>{"Password is required"}</>}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group
                      className="form-group-1 "
                      as={Col}
                      md="6"
                      controlId="validationCustom03"
                    >
                      <Form.Label>{t("SignUp.Confirm")}</Form.Label>
                      <div className="input_icon">
                        <Form.Control
                          placeholder="********"
                          name="confirmPassword"
                          type={cpass ? "text" : "password"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                        />
                        {cpass ? (
                          <i
                            className=" view_password fa-solid fa-eye-slash"
                            onClick={() => setCpass((prev) => !prev)}
                          ></i>
                        ) : (
                          <i
                            onClick={() => setCpass((prev) => !prev)}
                            className="view_password fa-solid fa-eye"
                          ></i>
                        )}
                      </div>
                      {errors.confirmPassword && (
                        <div className="error">
                          {touched.password && (
                            <>{"Password and Confirm Password must match"}</>
                          )}
                        </div>
                      )}
                    </Form.Group>
                    <div className="mt-0 password_footnote   ">
                      {/* {t("SignUp.Validations.Password")} */}
                    </div>
                  </Row>
                </Row>

                <Button
                  type="submit"
                  variant="info"
                  className="btn-lg w100p justify-content-center d-inline-block"
                >
                  {t("SignUp.Title")}
                </Button>
              </Form>
            )}
          </Formik>

          <div className="sign-up-here">
            <a>{t("SignUp.Already")}</a>
            <a onClick={() => navigation("/login")} className="signUpLogin">
              <u>{t("SignUp.SignIn")}</u>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
