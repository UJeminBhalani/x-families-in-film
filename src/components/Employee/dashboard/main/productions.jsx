import React, { useState } from "react";

import Select from 'react-select'

import Button from "react-bootstrap/Button";

import Modal from "../../../shared/Modal";
import { useTranslation } from "react-i18next";



const EmpProduction = () => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()
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
      <p>Vancouver Film Studios:</p>
      <div className="d-flex justify-content-between">
        <p>Coda</p>
        <span style={{ cursor: "pointer" }} onClick={() => setShow(!show)}><u>{t('Union.Dashboard.Switch')}</u></span>
      </div>
      {show && <Modal onHide={() => setShow(false)} show={show} setShow={setShow}
        align="left" modalTitle="Switch Production" description="Production"
        field={<>

          <Select options={options}
            styles={CustomStyle}
            placeholder={<div style={{ textAlign: "left" }}>Select Production</div>} />
        </>}
        footer={
          <div className="group_buttons mt-5">
            <Button
              variant="outline-info"
              className="btn-lg btn-mb-18"
              onClick={() => setShow((prev) => !prev)}
            >
              Cancel
            </Button>
            <Button
              variant="info"
              className="btn-lg"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              Confirm
            </Button>
          </div>}
      />
      }
    </>
  )
}

export default EmpProduction