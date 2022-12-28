import React from "react";

import { useTranslation } from "react-i18next";

import profile_picture from "../Images/profile_picture.svg";

const PersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="profile_main">
        <div className="row">
          <div className="col-lg-8 profile_form">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label ">
                    {t("Employer.Employer_profile.Personal_info.First_name")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="John"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Last_name")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Doe"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Email")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Johdoe@mail.com"
                  className=" crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Phone")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="+ 604 123 4567"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Address")}
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="123 Breddock Ave Unit 231"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-3">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Postal_code")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="V3K 2K7"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-2">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Province")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="BC"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-2">
                <div>
                  <label className="mb-3 mt-2 setting_label">
                    {t("Employer.Employer_profile.Personal_info.Country")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="CANADA"
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
                    {t("Employer.Employer_profile.Personal_info.Password")}
                    <span className="mandatory">*</span>
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="************"
                  className="crew_schedule_fields form-control mb-3 placeholder_style"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mt-2  setting_label avatar_section">
            <div className="ms-4">Profile Picture</div>
            <div className="ms-4 mt-3">
              <img src={profile_picture} alt="profile picture" />
            </div>
            <div className="change_profile mt-3 ms-4">
              {t(
                "Employer.Employer_profile.Personal_info.Profile_picture_change"
              )}
            </div>
            <div className="row change_passrow">
              <div className="change_profile mt-5 ms-4">
                {t("Employer.Employer_profile.Personal_info.Password_change")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
