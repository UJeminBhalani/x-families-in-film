import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { svg } from '../../shared/svg'
import { useEffect } from "react";
import { PublicRoutes } from '../../../Routes/index'
function Header(props) {
  const { setActive } = props;
  const [isActive] = useState(false);
  const navigate = useNavigate()
  const [currentLanguage, setCurrentLanguage] = useState('English')
  const { t, i18n } = useTranslation();
  const [english, setEnglish] = useState(true)
  const notifications = [
    {
      date: "April 21, 2022",
      title: "Your request for May 9th has been accepted by Mary Jones!",
      details: " View Details"
    },
    {
      date: "April 21, 2022",
      title: "Your request for May 9th has been accepted by Thomas Lin!",
      details: " View Details"
    },
    {
      date: "April 21, 2022",
      title: "Your request for May 9th has been accepted by Mary Jones! ",
      details: " View Details"
    }
  ]

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng')
    if (lang) {
      if (lang === 'en') {
        setCurrentLanguage('English')
      }
      if (lang === 'fr') {
        setCurrentLanguage('Français')
      }
      i18n.changeLanguage(`${lang}`)
    }
  }, [])

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  const changelang = (language) => {
    if (language === 'en') {
      setCurrentLanguage('English')
    }
    if (language === 'fr') {
      setCurrentLanguage('Français')
    }
    i18n.changeLanguage(`${language}`);
  };
  const handelHomePageNavigation = () => {
    if (PublicRoutes.includes(window.location.pathname)) {
      navigate('/')
    }
  }
  return (
    <Navbar className='top_navbar' expand="lg">
      <Navbar.Brand ><div onClick={() => { handelHomePageNavigation() }} className='logo'><img alt="Rellkids_logo" src={Logo} /> ReelKids</div></Navbar.Brand>
      <Nav className="ms-auto">
        {PublicRoutes.includes(window.location.pathname) ? <Nav.Link className="pe-4 " onClick={() => navigate("/login")}>
          {t('Landing.Login')}
        </Nav.Link> :
          <Nav.Link href="#link" className='notification'>

            <span></span>
            <div className="">
              <span id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {svg.Notification}

              </span>
              <ul className="dropdown-menu notification_menu" aria-labelledby="dropdownMenuButton1">
                <li style={{ borderBottom: " 1px solid #B3B3B3" }}><a className="dropdown-item header" href="#">NOTIFICATIONS</a></li>
                <li><div>
                  {
                    notifications?.map((item) => {
                      return (

                        <div style={{ borderBottom: " 1px solid #B3B3B3", padding: "14px" }}>
                          <div className="notification_date">{item?.date}</div>
                          <div className="notification_title">
                            {item?.title}<span ><u>{item?.details}</u></span>

                          </div>

                        </div>


                      )
                    })
                  }

                </div></li>
              </ ul>
            </div>
          </Nav.Link>}

        <NavDropdown title={english ? `${currentLanguage}` : `${currentLanguage}`} align="end" id="basic-nav-dropdown" className='d-inline-flex align-items-center language_dropdown'>
          <NavDropdown.Item className='language_options' onClick={() => { changelang('en'); setEnglish(true) }}>English</NavDropdown.Item>
          <NavDropdown.Item className='language_options' onClick={() => { changelang('fr'); setEnglish(false) }}>Français</NavDropdown.Item>
        </NavDropdown>
        {!PublicRoutes.includes(window.location.pathname) &&
          <Nav.Link className={isActive ? 'bg-salmon toggle_button' : 'toggle_button'}
            onClick={handleClick}><i className="fa-solid fa-ellipsis-vertical"></i>
          </Nav.Link>
        }
      </Nav>
      {/* </Navbar.Collapse>  */}
    </Navbar>
  );
}

export default Header;
