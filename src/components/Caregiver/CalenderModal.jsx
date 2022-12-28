import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation} from "react-i18next";


function CalenderModal(props) {
  const { show, setShow , ChangeAvailabilityDescription} = props;
  const {t}= useTranslation()
  return (
    <Modal className="delete_popup" show={show} {...props} size="lg" aria-labelledby="contained-modal-title-center" centered>
      <Modal.Body className='d-inline-flex align-items-center'>
        <div className="text-center w100p">
          {ChangeAvailabilityDescription.title && <h4>{ChangeAvailabilityDescription.title}</h4>}
          
          
         {ChangeAvailabilityDescription.body}
          <div className='group_buttons mt-5'>
         
            <Button variant="info" className='btn-lg'
              onClick={() => setShow(prev => !prev)}>{t('Caregiver.Calendar.CalendarPopUp.Confirm')}</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CalenderModal