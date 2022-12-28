import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalDialog(props) {
  const {
    show,
    modalTitle,
    setShow,
    showResend,
    setShowResend,
    setShowResetConfirmation,
    description,
    field,
    align,
    component,
    accept_description,
    footer,
    showCancel,
    setShowCancel,
    setSignUpSuccessfull
  } = props;
  return (
    <>
      <Modal
        className="delete_popup"
        show={show}
        showCancel={showCancel}
        setShowResetConfirmation={setShowResetConfirmation}
        setSignUpSuccessfull={setSignUpSuccessfull}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Body className="d-inline-flex ">
          <div
            className={`w100p ${
              align === "left" ? `text-left` : `text-center`
            } `}
          >
            {modalTitle && <h4>{modalTitle}</h4>}
            {/* <br /> */}
            {accept_description ? accept_description.body : null}
            <div className={`w100p ${align === "left" ? `d-flex` : null} `}>
              {" "}
              {description && <p>{description}</p>}
            </div>
            <br />
            {field ? field : null}

            {footer}
            {accept_description ? accept_description.footer : null}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDialog;
