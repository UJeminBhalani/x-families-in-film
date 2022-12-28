import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const SelectProductions = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()
    useEffect(() => {
    }, [])
    const handelOnClick = () => {
        if (location?.pathname === "/union/productions") {
            navigate('/union/production/detail')
        }
        else {
            navigate('/employee/focused-productions')

        }

    }
    return (
        <>


            <h1 className="text-center request_title">{t('Employee.Productions.Select_production')}</h1>

            <div>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder={t('Employee.Productions.Search_production')} />
                </div>
            </div>

            <div className="filter_prod">
                <select className="form-select" style={{ color: '#204288',fontWeight:"600",fontSize:"12px" }} aria-label="Default select example" >
                    <option selected style={{color:"#204288",fontWeight:"600",fontSize:"12px"}}>{t('Employee.Productions.Sort')}</option>
                    <option value="1" style={{color:"#204288",fontWeight:"600",fontSize:"12px"}} >Name</option>
                    <option value="2" style={{color:"#204288",fontWeight:"600",fontSize:"12px"}}>City</option>
                </select>
            </div>


            <div className='dashboard_screen align_pagination'>
                <div className="row ">
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row ">
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="white_box">
                            <h4 className="prod_title">DeadPool 2</h4>
                            <div className="d-flex justify-content-between">
                                <span className="prod_loc">Vancouver</span>
                                <div style={{ cursor: "pointer" }}>
                                    <svg onClick={() => { handelOnClick() }} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1667 19.166L21.3334 10.9993L13.1667 2.83268M21.3334 10.9993L2.66675 10.9993L21.3334 10.9993Z" stroke="#44B5AE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className="prod-buttons" style={{ display: 'flex' }}>

<div > {<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66618 1.65954C10.7135 0.769305 9.05522 -0.640227 8.00787 0.32419L0.327297 6.77836C-0.109099 7.14929 -0.109099 7.81697 0.327297 8.1879L8.00787 14.7163C9.05522 15.6065 10.7135 14.197 9.66618 13.3067L2.8584 7.52022L9.66618 1.65954Z" fill="#13A89E" />
</svg>} <b> 1-10 of 3 </b>{<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.333821 1.65954C-0.713531 0.769305 0.944776 -0.640227 1.99213 0.32419L9.6727 6.77837C10.1091 7.14929 10.1091 7.81697 9.6727 8.1879L1.99213 14.7163C0.944776 15.6065 -0.713531 14.197 0.333821 13.3067L7.1416 7.52022L0.333821 1.65954Z" fill="#13A89E" />
</svg>}</div>


</div>
        </>
    )
}
export default SelectProductions;