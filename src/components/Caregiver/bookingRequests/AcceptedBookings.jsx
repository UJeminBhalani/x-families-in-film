import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "../../shared/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const AcceptedBookings = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      {show && (
        <Modal
          show={show}
          title={t("Caregiver.BookingRequests.AcceptedBookings.PopUpTitle")}
          description={
            <>
              <p>
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpHeading")}
              </p>
            </>
          }
          setShow={setShow}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setShow(false)}
              >
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpCancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setShow(false);
                  setConfirm(true);
                }}
              >
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpConfirm")}
              </Button>
            </div>
          }
        />
      )}
      {confirm ? (
        <Modal
          title={t(
            "Caregiver.BookingRequests.AcceptedBookings.PopUpAfterTitle"
          )}
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
                {t(
                  "Caregiver.BookingRequests.AcceptedBookings.PopUpAfterButton"
                )}
              </Button>{" "}
            </div>
          }
        />
      ) : null}
      <Table className="custom_table bookingRequests" responsive>
        <thead>
          <tr>
            <th>{t("Caregiver.BookingRequests.AcceptedBookings.Client")}</th>
            <th>{t("Caregiver.BookingRequests.AcceptedBookings.Dates")}</th>
            <th>{t("Caregiver.BookingRequests.AcceptedBookings.Detail")}</th>
            <th>{t("Caregiver.BookingRequests.AcceptedBookings.Action")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b className="mb-5">Mike Jones</b>
              <br />
              <h5>778-298-2891</h5>
            </td>
            <td>
              <b>March 23, 2022</b>
              <h5 className="mt-3">
                227 Rosewood Lane
                <br />
                Vancouver,BC V6M 2K3
              </h5>
            </td>
            <td>
              $120.03 <br /> 6AM- 3PM
            </td>

            <td>
              <a onClick={() => setShow(true)} className="link2">
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpCancel")}
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <b className="mb-5">Mike Jones</b>
              <br />

              <h5>mjones@mail.com</h5>
            </td>
            <td>
              <b>March 23, 2022</b>
              <h5 className="mt-3">
                227 Rosewood Lane
                <br />
                Vancouver,BC V6M 2K3
              </h5>
            </td>
            <td>
              $120.03 <br /> 6AM- 3PM
            </td>

            <td>
              <a onClick={() => setShow(true)} className="link2">
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpCancel")}
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <b className="mb-5">Mike Jones</b>
              <br />
              <h5>604-291-2981</h5>
            </td>
            <td>
              <b>March 23, 2022</b>
              <h5 className="mt-3">
                227 Rosewood Lane
                <br />
                Vancouver,BC V6M 2K3
              </h5>
            </td>
            <td>
              $120.03 <br /> 6AM- 3PM
            </td>

            <td>
              <a onClick={() => setShow(true)} className="link2">
                {t("Caregiver.BookingRequests.AcceptedBookings.PopUpCancel")}
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AcceptedBookings;
