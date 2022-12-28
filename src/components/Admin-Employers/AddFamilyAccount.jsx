
import React from "react";
import { useState } from "react";
import {useTranslation} from "react-i18next"
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import Modal from "../shared/Modal";
import Button from "react-bootstrap/Button";

import FamilyLogo from '../Images/icon-park-solid_family.png'

const AddFamilyAccount = () => {

  const {t}= useTranslation()

  const navigation = useNavigate()

  const navigate = (address) =>{
    navigation(`${address}`)
  }

const [show,setShow]=useState(false);
  return (
    <div>
      <div className="fundingOverview_main">
      

    <div className="row  ">
      <div className="col-sm-2 profile-pic mt-3"></div>
      <div className="col-sm-2 profile-pic-text mt-3">{t('Employer.Add_employee.profile_photo')}</div>
    </div>
    <Form className="form_control">
      <div className="row mt-5">
        <div className="col-sm-4">
          <Form.Group className="form-group" controlId="formBasicFirstName">
            <Form.Label>{t('Employer.Add_employee.First_name')}</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>
        </div>
        <div className="col-sm-4">
          <Form.Group className="form-group" controlId="formBasicLastName">
            <Form.Label>{t('Employer.Add_employee.Last_name')}</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5">
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Label>{t('Employer.Add_employee.Email')}</Form.Label>
            <Form.Control type="text" placeholder="Johndoe@mail.com" />
          </Form.Group>
        </div>
        <div className="col-sm-4">
          <Form.Group className="form-group" controlId="formBasicPhone">
            <Form.Label>{t('Employer.Add_employee.Phone')}</Form.Label>
            <Form.Control type="text" placeholder="778-423-4124" />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Label>{t('Employer.Add_employee.Current_production')}</Form.Label>
            <Form.Select
              className="form-control"
              aria-label="Diary of a Wimpy Kid"
            >
              <option disabled selected>
                Diary of a Wimpy Kid
              </option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Form.Group className="form-group" controlId="formBasicFirstName">
            <Form.Label>{t('Employer.Add_employee.Studio')}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vancouver Film Studios"
            />
          </Form.Group>
        </div>
        <div className="col-sm-4">
          <Form.Group className="form-group" controlId="formBasicLastName">
            <Form.Label>{t('Employer.Add_employee.Role')}</Form.Label>
            <Form.Control type="text" placeholder="Director" />
          </Form.Group>
        </div>
      </div>
     
      <div className="row mt-4">
        <div className="col-lg-6 mb-4">
        <Button variant="info" className="btn-family mt-0 w_100" onClick={()=>navigate('/employer/addemploye')}>
        {t('Employer.Add_employee.Create_individual_account')}
        </Button>
        </div>
        <div className="col-lg-6 buttons_col">
          <button className="btn btn-individual btn-delete me-2" type='button' onClick={()=>setShow(prev=>!prev)}>{t('Employer.Add_employee.Delete')}</button>
          <button className="btn btn-individual btn-add" type='button'>{t('Employer.Add_employee.Add')}</button>
        </div>
      </div>
      
      <Modal show={show} modalTitle={t('Employer.Add_employee.Delete_modal.Confirmation')} description={`${t('Employer.Add_employee.Delete_modal.Delete_user')} 'John Doe' ${t('Employer.Add_employee.Delete_modal.Delete_list')}.`} setShow={setShow}     footer={
        <div className="group_buttons mt-2">
          <Button
            variant="outline-info"
            className="btn-lg"
            onClick={() => setShow((prev) => !prev)}
          >
            {t('Employer.Add_employee.Delete_modal.Cancel')}
          </Button>
          <Button
            variant="info"
            className="btn-lg"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {t('Employer.Add_employee.Delete_modal.Confirm')}
          </Button>
        </div>
      }/>
    </Form>
  </div>
</div>
  );
};

export default AddFamilyAccount;