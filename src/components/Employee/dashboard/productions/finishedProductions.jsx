import React from "react";
import { useNavigate } from "react-router-dom";

const FinishedProd = () => {
    const navigate = useNavigate()
    return (
        <>

            <div className="d-flex align-items-baseline">
                <svg onClick={()=>{navigate(-1)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left ms-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg >
                <p className="title_h3 ms-4">Fantastic Four
                </p>
            </div>

            <div className='dashboard_screen'>
                <div className="cheight_550 mt-4"> 
                    <div className="white_box ">
                        <div className="mt-5">
                        <p className="title_h3 text-center ">
                        This production has wrapped 
                        </p>
                        <div className="w_100 text-center">

                        <button onClick={()=>{navigate(-1)}} type="button" className="btn btn-info w-25 h-100">Return to  Productions</button>
                    </div> 
                        </div>
                        
          
                    </div>
                </div>

            </div>

        </>
    )
}

export default FinishedProd