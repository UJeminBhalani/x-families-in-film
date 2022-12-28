import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Detail from "./Detail";
import Additional from "./Additional";
import { useTranslation } from "react-i18next";

const UpdateEmployer = () => {
  const [accepted, setAccepted] = useState(false);
  const [pending, setPending] = useState(true);
  const [initial,setInitial] = useState(true)
  const { t } = useTranslation();

  return (
    <div className="white_box manage_screen">
      <div className="title_box d-inline-flex w100p">
        <h3 className="title_h3">{t("Admin.UpdateEmployeer.Title")}</h3>
      </div> 
      <p style={{ fontSize: "18px", fontWeight: "400" }}>
        {t("Admin.UpdateEmployeer.EditDetail")}
      </p>
      
      <div className="employee-booking-cards">
        <div className="row ">
          <div className="col-xl-3">
            <Button
              onClick={() => {
                setPending(true);
                setAccepted(false);
              }}
              
            >
              {t("Admin.UpdateEmployeer.Details.Title")}
            </Button>
          </div>
          <div className="col-xl-3">
            <Button
              onClick={() => {
                setPending(false);
                setAccepted(true);
                setInitial(false)
              }}
            >
              {t("Admin.UpdateEmployeer.Additional.Title")}
            </Button>
          </div>
        </div>
      </div>
      {accepted && <Additional />}
      {pending && <Detail />}
    </div>
  );
};

export default UpdateEmployer;
