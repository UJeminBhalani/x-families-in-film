import React from 'react'
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next'

const DeclinedBookings = () => {
  const {t}=useTranslation();
  return (
    <Table className="custom_table bookingRequests" responsive>
    <thead>
      <tr>
        <th>{t("Caregiver.BookingRequests.AcceptedBookings.Client")}</th>
        <th>{t("Caregiver.BookingRequests.AcceptedBookings.Dates")}</th>
        <th>{t("Caregiver.BookingRequests.AcceptedBookings.Detail")}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <b className="mb-5">Mike Jones</b> 
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

    
      </tr>
      <tr>
        <td>
          <b className="mb-5">Mike Jones</b>     
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
      </tr>
      
     
     
    </tbody>
  </Table>
  )
}

export default DeclinedBookings