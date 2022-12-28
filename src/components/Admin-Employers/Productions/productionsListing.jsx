import React from "react";
import User02 from "../../Images/user-01.png";
import {useTranslation} from 'react-i18next';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

const ProductionsListing = () => {
const navigate = useNavigate()

const navigation = (address) => {
  navigate(`${address}`)
}
  const {t} =useTranslation();
  return (
    <>
      <div className="contacts">
      <h4 className="title_h4_line">
      <span>
        {t('Admin.Dashboard.Productions')}
        <span >
        
          <select
            className="admin-dashboard-dropdown"
            name="language"
            id="language"
            selected="Studio"
          >
            <option value="STUDIO">{t('Admin.Dashboard.Dropdown.Sort')}{t('Admin.Dashboard.Dropdown.Studio')}</option>
            <option value="LAB">{t('Admin.Dashboard.Dropdown.Contacts')}</option>
            <option value="PRODUCTION">{t('Admin.Dashboard.Dropdown.Production')}</option>
            {/* <option value="EMPLOYEER">{t('Admin.Dashboard.Dropdown.Employer')}</option> */}
          </select>

        </span>
        {/* <span>
        <select
          className="admin-dashboard-dropdown"
          name="language"
          id="language"
        >
          <option value="STUDIO">SORT BY:STUDIO</option>
          <option value="LAB">SORT BY:LAB</option>
          <option value="PRODUCTION">SORT BY:LAB</option>
          <option value="EMPLOYEER">SORT BY:LAB</option>
        </select>
      </span>
      </span> */}
        
              </span>
    </h4>
      

      

      <ul className="productions_list">
        <li>
          <img src={User02} alt="" />
          <div className="d-inline-flex pointer w100p">
            <h5 onClick={()=>{navigate('/admin/productions')}}>Diary of a Wimpy Kid</h5>
            <h6 className="ms-auto">Vancouver Film Studios</h6>
          </div>
        </li>
        <li>
          <img src={User02} alt="" />
          <div className="d-inline-flex pointer w100p">
            <h5>Fantastic Four</h5>
            <h6 className="ms-auto">Vancouver Film Studios</h6>
          </div>
        </li>
        <li>
          <img src={User02} alt="" />
          <div className="d-inline-flex pointer w100p">
            <h5>Deadpool</h5>
            <h6 className="ms-auto">Vancouver Film Studios</h6>
          </div>
        </li>
        <li>
          <img src={User02} alt="" />
          <div className="d-inline-flex pointer w100p">
            <h5>Diary of a Wimpy Kid</h5>
            <h6 className="ms-auto">Vancouver Film Studios</h6>
          </div>
        </li>
        <li>
          <img src={User02} alt="" />
          <div className="d-inline-flex pointer w100p">
            <h5>Diary of a Wimpy Kid</h5>
            <h6 className="ms-auto">Vancouver Film Studios</h6>
          </div>
        </li>
      </ul>
      <ul className="page_navi mt-4">
        <li>
          <a href="#">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M6 11L1 6L6 1"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            1
          </a>
        </li>
        <li>of</li>
        <li>
          <a href="#">
            2
          </a>
        </li>
        <li>
          <a href="#">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M1 11L6 6L1 1"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>

      {/* <ul className='productions_list'>
         <li>
          <a href="#">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M6 11L1 6L6 1"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          </li> 
        </ul> */}
      <a href="#" onClick={()=>navigation('/admin/employers')} className="link_a ms-auto" style={{ float: "right" }}>
       {t('Admin.Dashboard.ManageProductions')}
      </a>
      {/* <div className='white_box'>
      <h4 className='title_h4_line'><span>{title}</span></h4>
     
      {component}
      
       <ul className='productions_list'>
         <li>
          <a href="#">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M6 11L1 6L6 1"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          </li> 
        </ul>
        <a href='#' className='link_a ms-auto'>Manage productions</a> 
      </div>   */}

      </div>
    </>
  );
};

export default ProductionsListing;
