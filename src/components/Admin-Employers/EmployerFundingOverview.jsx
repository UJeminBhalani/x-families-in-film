import React,{useState,useCallback} from "react";
import {useTranslation} from 'react-i18next'
import FundsChart from "../Employer/FundsChart";
import { Button } from "react-bootstrap";

 
import info from "../Images/info.png";

import Select from 'react-select'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


const EmployerFundingOverview = () => {

  const options = [
    { value: 'Union 22', label: 'Union 22' },
    { value: 'Union 7', label: 'Union 7' },
    { value: 'Union 12', label: 'Union 12' },
  ]
  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      textAlign:"left",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      height:'50px',
       width:'100%',
      border:'none',
      backgroundColor: '#FFFFFF',
      
    }),
    indicatorSeparator: () => {},
  }

  const {t} = useTranslation()

  const tooltip = <Tooltip id="tooltip-top ">{t('Employer.Funding.Overview.Hides_funding')}</Tooltip>;

  return (
    <div>
      <div className="row fundingOverview_main ">
        <div className="col-lg-8 mt-3">
        <h4 className='funding_heading'>{t('Employer.Funding.Overview.Current_funding')}</h4>  
          <div className="line2 mt-3 mb-2 "></div>
          <div>
          {t('Employer.Funding.Overview.Funding_visibility')}{" "}
            {/* <span className="fade_text ms-3">{t('Employer.Funding.Overview.Hide')}</span>{" "} */}
          </div>
          {/* <div className="mb-2">
            <OverlayTrigger className="tooltips_overlay" placement="right" overlay={tooltip}>
              <img src={info} alt="no preview available"></img>
            </OverlayTrigger>
          </div> */}
          <div className="row  ">
            <div className="col-lg-4 d-flex justify-content-center">
             
              <FundsChart/>
             
            </div>
            <div className="col-lg-8 funding_btn">
              <button className="btn  funding_add" type="button">
              {t('Employer.Funding.Overview.Spent')}: $7,000
              </button>
              <div>
              <button className="btn  funding_rem mt-3 mb-3" type="button">
                <b>{t('Employer.Funding.Overview.Remaining')}</b> $8,000
              </button>
              </div>
              <div className="mb-2">{t('Employer.Funding.Overview.Employee_usage')}:</div>
              <div className="usageFunds">
                <span className="mt-1">10%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
        <h4 className='funding_heading'>{t('Employer.Funding.Overview.Childcare_contribution')}</h4>  
          <div className="line mt-3 mb-2"></div>
          <div className="mb-4 mt-4 ">
            <select className='form-selects'>
              <option >{t('Employer.Funding.Overview.Union')} 22</option>
              <option >{t('Employer.Funding.Overview.Union')} 12</option>
              <option >{t('Employer.Funding.Overview.Union')} 7</option>
            </select>
              {/* <Select className="form-selects" options={options} styles={CustomStyle} placeholder={<div style={{textAlign:"left"}}>Union 22</div>}/> */}
          </div>
          <div>
            {" "}
            <Button className="btn btn-info child_contri" type="button">
              $10,000.00
            </Button>
          </div>
          <div>
            <div className="mb-2 mt-4">{t('Employer.Funding.Overview.Employer')} </div>
            <Button className="btn btn-info child_contri" type="button">
              $10,000.00
            </Button>
          </div>
        </div>
      </div>

      <div className="row fundingOverview_main">
        <div className="funding_heading col mt-5">
        {t('Employer.Funding.Overview.History')} 
          <div className="line3 mt-3 mb-5"></div>
        </div>
      </div>
      <div className="row text-center fundingOverview_main">
        <div className="col fuding_table">
          <table className="table table-borderless">
            <thead>
              <tr className="mb-4">
                <th scope="col" className="table_heading">
                {t('Employer.Funding.Overview.Name')} 
                </th>
                <th scope="col" className="table_heading">
                {t('Employer.Funding.Overview.Position')} 
                </th>
                <th scope="col" className="table_heading">
                {t('Employer.Funding.Overview.Date')} 
                </th>
                <th scope="col" className="table_heading">
                {t('Employer.Funding.Overview.Amount')} 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tyson NGO</th>
                <td>{t('Employer.Funding.Overview.Employer')} </td>
                <td>22/4/2022</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <th scope="row">Tyson NGO</th>
                <td>{t('Employer.Funding.Overview.Union')} </td>
                <td>22/4/2022</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <th scope="row">Tyson NGO</th>
                <td>{t('Employer.Funding.Overview.Employer')}</td>
                <td>22/4/2022</td>
                <td>$1,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployerFundingOverview;
