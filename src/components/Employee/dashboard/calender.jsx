import React, { useState } from "react";

import Calendar from "react-calendar";

import '../../../node_modules/react-calendar/dist/Calendar.css';

const EmpCalender = () => {
    const [startDate,setStartDate]= useState(new Date())
    return (
        <>

<Calendar
        //   onChange={this.onChange}
          value={startDate}
          selectRange={true}
          showNavigation={false}
          showNeighboringMonth={true}
          formatDay ={
            (date) => new Intl.DateTimeFormat(
              "US", 
              {
                 
                month: "2-digit", 
                day: "2-digit"
              }).format(startDate)
            }
        />
            <p className="fsize_18 booking">Next Booking: </p>

            <div className="row">
                <div className="col-xl-6">
                    <p className="fsize_16 bname">Baby Edgar: <span>7 AM - 10 AM</span> </p>
                </div>
                <div className="col-xl-6">
                    <p className="fsize_16 bname">Baby Edgar: <span>7 AM - 10 AM</span> </p>
                </div>
            </div>
        </>

    )
}

export default EmpCalender