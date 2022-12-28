import React  from "react";  
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; 
import Logo from "../Images/logo-light.png";  

function NotFound() {  
  const navigation = useNavigate();
  const navigate = (address) => {
    navigation(`${address}`);
  }; 
  const { t } = useTranslation(); 
  return (
      <section className="auth_layout login_screen">
      <div className="left_box"></div>  
      <div className="right_box">
        <a onClick={() => navigate("/")} className="logo">
          <img src={Logo} />
          Reelkids
        </a>
        <h3 className="title_h3">
          {t("Not_Found.Not_Found_code")}<br/>
          {t("Not_Found.Not_Found_description")}
        </h3> 
      </div>
    </section> 
  );
}

export default NotFound;
