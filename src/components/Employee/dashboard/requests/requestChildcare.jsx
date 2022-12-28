import React from "react";

import {  Form,Button} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Childcare = () => {
  const {t}=useTranslation();
  const navigation = useNavigate();
  const navigate = (address)=>{
    navigation(address)
  }
  return(<>
<div>
    <div className="dashboard_screen">
      <div className="white_box">
        <h1 className="text-center request_title">{t('Employee.Requests.Request_childcare')}</h1>
        <p className="text-center addFunds_body">
        {t('Employee.Requests.Info')}
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="row">
                  <div className="col-xl-3"></div>
                  <div className="col-xl-6">
                    <div className="row mb-4">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <Form.Control
                            type="tel"
                            placeholder="Date"
                            required
                            className="field_view"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-xl-6 childcare_timings">
                        <select
                          name="Anticipated Start Time"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.StartTime')}>
                            Anticipated Start Time{" "}
                          </option>
                          <option value="10AM" label="10AM">
                            {" "}
                            10AM
                          </option>
                          <option value="11AM" label="11AM">
                          11AM
                          </option>

                          <option value="12PM" label="12PM">
                            12PM
                          </option>
                        </select>
                      </div>
                      <div className="col-xl-6">
                        <select
                          name="colorss"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.EndTime')}>
                          Anticipated End Time{" "}
                          </option>
                          <option value="2PM" label="2PM">
                            {" "}
                           2PM
                          </option>
                          <option value="3PM" label="3PM">
                          3PM
                          </option>

                          <option value="4PM" label="4PM">
                          4PM
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-xl-12">
                        <select
                          name="colorss"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.Address')}>
                            Select Address{" "}
                          </option>
                          <option value="red" label="Park Street">
                            {" "}
                            Park Street
                          </option>
                          <option value="blue" label=" Park Street">
                          Park Street
                          </option>

                          <option value="green" label=" Park Street">
                          Park Street
                          </option>
                        </select>
                      </div>
                    </div>
<div className="mb-3">
<span className="request_detail ">{t('Employee.Requests.Details')}</span>

</div>

                    <div className="row mb-4">
                      <div className="col-xl-6 childcare_timings">
                        <select
                          name="colorss"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.Working')}>
                          Where are you working?{" "}
                          </option>
                          <option value="On Set - Main Unit" label="On Set - Main Unit">
                            {" "}
                            On Set - Main Unit
                          </option>
                          <option value="Office" label="Office">
                          Office
                          </option>

                          <option value="Prep & build" label="Prep & build">
                          Prep & build
                          </option>
                        </select>
                      </div>
                      <div className="col-xl-6">
                        <select
                          name="colorss"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.Care')}>
                          Style of Care{" "}
                          </option>
                          <option value=" Studio Care" label="Studio Care">
                            {" "}
                            Studio Care
                          </option>
                          <option value="In-home Care" label="In-home Care">
                          In-home Care

                          </option>

                          
                        </select>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-xl-12">
                        <select
                          name="colorss"
                          className="form-control field_view"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label={t('Employee.Requests.Children')}>
                            Select a color{" "}
                          </option>
                          <option value="red" label="John">
                            {" "}
                            John
                          </option>
                          <option value="blue" label="Alexendra">
                            Alexendra
                          </option>

                          <option value="green" label="Marrie">
                            Marrie
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex flex-row mb-2 align-items-end">
                      <span className="me-2 request_schedule">{t('Employee.Requests.Repetition')}</span>
                      <span className="request_validate">valid for 30 days</span>
                    </div>

                    <div className="row mb-2 ms-4 week_checkboxes">
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox1"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Sunday')}
                            </label>
                          </div>
                       
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox2"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Monday')}
                            </label>
                          </div>
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox3"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox3"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Tuesday')}
                            </label>
                          </div>
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox4"
                              value="option4"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox4"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Wednesday')}
                            </label>
                          </div>
                      </div>
                    </div>

                    <div className="row mb-2 ms-4 week_checkboxes">
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox5"
                              value="option5"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox5"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Thursday')}
                            </label>
                          </div>
                       
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox6"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox6"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Friday')}
                            </label>
                          </div>
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox7"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox7"
                            >
                              {t('Caregiver.Calendar.CalendarPopUp.Saturday')}
                            </label>
                          </div>
                      </div>
                      <div className="col-xl-3">
                      <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check"
                              type="checkbox"
                              id="inlineCheckbox8"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox8"
                            >
                               {t('Employee.Requests.Show')}
                            </label>
                          </div>
                      </div>
                    </div>

                    <div className="text-center mb-3">
                    <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input custom_input_check "
                              type="checkbox"
                              id="inlineCheckbox9"
                              value="option1"
                            />
                            <label
                              className="form-check-label "
                              for="inlineCheckbox9"
                              
                            >
                             {t('Employee.Requests.Schedule_all')}
                            </label>
                          </div>
                    </div>

                    <div className="text-center ">
                    <Button className="next ms-1 funding_add" onClick={()=>navigate('/employee/requests/success')}>{t('Employee.Requests.Submit')}</Button>
                    </div>
                  </div>
                  <div className="col-xl-3"></div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  </>)
  
  };

export default Childcare;
