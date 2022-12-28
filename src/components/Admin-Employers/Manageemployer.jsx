import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import Modal from "../shared/Modal";
import InviteLinkEmployee from "./inviteLinkEmployee";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  createinvite,
  delproductionlist,
  inviteproductions,
  productionlist,
  sendInvite,
  studiolist,
} from "../Services/https/Admin/Admin";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

import ReactPaginate from "react-paginate";
import { inviteSchema } from "../Services/validations";
import Loader from "../shared/Loader";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Pagination from "../shared/Pagination";

function Manageemployer() {
  const roleId = useSelector((role) => parseInt(role?.login?.role_data));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [popUp, setPopUp] = React.useState(false);
  const [del, setDel] = React.useState(false);
  const [invite, setInvite] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [prodMenu, setShowProdMenu] = React.useState(false);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [handlesearch, sethandleSearch] = useState(false);
  const [searchkeyword, setSearchkeyword] = useState("");
  const [totalcount, setTotalcount] = useState(null);
  const [deleterecord, setDeleteRecord] = useState([]);
  const [productions, setProductions] = useState([]);
  const [studios, setStudios] = useState([]);
  const [inviteprodList, setInviteProdList] = useState([]);
  const [initialpage, setInitialpage] = useState(1);
  const [link, setlink] = useState("");
  const [generate, setGenerate] = useState(false);
  const [linkgenerate, setLinkGenerate] = useState(false);

  const pageCount = Math.ceil(totalcount / 10);

  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      textAlign: "left",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      height: "50px",
      width: "100%",

      borderRadius: "8px",
      backgroundColor: "#FFFFFF",
    }),

    indicatorSeparator: () => {},
  };
  useEffect(() => {
    productionlist(sort, searchkeyword, 10, initialpage)
      .then((response) => {
        setProductions(response?.data?.data?.data);
        setTotalcount(response?.data?.data?.total);
        setLoading(false);
        setDeleteRecord([]);
      })
      .catch((error) => {
        return error;
      });
  }, [sort, initialpage, del, handlesearch]);

  useEffect(() => {
    studiolist()
      .then((response) => {
        setStudios(response?.data?.data);
      })
      .catch((error) => {
        return error;
      });
    inviteproductions()
      .then((response) => {
        setInviteProdList(response?.data?.data);
      })
      .catch((error) => {
        return error;
      });
  }, [popUp]);

  const recordstoDelete = (e, id) => {
    const records = [...deleterecord];
    if (e.target.checked) {
      records.push(id);
      setDeleteRecord(records);
    } else {
      const recs = records.filter((rec) => rec !== id);
      setDeleteRecord(recs);
    }
  };

  const inviteSchema = Yup.object().shape({
    studio: Yup.object().required(`${t("Validation.InviteModal.Required")}`),
    email: Yup.string()
      .email(`${t("Validation.InviteModal.Invalid_email")}`)
      .required(`${t("Validation.InviteModal.Required")}`),
    production: Yup.object().required(
      `${t("Validation.InviteModal.Required")}`
    ),
  });
  const formik = useFormik({
    initialValues: { email: "", studio: "", production: "" },
    validationSchema: inviteSchema,
    onSubmit: (values) => {
      const id = link.slice(48);
      const data = {
        id: id,
      };
      sendInvite(data)
        .then((response) => console.log(response))
        .catch((error) => {
          return error;
        });
    },
  });
  useEffect(() => {
    if (
      formik.values.email !== "" &&
      !formik?.errors.email &&
      formik.values.studio !== "" &&
      formik.values.production !== ""
    ) {
      const { studio, production, email } = formik?.values;
      const data = {
        email: email,
        production_name: production.value,
        studio_name: studio.value,
        role_id: 2,
      };
      createinvite(data)
        .then((response) => setlink(response?.data?.data), setGenerate(true))
        .catch((error) => {
          return error;
        });
    }
  }, [formik?.values]);
  const handleInputChange = (typedOption) => {
    setShowMenu(typedOption.length >= 3 ? true : false);
  };

  const handleProdInputChange = (typedOption) => {
    setShowProdMenu(typedOption.length >= 3 ? true : false);
  };

  const pageChange = (pageNum) => {
    setInitialpage(pageNum);
  };
 

  return (
    <>
      {show && (
        <Modal
          show={show}
          modalTitle={t("Admin.ManageEmployeer.Modal.Title")}
          description={
            t("Admin.ManageEmployeer.Modal.Heading.start") +
            deleterecord.length +
            t("Admin.ManageEmployeer.Modal.Heading.end")
          }
          setShow={setShow}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setShow((prev) => !prev)}
              >
                {t("Admin.ManageEmployeer.Modal.Cancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setShow((prev) => !prev);

                  delproductionlist(deleterecord)
                    .then((response) => {
                      setDel((prev) => !prev);
                    })
                    .catch((err) => {
                      return err;
                    });
                }}
              >
                {t("Admin.ManageEmployeer.Modal.Confirm")}
              </Button>
            </div>
          }
        />
      )}
      {del ? (
        <Modal
          modalTitle={t("Admin.ManageEmployeer.ModalDelAfter.Title")}
          show={del}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setDel((prev) => !prev);
                }}
              >
                {t("Admin.ManageEmployeer.ModalDelAfter.Done")}
              </Button>{" "}
            </div>
          }
        />
      ) : null}
      {popUp ? (
        <Modal
          show={popUp}
          modalTitle={t("Admin.ManageEmployeer.ModalGenerateInvite.Title")}
          field={
            <>
              <div className="text-center w100p font">
                <p style={{ textAlign: "center" }}>
                  {t("Admin.ManageEmployeer.ModalGenerateInvite.Heading")}
                </p>

                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 invitelink">
                      <div>
                        {t(
                          "Admin.ManageEmployeer.ModalGenerateInvite.Input2heading"
                        )}
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          value={formik.values.email}
                          class="form-control"
                          placeholder={t(
                            "Admin.ManageEmployeer.ModalGenerateInvite.Input2"
                          )}
                          name="email"
                          id="email"
                          aria-describedby="basic-addon1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.email && (
                        <div className="error">
                          {formik.touched.email && <>{formik.errors.email}</>}
                        </div>
                      )}
                      <div>
                        {t(
                          "Admin.ManageEmployeer.ModalGenerateInvite.Input3heading"
                        )}
                      </div>
                      <div className="input-group mb-3">
                        <Select
                          options={studios?.map((list, index) => ({
                            value: list?.studio_name,
                            label: list?.studio_name,
                          }))}
                          styles={CustomStyle}
                          name="studio"
                          id="studio"
                          value={formik.values.studio}
                          components={{ DropdownIndicator: () => null }}
                          loadingMessage={() => "Loading..."}
                          menuIsOpen={showMenu}
                          onInputChange={handleInputChange}
                          onChange={(option) => {
                            formik.setFieldValue("studio", option);
                          }}
                          onBlur={() => {
                            formik.setFieldTouched("studio", true);
                            setShowMenu(false);
                          }}
                          placeholder={
                            <div style={{ textAlign: "left" }}>
                              Enter Studio Name
                            </div>
                          }
                        />
                      </div>
                      {formik.errors.studio && (
                        <div className="error">
                          {formik.touched.studio && <>{formik.errors.studio}</>}
                        </div>
                      )}
                      <div>
                        {t(
                          "Admin.ManageEmployeer.ModalGenerateInvite.Input4heading"
                        )}
                      </div>
                      <div className="input-group mb-3">
                        <Select
                          options={inviteprodList?.map((list, index) => ({
                            value: list?.production_name,
                            label: list?.production_name,
                          }))}
                          styles={CustomStyle}
                          name="production"
                          id="production"
                          components={{ DropdownIndicator: () => null }}
                          value={formik.values.production}
                          menuIsOpen={prodMenu}
                          onInputChange={handleProdInputChange}
                          onChange={(option) => {
                            formik.setFieldValue("production", option);
                          }}
                          onBlur={() =>
                            formik.setFieldTouched("production", true)
                          }
                          placeholder={
                            <div style={{ textAlign: "left" }}>
                              Enter Production Name
                            </div>
                          }
                        />
                      </div>
                      {formik.errors.production && (
                        <div className="error">
                          {formik.touched.production && (
                            <>{formik.errors.production}</>
                          )}
                        </div>
                      )}
                      <div>
                        {/* onClick={()=>setGenerate(true)} */}
                        <div>
                          {t(
                            "Admin.ManageEmployeer.ModalGenerateInvite.Input1Heading"
                          )}{" "}
                          <button
                            className="generate"
                            disabled={generate === false ? true : false}
                            onClick={() => setLinkGenerate(true)}
                          >
                            {t(
                              "Admin.ManageEmployeer.ModalGenerateInvite.Generate"
                            )}
                          </button>
                        </div>
                      </div>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t(
                            "Admin.ManageEmployeer.ModalGenerateInvite.Input1"
                          )}
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={linkgenerate ? link : null}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="group_buttons mt-5">
                      <Button
                        variant="outline-info"
                        className="btn-lg"
                        onClick={() => {
                          setPopUp((prev) => !prev);
                          formik.resetForm(formik?.values);
                          setlink("");
                          setGenerate(false);
                          setLinkGenerate(false);
                        }}
                      >
                        {t("Admin.ManageEmployeer.ModalGenerateInvite.Cancel")}
                      </Button>
                      <Button
                        variant="info"
                        className="btn-lg"
                        type="submit"
                        onClick={() => {
                          // setPopUp((prev) => !prev);
                          // setInvite((prev) => !prev)
                          setGenerate(false);
                          setLinkGenerate(false);
                        }}
                      >
                        {t(
                          "Admin.ManageEmployeer.ModalGenerateInvite.SendInvite"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          }
        />
      ) : null}
      {invite ? (
        <Modal
          modalTitle={t("Admin.ManageEmployeer.ModalGenerateInviteAfter.Title")}
          show={invite}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setInvite((prev) => !prev);
                }}
              >
                {t("Admin.ManageEmployeer.ModalGenerateInviteAfter.Done")}
              </Button>{" "}
            </div>
          }
        />
      ) : null}
      {/* <InviteLinkEmployee generate={popUp} setGenerate={setPopUp} invite={setInvite} /> */}

      <div className="white_box manage_screen">
        <div className="title_box d-inline-flex w100p">
          <h3 className="title_h3">{t("Admin.ManageEmployeer.Title")}</h3>
          <div className="search_box d-flex ms-auto">
            {/* <form onSubmit={handleSubmit2}> */}
            <div className="search_box_in">
              <svg
                className="icon"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  sethandleSearch((prev) => !prev);
                  setLoading(true);
                }}
              >
                <path
                  d="M14.7507 16.3704C12.9139 17.7979 10.6024 18.4714 8.28671 18.2537C5.97106 18.0359 3.82543 16.9433 2.28669 15.1983C0.747957 13.4533 -0.068179 11.1871 0.00446449 8.86121C0.077108 6.5353 1.03307 4.32454 2.6777 2.67907C4.32232 1.0336 6.53196 0.0771475 8.85668 0.00446678C11.1814 -0.0682139 13.4464 0.748339 15.1905 2.28786C16.9346 3.82739 18.0267 5.97412 18.2443 8.29096C18.462 10.6078 17.7888 12.9205 16.362 14.7582L21.663 20.0421C22.1117 20.4894 22.1124 21.216 21.6645 21.6641C21.2166 22.1123 20.49 22.1119 20.0425 21.6633L14.7621 16.3704H14.7507ZM9.15107 16.0045C10.0515 16.0045 10.9431 15.827 11.775 15.4823C12.6069 15.1375 13.3628 14.6322 13.9995 13.9952C14.6362 13.3582 15.1412 12.6019 15.4858 11.7696C15.8304 10.9373 16.0077 10.0452 16.0077 9.14433C16.0077 8.24343 15.8304 7.35137 15.4858 6.51905C15.1412 5.68674 14.6362 4.93048 13.9995 4.29345C13.3628 3.65643 12.6069 3.15111 11.775 2.80636C10.9431 2.4616 10.0515 2.28416 9.15107 2.28416C7.33258 2.28416 5.58856 3.00692 4.30268 4.29345C3.01681 5.57998 2.29441 7.32489 2.29441 9.14433C2.29441 10.9638 3.01681 12.7087 4.30268 13.9952C5.58856 15.2817 7.33258 16.0045 9.15107 16.0045Z"
                  fill="#1D1D56"
                />
              </svg>
              <Form.Control
                type="text"
                placeholder={t("Admin.ManageEmployeer.Search")}
                onChange={(e) => setSearchkeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearchkeyword(e.target.value);
                    sethandleSearch((prev) => !prev);
                    setLoading(true);
                  }
                }}
              />
            </div>{" "}
            {/* // </form> */}
            &nbsp; &nbsp;
            <div className="manage_employeer_dropdown">
              {/* <DropdownButton
                id="dropdown-basic-button"
                title={t('Admin.ManageEmployeer.Dropdown.Title')}
              >
                <Dropdown.Item href="#/action-1" value={t('Admin.ManageEmployeer.Dropdown.Experience')}>{t('Admin.ManageEmployeer.Dropdown.Experience')}</Dropdown.Item>
                <Dropdown.Item href="#/action-2" value={t('Admin.ManageEmployeer.Dropdown.Union')} >{t('Admin.ManageEmployeer.Dropdown.Union')}</Dropdown.Item>
                <Dropdown.Item href="#/action-3" value={t('Admin.ManageEmployeer.Dropdown.Employee')} >{t('Admin.ManageEmployeer.Dropdown.Employee')}</Dropdown.Item>
              </DropdownButton> */}
              <select
                className="admin-dashboard-dropdown"
                name="Studio"
                id="Studio"
                selected="Studio"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="studio_name">
                  {t("Admin.EmployerRequests.Dropdown.Title")}
                </option>
                <option value="production_name">
                  {t("Admin.Dashboard.Dropdown.Production")}
                </option>

                <option value="first_name">
                  {t("Admin.Dashboard.Dropdown.First_name")}
                </option>
                <option value="last_name">
                  {t("Admin.Dashboard.Dropdown.Last_name")}
                </option>
              </select>
              <div>
                <Button
                  variant="outline-secondary"
                  onClick={() => setShow((prev) => !prev)}
                >
                  {deleterecord?.length} {t("Admin.ManageEmployeer.Selected")}
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
          {loading ? (
            <Loader />
          ) : (
            <>
              <thead>
                <tr>
                  <th width="50px"></th>
                  <th>{t("Admin.ManageEmployeer.Table.LastName")}</th>
                  <th>{t("Admin.ManageEmployeer.Table.FirstName")}</th>
                  <th>{t("Admin.ManageEmployeer.Table.Production")}</th>
                  <th>{t("Admin.ManageEmployeer.Table.Studio")}</th>
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
                </tr>
              </thead>
              <tbody>
                {productions?.map((list, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <Form.Check
                            key={`${list?.production_id}`}
                            className="custom_checkbox"
                            aria-label={`option-${list?.production_id}`}
                            name={`${list.id}`}
                            onClick={(e) => {
                              recordstoDelete(e, list?.user_id);
                            }}
                          />
                        </td>
                        <td>
                          <b>{list?.last_name}</b>
                        </td>
                        <td>
                          <b>{list?.first_name}</b>
                        </td>
                        <td>{list?.production_name}</td>
                        <td>{list?.studio_name}</td>
                        <td>
                          <a
                            className="link"
                            onClick={() =>
                              navigate(
                                `/admin/updateEmployer/${list.production_id}`
                              )
                            }
                          >
                            {t("Admin.ManageEmployeer.UpdateEmployeer")}
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </>
          )}
        </Table>

        <div className="d-flex justify-content-between ">
          <div>
            <Button
              className="btn-sm ms-0 ps-3 pe-3 me-4"
              onClick={() => navigate("/admin/employerRequests")}
              variant="outline-secondary"
            >
              <strong>2 {t("Admin.ManageEmployeer.RequestsPending")}</strong>
            </Button>

            <Button
              onClick={() => setPopUp((prev) => !prev)}
              className="btn-sm ms-0 ps-3 pe-3"
              variant="outline-secondary"
            >
              <strong>{t("Admin.ManageEmployeer.GenerateInvite")}</strong>
            </Button>

            <Button
              onClick={() => navigate("/admin/archive-employers")}
              className="btn-sm  ps-3 pe-3"
              style={{ float: "right" }}
              variant="outline-secondary"
            >
              <strong>{t("Admin.ManageCaregiver.Button")}</strong>
            </Button>
          </div>

          <div></div>
          <div>
            {productions?.length >= 1 ? (
              <Pagination
                initialpage={initialpage}
                onpage={pageChange}
                pageCount={pageCount}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manageemployer;
