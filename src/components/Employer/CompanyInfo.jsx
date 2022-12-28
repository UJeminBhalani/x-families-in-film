import React from "react";

import { useTranslation } from "react-i18next";

import facebook_icon from "../Images/facebook_icon.svg";

const CompanyInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="profile_main" style={{flexWrap:"wrap"}}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t(
                      "Employer.Employer_profile.Company_info.Childcare_coordinator"
                    )}
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Marie Johnson"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t(
                      "Employer.Employer_profile.Company_info.Coordinator_phone"
                    )}
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="+1 778 293 2813"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Company_info.Production")}
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Production #321"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div>
                <label className="mb-3 mt-2 setting_label">
                  {t("Employer.Employer_profile.Company_info.Email")}
                </label>
              </div>
              <input
                type="email"
                placeholder="johdoe@mail.com"
                className="crew_schedule_fields form-control mb-3 placeholder_style"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-lg-4">
              <div>
                <label className="mb-3 mt-2 setting_label">
                  {t("Employer.Employer_profile.Company_info.Office_phone")}
                </label>
              </div>
              <input
                type="email"
                placeholder="+1 604 123 4567"
                className="crew_schedule_fields form-control mb-3 placeholder_style"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-lg-4">
              <div>
                <label className="mb-3 mt-2 setting_label">
                  {t("Employer.Employer_profile.Company_info.Office_address")}
                </label>
              </div>
              <input
                type="email"
                placeholder="12768 21A Avenue"
                className="crew_schedule_fields form-control mb-3 placeholder_style"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
              <label className="mb-3 mt-2 setting_label">Biography</label>
            <textarea
              className="crew_schedule_fields form-control"
              id="exampleFormControlTextarea1"
              placeholder="Lorem Ipsum......"
              rows="5"
            ></textarea>
              </div>
            </div>
            
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-8">
            <div>
              <label className="mb-3 mt-2 setting_label">
                {t("Employer.Employer_profile.Company_info.Social_media")}
              </label>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              </div>
              <input 
                 type="text"
                 id="social"
                placeholder="Vancouver Film School"
                className="crew_schedule_fields social_media_field form-control mb-3 placeholder_style"
                aria-label="Amount (to the nearest dollar)"
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
