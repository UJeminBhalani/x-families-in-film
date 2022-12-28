import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckLinkExpiration } from "../Services/https/Auth";
import { useTranslation } from "react-i18next";
import { linkexpire } from "../Services/https/Admin/Admin";
import { useDispatch } from "react-redux";
import { inviteEmail } from "../Reducers/EmailInvite/inviteSlice";

const Temp = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = (address) => {
    navigation(`${address}`);
  };

  const token = new URLSearchParams(location.search).get("token");
  const queryParamLanguage = new URLSearchParams(location.search).get(
    "language"
  );
  const id = new URLSearchParams(location.search).get("id");
  const redirectURL = new URLSearchParams(location.search).get("redirect");
  console.log(redirectURL);
  console.log(id);

  localStorage.setItem("token", token);

  useEffect(() => {
    if (queryParamLanguage === "fr-FR") {
      i18n.changeLanguage(`fr`);
    } else if (queryParamLanguage === "en") {
      i18n.changeLanguage(`en`);
    }

    if (location?.pathname === "/processinvite") {
      linkexpire(id)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
            const email = response?.data?.data?.email;
            const role = response?.data?.data?.role_id;

            console.log(email);
            const object = {
              email,
              role,
            };
            console.log(object, "object");

            dispatch(inviteEmail(object));

            if (redirectURL === "signup") {
              navigate(`/signup?inviteid=${id}`);
            } else if (redirectURL === "login") {
              navigate(`/login?inviteid=${id}`);
            }
          } else {
            navigate("/reset_link_expired");
          }
        })
        .catch((err) => {
          return err;
        });
    } else {
      CheckLinkExpiration(token, queryParamLanguage)
        .then((response) => {
          if (response?.status === 200) {
            navigate("/reset_password");
          } else {
            navigate("/reset_link_expired");
          }
        })
        .catch((error) => {
          return error;
        });
    }
  }, []);
  return (
    <>
      <section className="auth_layout login_screen">
        <div className="left_box"></div>
        <div className="right_box">
          <h3 className="title_h3"></h3>
          <div className="auth_form">
            <h3 style={{ fontSize: "20px" }}></h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Temp;
