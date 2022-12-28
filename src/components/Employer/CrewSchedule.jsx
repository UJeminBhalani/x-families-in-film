import React,{useState} from "react";

import {useTranslation} from "react-i18next";
import DatePicker from 'react-datepicker' 
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

 
import DP from "../Images/DP.png";

const CrewSchedule = () => {

   const navigation = useNavigate()
   const navigate = (address) =>{
     navigation(`${address}`)
   }    
    const [startDate, setStartDate] = useState(new Date());
    
    const MyContainer = ({ className, children }) => {
      return (
        <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
          {/* <CalendarContainer className={className}> */}
            <div style={{ background: "#f0f0f0" }}>
              What is your favorite day?
            </div>
            <div style={{ position: "relative" }}>{children}</div>
          {/* </CalendarContainer> */}
        </div>
      );
    };
    
 

  const{t} = useTranslation()
 
  return (
    <div>
      
       <div className="white_box manage_screen">
      <h3 className="event_heading">{t('Employer.Crew_schedule.Create')}</h3>
      <p className="crew_schedule_details">{t('Employer.Crew_schedule.Details')}</p>

      <div>
        <form>
          <div>
            <div>
              <div className="row">
                <div className="col-lg-8">
                <div>
                  <label className="mb-3  mt-5 labels_style">{t('Employer.Crew_schedule.Event_title')}</label>
                </div>
                <input
                  type="email"
                  placeholder="Event Title"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="row">
                <div className="col-lg-2">
                  <div>
                    <label className="mb-3 labels_style">{t('Employer.Crew_schedule.Event_time')}</label>
                  </div>
                  <input
                    type="email"
                    placeholder="8:00 AM - 9:00 PM"
                    className="crew_schedule_fields form-control placeholder_style"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-lg-4">
                  <div>
                    <label className="mb-3 mt-1 labels_style">{t('Employer.Crew_schedule.Event_date')}</label>
                  </div>

                  <DatePicker className="crew_schedule_fields form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
   
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-7">
              <label className="mt-3 mb-3 labels_style">{t('Employer.Crew_schedule.Participants')}</label>
              <input
                type="email"
                placeholder="Mikasa"
                className=" crew_schedule_fields form-control placeholder_style"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              </div>
            </div>
           
          </div>
        </form>
        <img src={DP} alt="profile pic" className="mt-3" />
      </div>
      <div>
        <button type="button" className="btn btn-info mt-3 event_button" onClick={()=>navigate('/employer/calendar')}>
        {t('Employer.Crew_schedule.Add_event')}
        </button>
      </div>
    </div>
    </div>
  );
};

export default CrewSchedule;
