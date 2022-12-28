import React from "react";
import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom'
import shift1 from "../Images/shift.png";
import shift2 from "../Images/shifts2.png";
import shift3 from "../Images/shifts3.png";

const Shifts = () => {
  const {t} = useTranslation()
  const navigation = useNavigate()
  const navigate = (address) =>{
    navigation(`${address}`)
  }
  return (
    <div>
      <div className="row d-flex justify-content-center ">
        <div className="col-lg-1 me-2 caregiver_imgpreview">
          <img src={shift1} alt="no preview"></img>
        </div>
        <div className="col-lg-2 caregiver_overview">
          <h6 className="shifts_dates">March 21, 2022</h6>
          <h6 className="shifts_dates">08:00 - 14:00</h6>
          <p2>Jordan Pollock</p2>
          <div className="upcomingShifts_details" onClick={()=>navigate('/caregiver/requests')}>{t('Caregiver.BookingRequests.PendingRequests.Details')}</div>
        </div>

        <div className="col-lg-1 me-2  caregiver_imgpreview ">
          <img src={shift2} alt="no preview"></img>
        </div>
        <div className="col-lg-3 caregiver_overview">
          <h6 className="shifts_dates">March 23, 2022</h6>
          <h6 className="shifts_dates">08:00 - 17:00</h6>
          <p2>Michelle Lee</p2>
          <div className="upcomingShifts_details "  onClick={()=>navigate('/caregiver/requests')}>{t('Caregiver.BookingRequests.PendingRequests.Details')}</div>
        </div>
        <div className="col-lg-1 me-2 caregiver_imgpreview">
          <img src={shift3} alt="no preview"></img>
        </div>
        <div className="col-lg-2 caregiver_overview">
          <h6 className="shifts_dates">March 27, 2022</h6>
          <h6 className="shifts_dates">06:00 - 11:00</h6>
          <p2>Leia James</p2>
          <div className="upcomingShifts_details "  onClick={()=>navigate('/caregiver/requests')}>{t('Caregiver.BookingRequests.PendingRequests.Details')}</div>
        </div>
      </div>
    </div>
  );
};

export default Shifts;
