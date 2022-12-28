import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduction() {
  return (
    <div  className='white_box manage_screen'> 
            <div className="heading_box">
                <h3 className='title_h3'>Add Production</h3> 
                <p>Fill out the following form to add a new Production</p>
            </div>
            <Form className='form_control'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <Form.Group className="form-group" controlId="formBasicProduction">
                            <Form.Label>Name of Production</Form.Label>
                            <Form.Control type="text" placeholder="Conjuring 2" />
                        </Form.Group>
                    </div>                    
                </div>
                <div className='row'>
                    <div className='col-sm-5'>
                        <Form.Group className="form-group" controlId="formBasicEmployer">
                            <Form.Label>Employer</Form.Label> 
                            <Form.Select className='form-control' aria-label="Matthew Lee">
                                <option>Matthew Lee</option> 
                                <option>Tanjiro Kamado</option> 
                                <option>Muzan Kibutsuji</option> 
                                <option>Kanao Tsuyuri</option> 
                                <option>Giyu Tomioka</option>  
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='col-sm-5'>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <Form.Label>Employer’s Email</Form.Label>
                            <Form.Control type="email" placeholder="matthew@vcs.com" /> 
                        </Form.Group>
                    </div> 
                </div>
                <div className='row'>
                    <div className='col-sm-10'>
                        <Form.Group className="form-group" controlId="formBasicStudio">
                            <Form.Label>Studio</Form.Label>                           
                            <Form.Control type="text" placeholder="Vancouver Film Studios" /> 
                        </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-5'>
                        <Form.Group className="form-group" controlId="formBasicBudget">
                            <Form.Label>Budget</Form.Label>
                            <Form.Control type="text" placeholder="$ 100,000,000" />
                        </Form.Group>
                    </div> 
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <Button variant="info" className='float-end  btn-lg d-inline-flex align-items-center justify-content-center w_100 '>Add Production</Button> 
                    </div>
                </div>
            </Form> 
    </div> 
  )
}

export default AddProduction