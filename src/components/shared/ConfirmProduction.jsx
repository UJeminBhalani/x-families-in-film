import { useState } from "react";
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";

import { useLocation, useNavigate } from "react-router-dom"

const ConfirmProduction = () => {
    const location = useLocation();
    const { t } = useTranslation()
    const [employee, setEmployee] = useState(true)
    const [union, setUnion] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (location?.pathname === "/employee/confirm-production") {
            setEmployee(false)
        }
        if (location?.pathname === "/union/confirm-production") {
            setUnion(true)
            setEmployee(false)
        }
    }, [])

    return (<>


        <div className="confirm-production confirm-production-kids">
            <div className="container">
                <div>
                    <h3 className="confirm-production-header"> {t('Confirmation.Title')}</h3>
                    {
                        employee ?
                            <h5 className="confirm-production-text mt-3">We are pleased to confirm your production with ReelFamilies. We look forward to working together to support your Production Families </h5>
                            :
                            <h5 className="confirm-production-text mt-3">{t('Confirmation.Subtitle')}</h5>
                    }
                    <p className="production-name mt-5">Vancouver Film Studios:</p>
                    <p className="production-name">PRODUCTION #1412</p>
                    {
                        employee || union ?
                            <>
                                <p className="production-name mt-5">Contribution amount</p>
                                <div className="contribution ">
                                    <input className="contribution-amount" placeholder="$ 12,000.00"></input>
                                    <button className="confirm-amount ms-3  mt-2" ><u>Confirm</u></button>
                                </div>
                            </>
                            : (null)
                    }
                    <div className="mt-3 prod-buttons">
                        {
                            employee ?
                                <Button onClick={() => navigate('/signup')} className="next ms-1">{t('Confirmation.Next')}</Button>
                                :
                                (<>

                                    <Button onClick={() => navigate('/wrong-production')} className="wrong-production">{t('Confirmation.Wrong')}</Button>
                                    <Button onClick={() => navigate('/signup')} className="next ms-1">{t('Confirmation.Next')}</Button>

                                    {/* <button type="button" className="btn btn-outline-info w100">Wrong Production</button>
                                <button type="button" className="btn btn-info btn1 w100">Next</button> */}
                                </>)
                        }
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default ConfirmProduction