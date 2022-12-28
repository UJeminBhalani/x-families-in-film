import React,{useState} from "react";
import Dashboard from "../shared/Dashboard";
import Calendar from "react-calendar";
import Earnings from "./Earnings";
import EmpCalender from "../Employee/dashboard/main/calender";
import Shifts from "./Shifts";
import {useTranslation} from "react-i18next";
import caregiver_calendar from '../Images/caregiver_calendar.svg'


const DashBoard = () => {
  const [value, onChange] = useState(new Date());
  const {t}= useTranslation()
  return (
    <div>
      <div className="dashboard_screen">
        <h3 className=" title_h3">
          {t('Caregiver.Dashboard.Welcome')}, <span>John Doe</span>
        
        </h3>
        
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Dashboard title={t('Caregiver.Dashboard.Earning')} text_decorator='true' component={<Earnings />} />
        </div>

        <div className="col-lg-8">
          <Dashboard text_decorator='true'
            title={t('Caregiver.Dashboard.Availability')}
            subtitle={t('Caregiver.Dashboard.Subtitle')}
         component={<Calendar className='availability_calenders' onChange={onChange} value={value} selectRange={true} allowPartialRange={true}/>}   
          />  
        </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <Dashboard text_decorator='true' title={t('Caregiver.Dashboard.Upcoming')} component={<Shifts/>}/>
          </div>
      </div>
   
    </div>
  );
};

export default DashBoard;
