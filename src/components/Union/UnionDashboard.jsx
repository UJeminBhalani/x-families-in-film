import React from 'react'
import { useState } from 'react'
import Dashboard from '../shared/Dashboard'
import EmployeCard from '../Employer/EmployeeCard'
import EmployeeHide from '../Employer/EmployeeHide'
import Contacts from './contacts'
import EmpFunding from '../Employee/dashboard/main/funding'
import { useTranslation } from 'react-i18next'
import EmpProduction from '../Employee/dashboard/main/productions'
function UnionDashboard() {
    const [showEmployeeCard, setShowEmployeeCard] = useState(true)
    const [show, setShow] = useState(true)
    const { t } = useTranslation()
    const handelHideAndShow = () => {
        setShow(!show)
    }
    return (
        <div className="dashboard_screen">
            <h3 className='title_h3'>{t('Union.Dashboard.Welcome')}, <span>John Doe</span></h3>
            <div className="row">
                <div className='col-xl-6 col-sm-12'>
                    <div className="row">
                        <Dashboard text_decorator='true'  title={t('Union.Dashboard.Current_production')} component={<EmpProduction />} />
                    </div>
                    <div className="row">
                        <div className="dashboard_screen">
                            <div className='white_box'>
                                <div className="employee-union-cards">
                                    <h4 className="title_h4_line"><span>{t('Union.Dashboard.Emp_in_prod')}</span> </h4>
                                    {showEmployeeCard && <div className="employee-card">
                                        {show ? <EmployeCard /> :
                                            <EmployeeHide />}
                                    </div>}

                                </div>
                                <div className='col mt-2 float-end'>
                                    {showEmployeeCard && <button onClick={() => { handelHideAndShow() }} className="show-manage ms-auto">
                                        {show ? <> {t('Union.Dashboard.Hide')} </> : <>{t('Union.Dashboard.Show')}</>}
                                    </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-sm-12'>
                    <div className="row">
                        <Dashboard text_decorator='true' title={t('Union.Dashboard.Current_funding')} component={<EmpFunding />} />
                    </div>
                    <div className="row">
                        <Dashboard text_decorator='false' title={t('Union.Dashboard.Key_contacts')}component={< Contacts />} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UnionDashboard