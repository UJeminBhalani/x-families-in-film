import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import { useTranslation } from 'react-i18next';

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";

const AddFunds = () => {
    const { t } = useTranslation()

    const [togglenavigation, setTogglenavigation] = useState(false);
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        if (location?.pathname === "/union/balances") {
            setTogglenavigation(true)
        }
        else {
            setTogglenavigation(false)
        }
    }
        , [])
    const navigate = (route) => {
        navigation(`${route}`)
    }
    return (
        <div>
            <div className="row addFunds_main">
                <div className="col addFunds_header">
                    <h2 className="h2_addFunds ">{t('Employer.Funding.Add_funds.Add_fund')}</h2>
                    <div className="pb-5">
                        <div className="addFunds_body">
                            {t('Employer.Funding.Add_funds.Funds_production')}
                        </div>
                        <div className="addFunds_body">{t('Employer.Funding.Add_funds.Funds_thankyou')}!</div>
                    </div>


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


                            <div className="row">
                                <div className="col-xl-3"></div>
                                <div className="col-xl-6">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-4">
                                            <div className="col-xl-12">
                                                <div className="form-group">
                                                    <Form.Control
                                                        type="tel"
                                                        placeholder="Production"
                                                        required
                                                        className="field_view"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-xl-12">
                                                <div className="form-group">
                                                    <Form.Control
                                                        type="tel"
                                                        placeholder="Value to deposit"
                                                        required
                                                        className="field_view"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-xl-12">
                                                <div className="d-flex">
                                                    <input className="addFunds_check form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label ms-4 mt-1 addFunds_check_label" for="flexCheckDefault">
                                                        {t('Employer.Funding.Add_funds.Confirm_contribution')}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-xl-12">
                                                <div className="d-flex">
                                                    <input className="addFunds_check form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label ms-4 mt-1 addFunds_check_label" for="flexCheckDefault">
                                                        {t('Employer.Funding.Add_funds.Optout')}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="text-center ">

                                            <Button className="next ms-1 mt-4 funding_add" onClick={() => {
                                                togglenavigation ? navigate('/confirmation') : navigate('/employer/success_confirmation')
                                            }}> {t('Employer.Funding.Add_funds.Confirm')}</Button>
                                        </div>

                                    </form>
                                </div>
                                <div className="col-xl-3"></div>

                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddFunds;