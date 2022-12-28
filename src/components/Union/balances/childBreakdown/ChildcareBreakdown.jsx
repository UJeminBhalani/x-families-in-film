import React from "react";

import {useTranslation} from 'react-i18next'
import Table from "react-bootstrap/Table";

const ChildcareBreakdown = () => {

  const {t} = useTranslation()
  
  const Balances = [
    {
      emplyee: "Giyu Tomioka",
      funds: "$120.03",
      caretaker: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      emplyee: "Giyu Tomioka",
      funds: "$120.03",
      caretaker: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      emplyee: "Giyu Tomioka",
      funds: "$120.03",
      caretaker: "Mike Jones",
      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      emplyee: "Giyu Tomioka",
      funds: "$120.03",
      caretaker: "Mike Jones",
      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
    {
      emplyee: "Giyu Tomioka",
      funds: "$120.03",
      caretaker: "Mike Jones",

      date: "March 23, 2022",
      street: "227 Rosewood Lane Vancouver,",
      address: "BC V6M 2K3",
    },
  ];
  return (
    <div>
      <Table responsive className=" childcareBreakdown_main custom_table">
        <thead>
          <tr>
            <th>{t('Admin.ManageEmployeer.Dropdown.Employee')}</th>
            <th>{t('Union.Balances.Funds')}</th>
            <th>{t('Employee.Bookings.Caretaker')}</th>
            <th>{t('Employer.Funding.Childcare_breakdown.Date_&_location')}</th>
          </tr>
        </thead>
        <tbody>
          {Balances.map((item, index) => {
            return (
              <tr>
                <td><p>{item.emplyee}</p> </td>
                <td>
                  <div>
                    {item.funds} </div>
                 
                  
                </td>
                <td>{item.caretaker}</td>
                <td>
                  <div>
                    <p>{item.date}</p> </div>
                  <div>
                  <div>{item.street}</div>
                  <div>{item.address}</div>
                  </div>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      
      <div className="row text-center childcareBreakdown_main">
        <div className="col-lg-5 addFunds_footer childcareBreakdown_main d-flex align-items-center">
          <b style={{fontSize:"20px"}}> {t('Employer.Funding.Childcare_breakdown.Total')}: </b> <span className="ms-3">$600.15</span> 
        </div>
        <div className="col-lg-5 addFunds_footer childcareBreakdown_main d-flex align-items-center">
          <b  style={{fontSize:"20px"}}>{t('Employer.Funding.Childcare_breakdown.Remaining')}: </b> <span  className="ms-3">$8427.15</span> 
        </div>
      </div>
    </div>
  );
};

export default ChildcareBreakdown;
