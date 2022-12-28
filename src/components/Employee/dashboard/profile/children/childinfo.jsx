import React from "react";

import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

const ChildInfo = () => {
  const {t}=useTranslation()
    return(
        <>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {}}
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
<div className="profile_main" style={{flexWrap:"wrap"}}>

    <div className="row">
        <div className="col-xl-3">
        <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Fname')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="John"
                            required
                            className="field_view"
                          />
                        </div>
        </div>
        <div className="col-xl-3">
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
        <div className="col-xl-2">
        <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Age')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="8"
                            placeholder="John"
                            required
                            className="field_view"
                          />
                        </div>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-3">
        <div>
        <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Fname')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="John"
                            required
                            className="field_view"
                          />
                        </div>
        </div>
        <div className="col-xl-3">
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
        <div className="col-xl-2">
        <div>
        <label className="mb-3 mt-2 setting_label">{t('Employee.Profile.Age')}<span style={{color:"red"}}>*</span></label>
                </div>
                <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="11"
                            required
                            className="field_view"
                          />
                        </div>
        </div>
    </div>

    <div className="row mt-2">
        <span className="add_child">+ Add Child</span>
    </div>
</div>
</form>)}
</Formik>
        </>
    )
}

export default ChildInfo