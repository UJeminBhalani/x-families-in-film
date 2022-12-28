import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  GetEmployerDetail,
  GetUpdateProductionList,
  DetailUpdate,
  GetStudioList
} from "../../Services/https/Auth";
import Loader from "../../shared/Loader";
import { Formik } from "formik";
import * as Yup from "yup";

import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'


const Detail = () => {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [studio,setStudio]=useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const phoneRegExp = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/

  const updateSchema= Yup.object().shape({

    name: Yup.string().required(`${t('UpdateSchema.Required')}`),
    last_name: Yup.string().required(`${t('UpdateSchema.Required')}`),
    email: Yup.string().email(`${t("Admin.UpdateEmployeer.Details.Validations.Email")}`).required(`${t('UpdateSchema.Required')}`),
    phone: Yup.string().matches(phoneRegExp,`${t('UpdateSchema.Phone')}`).required(`${t('UpdateSchema.Required')}`),
  })

  useEffect(() => {

    GetEmployerDetail(id).then((response) => {
      setData(response.data.data);
      setLoader(false);
    });
    GetUpdateProductionList().then((response) => {
      setList(response.data.data);
    });
    GetStudioList().then((res)=>{
      console.log(res)
      setStudio(res.data.data)
    })
  }, []);
 
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Formik
          initialValues={{
            name: data?.production_manager_name,
            last_name: data?.last_name,
            email: data?.email,
            phone: data?.phone,
          }}
          validationSchema={updateSchema}
          onSubmit={(values) => {
              const data={
                name:values.name,
                last_name:values.last_name,
                email:values.email,
                phone:values.phone
              }
              setLoader(true)
              DetailUpdate(id,data).then((response) => {
                
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row mb-3 mt-3">
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Details.Production")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="First name"
                    className="update_employeer_input"
                    defaultValue={data?.production_manager_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                    {errors.name && <div className="error">
                        {touched.name && <>{errors.name}</>}</div>}
                </div>
                <div className="col-xl-3 required">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Details.LastName")}
                  </Form.Label>
                  <Form.Control
                  
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    className="update_employeer_input"
                    defaultValue={data?.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                    {errors.last_name && <div className="error">
                        {touched.last_name && <>{errors.last_name}</>}</div>}
                </div>
              </div>
              <div className="row mb-3 required">
                <div className="col-xl-4">
                  <Form.Label className="control-label control_label_text">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="mail@website.com"
                    className="update_employeer_input"
                    defaultValue={data?.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <div className="error">
                        {touched.email && <>{errors.email}</>}</div>}
                </div>
                <div className="col-xl-3">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Details.PhoneNumber")}
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="773-XXX-XXXX"
                    defaultValue={data?.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="update_employeer_input"
                  />
                   {errors.phone && <div className="error">
                        {touched.phone && <>{errors.phone}</>}</div>}
                </div>
              </div>
              <div className="row mb-3 required">
                <div className="col-xl-7">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Details.CurrentProduction")}
                  </Form.Label>
                  <Form.Select type="select" className=" select">
                    {list?.map((items, index) => {
                      return (
                        <optgroup className="drop_option">
                          <option
                            value={items}
                            key={index}
                            selected={
                              data?.current_production ===
                              items?.production_name
                            }
                          >
                            {items?.production_name}
                          </option>
                        </optgroup>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <div className="row mb-3 required">
                <div className="col-xl-7">
                  <Form.Label className="control-label control_label_text">
                    {t("Admin.UpdateEmployeer.Details.CurrentStudio")}
                  </Form.Label>
                  <Form.Select type="select" className=" select">
                    {studio?.map((items, index) => {
                      return (
                        <optgroup className="drop_option">
                          <option
                            value={items}
                            key={index}
                            selected={
                              data?.studio_name ===
                              items?.studio_name
                            }
                          >
                            {items?.studio_name}
                          </option>
                        </optgroup>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <Button
                type="submit"
                variant="info"
                className="btn-lg text-center"
                style={{ float: "right" }}
              >
                {t("Admin.UpdateEmployeer.Details.Button")}
              </Button>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Detail;
