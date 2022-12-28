import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Personal from "./Personal";
import Rates from "./Rates"
import { useTranslation} from "react-i18next"

const CareGiverProfile = () => {
  const [show, setShow] = useState(false);
  const [rate,setRate]=useState(false)
  const {t}= useTranslation(); 
  return (
    //   <Tabs
    //   defaultActiveKey="Personal"
    //   id="fill-tab-example"
    //   className="mb-3"

    // >
    //   <Tab eventKey="personal" title="Personal">
    //   </Tab>
    //   <Tab eventKey="rates" title="Rates">
    //   </Tab>
    // </Tabs>

    <div>
      <div className="white_box manage_screen caregiver_profile_screen">
        <div className="row ">
          <h3 className="title_balances ">
            {t('Caregiver.Profile.Title')}
            <span>
              { show ? (
              <Button  variant="info" className='btn-lg caregiver_profile_button ' onClick={()=>{setShow(false);}} >{t('Caregiver.Profile.ButtonConfirm')}</Button>
              ):(
                <Button
                variant="info"
                className="btn-lg caregiver_profile_button "
                onClick={() => setShow(true)}
              >
                {t('Caregiver.Profile.Button')}
              </Button>
              )
              }
            </span>
          </h3>
        </div>

        <Tabs
          defaultActiveKey="personal"
          id="fill-tab-example"
          className="mb-3"
        >
          <Tab eventKey="personal" title={t('Caregiver.Profile.Personal.Title')}>
            <Personal show={show}  />
            {/* validate={harman} */}
          </Tab>
          <Tab eventKey="rates" title={t('Caregiver.Profile.Rates.Title')}>
          <Rates/>
          </Tab>
            
        </Tabs>

        {/* <div className="row">
      <div className="col success_img">
        {/* <img src={} alt="no preview"></img> */}
      </div>
    </div>
  );
};

export default CareGiverProfile;
