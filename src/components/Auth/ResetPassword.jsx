import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";

import { resetSchema } from "../Services/validations";
import Modal from "../shared/Modal";
import Loader from "../shared/Loader";
import { AuthResetPassword } from "../Services/https/Auth/index";
import Logo from "../Images/logo-light.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ResetPassword = () => {
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();
  const link_id = localStorage.getItem("token");

  const navigate = (address) => {
    navigation(`${address}`);
  };

  const { t } = useTranslation();

  // Modal Description Body
 
  const ResetPasswordDescription = () => {
    return (
      <>
        <div>
          {t("Reset_password.Please")}
          <span id="resetNavigation" onClick={()=>navigate('/login')}>
            {t("Reset_password.Click_here")}{" "}
          </span>{" "}
          <span>{t("Reset_password.To_continue")}</span>
        </div>
      </>
    );
  };
  

  return (
    <section className="auth_layout login_screen">
      <Modal
        
        show={showResetConfirmation}
        setShowResetConfirmation={setShowResetConfirmation}
        modalTitle={t("Reset_password.Password_reset")}
        description={<ResetPasswordDescription />}
        footer={
          <div className="group_buttons mt-2">
            <Button
              variant="info"
              className="btn-lg"
              onClick={() => navigate("/login")}
            >
              {t("Reset_password.Okay")}
            </Button>
          </div>
        }
      />
      <div className="left_box"></div>

      {/* Loader spinner condition */}

      {loader ? <Loader /> : null}

      <div className="right_box">
        <a href="/" className="logo">
          <img src={Logo} />
          Reelkids
        </a>
        <h3 className="title_h3">{t("SignUp.ResetPassword")}</h3>
        <div className="auth_form">
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={resetSchema}
            onSubmit={async (values) => {
              const data = {
                password: values.password,
                confirm_password: values.confirmPassword,
              };
              
              setLoader(true);

              // Reset Password API consumption

              AuthResetPassword(data, link_id)
                .then((response) => {
                  
                  
                  setLoader(false);
                  if (response?.status === 200) {
                    setShowResetConfirmation(true);
                  } else if (response?.response?.status === 400) {
                    toast.error(response?.response?.data?.message);
                  }
                })
                .catch((error) => {
                  setLoader(false);
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
              <form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    className="form-group-1"
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                  >
                    <Form.Label>{t("SignUp.Password")}</Form.Label>
                    <div className="input_icon">
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>

                    {/* Validation Messages */}

                    {errors.password && (
                      <div className="error">
                        {touched.password && (
                          <>{t("Validation.ResetValidation.Regex")}</>
                        )}
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-group-1"
                    as={Col}
                    md="12"
                    controlId="validationCustom02"
                  >
                    <Form.Label>{t("SignUp.Confirm")}</Form.Label>
                    <div className="input_icon">
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    </div>

                    {/* Validation Messages */}

                    {errors.confirmPassword && (
                      <div className="error">
                        {touched.confirmPassword && (
                          <>{t("Validation.ResetValidation.Confirm")}</>
                        )}
                      </div>
                    )}
                  </Form.Group>
                </Row>

                <Button
                  type="submit"
                  variant="info"
                  className="btn-lg w100p justify-content-center d-inline-block"
                >
                  {t("SignUp.Update")}
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
