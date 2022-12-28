import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from 'react-i18next'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function UpdateUnion() {
    const [Fname, setFname] = useState('Tanjiro');
    const [Lname, setLname] = useState('Kamado');
    const [Uname, setUname] = useState('VFSUE');
    const [phoneNumber, setPhoneNumber] = useState('778-423-4124')
    const [email, setEmail] = useState('Johndoe@mail.com')
    const [validated, setValidated] = useState(false);

    const { t } = useTranslation();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="white_box manage_screen">
            <div className="heading_box mt-3">
                <h3 className='title_h3'>{t('Employer.Update_union.Update_union')}</h3>
                <h6>{t('Employer.Update_union.Description')}</h6>
            </div>
            <div className="employee-booking-cards">
                <Button className="update-union-detail-button w_100">{t('Employer.Update_union.Details')}</Button>

            </div>
            <Form
                className="mt-3"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Row className="mb-3">
                    <Form.Group
                        className="required"
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.First_name')}
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            className="update_employeer_input"
                            value={Fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                        {!Fname && <Form.Control.Feedback type="invalid">
                            {t('Admin.UpdateEmployeer.Details.Validations.Name')}
                        </Form.Control.Feedback>}

                    </Form.Group>
                    <Form.Group
                        className="required"
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.Last_name')}
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={Lname}
                            placeholder="Last name"
                            className="update_employeer_input"
                            onChange={(e) => setLname(e.target.value)}

                        />
                        {!Lname &&
                            <Form.Control.Feedback type="invalid">
                                {t('Admin.UpdateEmployeer.Details.Validations.LastName')}
                            </Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group
                        className="required"
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.Union_name')}

                        </Form.Label>
                        <Form.Control
                            required
                            value={Uname}
                            onChange={(e) => setUname(e.target.value)}
                            type="text"
                            placeholder="Last name"
                            className="update_employeer_input"
                        />
                        {!Uname &&
                            <Form.Control.Feedback type="invalid">
                                {t('Admin.UpdateEmployeer.Details.Validations.Union')}
                            </Form.Control.Feedback>}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                        className="required"
                        as={Col}
                        md="4"
                        controlId="validationCustom03"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.Email')}

                        </Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="mail@website.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="update_employeer_input"
                            required
                        />
                        {!email && 
                        <Form.Control.Feedback type="invalid">
                            {t('Admin.UpdateEmployeer.Details.Validations.Email')}
                            </Form.Control.Feedback> }
                    </Form.Group>
                    <Form.Group
                        className="required"
                        as={Col}
                        md="3"
                        controlId="validationCustom03"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.Phone_number')}

                        </Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="773-XXX-XXXX"
                            className="update_employeer_input"
                        />
                        {!phoneNumber && 
                        <Form.Control.Feedback type="invalid">
                            {t('Admin.UpdateEmployeer.Details.Validations.Phone')}
                            </Form.Control.Feedback> }
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                        className="required"
                        as={Col}
                        md="7"
                        controlId="validationCustom05"
                    >
                        <Form.Label className="control-label control_label_text">
                            {t('Employer.Update_union.Current_Production')}

                        </Form.Label>
                        <Form.Select type="select" className=" select">
                                <option value={''}>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button
                    type="submit"
                    variant="info"
                    className="btn-lg text-center"
                    style={{ float: "right" }}
                >
                    {t('Employer.Update_union.Confirm')}

                </Button>
            </Form>
        </div>
    )
}

export default UpdateUnion