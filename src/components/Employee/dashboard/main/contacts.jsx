import React from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
    const {t}=useTranslation()
    return (
        <>
            <div className="row">
                <div className="col-xl-6">
                    <p className="custom_headings">{t('Employee.Dashboard.Contact')}</p>
                    <span className="custom_description">Ari Gold</span>
                    <div className="short_desc">M: <span className="c_939393">778 123 4567</span> </div>
                </div>
                <div className="col-xl-6">
                    <p className="custom_headings">{t('Employee.Dashboard.Recent_caregiver')}</p>
                    <span className="custom_description">Dwayne Johnson</span>
                 <div className="short_desc ">M:<span className="c_939393">778 123 4567</span> </div>   
                </div>

            </div>

        </>
    )
}

export default Contacts