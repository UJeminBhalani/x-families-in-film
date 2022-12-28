import React from 'react';
import Button from 'react-bootstrap/Button'
import Footer from '../Layout/Footer'
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import Header from '../Layout/Header';

function Landing() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navigation = (address) => {
    navigate(`/${address}`);
  }
  return (
    <>
      <Header />
      <section className='landing_section d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className="col-sm-12 ">
              <h3><span className='landing_trusted'>{t('Landing.Trusted')}</span> {t('Landing.Care')} <br /> {t('Landing.Need')} <span style={{ color: 'var(--yellow)' }}> {t('Landing.Most')}</span>.</h3>
              <p style={{ align: "justify" }}>{t('Landing.Reelkids')}<br />{t('Landing.Reelkids2')}<br />{t('Landing.Reelkids3')}<br />{t('Landing.Reelkids4')}</p> <br></br>
              <p>{t('Landing.Paragraph')}<br />{t('Landing.ParagraphBreak')}</p>
              <Button className='btn-lg justify-content-center' onClick={() => navigation('signup')} variant="info">{t('Landing.Sign up')}</Button>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </section>









    </>
  )
}

export default Landing