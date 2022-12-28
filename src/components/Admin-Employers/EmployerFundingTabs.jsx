import React from "react";

import {useTranslation} from "react-i18next";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import EmployerFundingOverview from './EmployerFundingOverview';
import ChildcareBreakdown from "../Union/balances/childBreakdown/ChildcareBreakdown";
import AddFunds from "./AddFunds";

const EmployerFundingTabs = () => {

  const {t} = useTranslation()
  
  return (
    <div>
      <div className="white_box manage_screen">
        <div className="row">
          <h3 className="title_balances">{t('Employer.Funding.Balances')}</h3>
        </div>

        <Tabs
          defaultActiveKey="overview"
          id="fill-tab-example"
          className="mb-3 tabs employer_booking_tabs"
          
        >
          <Tab eventKey="overview" className='smalltabs' title={t('Employer.Funding.Overview_title')}>
            <EmployerFundingOverview />
          </Tab>
          <Tab eventKey="childcare" title={t('Employer.Funding.Childcare_breakdown_title')}>
            <ChildcareBreakdown />
          </Tab>
          <Tab eventKey="funds"  className='smalltabs'title={t('Employer.Funding.Add_funds_title')}>
            <AddFunds />
          </Tab>
        </Tabs>

        {/* <div className="row">
          <div className="col success_img">
            {/* <img src={} alt="no preview"></img> */}
      </div>
      {/* </div> */}
      {/* <div className="row">
          <div className="col success_btn">
            <button className="btn btn-individual btn-add " type="button">
              Done
            </button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default EmployerFundingTabs;
