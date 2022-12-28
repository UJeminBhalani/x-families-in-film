import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { useTranslation} from 'react-i18next'

const UpdateCaregiver = () => {
  const [fname, setFname] = useState(null);
  const [fname2, setFname2] = useState(null);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);
  const [validate, setValidate] = useState(false);
  const {t}=useTranslation();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidate(true);
  };

  return (
    <div className="white_box manage_screen additional">
      <div className="title_box d-inline-flex w100p">
        <h3 className="title_h3">{t('Admin.UpdateCaregiver.Title')}</h3>
      </div>

      <p style={{ fontSize: "18px", fontWeight: "400" }}>
      {t('Admin.UpdateCaregiver.Edit')}
      </p>

      <div className="row">
        <div className="col-xl-5 mb-3">
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className={show ? "active" : ""}
                onClick={() => setShow(true)}
              >
                {t('Admin.UpdateCaregiver.Detail.Title')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={() => setShow(false)}>
              {t('Admin.UpdateCaregiver.Qualifications.Title')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      {show ? (
        <Form
          className="mt-3"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3 pt-3">
            <Form.Group
              className="required me-2"
              as={Col}
              md="4"
              controlId="validationCustom01"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.FirstName')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Kazami"
                className="update_employeer_input"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              {/* <Form.Control.Feedback></Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom02"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.LastName')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="update_employeer_input"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 pt-3">
            <Form.Group
              className="required me-2"
              as={Col}
              md="5"
              controlId="validationCustom03"
            >
              <Form.Label className="control-label control_label_text">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="mail@website.com"
                className="update_employeer_input"
                required
              />
              {
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              }
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom04"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.PhoneNumber')}
              </Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="773-XXX-XXXX"
                defaultValue="Otto"
                className="update_employeer_input"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 pt-3">
            <Form.Group
              className="required me-2"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.Address')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="update_employeer_input"
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group
              className="required me-2"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.City')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="update_employeer_input"
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group
              className="required code_cont"
              as={Col}
              md="2"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text ">
              {t('Admin.UpdateCaregiver.Detail.Postal')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="update_employeer_input"
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Row>
          <Row className="mb-3 pt-3">
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Detail.Primary')}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="update_employeer_input"
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Row>
          <Button
            type="submit"
            variant="info"
            className="btn-lg text-center w_100"
            style={{ float: "right" }}
          >
            {t('Admin.UpdateCaregiver.Button')}
          </Button>
        </Form>
      ) : (
        <Form
          className="mt-3"
          noValidate
          validated={validate}
          onSubmit={handleSubmit2}
        >
           <div className="row">
                <div className="col-lg-4">
                  <Form.Group className='control-label required control_label_text'>
                  <Form.Label className="control-label required control_label_text mt-3">
                    {t("Caregiver.Profile.Rates.FirstAid")}
                  </Form.Label>
                  </Form.Group>
                </div>
                <div className="col-lg-4">
                <Form.Group className='control-label required control_label_text'>
                  <Form.Label className="control-label control_label_text">
                    {t("Caregiver.Profile.Rates.Police")}
                  </Form.Label>
                  </Form.Group>
                </div>
              </div>
           <div className="row mb-3">
           <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom01"
            >
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option selected value="1">
                    Bachelor
                  </option>
                  <option value="2">Masters</option>
                  <option value="3">Honors</option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom02"
            >
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option value="1">Yes</option>
                  <option selected value="2">
                    No
                  </option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            </div>
          <Row className="mb-3">
            <Form.Group
              className="required me-2"
              as={Col}
              md="4"
              controlId="validationCustom03"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Qualifications.Style')}
              </Form.Label>
              <Form.Select type="select" placeholder="" required>
              <option >Personal</option>
                <option selected>General</option>
            
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom04"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Qualifications.Course')}
              </Form.Label>
              <Form.Select required type="text">
              <option selected>Physio</option>
                <option>Babysitting</option>
               
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="required me-2"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Qualifications.Days')}
              </Form.Label>
              <Form.Select
                required
                type="select"

                //   className="update_employeer_input"
              >
                <option selected>10-30</option>
                <option>31-50</option>
                <option>51-100</option>
                
              </Form.Select>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Qualifications.DOD')}
              </Form.Label>
              <Form.Select required type="select">
              <option selected>Yes</option>
                <option>No</option>
              </Form.Select>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom06"
            >
              <Form.Label className="control-label control_label_text">
              {t('Admin.UpdateCaregiver.Qualifications.Rate')}
              </Form.Label>
              <Form.Select required type="select">
              <option selected>$10/hr</option>
                <option>$20/hr</option>
                <option>$30/hr</option>
                <option>$40/hr</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button
            type="submit"
            variant="info"
            className="btn-lg w_100"
            style={{ float: "right", textAlign: "center" }}
          >
            {t('Admin.UpdateCaregiver.Button')}
          </Button>
        </Form>
      )}
    </div>
  );
};

export default UpdateCaregiver;
