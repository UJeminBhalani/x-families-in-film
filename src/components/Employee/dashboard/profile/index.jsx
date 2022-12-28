import React,{ useState } from "react";


import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ChildInfo from "./children/childinfo";
import PersonalInfo from "./personal/personal";

const Profile = () => {
    const {t}=useTranslation()
    const [toggle,setToggle] = useState(true)
    return(
        <>
        <div className="dashboard_screen">
                <div className="white_box">
                    <p className="title_h3 mb-5">{t(('Profile'))}</p>
                    <div className="employee-booking-cards employee-booking-cards2">
                        <div className="row mb-3">
                            <div className="col-xl-3">
                                <Button onClick={()=>setToggle(true)}> {t('Employee.Profile.Personal')}</Button>
                            </div>
                            <div className="col-xl-3">
                                <Button onClick={()=>setToggle(false)}>{t('Employee.Profile.Children')}</Button>
                            </div>
                            </div>
                            </div>

                         {toggle ? <PersonalInfo/>:<ChildInfo/>}   
                    </div>
                    </div>
        </>
    )
}

export default Profile