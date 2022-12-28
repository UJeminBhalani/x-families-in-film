import React from "react";

import { Button } from "react-bootstrap";



const SecondConfirmation = () => {
    return(
        <>

<div className="confirm-production confirm-production-kids">
            <div className="container ">
                <h3 className="confirm-production-header"> We are sorry to hear that.</h3>
                
                        <h5 className="confirm-production-text mt-3">Please contact your ____ to inform them that this is the incorrect production listed</h5>
                  
                <p className="production-name mt-5">Vancouver Film Studios:</p>
                <p className="production-name">PRODUCTION #1412</p>
                
                <div className="mt-3  prod-buttons"> 
                  
                           
                           
                            <Button className="next ms-1">Confirm</Button>
                         
                            
                    
                </div> 
            </div>
        </div>
        </>
    )
}

export default SecondConfirmation