import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AddFunds from "../../../Admin-Employers/AddFunds";

import ChildcareBreakdown from "../childBreakdown/ChildcareBreakdown";

import Contribution from "./childContribution/Contribution";
import Funding from "./funding/funding";
import History from "./history/History";

const Balances = () => {
    const [overview, setOverview] = useState(true)
    const [childCare, setChildCare] = useState(false);
    const [funds, setFunds] = useState(false)
    const { t } = useTranslation()
    return (
        <>
            <div className="dashboard_screen">
                <div className="white_box">
                    <p className="title_h3">{t('Balances')}
                    </p>
                    <div className="employee-booking-cards">
                        <div className="row custom_emp_row">
                            <div className="col-4">
                                <Button onClick={() => {
                                    setOverview(true);
                                    setChildCare(false);
                                    setFunds(false)
                                }}> {t('Employee.Dashboard.Overview')}</Button>
                            </div>
                            <div className="col-4">
                                <Button onClick={() => {
                                    setOverview(false);
                                    setChildCare(true);
                                    setFunds(false)
                                }}>{t('Union.Balances.Childcare')}</Button>
                            </div>
                            <div className="col-4">
                                <Button onClick={() => {
                                    setOverview(false);
                                    setChildCare(false);
                                    setFunds(true)
                                }}>{t('Employer.Funding.Add_funds_title')}</Button>
                            </div>

                        </div>
                    </div>

                    {
                        overview ? <div>
                            <div className="row mt-4">
                                <div className="col-xl-7">
                                    <Funding />
                                </div>
                                <div className="col-xl-5">
                                    <Contribution />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-xl-12">
                                    <History />

                                </div>
                            </div>
                        </div> : null
                    }
                    {
                        childCare ? <ChildcareBreakdown /> : null
                    }
                    {
                        funds ? <AddFunds /> : null
                    }


                </div>
            </div>
        </>
    )
}

export default Balances