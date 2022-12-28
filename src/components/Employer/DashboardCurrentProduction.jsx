import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Modal from "../shared/Modal";
import Select from 'react-select'

import DeleteEmployee from "./DeleteEmployee";
const CurrentProduction = () => {
  const { t } = useTranslation();
  const [shitchProduction, setSwitchProduction] = useState(false);
  const [markAsCompleteModal, setMarkAsCompleteModal] = useState(false);
  const [complete, setComplete] = useState(false);
  const options = [
    { value: 'Black Widow', label: 'Black Widow' },
    { value: 'Charlie and The Chocolate Factory', label: 'Charlie and The Chocolate Factory' },
    { value: 'Frogs Tales', label: 'Frogs Tales' }
  ]
  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      textAlign: "left"
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      height: '50px',

      borderRadius: '8px',
      backgroundColor: '#FFFFFF',

    }),
    indicatorSeparator: () => { },
  }

  return (
    <>
      <div className="current-production-header">
        <h5>Vancouver Film Studios:</h5>
        <h6>DEADPOOL 2</h6>
      </div>
      <div className="col float-end mt-2">
        <button
          className="show-manage ms-auto"
          onClick={() => setMarkAsCompleteModal(!markAsCompleteModal)}
        >
          {t("Employer.Dashboard.Mark_complete")}
        </button>
        <button
          onClick={() => setSwitchProduction(!shitchProduction)}
          className="show-manage ms-1"
        >
          {t("Employer.Dashboard.Switch")}
        </button>
      </div>
      {shitchProduction && (
        <Modal
          align='left'
          show={shitchProduction}
          onHide={() => setSwitchProduction(false)}
          setShow={setSwitchProduction}
          modalTitle={t("Employer.Dashboard.Switch_production_modal.Switch_production")}
          description={t("Employer.Dashboard.Production")}
          field={<>

            <Select options={options}
              styles={CustomStyle}
              
              placeholder={<div style={{ textAlign: "left" }}>Select Production</div>} />
          </>}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setSwitchProduction((prev) => !prev)}
              >
                {t("Employer.Add_employee.Delete_modal.Cancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setSwitchProduction((prev) => !prev);
                }}
              >
                {t("Employer.Add_employee.Delete_modal.Confirm")}
              </Button>
            </div>
          }
        />
      )}
      {markAsCompleteModal && (
        <Modal
          show={markAsCompleteModal}
          onHide={() => setMarkAsCompleteModal(false)}
          setShow={setMarkAsCompleteModal}
          modalTitle={t("Employer.Dashboard.Mark_production_complete_modal.Mark_complete")}
          component={<DeleteEmployee />}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setMarkAsCompleteModal(false)}
              >
                {t("Employer.Add_employee.Delete_modal.Cancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setMarkAsCompleteModal(false);
                  setComplete(true);
                }}
              >
                {t("Employer.Add_employee.Delete_modal.Confirm")}
              </Button>
            </div>
          }
        />
      )}

      {complete && (
        <Modal
          show={complete}
          onHide={() => setComplete(false)}
          setShow={setComplete}
          modalTitle={t("Employer.Dashboard.Complete_production_modal.Complete_production")}
          footer={
            <div className="group_buttons mt-5">
              <Button
                variant="outline-info"
                className="btn-lg"
                onClick={() => setComplete(false)}
              >
                {t("Employer.Add_employee.Delete_modal.Cancel")}
              </Button>
              <Button
                variant="info"
                className="btn-lg"
                onClick={() => {
                  setComplete(false);
                }}
              >
                {t("Employer.Dashboard.Complete_production_modal.Send_report")}
              </Button>
            </div>
          }
        />
      )}
    </>
  );
};

export default CurrentProduction;
