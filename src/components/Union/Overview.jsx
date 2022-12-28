import React from 'react'
import { useTranslation } from 'react-i18next'

function Overview() {
    const { t } = useTranslation()
    return (
        <>
            <li>  <h4>{t('Union.Production_detail.Production')} <br />{t('Union.Production_detail.Contact')}:</h4></li>
            <li>   <h6>Ervin  Smith</h6></li>
            <li>   <h4>{t('Union.Production_detail.Unions')}</h4></li>
            <li>
                Union 7
            </li><li>
                Union 22
            </li><li>
                Union 13
            </li>
        </>
    )
}

export default Overview