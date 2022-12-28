import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function InviteLinkEmployee(props) {
  const { generate, setGenerate,setInvite } = props;
  return (
    <Modal
      className="delete_popup"
      show={generate}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Body className="d-inline-flex align-items-center">
        <div className="text-center w100p font">
          <p style={{ textAlign: "center" }}>
            Here is your one time generated sign up link
          </p>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-8 invitelink">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="invite.link_newemployer/production"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>Send invite to:</div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email@emailaddress.com"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>Studio:</div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Studio Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>Production:</div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Production Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="group_buttons mt-5">
            <Button
              variant="outline-info"
              className="btn-lg"
              onClick={() => setGenerate((prev) => !prev)}
            >
              Cancel
            </Button>
            <Button
              variant="info"
              className="btn-lg"
              onClick={() => {setGenerate((prev) => !prev);
              setInvite((prev) => !prev)}}
            >
              Send Invite
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default InviteLinkEmployee;
