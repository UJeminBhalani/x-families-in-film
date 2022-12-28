import React, { useState, useEffect,useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { GetEmployerDetail, AdditionalUpdate } from "../../Services/https/Auth";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import Loader from "../../shared/Loader";
import {toast} from 'react-hot-toast'
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom'
// import "yup-phone";

const Additional = () => {
  const { t } = useTranslation();
  const [validate, setValidate] = useState(false);
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const phoneRegExp = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
  const additionalSchema = Yup.object().shape({
    billing_contact_firstname: Yup.string().required(
      `${t("UpdateSchema.Required")}`
    ).nullable(),
    billing_contact_lastname: Yup.string().required(
      `${t("UpdateSchema.Required")}`
    ).nullable(),
    billing_contact_email: Yup.string()
      .email(`${t("Admin.UpdateEmployeer.Details.Validations.Email")}`)
      .required(`${t("UpdateSchema.Required")}`).nullable(),
    billing_contact_phone: Yup.string()
      .matches(phoneRegExp,`${t('UpdateSchema.Phone')}`)
      .required(`${t("UpdateSchema.Required")}`).nullable(),
    billing_address: Yup.string().required(`${t("UpdateSchema.Required")}`).nullable(),
    operation_contacts: Yup.string().required(`${t("UpdateSchema.Required")}`).nullable(),
    accounting_contact: Yup.string().required(`${t("UpdateSchema.Required")}`).nullable(),
    affiliated_union: Yup.string().required(`${t("UpdateSchema.Required")}`).nullable(),
    affiliated_payroll_company: Yup.string().required(
      `${t("UpdateSchema.Required")}`
    ).nullable(),
  });
  

  useEffect(() => {
    GetEmployerDetail(id).then((response) => {
      console.log(response)
      setData(response.data.data);
      setLoader(false);
    });
  },[]);
  
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
        <Formik
          initialValues={{
            billing_contact_firstname: data?.billing_contact_firstname,
            billing_contact_lastname: data?.billing_contact_lastname,
            billing_contact_email: data?.billing_contact_email,
            billing_contact_phone: data?.billing_contact_phone,
            billing_address: data?.billing_address,
            operation_contacts: data?.operation_contacts,
            accounting_contact: data?.accounting_contact,
            affiliated_union: data?.affiliated_union,
            affiliated_payroll_company: data?.affiliated_payroll_company,
          }}
          validationSchema={additionalSchema}
          onSubmit={(values) => {
            const data = {
              billing_contact_firstname: values.billing_contact_firstname,
              billing_contact_lastname: values.billing_contact_lastname,
              billing_contact_email: values.billing_contact_email,
              billing_contact_phone: values.billing_contact_phone,
              billing_address: values.billing_address,
              operation_contacts: values.operation_contacts,
              accounting_contact: values.accounting_contact,
              affiliated_union: values.affiliated_union,
              affiliated_payroll_company: values.affiliated_payroll_company,
            };
           

            AdditionalUpdate(id,data).then((response) => {
                  
                  if(response.status === 200){
                    setLoader(false)
                    toast.success(`${t('Toast.Update')}`)
                    navigate(-1)
                  }

            }).catch((err)=>(
              toast.error(err)
            ))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.Billing")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="billing_contact_firstname"
                    placeholder="Name"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_contact_firstname}
                  />
                  {errors.billing_contact_firstname && (
                    <div className="error">
                      {touched.billing_contact_firstname && (
                        <>{errors.billing_contact_firstname}</>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-xl-3 required ">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.LastName")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="billing_contact_lastname"
                    placeholder="Last name"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_contact_lastname}
                  />
                  {errors.billing_contact_lastname && (
                    <div className="error">
                      {touched.billing_contact_lastname && (
                        <>{errors.billing_contact_lastname}</>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-4 required">
                  <Form.Label className="control-label control_label_text">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="billing_contact_email"
                    placeholder="Mail@website.com"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_contact_email}
                  />
                  {errors.billing_contact_email && (
                    <div className="error">
                      {touched.billing_contact_email && (
                        <>{errors.billing_contact_email}</>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.PhoneNumber")}
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="billing_contact_phone"
                    placeholder="773-XXX-XXXX"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_contact_phone}
                  />
                  {errors.billing_contact_phone && (
                    <div className="error">
                      {touched.billing_contact_phone && (
                        <>{errors.billing_contact_phone}</>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-7 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.BillingAddress")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="billing_address"
                    placeholder="Billing Address"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_address}
                  />
                  {errors.billing_address && (
                    <div className="error">
                      {touched.billing_address && <>{errors.billing_address}</>}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.Operations")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="operation_contacts"
                    placeholder="Contact name"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.operation_contacts}
                  />
                  {errors.operation_contacts && (
                    <div className="error">
                      {touched.operation_contacts && (
                        <>{errors.operation_contacts}</>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.Accounting")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="accounting_contact"
                    placeholder="Contact name"
                    className="update_employeer_input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.accounting_contact}
                  />
                  {errors.accounting_contact && (
                    <div className="error">
                      {touched.accounting_contact && (
                        <>{errors.accounting_contact}</>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.Affiliated")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="affiliated_union"
                    placeholder="union"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={data?.billing_contact_firstname}
                    className="update_employeer_input"
                  />
                  {errors.affiliated_union && (
                    <div className="error">
                      {touched.affiliated_union && (
                        <>{errors.affiliated_union}</>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Additional.AffiliatedPayload")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="affiliated_payroll_company"
                    placeholder="company name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="update_employeer_input"
                    defaultValue={data?.affiliated_payroll_company}
                  />
                  {errors.affiliated_payroll_company && (
                    <div className="error">
                      {touched.affiliated_payroll_company && (
                        <>{errors.affiliated_payroll_company}</>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="info"
                className="btn-lg"
                style={{ float: "right", textAlign: "center" }}
              >
                {t("Admin.UpdateEmployeer.Additional.Button")}
              </Button>
            </form>
          )}
        </Formik>
        </>
      )}
    </>
  );
};

export default Additional;
