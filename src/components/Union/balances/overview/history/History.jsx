import React from "react";

import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const History = () => {
  const {t} =useTranslation()
    return(
        <>
        <h3 className="title_h4_line">{t('Employer.Funding.Overview.History')}</h3>
        <div className="union_table">
        <Table  borderless   >
      <thead>
        <tr style={{color:"#787878"}}>
          <th>Name</th>
          <th>Position</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <b>Tyson Ngo</b></td>
          <td>Employer</td>
          <td>22/04/2022</td>
          <td>@$1,000</td>
        </tr>
        <tr>
        <td> <b>Tyson Ngo</b></td>
          <td>Employer</td>
          <td>22/04/2022</td>
          <td>@$1,000</td>
        </tr>
        <tr>
        <td> <b>Tyson Ngo</b></td>
          <td>Employer</td>
          <td>22/04/2022</td>
          <td>@$1,000</td>
        </tr>
      </tbody>
    </Table>
        </div>
        
        </>
    )
}

export default History