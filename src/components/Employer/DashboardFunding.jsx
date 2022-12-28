import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'

function Funding() {
    const { t } = useTranslation()
    return (
        <>
            <div className='funding'>
                <p className="funding-text">{t('Employer.Dashboard.Funds_hidden')}.</p>
                <div className='funding-report-button'>  <a className='buttons' style={{cursor:"pointer"}} ><>{t('Employer.Dashboard.Request_report')}</></a></div>
            </div>

        </>
    )
}

export default Funding