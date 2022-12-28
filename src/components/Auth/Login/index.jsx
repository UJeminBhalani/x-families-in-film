import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Logo from '../../Images/logo-light.png';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import { loginSchema } from '../../Services/validations';
import { getUserRole, login } from '../../Services/https/Auth/Auth'
import { setLocalStorage } from '../../Services/storage';
import { loginState } from '../../Reducers/Login/loginSlice';
import toast from 'react-hot-toast';

import Cookies from 'universal-cookie';
import { Decrypt, Encrypt } from '../../Services/EncryptDecrypt';
import { SetCookie } from '../../Services/Cookiees';
import Loader from '../../shared/Loader';
function Login() {

  const admin = useSelector(state => state);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation();

  const [showLoader, setShowLoader] = useState(false)


  return (
    <section className='auth_layout login_screen'>
      {showLoader && <Loader />}
      <div className='left_box'>
      </div>
      <div className='right_box'>
        <div className='logo'><img onClick={() => navigate('/')} style={{ cursor: "pointer" }} alt='Reelkids_Logi' src={Logo} />Reelkids</div>
        <h3 className='title_h3'>{t('Login.Title')}</h3>
        <div className='auth_form'>
          <Formik
            initialValues={{ phoneNumber: "", password: "", remember: false }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              const data = {
                username: values.phoneNumber,
                password: values.password,
                remember: values.remember
              }
              setShowLoader(true)
              login('/sign-in', data).then(async (loginResponse) => { 
                if (loginResponse.status === 200) {
                  const access_token = loginResponse.data.data.access_token
                  const refresh_token = loginResponse.data.data.refresh_token
                  const setAccessToken = setLocalStorage('access_token', access_token)
                  setLocalStorage('refresh_token', refresh_token)
                  if (setAccessToken) {
                    getUserRole('/user').then((userRoleResponse) => {
                      if (userRoleResponse.status === 200) {
                        const { role_text, name,role_data } = userRoleResponse?.data?.data
                        dispatch(loginState({ loggedIn: true, access_token, role: role_text, name, role_data }))
                        const cookieData = [{
                          username: values.phoneNumber, password: values.password
                        }]
                        const encrypteddata = Encrypt(
                          cookieData
                        )
                        if (values.remember) {
                          SetCookie("re_used", encrypteddata, '/')
                        }
                        // navigate('')
                        setShowLoader(false)
                      }
                    })
                  }

                } else {
                  dispatch(loginState({ loggedIn: false, access_token: null, role: null, name: null, role_data:null }))
                  toast.error(`${t('Validation.Login_validation.fail')}`)
                  setShowLoader(false)
                }
              })

            }}

          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group className="form-group-1" as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>{t('Login.PhoneNumber')}</Form.Label>
                    <div className='input_icon'>
                      <Form.Control placeholder='778-XXX-XXXX' type='text'
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.phoneNumber && <div className="error">
                      {touched.phoneNumber && <>{t('Validation.Login_validation.phone_number')}</>}</div>}
                  </Form.Group>
                  <Form.Group className="form-group-1" as={Col} md="12"
                    controlId="validationCustom02">
                    <Form.Label>{t('Login.Password')}</Form.Label>
                    <div className='input_icon'>
                      <Form.Control placeholder='********'
                        type={!showPassword ? "password" : "text"}
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                      <i onClick={() => setShowPassword(!showPassword)}
                        className={showPassword ? "view_password fa-solid fa-eye-slash " :
                          " view_password fa-solid fa-eye"}></i>
                    </div>
                    {errors.password && <div className="error">{touched.password && <>{t('Validation.Login_validation.password')}</>}</div>}
                  </Form.Group>
                </Row>
                <div className='forgot_section'>
                  <Form.Group className="custom_checkbox" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox"
                      onChange={handleChange}
                      name='remember'
                      value={values.remember}

                      className="resetpassword"
                      label={t('Login.Remember')} />
                  </Form.Group>
                  <a className='resetpassword' onClick={() => navigate('/forgot_password')}>{t('Login.Forgot')}</a>
                </div>
                <Button type="submit" variant="info" className='btn-lg w100p justify-content-center d-inline-block' >{t('Login.Sign')}</Button>
              </form>
            )}
          </Formik>

          <div className='sign-up-here'><a>{t('Login.Account')}</a><a onClick={() => navigate('/signup')} className='signUpLogin'><u>{t('Login.SignUp')}</u></a></div>
        </div>

      </div>
    </section>
  )
}

export default Login