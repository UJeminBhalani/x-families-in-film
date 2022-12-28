import React from 'react'
import User01 from "../../Images/user-01.png"
import {useTranslation} from 'react-i18next'

const Productions_contacts = () => {
  const {t}=useTranslation()
  return (
    <>
 <div className="contacts employers_box"> 

     <h4 className="title_h4_line ml-3">
     <span>{t('Admin.Dashboard.ProductionContacts')}</span>
   </h4>

   <ul className="productions_list employers_box">
     <li>
       <img src={User01} alt="" />
       <div className="d-inline-flex w100p">
         <h5>Tanjiro Kamado</h5>
         <h6>Role</h6>
       </div>
     </li>
     <li>
       <img src={User01} alt="" />
       <div className="d-inline-flex w100p">
         <h5>Muzan Kibutsuji</h5>
         <h6>Role</h6>
       </div>
     </li>
     <li>
       <img src={User01} alt="" />
      <div className="d-inline-flex w100p">
         <h5>Kanao Tsuyuri</h5>
         <h6>Role</h6>
       </div>
     </li>
     <li>
       <img src={User01} alt="" />
       <div className="d-inline-flex w100p">
         <h5>Giyu Tomioka</h5>
         <h6>Role</h6>
       </div>
     </li>
     <li>
       <img src={User01} alt="" />
       <div className="d-inline-flex w100p">
         <h5>Nezuko Kamado</h5>
        <h6>Role</h6>
       </div>
 </li>

   </ul>
   
  </div>
  </>
  )
}

export default Productions_contacts