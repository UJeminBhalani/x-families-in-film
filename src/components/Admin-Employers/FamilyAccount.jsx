import React from "react";
import { useTranslation } from 'react-i18next'

import { Button } from "react-bootstrap";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FamilyLogo from '../Images/icon-park-solid_family.png'
import AddFamilyAccount from "./AddFamilyAccount";

const FamilyAccount = () => {

  const { t } = useTranslation()

  return (
    <div className="white_box manage_screen">
      <div className="">
        <div className="heading_box">
          <h3 className="title_h3">{t('Employer.Add_employee.Production')} #1412 {t('Employer.Add_employee.Family_list')}</h3>
          <div>
            <p className="fill-form mt-3 ms-0" style={{ inlineSize: "auto" }}>
              {t('Employer.Add_employee.Employee_information')}
            </p>
          </div>

          <div className="row mt-4 mb-2 ">
            <div className="col">

              <h6 className="title_h6"><img src={FamilyLogo} alt='Family icon' className="me-3"></img>{t('Employer.Add_employee.Family_account')}</h6>
            </div>

          </div>
        </div>
        {/* <Tabs
          defaultActiveKey="overview"
          id="fill-tab-example"
          className="mb-3"

        >
          <Tab eventKey="overview" title="Parent #1">
            <AddFamilyAccount />
          </Tab>
          <Tab eventKey="childcare" title="Parent #2">
            <AddFamilyAccount />
          </Tab>

        </Tabs> */}
        <div className="employee-booking-cards">
        <div className="row ">
                            <div className="col-xl-3">
                                <Button >{t('Employer.Add_employee.Parent')} #1</Button>
                            </div>
                            <div className="col-xl-3">
                                <Button >{t('Employer.Add_employee.Parent')} #2</Button>
                            </div>
                            
                            
                        </div>
        </div>

        <AddFamilyAccount/>
        

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

export default FamilyAccount;
