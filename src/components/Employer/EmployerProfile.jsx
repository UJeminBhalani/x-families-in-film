import React from "react";

import {useTranslation} from 'react-i18next';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import PersonalInfo from "./PersonalInfo";
import CompanyInfo from "./CompanyInfo";

const EmployerProfile = () => {

  const {t} = useTranslation()

  return (
    <div>
      <div className="white_box manage_screen">
        <h3 className="title_balances">{t('Employer.Employer_profile.Profile')}</h3>

        <Tabs
          defaultActiveKey="personal"
          id="fill-tab-example"
          className="mb-3 profile_tabs"
          
        >
          <Tab eventKey="personal" title={t('Employer.Employer_profile.Personal_info_title')}>
            <PersonalInfo />
          </Tab>
          <Tab eventKey="company" title={t('Employer.Employer_profile.Company_info_title')}>
            <CompanyInfo />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployerProfile;
