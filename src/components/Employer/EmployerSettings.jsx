import React from "react"

import {useTranslation} from "react-i18next";

const EmployerSettings = () => {

  const {t} = useTranslation()
  
  return (
    <div>
               <div className="white_box manage_screen">

        <div className=''>
           <h3 className='title_h3'>
           {t('Employer.Employer_settings.Settings')}

           </h3>
            
        
        </div>
       <div className='row'>
           <div className='col-lg-6'>
           <div>
                  <label className="mb-3 setting_label"> {t('Employer.Employer_settings.Public_profile')}
</label>
                </div>
                <input
                  type="email"
                  placeholder="Employer name"
                  className="form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
           </div>
       </div>

       <div className='row'>
           <div className='col-lg-6'>
           <div>
                  <label className="mb-3 mt-2 setting_label">{t('Employer.Employer_settings.Email')}
</label>
                </div>
                <input
                  type="email"
                  placeholder="Johndoe@gmail.com"
                  className="form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
           </div>
       </div>

       <div className='row'>
           <div className='col-lg-6 setting_label'>
           <div>
                  <label className="mb-3 mt-2">{t('Employer.Employer_settings.Phone')}
</label>
                </div>
                <input
                  type="email"
                  placeholder="+1 778-123-4567"
                  className="form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
           </div>
       </div>
    </div>
    </div>
  )
}

export default EmployerSettings