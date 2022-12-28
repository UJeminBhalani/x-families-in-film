import React from 'react'
import { useTranslation } from 'react-i18next'

const Earnings = () => {
const {t} = useTranslation()
    return (
        <div>
            <div className='text-center'>
                <h6>{t('Caregiver.Dashboard.Balance')}</h6>
                <h1> $1,200 </h1>
                <div>
                    <button className="btn btn-info funding_add" type="button">
                    {t('Caregiver.Dashboard.Income')}: $500
                    </button>
                </div>
            </div>
            <div className='mt-4'>
                <h5>{t('Caregiver.Dashboard.Recent_activity')}</h5>
                <div className='caregiver_earnings_div '><p className='recent_activity_dates'>Jan 24, 2021<span className='caregiver_earnings'>+$250</span></p></div>
                <div className='caregiver_earnings_div mt-2'><p className='recent_activity_dates'>Jan 24, 2021<span className='caregiver_earnings'>+$250</span></p></div>
                <div className='caregiver_earnings_div mt-2'><p className='recent_activity_dates'>Jan 24, 2021 <span className='caregiver_earnings'>+$250</span></p></div>

            </div>
        </div>
    )
}

export default Earnings