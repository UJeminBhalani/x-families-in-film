import React, { useState } from "react";

import Calendar from "react-calendar";
import { useTranslation } from "react-i18next";

import moment from "moment";

const EmpCalender = ({ nextBooking }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { t } = useTranslation()
  return (
    <>
      <p><b> March 2022</b></p>
      <Calendar

        //   onChange={this.onChange}
        // value={startDate}
        selectRange={true}
        allowPartialRange={true}
        value={startDate}
        onChange={setStartDate}
        showNavigation={false}
        showNeighboringMonth={true}
        // maxDate={new Date()}

        formatDay={(locale, date) => moment(date).format("MM/DD")}
      />

      <div className="mt-5">
      {nextBooking && <>
        <p className="mt-3 fsize_18 booking title_h4_line">{t('Employee.Dashboard.Next_booking')} </p>
        <div className="mb-4">March 5, 2022</div>

        <div className="row">
          <div className="col-xl-6">
            <p className="fsize_16 bname">
              Baby Edgar: <span>7 AM - 10 AM</span>{" "}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="fsize_16 bname">
              Baby Edgar: <span>7 AM - 10 AM</span>{" "}
            </p>
          </div>
        </div>
      </>}
      </div>
      

    </>
  );
};

export default EmpCalender;
