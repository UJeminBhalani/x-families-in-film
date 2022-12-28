import React, { useState } from "react";
import image1 from "../Images/funding-meter.svg";
import user1 from "../Images/user-01.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductionFunding from "./ProductionFunding"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminProductionFocused = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <h3
        className="title_h3"
        style={{ paddingLeft: "15px" }}
        onClick={() => navigate(-1)}
      >
        &lt; Diary of a Wimpy Kid
      </h3>
      <div className="row ms-0 me-0 mt-3">
        <div className="col-xl-3 col-sm-12">
          <div className="white_box">
            <div className="heading_box adminDashboard">
              <h5 className="title_h5_line">
                {t("Admin.ProductionFocused.Overview")}
              </h5>
              <h5>
                <strong>{t("Admin.ProductionFocused.ProductManager")}:</strong>{" "}
              </h5>
              <h6>Erwin Smith</h6>
              <h5>
                <strong>{t("Admin.ProductionFocused.ProductManager")}:</strong>
              </h5>
              <h6>Erwin Smith</h6>
              <h5>
                <strong>{t("Admin.ProductionFocused.ProductManager")}:</strong>
              </h5>
              <h6>Erwin Smith</h6>{" "}
              <h5>
                <strong>{t("Admin.ProductionFocused.ProductManager")}:</strong>
              </h5>
              <h6>Erwin Smith</h6>{" "}
              <h5>
                <strong>{t("Admin.ProductionFocused.ProductManager")}:</strong>
              </h5>
              <h6>Erwin Smith</h6>{" "}
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-sm-12">
          <div className="white_box employess_in_production">
            <h3 className="title_h5_line">
              {t("Admin.ProductionFocused.Employees")}
            </h3>

            {show ? (
              <>
                <div className="row employers_box employers_box_kids">
                  <div className="col-xl-4">
                    <ul className="productions_list">
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>{" "}
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4">
                    <ul className="productions_list">
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>{" "}
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4">
                    <ul className="productions_list">
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>{" "}
                      <li>
                        <img src={user1} alt="" />
                        <div className="d-inline-flex w100p">
                          <h5>Tanjiro Kamado</h5>
                          <h6>{t("Admin.ProductionFocused.Role")}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div
                    className="d-inline-flex w100p page_footer"
                    style={{ justifyContent: "end" }}
                  >
                    <div className="hide"
                      onClick={() => setShow((prev) => !prev)} >
                      {" "}
                      {/* <h6
                        className="hide"
                        onClick={() => setShow((prev) => !prev)}
                      > */}
                      {/* {t('Admin.ProductionFocused.Hide')} */}
                      {/* </h6> */}
                      {/* <span>
                        <ul className="page_navi custom_pagination">
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
                            <a href="#">1</a>
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
                      </span>
                    </div>
                  </div>  */}
                  {/* <button onClick={()=>setShow(prev=>!prev)}>Hide</button> */}
                </div>
                <div
                  className="show_text custom_pagination me-5"
                  onClick={() => setShow((prev) => !prev)}
                >
                  {t("Admin.ProductionFocused.Hide")}
                </div>
                <span>
                  <ul className="page_navi custom_pagination">
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
                      <a href="#">1</a>
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
                </span>
              </>
            ) : (
              <>
                <div className="row employers_box p-4 employers_box_ed-kids">
                  <ul className="productions_list  justify-content-evenly">
                    <li>
                      <img src={user1} alt="" />
                      <div className="d-inline-flex w100p">
                        <h5>Tanjiro Kamado</h5>
                        <h6>{t("Admin.ProductionFocused.Role")}</h6>
                      </div>
                    </li>
                    <li>
                      <img src={user1} alt="" />
                      <div className="d-inline-flex w100p">
                        <h5>Tanjiro Kamado</h5>
                        <h6>{t("Admin.ProductionFocused.Role")}</h6>
                      </div>
                    </li>{" "}
                    <li>
                      <img src={user1} alt="" />
                      <div className="d-inline-flex w100p">
                        <h5>Tanjiro Kamado</h5>
                        <h6>{t("Admin.ProductionFocused.Role")}</h6>
                      </div>
                    </li>
                  </ul>
                  <div className="row d-flex justify-content-center f-size-18 emp_text">
                    {t("Admin.ProductionFocused.EmployeeHeading")}
                    <br></br>{" "}
                    {t("Admin.ProductionFocused.EmployeeHeadingBreak")}
                  </div>
                </div>

                <div
                  className="show_text custom_pagination me-5"
                  onClick={() => setShow((prev) => !prev)}
                >
                  {t("Admin.ProductionFocused.Show")}
                </div>
                <span>
                  <ul className="page_navi custom_pagination">
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
                      <a href="#">1</a>
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
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="row ms-0 me-0 mt-4">
        <div className="col-xl-7 col-sm-12">
          <div className="white_box ">
            <div>
              <ProductionFunding />
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-sm-12">
          <div className="white_box">
            <div className="heading_box focused">
              <h5 className="title_h3_line">
                {t("Admin.ProductionFocused.Contributions")}
              </h5>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Union 22</option>
                  <option value="1">Union 23</option>
                  <option value="2">Union 24</option>
                  <option value="3">Union 25</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="contributions_div">$10,000.00</div>
              </div>

              <div className="Employeer mt-4 ">
                {t("Admin.ProductionFocused.Employeer")}
              </div>
              <div className="contributions_div mt-4">$5,000.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductionFocused;
