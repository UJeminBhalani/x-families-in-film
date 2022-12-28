import React from "react";
import { useTranslation } from "react-i18next";

const Contribution  = () =>{
    const {t}=useTranslation()
    return(
        <>
        <h3 className="title_h4_line button-group">{t('Employer.Funding.Overview.Childcare_contribution')}</h3>
        <div className="mb-5">
            <div className="row ">
                <div className="col-xl-5">
                <select className="form-select custom_selectbox" aria-label="Default select example">
                    <option selected>{t('Employer.Funding.Overview.Union')} 22</option>
                    <option value="1">{t('Employer.Funding.Overview.Union')} 22</option>
                    <option value="2">{t('Employer.Funding.Overview.Union')} 22</option>
                    <option value="3">{t('Employer.Funding.Overview.Union')} 22</option>
                </select>
                </div>
            </div>
        
                <div className="d-flex flex-column justify-content-center mt-5">
        <button type="button" className="btn btn-info h52 w100">$10,000.00</button>
        </div>
        
        </div>
        <div>
           <p>{t('Employer.Funding.Overview.Employer')}</p>
        
                <div className="d-flex flex-column justify-content-center mt-3">
        <button type="button" className="btn btn-info h52 w100">$5,000.00</button>
        </div>
        
        </div>
        </>
    )
}

export default Contribution