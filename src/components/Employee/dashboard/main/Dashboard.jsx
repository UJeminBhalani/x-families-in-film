import React from "react";

import { useTranslation } from "react-i18next";

import Dashboard from "../../../shared/Dashboard";

import EmpProduction from "./productions";
import Contacts from "./contacts";
import EmpCalender from "./calender";
import EmpFunding from "./funding";


const EmployeeDashboard = () => {
  const {t}=useTranslation();
 return (
    <>
    <div className="dashboard_screen">
        <h3 className=" title_h3">
          {t('Employee.Dashboard.Welcome')}, <span>John Doe</span>
        </h3>
      </div>

      <div className="row">
        <div className="col-xl-6 col-sm-12">
          <div className="row">
            <Dashboard
            text_decorator='true'
              title={t('Employee.Dashboard.Current_productions')}
              component={<EmpProduction />}
            />
          </div>
          <div className="row">
            <Dashboard   text_decorator='true' title={t('Employee.Dashboard.Month_at_a_glance')} height="true" component={<EmpCalender nextBooking={true} />} />
          </div>
        </div>
        <div className="col-xl-6 col-sm-12">
          <div className="row">
            <Dashboard   text_decorator='true' title={t('Employee.Dashboard.Current_funding')} component={<EmpFunding />} />
          </div>
          <div className="row">
            <Dashboard title={t('Employee.Dashboard.Key_contacts')} text_decorator='true' component={<Contacts />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
