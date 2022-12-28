import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { svg } from "../../shared/svg";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../Reducers/Login/loginSlice";
import { clearLocalStorage, deleteLocalStorage } from "../../Services/storage";
import { logout } from "../../Services/https/Auth/Auth";
import toast from "react-hot-toast";
import { DeleteCookie, GetCookie } from "../../Services/Cookiees";
import Loader from "../../shared/Loader";

function Sidebar({ Routes }) {
  const dispatch = useDispatch();
  const [employer, setEmployer] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [union, setUnion] = useState(false);
  const [showLoader, setShowLoader] = useState(false)
  const [caregiver, setCaregiver] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    const route = location?.pathname;
    const user = route.split("/")[1];
    if (user === "admin") {
      setAdmin(true);
      setUnion(false);
      setCaregiver(false);
      setEmployee(false);
      setEmployer(false);
    }
    if (user === "union") {
      setUnion(true);
      setAdmin(false);
      setCaregiver(false);
      setEmployee(false);
      setEmployer(false);
    }
    if (user === "caregiver") {
      setUnion(false);
      setCaregiver(true);
      setAdmin(false);

      setEmployee(false);
      setEmployer(false);
    }
    if (user === "employee") {
      setUnion(false);
      setCaregiver(false);
      setAdmin(false);

      setEmployee(true);
      setEmployer(false);
    }
    if (user === "employer") {
      setUnion(false);
      setCaregiver(false);
      setAdmin(false);

      setEmployee(false);
      setEmployer(true);
    }
  }, [location]);
  const navigation = (address) => {
    if (employee) {
      navigate(`/employee/${address}`);
    } else if (caregiver) {
      navigate(`/caregiver/${address}`);
    } else if (employer) {
      navigate(`/employer/${address}`);
    } else if (admin) {
      navigate(`/admin/${address}`);
    } else {
      navigate(`/union/${address}`);
    }
  };
  const handelLogout = () => {
    const cookieData = GetCookie('re_used')
    setShowLoader(true)
    logout('/logout').then((response) => {
      if (response.status === 200) {
        if (cookieData) {
          DeleteCookie('re_used')
        }
        clearLocalStorage()
        DeleteCookie('re_used')
        dispatch(loginState({ loggedIn: false, access_token: null, role: null, role_data: null, remember: false }))
        setShowLoader(false)
        navigate('/login')
      }
    })
  }
  const links = document.querySelectorAll(".sidemenu .nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((e) => {
        e.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  return (
    <div className="sidebar">
      {showLoader && <Loader />}
      <Nav className="sidemenu" activeKey={location.pathname}>

        <ul className="sidebar_ul">
          {Routes?.map((value, index) => {
            return (
              <>
                <li>
                  <Nav.Link
                    className={value === "Dashboard" ? "nav-link active" : 'nav-link'}
                    key={`${index}_${new Date().toDateString()}`}
                    onClick={() => {
                      navigation(value.toLowerCase());
                    }}
                  >
                    {svg[value]}
                    {t(`${value}`)}
                  </Nav.Link>
                </li>
              </>
            );
          })}

        </ul>

        <li className="signout">
          <Nav.Link onClick={() => handelLogout()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.75C5.79625 0.75 0.75 5.79625 0.75 12V12.0013L7 7.00125V10.7513H15.75V13.2513H7V17.0012L0.75 12.0013C0.75125 18.205 5.79625 23.25 12 23.25C18.2038 23.25 23.25 18.2038 23.25 12C23.25 5.79625 18.2038 0.75 12 0.75Z"
                fill="white"
              />
            </svg>
            {t("Log Out")}
          </Nav.Link>
        </li>
      </Nav>
    </div>
  );
}

export default Sidebar;
