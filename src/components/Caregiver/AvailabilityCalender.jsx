import React from "react";
import { useState } from "react";

import {useTranslation} from "react-i18next";
import Calendar from "react-calendar";

import CalenderModal from "./CalenderModal";
import arrow from "../Images/arrow-right.png";


const AvailabilityCalender = () => {
  const {t} = useTranslation()
  const [show, setShow] = useState(false);
  const date= new Date()
  const [endDate,setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  const [value, onChange] = useState(new Date());
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  const ChangeAvailability = () => {
    return (
      <div>
        <div>
          <div>
            <label className="mb-2 mt-2 calendar_modal_label">{t('Caregiver.Calendar.CalendarPopUp.Date')}</label>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder="February 3rd, 2022 - February 8th, 2022"
          ></input>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div>
                <label className="mb-2 mt-4 calendar_modal_label">{t('Caregiver.Calendar.CalendarPopUp.StartTime')}</label>
              </div>

              <select className="form-control">
                <option>6:30AM</option>
                <option>7:30AM</option>
                <option>8:30AM</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <div>
                <label className="mb-2 mt-4 calendar_modal_label">{t('Caregiver.Calendar.CalendarPopUp.EndTime')}</label>
              </div>

              <select className="form-control">
                <option>2:30PM</option>
                <option>7:30AM</option>
                <option>8:30AM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <div>
              <label className="mb-2 mt-2 calendar_modal_label">{t('Caregiver.Calendar.CalendarPopUp.Service')}</label>
            </div>

            <select className="form-control">
              <option>Vancouver</option>
              <option>Toronto</option>
              <option>Montreal</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-2 mt-4 calendar_modal_repeat_label ">{t('Caregiver.Calendar.CalendarPopUp.Repeat')}</label>
        </div>
        <div className="row popup_week">
          {days?.map((i)=>{
            return (
              <div className="col-lg-3 weekdays_label">
              <input
                className="change_availability_checkbox form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label  ms-2" >
              {i}
              </label>
            </div>
            )
          })}
       
        </div>
      </div>
    );
  };

  const ChangeAvailabilityDescription = {
    title: `${t('Caregiver.Calendar.CalendarPopUp.Title')}`,
    body: <ChangeAvailability />,
  };

  return (
    <>
      <div>
        <div className="dashboard_screen row">
          <h3 className=" title_h3">
            {t('Caregiver.Availability_calender.Welcome')}, <span>John</span>
          </h3>

          <div className="availability_info">
            <div className="availaibility_subheading ">
            {t('Caregiver.Availability_calender.Availability')}
            </div>
            <div className="availability_btn ">
              <button
                className="btn  funding_add edit_availability_button "
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                {t('Caregiver.Availability_calender.Edit_availability')}
              </button>
            </div>
          </div>
        </div>
        <div className=" availability_months">
        {t('Caregiver.Availability_calender.Start_date')}{" "}
          <span>
            {" "}
            <img src={arrow} alt="no prev"></img>{" "}
          </span>{" "}
          {t('Caregiver.Availability_calender.End_date')}
        </div>
       

        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-lg-6 cal1">
            <div>
              <Calendar className='availability_calender' onChange={onChange} value={value} selectRange={true} />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div>
              <Calendar className='availability_calender' onChange={setEndDate} value={endDate} selectRange={true} />
            </div>
          </div>
        </div>
        <CalenderModal
          show={show}
          setShow={setShow}
          ChangeAvailabilityDescription={ChangeAvailabilityDescription}
        />
      </div>
    </>
  );
};

export default AvailabilityCalender;
