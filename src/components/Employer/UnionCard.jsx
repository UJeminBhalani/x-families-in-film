import React from 'react'
import User01 from '../Images/user-01.png';
function UnionCard() {
    return (

        <>
                <div className="employers_box">
                    <ul className="productions_list">
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                               
                                 <h5>Tanjiro Kamado</h5>
                           </div>
                        </li>
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                                <h5>SAG-AFTRA</h5>
                            </div>
                        </li>
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                                <h5>Teamsters</h5>
                            </div>
                        </li>
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                                <h5>American Federation of Musicians</h5>
                            </div>
                        </li>
                        <li>
                            <img src={User01} alt="" />
                            <div className="d-inline-flex w100p">
                                <h5>Writers Guild of America</h5>
                            </div>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default UnionCard