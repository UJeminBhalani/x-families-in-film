import React from "react";

import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

import profile_picture from "../../../../Images/profile_picture.svg";

const PersonalInfo = () => {
  const {t}=useTranslation()
    return(
        <>
<Formik
          initialValues={{ firstname: "", password: "" }}
          onSubmit={(values) => {
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
<div className="profile_main">
        <div className="row">
          <div className="col-lg-8 profile_form">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Fname')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="John"
                            required
                            name="firstname"
                            className="field_view"
                          />
                        </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Lname')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="Doe"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Email')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="johdoe@mail.com"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                  {t('Employee.Profile.Number')}<span style={{color:"red"}}>*</span>
                  </label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="+1 604 123 4567"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Biography')}</label>
                </div>
                <div className="form-group">
                          <Form.Control
                            as="textarea"
                            rows={5}
                            
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                            required
                            className="field_view "
                          />
                        </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Address')}</label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="123 Breddock Ave Unit 231"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Postal')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="V3K 2K7"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Province')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="BC"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Country')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="Canada"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Password')}</label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="***************************"
                            required
                            className="field_view"
                          />
                        </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mt-2  setting_label avatar_section ">
            
            <div className="">Profile Picture</div>
            <div className=" mt-3">
              <img src={profile_picture} alt="profile picture" />
            </div>
            <div className="change_profile mt-3 ms-4">Change profile photo</div>
            <div className="row change_passrow">
              <div  className="change_profile mt-5 ms-4">
                Change Password
              </div>
            </div>
          </div>
        </div>
      </div>

            </form>
          )}
          </Formik>
        
        </>
    )
}

export default PersonalInfo