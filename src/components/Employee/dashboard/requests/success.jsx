import React from "react";

import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Success = () => {
    const {t}= useTranslation()
    const navigate = useNavigate()
    return (
        <>
            <div className="dashboard_screen">
                <div className="white_box">
                    <h1 className="text-center request_title">{t('Employee.Productions.Success')}</h1>

                    <p className="text-center heading_box">
                    {t('Employee.Productions.Success_desc')}
                    </p>



                    <div>
                        <div className="row">
                            <div className="col-xl-2"></div>
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="dashboard_screen">
                                            <div className="white_box cardbg">
                                                <div className="card_icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#44B5AE" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                    </svg>
                                                    <span>{t('Employee.Productions.Message')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-xl-6">
                                    <div className="dashboard_screen">
                                            <div className="white_box cardbg">
                                                <div className="card_icons">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#44B5AE" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                </svg>
                                                <span>{t('Employee.Productions.Email')}</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2"></div>
                        </div>
                        <div className="text-center  p-5">
                            <Button className="next ms-1 funding_add" onClick={()=>navigate(-1)}>{t('Employee.Productions.Done')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;
