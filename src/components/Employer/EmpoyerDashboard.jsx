import { useState } from "react"
import { Button } from "react-bootstrap"
import Dashboard from "../shared/Dashboard"
import CurrentProduction from "./DashboardCurrentProduction"
import Funding from "./DashboardFunding"
import EmployeCard from "./EmployeeCard"
import UnionCard from "./UnionCard"
import EmployeeHide from "./EmployeeHide"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
const EmployerDashboard = () => {
    const [showEmployeeCard, setShowEmployeeCard] = useState(true)
    const [showUnionCard, setShowUnionCard] = useState(false)
    const [show, setShow] = useState(false)
    const { t } = useTranslation()
    const handelHideAndShow = () => {
        setShow(!show)
    }
    const navigate = useNavigate()

    return (<>
        <div className="employer-dashboard">
            <div className="container">
                <h5 className="production-name">{t('Employer.Dashboard.Production')} #1412</h5>
                <h5 className="studio-name">{t('Employer.Dashboard.Film_studio')}</h5>
            </div>
            <div className="row">
                <div className="col-xl-6 col-sm-12">
                    <div className="row">
                        <div className="current-production">
                            <Dashboard text_decorator='true' title={t('Employer.Dashboard.Current_production')} component={<CurrentProduction />} />
                        </div>
                    </div>
                    <div className="dashboard_screen">
                        <div className='white_box'>
                            <div className="employee-union-cards">
                                <div className="row union_tabs">
                                    <div className="col-xl-4">
                                    <Button onClick={() => {
                                    setShowEmployeeCard(true)
                                    setShowUnionCard(false)
                                }} >{t('Employer.Dashboard.Employees')}</Button>
                                    </div>
                                    <div className="col-xl-4">
                                    <Button onClick={() => {
                                    setShowUnionCard(true)
                                    setShowEmployeeCard(false)
                                }} className="ms-2">{t('Employer.Dashboard.Union')}
                                </Button>
                                    </div>
                                </div>
                               
                                
                                {showEmployeeCard && <div className="employee-card">
                                    {show ? <EmployeCard /> :
                                        <EmployeeHide />}

                                </div>}
                                {showUnionCard && <div className="union-card">
                                    <UnionCard />
                                </div>}
                            </div>
                            <div className='col mt-2 float-end'>
                                {showEmployeeCard && <button onClick={() => { handelHideAndShow() }} className="show-manage ms-auto">
                                    {show ? `${t('Employer.Dashboard.Hide')}` : `${t('Employer.Dashboard.Show')}`}
                                </button>}
                                <button className="show-manage ms-1 " onClick={() => {
                                    <>{showEmployeeCard && navigate('/employer/employees')}
                                        {showUnionCard && navigate('/employer/unions')}
                                    </>
                                }}>
                                    {t('Employer.Dashboard.Manage')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-12">
                    <div className="row">
                        <div className="employer-dashboard-funding">
                            <Dashboard text_decorator='true' title={t('Employer.Dashboard.Funding')} component={<Funding />} />
                        </div>
                    </div>
                    <div className="dashboard_screen  ">
                        <div className='white_box'>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p><b> {t('Employer.Dashboard.Childcare_coordinator')}</b><br />
                                        Marie Johnson<br />
                                        <b>M:</b> 778 1234567</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>  <b> {t('Employer.Dashboard.Main_office')}</b><br />
                                        12768 21A Avenue<br />
                                        <b>M:</b> 778 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </>)
}
export default EmployerDashboard