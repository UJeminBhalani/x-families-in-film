import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AdditionalText from "./AdditionalText";
import { useTranslation } from "react-i18next";

const Rates = () => {
  const { t } = useTranslation();
  var additionalValue = `  Each Nanny is paid for a minimum of 4 consecutive hours, even if they are kept for fewer     
    An extra $2/hr per sibling after 3 siblings
    An extra $3/hr per additional child from a different family {friends/cousins)
    An additional $2/hr after midnight
    An additional $2/hr on statutory holidays
    The Nanny’s regylar rate x1.5 after the 8th hour of work
    The Nanny’s regular rate x2 after the 10th hour of work 

    Special Dates
   December 25th, Nanny’s base rate is doubled
   On New Year’s Eve starting at 5PM, the Nanny’s base rate is doubled
   Fees for additional siblings, children from a different family, and after midnight are also doubled on December 25 and after 5PM on December 31

 `;
  return (
    <>
      <div className="caregiver_profile_font required">
        {/* <Form.Label className="control-label control_label_text ">First Aid Qualification</Form.Label>
          <Form.Select
          
            type="select"
            defaultValue="Otto"
            className=" select"
          >
             <optgroup  className="drop_option">
             <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
    </optgroup>
           
  
    </Form.Select> */}
        <Form className="mt-3" noValidate>
      
           
              <div className="row">
                <div className="col-lg-4">
                  <Form.Label className="control-label control_label_text mt-3 ">
                    {t("Caregiver.Profile.Rates.FirstAid")}
                  </Form.Label>
                </div>
                <div className="col-lg-4">
                  <Form.Label className="control-label control_label_text">
                    {t("Caregiver.Profile.Rates.Police")}
                  </Form.Label>
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
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom03"
            >
              <Form.Label className="control-label control_label_text">
                {t("Caregiver.Profile.Rates.Style")}
              </Form.Label>
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option value="1">Personal</option>
                  <option selected value="2">
                    General
                  </option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom04"
            >
              <Form.Label className="control-label control_label_text">
                {t("Caregiver.Profile.Rates.Course")}
              </Form.Label>
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option selected value="1">
                    Physio
                  </option>
                  <option value="2">Babysitting</option>
                </optgroup>
              </Form.Select>
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
                {t("Caregiver.Profile.Rates.Days")}
              </Form.Label>
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option selected value="1">
                    10-30
                  </option>
                  <option value="2">31-50</option>
                  <option value="3">51-100</option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="4"
              controlId="validationCustom04"
            >
              <Form.Label className="control-label control_label_text">
                {t("Caregiver.Profile.Rates.DOD")}
              </Form.Label>
              <Form.Select type="select" className=" select">
                <optgroup className="drop_option">
                  <option selected value="1">
                    Yes
                  </option>
                  <option value="2">No</option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="required"
              as={Col}
              md="2"
              controlId="validationCustom04"
            >
              <Form.Label className=" control_label_text">
                {t("Caregiver.Profile.Rates.Rate")}
              </Form.Label>
              <Form.Control
                required
                type="text"
                className="update_employeer_input"
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
              <Form.Label className="control-label control_label_text">
                {t("Caregiver.Profile.Rates.Caregiver")}
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                className="update_employeer_input2"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="required"
              as={Col}
              md="12"
              controlId="validationCustom05"
            >
              <Form.Label className="control-label control_label_text">
                {t("Caregiver.Profile.Rates.Additional")}
              </Form.Label>
              {/* <Form.Control
                  required
                  as="textarea"
                value={additionalValue}
                  className="caregiver_additional" 
                >
           
                </Form.Control> */}
              <div className="caregiver_additional">
                <ul>
                  <li>
                    Each Nanny is paid for a minimum of 4 consecutive hours,
                    even if they are kept for fewer
                  </li>
                  <li>An extra $2/hr per sibling after 3 siblings</li>
                  <li>
                    An extra $3/hr per additional child from a different family
                    &#40;friends/cousins &#41;
                  </li>
                  <li> An additional $2/hr after midnight</li>
                  <li>An additional $2/hr on statutory holidays</li>
                  <li>
                    The Nanny’s regylar rate x1.5 after the 8th hour of work
                  </li>
                  <li> Special Dates </li>
                  <br />
                  <li> December 25th, Nanny’s base rate is doubled</li>
                  <li>
                    On New Year’s Eve starting at 5PM, the Nanny’s base rate is
                    doubled
                  </li>
                  <li>
                    Fees for additional siblings, children from a different
                    family, and after midnight are also doubled on December 25
                    and after 5PM on December 31
                  </li>
                </ul>
              </div>
            </Form.Group>
          </Row>
          {/* <Button type="submit" variant="info" className='btn-lg text-center' style={{float:"right"}}>Submit form</Button> */}
        </Form>
      </div>
    </>
  );
};

export default Rates;
