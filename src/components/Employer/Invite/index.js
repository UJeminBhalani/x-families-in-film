import React from 'react';
import { useTranslation } from 'react-i18next'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Invite(props) {
    const { show, setShow, InviteDescription } = props
    const { t } = useTranslation()
    return (
        <Modal className="delete_popup"
            show={show} {...props} size="lg"
            aria-labelledby="contained-modal-title-center" centered>
            <Modal.Body className='d-inline-flex align-items-center'>
                <div className="text-center w100p">
                    {InviteDescription.heading && <h4>{InviteDescription.heading}</h4>}
                    {InviteDescription.headin_two && <p style={{ textAlign: "center" }}>{InviteDescription.headin_two}</p>
                    }
                    {InviteDescription.body}
                    <div className='group_buttons mt-5'>
                        <Button variant='outline-info' className='btn-lg'
                            onClick={() => {
                                setShow(prev => !prev)
                            }}>{t('Employer.Manage_union.Generate_link_modal.Close')}</Button>
                        <Button variant="info" className='btn-lg'
                            onClick={() => setShow(prev => !prev)}>{t('Employer.Manage_union.Generate_link_modal.Send_invite_footer')}</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Invite