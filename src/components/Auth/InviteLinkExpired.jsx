import React from 'react'
import {useNavigate} from "react-router-dom"
import { useTranslation} from "react-i18next";
import Logo from '../Images/logo-light.png';


const InviteLinkExpired = () => {

 
        const navigate = useNavigate()
         const {t}=useTranslation()
         return (
           <section className='auth_layout login_screen'>
           <div className='left_box'>
           </div>
           <div className='right_box'>
             <a href="/" className='logo'><img src={Logo} />Reelkids</a>
             <h3 className='title_h3'>{t("InviteLinkExpired.Title")}</h3>
             <div className='auth_form'>
               <h3 style={{fontSize:"20px"}}>{t("InviteLinkExpired.Para")}</h3>
               {/* {t('Expired.Message1')} <a className="link2" onClick={()=>navigate('/forgot_password')}>{t('Expired.Message2')}</a> {t('Expired.Message3')} */}
             </div>
       
           </div>
         </section>
         )
}

export default InviteLinkExpired