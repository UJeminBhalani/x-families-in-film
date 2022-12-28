import React from "react";

import { useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next'

import image1 from '../Images/image1.svg'
 


const SuccessConfirmation = () => {

  const {t} = useTranslation()

  const navigation = useNavigate()

  const navigate = (address) =>{
    navigation(`${address}`)
  }
  
  return (
    <div>
      <div className="white_box manage_screen">
        <div className="row">
          <h3 className="h2_addFunds">{t('Employer.Success_confirmation.Success')}!</h3>
          <div className=" row">
            <div className="col req_msg">
              <p className=" mt-3">
               {t('Employer.Success_confirmation.Request_submitted')}. {t('Employer.Success_confirmation.Request_notify')}
              </p>
           
            </div>
          </div>

        </div>

        <div className="row">
                  <div className="col success_img_block">
                  <img src={image1} alt="no preview" className="success_img"></img>
                  </div>
             
              </div>
        <div className="row mt-5">
          <div className="col success_btn">
            <button className="btn btn-individual btn-add " type="button" onClick={()=>navigation(-1)}>
            {t('Employer.Success_confirmation.Done')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessConfirmation;
