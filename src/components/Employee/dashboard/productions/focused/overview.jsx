import React from "react";
import { useTranslation } from "react-i18next";

const Overview = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="row">
                <div className="col-md-6 ">
                    <h5 className="prod_description">{t('Employee.Focused-productions.Contact')}</h5>

                    <div className="row mb-2">
                        <div className="d-flex flex-column">
                            <span>Erwin Smith</span>
                            <span>M: 778 123 4567</span>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="d-flex flex-column">
                            <span>Erwin Smith</span>
                            <span>M: 778 123 4567</span>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="d-flex flex-column">
                            <span>Erwin Smith</span>
                            <span>M: 778 123 4567</span>
                        </div>
                    </div>


                </div>

                <div className="col-md-6">
                    <h5 className="prod_description">{t('Employee.Focused-productions.Contact')}:</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <li>Union 22</li>
                            <li>Union 7</li>
                            <li>Union 15</li>
                        </div>
                        <div className="col-sm-6">
                            <li>Union 22</li>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview