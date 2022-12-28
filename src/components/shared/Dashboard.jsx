import React from "react"; 
import { useTranslation } from 'react-i18next';

function Dashboard({title,component,show,bgColor,subtitle,height, text_decorator}) {
  const { t } = useTranslation();
  return(
    <>
    <div className="dashboard_screen">
      {/* <div className={bgColor ?"white_box cardbg":"white_box"}> */}
      <div className={height ? "white_box height":"white_box"}>
        <div className="d-flex justify-content-between">
        {title && <h4 className={`${text_decorator==='true' ? "title_h4_line" : 'mb-4'}`}><span>{title}</span> </h4>}
        {/* {t(`Employee.Dashboard.${title}`)} */}
        {show && show === "true" && <>
          <span>
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
          {/* <div className="admin-dashboard-dropdown">
              <DropdownButton id="dropdown-basic-button" title="SORT BY:STUDIO">
                <Dropdown.Item href="#/action-1">Experience</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Union</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Employee</Dropdown.Item>
              </DropdownButton>
              </div> */}
      </span>
        </>}
        </div>
        <div className="mb-2">
        {subtitle ? subtitle : null}
        </div>
        {component}
      </div>
    </div>
    </>
  )
  }

export default Dashboard;
