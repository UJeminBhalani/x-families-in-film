import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Modal from "../shared/Modal";
import { useTranslation } from "react-i18next";

const PendingRequests = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [del, setDel] = useState(false);
  const [delAfter,setDelAfter]= useState(false);
  const { t } = useTranslation();

  const AcceptDescription = () => {
    return (
      <div>
        <div className="mt-5">
          <div className="acceptRequest_modal">
            {t("Caregiver.BookingRequests.PendingRequests.PopUpHeading")}
          </div>
          <div className="acceptRequest_modal">
            {t("Caregiver.BookingRequests.PendingRequests.PopUpHeading2")}
          </div>
          <div className="mt-4 acceptRequest_modal">
            {t("Caregiver.BookingRequests.PendingRequests.PopUpHeading3")}
          </div>
        </div>
      </div>
    );
  };

  const accept_description = {
    body: <AcceptDescription />,
    footer: (
      <>
        <div className="group_buttons mt-5">
          <Button
            variant="outline-info"
            className="btn-lg"
            onClick={() => setShow(false)}
          >
           {t("Caregiver.BookingRequests.PendingRequests.Cancel")} 
          </Button>
          <Button
            variant="info"
            className="btn-lg"
            onClick={() => {
              setShow(false);
              setConfirm(true);
            }}
          >
            {t("Caregiver.BookingRequests.PendingRequests.Confirm")}
          </Button>
        </div>
      </>
    ),
  };

  const Balances = [
    {
      time: "6AM - 3PM",
      funds: "$120.03",
      client: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      time: "6AM - 3PM",
      funds: "$120.03",
      client: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      time: "6AM - 3PM",
      funds: "$120.03",
      client: "Mike Jones",
      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      time: "6AM - 3PM",
      funds: "$120.03",
      client: "Mike Jones",
      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      time: "6AM - 3PM",
      funds: "$120.03",
      client: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
  ];

  return (
    <>
      {confirm ? (
        <Modal
          title={t("Caregiver.BookingRequests.PendingRequests.PopUpAfter")}
          show={confirm}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setConfirm((prev) => !prev);
                }}
              >
                {t("Caregiver.BookingRequests.PendingRequests.Done")}
              </Button>{" "}
            </div>
          }
        />
      ) : null}
      {delAfter ? (
        <Modal
          title={t("Caregiver.BookingRequests.PendingRequests.PopUpDeclineAfterTitle")}
          show={delAfter}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setDelAfter((prev) => !prev);
                }}
              >
                {t("Caregiver.BookingRequests.PendingRequests.Done")}
              </Button>{" "}
            </div>
          }
        />
      ) : null}
            {del && (
        <Modal
          show={del}
          title={t("Caregiver.BookingRequests.PendingRequests.PopUpDeclineTitle")}
          description={
            <>
              <p>
              {t("Caregiver.BookingRequests.PendingRequests.PopUpDeclineHeading")}
              </p>
            </>
          }
          setShow={setDel}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setDel(false)}
              >
                {t("Caregiver.BookingRequests.PendingRequests.PopUpDeclineCancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setDel(false);
                    setDelAfter(true)
                
                  
                }}
              >
                {t("Caregiver.BookingRequests.PendingRequests.PopUpDeclineConfirm")}
              </Button>
            </div>
          }
        />
      )}

      <div>
        <Table responsive className=" childcareBreakdown_main   custom_table">
          <thead>
            <tr>
              <th>{t("Caregiver.BookingRequests.PendingRequests.Client_name")}</th>
              <th>{t("Caregiver.BookingRequests.PendingRequests.Date_&_location")}</th>
              <th>{t("Caregiver.BookingRequests.PendingRequests.Details")}</th>
              <th>{t("Caregiver.BookingRequests.PendingRequests.Actions")}</th>
            </tr>
          </thead>
          <tbody>
            {Balances.map((item, index) => {
              return (
                <tr>
                  <td>
                    <b>{item.client}</b>{" "}
                  </td>
                  <td>
                    <div className="mb-3">
                      <b>{item.date}</b>{" "}
                    </div>
                    <div>
                      <div>{item.street}</div>
                      <div>{item.address}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>{item.funds}</div>
                      <div>{item.time}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      {" "}
                      <span
                        className="me-3 accept_action "
                        onClick={() => setShow((prev) => !prev)}
                      >
                        {t('Caregiver.BookingRequests.PendingRequests.Accept')}
                      </span>{" "}
                      <span className="decline_action" onClick={()=>setDel(true)}>{t("Caregiver.BookingRequests.PendingRequests.Decline")}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal
          show={show}
          setShow={setShow}
          accept_description={accept_description}
          title={t("Caregiver.BookingRequests.PendingRequests.PopUpTitle")}
        />
      </div>
    </>
  );
};

export default PendingRequests;
