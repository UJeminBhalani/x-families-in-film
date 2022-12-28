import React from "react";

import {useTranslation} from 'react-i18next';
import { useState } from "react";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import PendingRequests from "../PendingRequests";
import AcceptedBookings from "./AcceptedBookings";
import DeclinedBookings from "./DeclinedBookings"



const BookingRequests = () => {
  const [accepted, setAccepted] = useState(true)
  const [pending, setPending] = useState(false)
  const [declined, setDeclined] = useState(false)
  const {t}=useTranslation()
  return (
    <>
      <div>
        <div className="white_box manage_screen">
          <div className="row">
            <h3 className="title_h3"> {t("Caregiver.BookingRequests.Booking_requests")}</h3>
          </div>

          {/* <Tabs
          defaultActiveKey="pending"
          id="fill-tab-example"
          className="mb-3"
          
        >
          <Tab eventKey="pending" title="Pending Bookings">
           <PendingRequests/>
          </Tab>
          <Tab eventKey="accepted" title="Accepted Bookings">
          <AcceptedBookings />
          </Tab>
          <Tab eventKey="declined" title="Declined Bookings">
          <DeclinedBookings/>
          </Tab>
        </Tabs> */}

          <div className="employee-booking-cards">
            <div className="row ">
              <div className="col-xl-3">
                <Button
                  onClick={() => {
                    setPending(true);
                    setAccepted(false);
                    setDeclined(false);
                  }}
                >
                 {t('Caregiver.BookingRequests.PendingRequests.Title')}
                </Button>
              </div>
              <div className="col-xl-3">
                <Button onClick={() => {
                  setPending(false)
                  setAccepted(true);
                  setDeclined(false)
                }}>{t('Caregiver.BookingRequests.AcceptedBookings.Title')}</Button>
              </div>
              <div className="col-xl-3">
                <Button onClick={() => {
                  setPending(false)
                  setAccepted(false);
                  setDeclined(true)
                }}>{t('Caregiver.BookingRequests.DeclinedBookings')}</Button>
              </div>
            </div>
          </div>

          {accepted && <AcceptedBookings />}
          {pending && <PendingRequests />}
          {declined && <DeclinedBookings />}

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
    </>
  );
};

export default BookingRequests;
