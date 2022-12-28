import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from 'react-i18next';
import Modal from '../shared/Modal'

const EmployeerRequests = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false);
  const [resend, setResend] = useState(false);
  const [showCancel,setShowCancel]= useState(false)
  const [showResend,setShowResend] = useState(false)
  const [value,setValue]=useState(`${t('Admin.EmployerRequests.Dropdown.Title')}`);
  const handleSelect=(e)=>{ 
    setValue(e)
  }
  return (
    <>
       
        <Modal onHide={()=>setShowCancel(false)} show={showCancel} modalTitle={t("Employer.Employee_requests_approval.Cancel_confirmation")} setShowCancel={setShowCancel} footer={
        <div className="group_buttons mt-2">
          <Button
            variant="outline-info"
            className="btn-lg"
            onClick={() => setShowCancel((prev) => !prev)}
          >
            {t('Employer.Add_employee.Delete_modal.Cancel')}
          </Button>
          <Button
            variant="info"
            className="btn-lg"
            onClick={() => {
              setShowCancel((prev) => !prev);
            }}
          >
            {t('Employer.Add_employee.Delete_modal.Confirm')}
          </Button>
        </div>
      }/>
          <Modal show={showResend} onHide={()=>setShowResend(false)} modalTitle={t("Employer.Employee_requests_approval.Resend_confirmation")} setShowResend={setShowCancel} footer={
        <div className="group_buttons mt-2">
          <Button
            variant="outline-info"
            className="btn-lg"
            onClick={() => setShowResend((prev) => !prev)}
          >
            {t('Employer.Add_employee.Delete_modal.Cancel')}
          </Button>
          <Button
            variant="info"
            className="btn-lg"
            onClick={() => {
              setShowResend((prev) => !prev);
            }}
          >
            {t('Employer.Add_employee.Delete_modal.Confirm')}
          </Button>
        </div>
      }/>
      <div className="white_box manage_screen">
        <div className="title_box d-inline-flex w100p">
          <h3 className="title_h3">{t('Admin.EmployerRequests.Title')}</h3>
          <div className="search_box d-flex ms-auto">
            <div className="search_box_in">
              <svg
                className="icon"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7507 16.3704C12.9139 17.7979 10.6024 18.4714 8.28671 18.2537C5.97106 18.0359 3.82543 16.9433 2.28669 15.1983C0.747957 13.4533 -0.068179 11.1871 0.00446449 8.86121C0.077108 6.5353 1.03307 4.32454 2.6777 2.67907C4.32232 1.0336 6.53196 0.0771475 8.85668 0.00446678C11.1814 -0.0682139 13.4464 0.748339 15.1905 2.28786C16.9346 3.82739 18.0267 5.97412 18.2443 8.29096C18.462 10.6078 17.7888 12.9205 16.362 14.7582L21.663 20.0421C22.1117 20.4894 22.1124 21.216 21.6645 21.6641C21.2166 22.1123 20.49 22.1119 20.0425 21.6633L14.7621 16.3704H14.7507ZM9.15107 16.0045C10.0515 16.0045 10.9431 15.827 11.775 15.4823C12.6069 15.1375 13.3628 14.6322 13.9995 13.9952C14.6362 13.3582 15.1412 12.6019 15.4858 11.7696C15.8304 10.9373 16.0077 10.0452 16.0077 9.14433C16.0077 8.24343 15.8304 7.35137 15.4858 6.51905C15.1412 5.68674 14.6362 4.93048 13.9995 4.29345C13.3628 3.65643 12.6069 3.15111 11.775 2.80636C10.9431 2.4616 10.0515 2.28416 9.15107 2.28416C7.33258 2.28416 5.58856 3.00692 4.30268 4.29345C3.01681 5.57998 2.29441 7.32489 2.29441 9.14433C2.29441 10.9638 3.01681 12.7087 4.30268 13.9952C5.58856 15.2817 7.33258 16.0045 9.15107 16.0045Z"
                  fill="#1D1D56"
                />
              </svg>
              <Form.Control type="text" placeholder={t('Admin.EmployerRequests.Search')} />
            </div>{" "}
            &nbsp; &nbsp;
            <div className="manage_employeer_dropdown">
              <DropdownButton id="dropdown-basic-button" title={value} onSelect={handleSelect}>
                <Dropdown.Item eventKey={t('Admin.EmployerRequests.Dropdown.Title')} selected>{t('Admin.EmployerRequests.Dropdown.Title')}</Dropdown.Item>
                <Dropdown.Item eventKey={t('Admin.EmployerRequests.Dropdown.Experience')}>{t('Admin.EmployerRequests.Dropdown.Experience')}</Dropdown.Item>
                <Dropdown.Item eventKey={t('Admin.EmployerRequests.Dropdown.Union')}>{t('Admin.EmployerRequests.Dropdown.Union')}</Dropdown.Item>
                <Dropdown.Item eventKey={t('Admin.EmployerRequests.Dropdown.Employee')}>{t('Admin.EmployerRequests.Dropdown.Employee')}</Dropdown.Item>
              </DropdownButton>
              <div>
                <Button
                  variant="outline-secondary"
                //   onClick={() => setShow((prev) => !prev)}
                >
                  0 {t('Admin.EmployerRequests.Selected')}
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 7.75V11.5M2.5 4H14.5L13.315 14.665C13.2744 15.032 13.0998 15.3712 12.8247 15.6175C12.5496 15.8638 12.1933 16 11.824 16H5.176C4.80673 16 4.45042 15.8638 4.17531 15.6175C3.9002 15.3712 3.72562 15.032 3.685 14.665L2.5 4ZM5.00875 1.86025C5.13006 1.60298 5.32203 1.3855 5.56225 1.23318C5.80248 1.08087 6.08106 0.999997 6.3655 1H10.6345C10.9191 0.999854 11.1978 1.08066 11.4382 1.23298C11.6785 1.38531 11.8706 1.60286 11.992 1.86025L13 4H4L5.00875 1.86025V1.86025ZM1 4H16H1ZM7 7.75V11.5V7.75Z"
                      stroke="#204288"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Table className="custom_table" responsive>
          <thead>
            <tr>
              {/* <th width="50px"></th> */}
              <th>{t('Admin.EmployerRequests.Table.LastName')}</th>
              <th>{t('Admin.EmployerRequests.Table.FirstName')}</th>
              <th>{t('Admin.EmployerRequests.Table.Production')}</th>
              <th>{t('Admin.EmployerRequests.Table.Studio')}</th>
              <th width="200px">
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8719 3.89995L23.1 8.12807C23.2781 8.3062 23.2781 8.59682 23.1 8.77495L12.8625 19.0124L8.5125 19.4953C7.93125 19.5609 7.43906 19.0687 7.50469 18.4874L7.9875 14.1374L18.225 3.89995C18.4031 3.72183 18.6938 3.72183 18.8719 3.89995ZM26.4656 2.82651L24.1781 0.539014C23.4656 -0.173486 22.3078 -0.173486 21.5906 0.539014L19.9313 2.19839C19.7531 2.37651 19.7531 2.66714 19.9313 2.84526L24.1594 7.07339C24.3375 7.25151 24.6281 7.25151 24.8063 7.07339L26.4656 5.41401C27.1781 4.69683 27.1781 3.53901 26.4656 2.82651ZM18 16.2281V20.9999H3V5.99995H13.7719C13.9219 5.99995 14.0625 5.93901 14.1703 5.83589L16.0453 3.96089C16.4016 3.60464 16.1484 2.99995 15.6469 2.99995H2.25C1.00781 2.99995 0 4.00776 0 5.24995V21.7499C0 22.9921 1.00781 23.9999 2.25 23.9999H18.75C19.9922 23.9999 21 22.9921 21 21.7499V14.3531C21 13.8515 20.3953 13.6031 20.0391 13.9546L18.1641 15.8296C18.0609 15.9374 18 16.0781 18 16.2281Z"
                    fill="#787878"
                  />
                </svg>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Kamado</b>
              </td>
              <td>
                <b>Tanjiro</b>
              </td>
              <td>
                Diary of a <br /> Wimpy Kid
              </td>
              <td>
                Vancouver Film <br /> Studios
              </td>
              <td>
                <div className="action_button">
                  <a onClick={() => setShowCancel(true)} className="link " style={{ color: "#DC6962" }}>
                    {t('Admin.EmployerRequests.Cancel')}
                  </a>
                  <a onClick={() => setShowResend(true)} className="link" style={{ color: "#038900" }}>
                    {t('Admin.EmployerRequests.Resend')}
                  </a>
                </div>

              </td>

            </tr>
            <tr>
              <td>
                <b>Kibutsuji</b>
              </td>
              <td>
                <b>Muzan</b>
              </td>
              <td>Fantastic Four</td>
              <td>
                Vancouver Film <br />
                Studios
              </td>
              <td>
              <div className="action_button">
                  <a onClick={() => setShowCancel(true)} className="link " style={{ color: "#DC6962" }}>
                    {t('Admin.EmployerRequests.Cancel')}
                  </a>
                  <a onClick={() => setShowResend(true)} className="link" style={{ color: "#038900" }}>
                    {t('Admin.EmployerRequests.Resend')}
                  </a>
                </div>

              </td>
            </tr>
            <tr>
              <td>
                <b>Tsuyuri</b>
              </td>
              <td>
                <b>Muzan</b>
              </td>
              <td>Deadpool 2</td>
              <td>
                Vancouver Film <br />
                Studios
              </td>
              <td>
              <div className="action_button">
                  <a onClick={() => setShowCancel(true)} className="link " style={{ color: "#DC6962" }}>
                    {t('Admin.EmployerRequests.Cancel')}
                  </a>
                  <a onClick={() => setShowResend(true)} className="link" style={{ color: "#038900" }}>
                    {t('Admin.EmployerRequests.Resend')}
                  </a>
                </div>

              </td>
            </tr>
            <tr>
              <td>
                <b>Kamado</b>
              </td>
              <td>
                <b>Tanjiro</b>
              </td>
              <td>
                Diary of a <br /> Wimpy Kid
              </td>
              <td>
                Vancouver Film <br />
                Studios
              </td>
              <td>
              <div className="action_button">
                  <a onClick={() => setShowCancel(true)} className="link " style={{ color: "#DC6962" }}>
                    {t('Admin.EmployerRequests.Cancel')}
                  </a>
                  <a onClick={() => setShowResend(true)} className="link" style={{ color: "#038900" }}>
                    {t('Admin.EmployerRequests.Resend')}
                  </a>
                </div>

              </td>
            </tr>
            <tr>
              <td>
                <b>Kibutsuji</b>
              </td>
              <td>
                <b>Muzan</b>
              </td>
              <td>Fantastic Four</td>
              <td>
                Vancouver Film <br />
                Studios
              </td>
              <td>
              <div className="action_button">
                  <a onClick={() => setShowCancel(true)} className="link " style={{ color: "#DC6962" }}>
                    {t('Admin.EmployerRequests.Cancel')}
                  </a>
                  <a onClick={() => setShowResend(true)} className="link" style={{ color: "#038900" }}>
                    {t('Admin.EmployerRequests.Resend')}
                  </a>
                </div>

              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default EmployeerRequests;
