import React from "react";

import { Form } from "react-bootstrap";

import { Formik } from "formik";
import { useTranslation } from "react-i18next";

const Settings = () => {
    const {t}=useTranslation();
    return (
        <>
            <div className="dashboard_screen">
                <div className="white_box">
                    <p className="title_h3 mb-5">{t('Settings')}</p>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => { }}
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


                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                        <label htmlFor="" className="mb-2">{t('Employee.Setting.Pprofile')}</label>

                                            <Form.Control
                                                type="tel"
                                                placeholder="Employee Name"
                                                required
                                                className="field_view"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                        <label htmlFor="" className="mb-2">{t('Employee.Setting.Email')}</label>

                                            <Form.Control
                                                type="tel"
                                                placeholder="johndoe@example.com"
                                                required
                                                className="field_view"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                        <label htmlFor="" className="mb-2">{t('Employee.Setting.Number')}</label>

                                            <Form.Control
                                                type="tel"
                                                placeholder="+1 778-123-4567"
                                                required
                                                className="field_view"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </form>)}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Settings