import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

import { AuthForgetPassword } from "../Services/https/Auth";
import { forgetPasswordSchema } from '../Services/validations';
import Logo from "../Images/logo-light.png";
import Loader from "../shared/Loader";

function ForgotPassword() {


  // Loader State
  const [loader, setLoader] = useState(false);

  const navigation = useNavigate();
  const navigate = (address) => {
    navigation(`${address}`);
  };
  
  const { t } = useTranslation();


  return (
      <section className="auth_layout login_screen">
      <div className="left_box"></div>

       {/* Loader spinner condition */}
      {loader ? <Loader/> : null}

      <div className="right_box">
        <a onClick={() => navigate("/")} className="logo">
          <img src={Logo} />
          Reelkids
        </a>
        <h3 className="title_h3">
          {t("Forgot_password.Forgot_password_title")}
        </h3>
        <div className="auth_form">
          <Formik
            initialValues={{ phone: "" }}
            validationSchema={forgetPasswordSchema}
            onSubmit={(values) => {
              const data = {
                phone: values.phone,
              };
              setLoader(true)
             
              // Forget Password API consumption
            
              AuthForgetPassword(data)
                .then((response) => {
                  setLoader(false);
                 
                  if (response?.status === 200) {
                    toast.success(response?.data?.message);
                   
                  } 
                  else if (response?.response?.status === 400){
                  
                    toast.error(response?.response?.data?.message)
                  }
                  else if(response?.response?.status === 422){
                    toast.error(response?.response?.data?.message)
                  }
                })
                .catch((error) => {
                 
                  setLoader(false);
                });
            }}
           
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Row className="">
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
                      value={values.phone}
                      placeholder="7780000000"
                      pattern="[0-9]{10}"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                       {/* Validation Messages*/}
                      {errors.phone && <div className="error">
                      {touched.phone && <>{t('Validation.Login_validation.phone_number')}</>}</div>}
                  </Form.Group>
                </Row>
                <Button
                  type="button"
                  variant="info"
                  className="btn-lg w100p justify-content-center d-inline-block "
                  onClick={handleSubmit}
                >
                  {t("Forgot_password.Submit")}
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section> 
  );
}

export default ForgotPassword;
