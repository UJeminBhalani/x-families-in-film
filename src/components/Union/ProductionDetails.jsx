import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import EmployeeHide from '../Employer/EmployeeHide'
import Dashboard from '../shared/Dashboard'
import Overview from './Overview'
import StyleOfCare from './StyleOfCare'
import UnionCards from './UnionCards'
import UnionHide from './UnionHide'
import UnionProduction from './UnionProduction'

function ProductionDetails() {
  const navigate = useNavigate()
  const {t}=useTranslation()
  const [showEmployeeCard, setShowEmployeeCard] = useState(true)
  const [show, setShow] = useState(true)
  const handelHideAndShow = () => {
    setShow(!show)
  }
  return (
    <>
      <div className="d-flex align-items-baseline">
        <svg onClick={() => { navigate(-1) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left ms-2" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg >
        <p className="title_h3 ms-4">Fantastic Four
        </p>
      </div>
        <Dashboard title={t('Union.Production_detail.Studio')} component={<UnionProduction />} />
      <div className="row">
        <div className='col-xl-8 col-sm-12'>
          <div className="dashboard_screen">
            <div className='white_box'>
              <div className="employee-union-cards">
                <h4 className="title_h4_line"><span>{t('Union.Production_detail.Emp_in_prod')}</span> </h4>
                {showEmployeeCard && <div className="employee-card">
                  {show ? <UnionCards /> :
                    <UnionHide />}

                </div>}

              </div>
              <div className='col mt-2 float-end'>
                {showEmployeeCard && <button onClick={() => { handelHideAndShow() }} className="show-manage ms-auto">
                  {show ? <>{t('Union.Production_detail.Hide')}</> : <>{t('Union.Production_detail.Show')}</>}
                </button>}

              </div>
            </div>
          </div>

        </div>
        <div className='col-xl-4 col-sm-12'>
          <div className="row">
            <div className="overview">
              <Dashboard title={t('Union.Production_detail.Overview')} text_decorator='true' component={<Overview />} /> </div>
            <div className="style-of-care">
              <Dashboard title={t('Union.Production_detail.Style_of_Care')} text_decorator='true' component={<StyleOfCare />} />
            </div>
          </div>
        </div>

      </div>
    </>)
}

export default ProductionDetails