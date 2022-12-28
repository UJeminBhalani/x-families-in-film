import React from "react";

import Dashboard from "../../../../shared/Dashboard";

import Studio from "./studio";
import Overview from "./overview";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Focusedprod = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex align-items-baseline">
                <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left ms-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg >
                <p className="title_h3 ms-4">Fantastic Four
                </p>
            </div>

            <div className="row mb-2">
                <div className="col-xl-12 col-md-12">
                    <Dashboard title={t('Employee.Focused-productions.Studio')} component={<Studio />} />
                </div>
            </div>

            <div className="row ">
                <div className="col-xl-7 col-md-7">
                    <Dashboard title={t('Employee.Focused-productions.Overview')} component={<Overview />} />
                </div>
                <div className="col-xl-3">
                    <div className="dashboard_screen">
                        <div className="white_box card_lng">
                            <div className="">
                                <h4 className="title_h4_line"><span>{t('Employee.Focused-productions.Style')}</span> </h4>
                                <ul className="productions_list">
                                    <h6>Studio Care</h6>
                                    <h6>In-home Care</h6>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Focusedprod