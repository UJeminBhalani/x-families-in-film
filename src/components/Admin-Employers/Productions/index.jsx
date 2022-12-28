import React from 'react'

import Dashboard from '../../shared/Dashboard'
import {useTranslation} from 'react-i18next'
import ProductionsContacts from './productions_contacts'
import { useSelector } from 'react-redux'
import ProductionsListing from './productionsListing'

const Productions = () => {
  const {name} =  useSelector(state=>state.login)
  const {t} =useTranslation()
  return (
    <div className="row">
      <h3 className="title_h3 ml-3"> {t('Admin.Dashboard.Welcome')}, <span style={{color:"#DCA562"}}>{name && name}</span></h3>
        <div className="col-xl-8">
            <ProductionsListing />
        </div>
        <div className="col-xl-4 employers_box">
            <ProductionsContacts/>
        </div>
    </div>
  )
}

export default Productions