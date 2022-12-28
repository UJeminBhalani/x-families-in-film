import React from 'react'
import { useTranslation } from 'react-i18next'
import User01 from '../Images/user-02.png'

function EmployeeHide() {
    const {t}= useTranslation()
    return (
        <div className="Hide-employee">
            <div className='row mt-3'>
                <div className="employers_box col-sm-6">
                    <ul className="productions_list">
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">

                                <h5>{t('Employer.Dashboard.Employee')} #1</h5>
                                <h6>{t('Employer.Dashboard.Role')}</h6>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="employers_box col-sm-6">
                    <ul className="productions_list">
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                                <h5>{t('Employer.Dashboard.Employee')} #2</h5>
                                <h6>{t('Employer.Dashboard.Role')}</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hide-description">
                <h6>
                {t('Employer.Dashboard.Employees_hidden')}
                </h6>
            </div>
        </div>
    )
}

export default EmployeeHide