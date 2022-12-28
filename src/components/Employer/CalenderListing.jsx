import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
 
import Form from "react-bootstrap/Form";

import calender from "../Images/small_calendar.svg";
import Modal from "../shared/Modal"
import Button from "react-bootstrap/Button";
import Search from "../Images/Search.png";
import addIcon from "../Images/addIcon.png";
import bullet1 from "../Images/bullet1.png"
import bullet2 from "../Images/bullet2.png"
import bullet3 from "../Images/bullet3.png"

import { useLocation } from "react-router-dom";
import { useState } from "react";

import Calendar from "react-calendar";

const CalenderListing = () => {

  const { t } = useTranslation()

  const location = useLocation();
  const [employee, setEmployee] = useState(false)
  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [value, onChange] = useState(new Date());

const navigation = useNavigate()
const navigate = (address) =>{
  navigation(`${address}`)
}
  useEffect(() => { 
    if (location?.pathname === "/employee/listing") {
      setEmployee(true)
    }
    else {
      setEmployee(false)
    }
  }, [])
  return (
    <div>
      <Modal show={showDeleteModal} setShow={setShowDeleteModal} modalTitle={t('Employer.Add_employee.Delete_modal.Confirmation')} footer={
          <div className="group_buttons mt-5">
            <Button
              variant="outline-info"
              className="btn-lg"
              onClick={() => setShowDeleteModal((prev) => !prev)}
            >
               {t('Employer.Add_employee.Delete_modal.Cancel')}
            </Button>
            <Button
              variant="info"
              className="btn-lg"
              onClick={() => {
                setShowDeleteModal((prev) => !prev);
              }}
            >
              {t('Employer.Add_employee.Delete_modal.Confirm')}
            </Button>
          </div>
        }/>
      <div className="white_box manage_screen">
        <div className="row">
          <div className="col-lg-4  calender_background">
            {employee ? <Calendar className='calender_lists' onChange={onChange} value={value} /> :<div>
              <h3 className="ms-2 mb-4 employer_calender_label">October 2022</h3>
             <Calendar className='availability_calenders_employer mt-2' onChange={onChange} value={value} selectRange={true} showNavigation={false} />
             </div>
            }

            <div className="ms-4 mt-5">
              <h5 className="listing_day">{t('Employer.Calender_listing.Today')}, {t('Employer.Calender_listing.October')} 2nd</h5>
            </div>
            {
              !employee ?  <div className="">
                <div className="event_info">
                  <div>
                  <ul className="calender_list  mt-2">
                    <li className="list_calendar1 mb-3"><img src={bullet1} className='me-1'/> {t('Employer.Calender_listing.Event')} #1</li>
                   <li className="list_calendar2 mb-3"><img src={bullet2} className='me-1'/> {t('Employer.Calender_listing.Event')} #2</li>
                   <li className="list_calendar3"> <img src={bullet3} className='me-1'/>{t('Employer.Calender_listing.Event')} #3</li>
                  </ul>
                  </div>
                  <div>
                  <ul className="calender_list_time ms-2 me-4 mt-2">
                  <li className="list_calendar_timings mb-3 ">8:00AM-9PM</li>
                   <li className="list_calendar_timings mb-3" >9:00AM</li>
                 <li className="list_calendar_timings" >10:00AM-12PM</li>
                  </ul>
                  </div>

                </div>
                {/* <div className="col-lg-6">
                  <ul className="calender_list ms-2 mt-2">
                    <li>{t('Employer.Calender_listing.Event')} #1</li>
                    <li>{t('Employer.Calender_listing.Event')} #2</li>
                    <li>{t('Employer.Calender_listing.Event')} #3</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="calender_list_time ms-2 mt-2">
                    <li>8:00AM-9PM</li>
                    <li>9:00AM</li>
                    <li>10:00AM-12PM</li>
                  </ul>
                </div> */}
              </div> :
                <div className="d-flex justify-content-between p-3 ">
                  <span>{t('Employer.Calender_listing.Event')} #1</span>
                  <span>8:00AM-9PM</span>
                </div>
            }

          </div>
          <div className="col-lg-8 schedule">
            <div className="schedule_info">

              <div>
                {
                  employee ? <h3 className=" schedule_title">Details</h3> : <h3 className=" schedule_title">{t('Employer.Calender_listing.Crew_schedule')}</h3>
                }
              </div>
              <div>
                <div className='search_box d-flex ms-auto'>
                  <div className='search_box_in'>
                    <svg className='icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7507 16.3704C12.9139 17.7979 10.6024 18.4714 8.28671 18.2537C5.97106 18.0359 3.82543 16.9433 2.28669 15.1983C0.747957 13.4533 -0.068179 11.1871 0.00446449 8.86121C0.077108 6.5353 1.03307 4.32454 2.6777 2.67907C4.32232 1.0336 6.53196 0.0771475 8.85668 0.00446678C11.1814 -0.0682139 13.4464 0.748339 15.1905 2.28786C16.9346 3.82739 18.0267 5.97412 18.2443 8.29096C18.462 10.6078 17.7888 12.9205 16.362 14.7582L21.663 20.0421C22.1117 20.4894 22.1124 21.216 21.6645 21.6641C21.2166 22.1123 20.49 22.1119 20.0425 21.6633L14.7621 16.3704H14.7507ZM9.15107 16.0045C10.0515 16.0045 10.9431 15.827 11.775 15.4823C12.6069 15.1375 13.3628 14.6322 13.9995 13.9952C14.6362 13.3582 15.1412 12.6019 15.4858 11.7696C15.8304 10.9373 16.0077 10.0452 16.0077 9.14433C16.0077 8.24343 15.8304 7.35137 15.4858 6.51905C15.1412 5.68674 14.6362 4.93048 13.9995 4.29345C13.3628 3.65643 12.6069 3.15111 11.775 2.80636C10.9431 2.4616 10.0515 2.28416 9.15107 2.28416C7.33258 2.28416 5.58856 3.00692 4.30268 4.29345C3.01681 5.57998 2.29441 7.32489 2.29441 9.14433C2.29441 10.9638 3.01681 12.7087 4.30268 13.9952C5.58856 15.2817 7.33258 16.0045 9.15107 16.0045Z" fill="#1D1D56" />
                    </svg>
                    <Form.Control type="email" placeholder="Search..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="listing_right mt-4  ">
              <div className="scheduling_details">
              <h5 className="date_title mt-1">
                  {t('Employer.Calender_listing.Tuesday')} {t('Employer.Calender_listing.October')} 2nd, 2022
                </h5>
                <div className="event_Details">8:00AM - 9:00PM</div>
                <div className="event_Details">{t('Employer.Calender_listing.Event_title')}</div>
                <div className="event_Details">15 {t('Employer.Calender_listing.Guests')}</div>
              </div>
                
                {
                  !employee ? <div className="listing_btn">
                    <button type="button" className="btn btn-info listing_edit_button  me-3" onClick={()=>navigate('/employer/crew_schedule')}>
                      {t('Employer.Calender_listing.Edit')}
                    </button>
                    <button type="button" className="btn  btn-outline-info listing_delete_button me-2" onClick={()=>setShowDeleteModal(prev=>!prev)}>
                      {t('Employer.Calender_listing.Delete')}
                    </button>

                  </div> : null
                }

              </div>
            {/* <div className="row">
              <div className="col-lg-6">
                {
                  employee ? <h3 className="ms-5 mt-2 schedule_title">Details</h3> : <h3 className="ms-5 mt-2 schedule_title">{t('Employer.Calender_listing.Crew_schedule')}</h3>
                }

              </div>
              <div className="col-lg-6">
                <div className='search_box d-flex ms-auto'>
                  <div className='search_box_in'>
                    <svg className='icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7507 16.3704C12.9139 17.7979 10.6024 18.4714 8.28671 18.2537C5.97106 18.0359 3.82543 16.9433 2.28669 15.1983C0.747957 13.4533 -0.068179 11.1871 0.00446449 8.86121C0.077108 6.5353 1.03307 4.32454 2.6777 2.67907C4.32232 1.0336 6.53196 0.0771475 8.85668 0.00446678C11.1814 -0.0682139 13.4464 0.748339 15.1905 2.28786C16.9346 3.82739 18.0267 5.97412 18.2443 8.29096C18.462 10.6078 17.7888 12.9205 16.362 14.7582L21.663 20.0421C22.1117 20.4894 22.1124 21.216 21.6645 21.6641C21.2166 22.1123 20.49 22.1119 20.0425 21.6633L14.7621 16.3704H14.7507ZM9.15107 16.0045C10.0515 16.0045 10.9431 15.827 11.775 15.4823C12.6069 15.1375 13.3628 14.6322 13.9995 13.9952C14.6362 13.3582 15.1412 12.6019 15.4858 11.7696C15.8304 10.9373 16.0077 10.0452 16.0077 9.14433C16.0077 8.24343 15.8304 7.35137 15.4858 6.51905C15.1412 5.68674 14.6362 4.93048 13.9995 4.29345C13.3628 3.65643 12.6069 3.15111 11.775 2.80636C10.9431 2.4616 10.0515 2.28416 9.15107 2.28416C7.33258 2.28416 5.58856 3.00692 4.30268 4.29345C3.01681 5.57998 2.29441 7.32489 2.29441 9.14433C2.29441 10.9638 3.01681 12.7087 4.30268 13.9952C5.58856 15.2817 7.33258 16.0045 9.15107 16.0045Z" fill="#1D1D56" />
                    </svg>
                    <Form.Control type="email" placeholder="Search..." />
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="listing_right mt-4 ms-5 ">
                <h5 className="date_title mt-1">
                  {t('Employer.Calender_listing.Tuesday')} {t('Employer.Calender_listing.October')} 2nd, 2022
                </h5>
                <div className="event_Details">8:00AM - 9:00PM</div>
                <div className="event_Details">{t('Employer.Calender_listing.Event_title')}</div>
                <div className="event_Details">15 {t('Employer.Calender_listing.Guests')}</div>
                {
                  !employee ? <div className="listing_btn">
                    <button type="button" className="btn btn-info  me-2">
                      {t('Employer.Calender_listing.Edit')}
                    </button>
                    <button type="button" className="btn  btn-outline-info   ">
                      {t('Employer.Calender_listing.Delete')}
                    </button>
                  </div> : null
                }

              </div>
            </div> */}
          </div>
        </div>
        <div className="listing_icon mt-4">
          <img src={addIcon} alt="add icon" onClick={()=>navigate('/employer/crew_schedule')}/>
        </div>
      </div>
    </div>
  );
};

export default CalenderListing;
