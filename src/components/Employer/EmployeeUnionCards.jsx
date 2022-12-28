import React from 'react'
import image from '../Images/user-01.png'
import { Button } from 'bootstrap'
function EmployeeUnionCards() {
    return (
        <>
            <div className="employee-union-cards">
                <Button>Employees</Button>
                <Button className="ms-2">Union</Button>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6 float-start">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <img alt="Employee" src={image}></img>
                            </div>
                            <div className="col-sm-6">
                                <b>Tanjiro Kamado</b><br />
                                Directore
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col float-end'>
                <button className='confirm-amount'><u>Show</u></button>
                <button className='ms-1  confirm-amount'><u>Manage</u></button>
            </div>
        </>)
}

export default EmployeeUnionCards