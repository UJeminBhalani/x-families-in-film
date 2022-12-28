import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import image from "../../Images/profile.svg";
import { useTranslation} from 'react-i18next'

const Personal = (props) => {
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }; 
  const {t}=useTranslation()
  return (
    <>
      <div className="caregiver_profile_font row">
        <div className="col-xl-8 profile_form">
          <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit} >
            {/* <div as={Col} md="8"> */}
            <Row className="mb-3">
              <Form.Group
                className="required"
                as={Col}
                md="6"
                controlId="validationCustom01"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.FirstName')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Kazami"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
              <Form.Group
                className="required"
                as={Col}
                md="6"
                controlId="validationCustom02"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.LastName')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Torika"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="required"
                as={Col}
                md="6"
                controlId="validationCustom03"
              >
                <Form.Label className="control-label control_label_text">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="johdoe@mail.com"
                  className="update_employeer_input"
                  disabled={!props.show}
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
                md="6"
                controlId="validationCustom04"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.PhoneNumber')}
                </Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="773-XXX-XXXX"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="required"
                as={Col}
                md="12"
                controlId="validationCustom05"
              >
                <Form.Label className="control_label_text">
                {t('Caregiver.Profile.Personal.Biography')}
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Last name"
                  className="update_employeer_input2"
                  disabled={!props.show}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio
                  mattis.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis.
                </Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="required"
                as={Col}
                md="5"
                controlId="validationCustom02"
              >
                <Form.Label className="control_label_text">{t('Caregiver.Profile.Personal.Address')}</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="123 Breddock Ave Unit 231"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
              <Form.Group
                className="required"
                as={Col}
                md="3"
                controlId="validationCustom02"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.Postal')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="V3K 2K7"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>{" "}
              <Form.Group
                className="required"
                as={Col}
                md="2"
                controlId="validationCustom02"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.Province')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="BC"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>{" "}
              <Form.Group
                className="required"
                as={Col}
                md="2"
                controlId="validationCustom02"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.Country')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Canada"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                className="required"
                as={Col}
                md="12"
                controlId="validationCustom02"
              >
                <Form.Label className="control-label control_label_text">
                {t('Caregiver.Profile.Personal.Password')}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="**********************"
                  className="update_employeer_input"
                  disabled={!props.show}
                />
              </Form.Group>
            </Row>
          </Form>
        </div>

        <div className="col-xl-4 pt-3 avatar_section ">
          <div className="">
            <div>
              <h6 className="control_label_text pb-2">{t('Caregiver.Profile.Personal.ProfilePicture')}</h6>
              <img src={image} />
              <h6 className="caregiver_profile_text pt-2">
              {t('Caregiver.Profile.Personal.ChangePhoto')}
              </h6>
            </div>
            <div className="pass_cont">
              
              <p>{t('Caregiver.Profile.Personal.ChangePassword')}</p>
            

            </div>
            {/* <div className=" d-flex flex-column profile_picture">
   <h6 className="control_label_text pb-2">Profile Picture </h6>     
   <img src={image}/>
   <h6 className="caregiver_profile_text pt-2">Change Profile Photo</h6>
   
   </div>
   
   <div > Change Password</div>   */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
