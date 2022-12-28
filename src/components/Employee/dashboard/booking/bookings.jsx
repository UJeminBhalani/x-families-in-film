import React from "react";

import { useTranslation } from "react-i18next";
import { Button, Form, Table } from "react-bootstrap";
import { useState } from "react";

const Bookings = () => {
    const { t } = useTranslation();
    const [count, setCount] = useState(1)
    return (
        <>
            <div className="dashboard_screen">
                <div className="white_box">
                    <p className="title_h3 ">{t('Booking')}
                    </p>
                    <div className="employee-booking-cards">
                        <div className="row emplyee_booktab">
                            <div className="col-xl-3">
                                <Button onClick={() => setCount(1)}>{t('Employee.Bookings.Upcoming')} </Button>
                            </div>
                            <div className="col-xl-3">
                                <Button onClick={() => setCount(2)}>{t('Employee.Bookings.Pending')}</Button>
                            </div>
                            <div className="col-xl-3">
                                <Button onClick={() => setCount(3)}>{t('Employee.Bookings.Cancelled')}</Button>
                            </div>
                            <div className="col-xl-3">
                                <div className='search_box_in'>
                                    <svg className='icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7507 16.3704C12.9139 17.7979 10.6024 18.4714 8.28671 18.2537C5.97106 18.0359 3.82543 16.9433 2.28669 15.1983C0.747957 13.4533 -0.068179 11.1871 0.00446449 8.86121C0.077108 6.5353 1.03307 4.32454 2.6777 2.67907C4.32232 1.0336 6.53196 0.0771475 8.85668 0.00446678C11.1814 -0.0682139 13.4464 0.748339 15.1905 2.28786C16.9346 3.82739 18.0267 5.97412 18.2443 8.29096C18.462 10.6078 17.7888 12.9205 16.362 14.7582L21.663 20.0421C22.1117 20.4894 22.1124 21.216 21.6645 21.6641C21.2166 22.1123 20.49 22.1119 20.0425 21.6633L14.7621 16.3704H14.7507ZM9.15107 16.0045C10.0515 16.0045 10.9431 15.827 11.775 15.4823C12.6069 15.1375 13.3628 14.6322 13.9995 13.9952C14.6362 13.3582 15.1412 12.6019 15.4858 11.7696C15.8304 10.9373 16.0077 10.0452 16.0077 9.14433C16.0077 8.24343 15.8304 7.35137 15.4858 6.51905C15.1412 5.68674 14.6362 4.93048 13.9995 4.29345C13.3628 3.65643 12.6069 3.15111 11.775 2.80636C10.9431 2.4616 10.0515 2.28416 9.15107 2.28416C7.33258 2.28416 5.58856 3.00692 4.30268 4.29345C3.01681 5.57998 2.29441 7.32489 2.29441 9.14433C2.29441 10.9638 3.01681 12.7087 4.30268 13.9952C5.58856 15.2817 7.33258 16.0045 9.15107 16.0045Z" fill="#1D1D56" />
                                    </svg>
                                    <Form.Control type="email" placeholder={t('Employee.Bookings.Search')} />
                                </div>
                            </div>
                        </div>
                        <Table className='custom_table' responsive>
                            <thead>
                                <tr>

                                    <th>{t('Employee.Bookings.Status')}</th>
                                    <th>{t('Employee.Bookings.Date')}</th>
                                    <th>{t('Employee.Bookings.Caretaker')}</th>
                                    <th>{t('Employee.Bookings.Details')}</th>
                                    {
                                        count === 3 ? null : <th>{t('Employee.Bookings.Action')}</th>
                                    }


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><b className={count == 1 ? "accepted" : count == 2 ? "pending" : "cancelled"}>{count == 1 ? "Accepted" : count == 2 ? "Pending" : "Cancelled"}</b></td>
                                    <td><p>March 23, 2022</p>
                                        <div className="d-flex flex-column mt-2">
                                            <span>227 Rosewood Lane
                                            </span>
                                            <span>Vancouver, BC V6M 2K3</span>
                                        </div>
                                    </td>
                                    <td>    {
                                        count == 2 ? <>
                                            <b className={count === 2 ? "pending" : ""}>Pending</b>
                                        </> : <>
                                            <p>Cindy Yan</p>
                                            <div className="d-flex flex-column mt-2">
                                                <span>604-123-4567</span>
                                                <span>Cindyy@mail.com</span>
                                            </div>
                                        </>}



                                    </td>
                                    <td><div className="d-flex flex-column mt-2">
                                        <span>$120.03</span>

                                        <span> 6AM - 3PM</span>

                                    </div></td>
                                    {/* {
                                        count==3? null:<td style={{cursor:"pointer"}}> <b>{t('Employee.Bookings.Manage')}</b></td>
                                    } */}

                                    {
                                        count == 3 ? null : <td style={{ cursor: "pointer" }}>
                                            <div className="dropdown">
                                                <div className="link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <u>{t('Employee.Bookings.Manage')}</u>  
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">View Caregiver Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Caregiver</a></li>
                                                    <li><a className="dropdown-item" href="#">Cancel Request</a></li>
                                                </ul>
                                            </div>


                                        </td>
                                    }

                                </tr>

                                <tr>

                                    <td><b className={count == 1 ? "accepted" : count == 2 ? "pending" : "cancelled"}>{count == 1 ? "Accepted" : count == 2 ? "Pending" : "Cancelled"}</b></td>
                                    <td><p>March 23, 2022</p>
                                        <div className="d-flex flex-column mt-2">
                                            <span>227 Rosewood Lane
                                            </span>
                                            <span>Vancouver, BC V6M 2K3</span>
                                        </div>
                                    </td>
                                    <td> {
                                        count == 2 ? <>
                                            <b className={count === 2 ? "pending" : ""}>Pending</b>
                                        </> : <>
                                            <p>Cindy Yan</p>
                                            <div className="d-flex flex-column mt-2">
                                                <span>604-123-4567</span>
                                                <span>Cindyy@mail.com</span>
                                            </div>
                                        </>}</td>
                                    <td><div className="d-flex flex-column mt-2">
                                        <span>$120.03</span>

                                        <span> 6AM - 3PM</span>

                                    </div></td>
                                    {
                                        count == 3 ? null : <td style={{ cursor: "pointer" }}>
                                            <div className="dropdown">
                                                <div className="link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <u>{t('Employee.Bookings.Manage')}</u>  
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">View Caregiver Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Caregiver</a></li>
                                                    <li><a className="dropdown-item" href="#">Cancel Request</a></li>
                                                </ul>
                                            </div>


                                        </td>
                                    }


                                </tr>
                                <tr>

                                    <td><b className={count == 1 ? "accepted" : count == 2 ? "pending" : "cancelled"}>{count == 1 ? "Accepted" : count == 2 ? "Pending" : "Cancelled"}</b></td>
                                    <td><p>March 23, 2022</p>
                                        <div className="d-flex flex-column mt-2">
                                            <span>227 Rosewood Lane
                                            </span>
                                            <span>Vancouver, BC V6M 2K3</span>
                                        </div>
                                    </td>
                                    <td> {
                                        count == 2 ? <>
                                            <b className={count === 2 ? "pending" : ""}>Pending</b>
                                        </> : <>
                                            <p>Cindy Yan</p>
                                            <div className="d-flex flex-column mt-2">
                                                <span>604-123-4567</span>
                                                <span>Cindyy@mail.com</span>
                                            </div>
                                        </>}</td>
                                    <td><div className="d-flex flex-column mt-2">
                                        <span>$120.03</span>

                                        <span> 6AM - 3PM</span>

                                    </div></td>
                                    {
                                        count == 3 ? null : <td style={{ cursor: "pointer" }}>
                                            <div className="dropdown">
                                                <div className="link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <u>{t('Employee.Bookings.Manage')}</u>  
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">View Caregiver Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Caregiver</a></li>
                                                    <li><a className="dropdown-item" href="#">Cancel Request</a></li>
                                                </ul>
                                            </div>


                                        </td>
                                    }

                                </tr>
                                <tr>

                                    <td><b className={count == 1 ? "accepted" : count == 2 ? "pending" : "cancelled"}>{count == 1 ? "Accepted" : count == 2 ? "Pending" : "Cancelled"}</b></td>
                                    <td><p>March 23, 2022</p>
                                        <div className="d-flex flex-column mt-2">
                                            <span>227 Rosewood Lane
                                            </span>
                                            <span>Vancouver, BC V6M 2K3</span>
                                        </div>
                                    </td>
                                    <td > {
                                        count == 2 ? <>
                                            <b className={count === 2 ? "pending" : ""}>Pending</b>
                                        </> : <>
                                            <p>Cindy Yan</p>
                                            <div className="d-flex flex-column mt-2">
                                                <span>604-123-4567</span>
                                                <span>Cindyy@mail.com</span>
                                            </div>
                                        </>}</td>
                                    <td><div className="d-flex flex-column mt-2">
                                        <span>$120.03</span>

                                        <span> 6AM - 3PM</span>

                                    </div></td>
                                    {
                                        count == 3 ? null : <td style={{ cursor: "pointer" }}>
                                            <div className="dropdown">
                                                <div className="link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <u>{t('Employee.Bookings.Manage')}</u>  
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">View Caregiver Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Caregiver</a></li>
                                                    <li><a className="dropdown-item" href="#">Cancel Request</a></li>
                                                </ul>
                                            </div>


                                        </td>
                                    }

                                </tr>








                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Bookings