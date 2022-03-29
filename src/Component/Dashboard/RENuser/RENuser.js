import React from 'react';

const componentName = () => {
    return (
        <div>
              <div className='pu-from container'>
                    <form onSubmit='' className="up-form mt-4">

                        <h4 className='up-h4'>Add New User</h4>

                       
                        <h6 className='up-p mt-2'>User Id</h6>
                        <input className="up-input" placeholder="" />
                        <br />
                        <h6 className='up-p mt-2'>Name</h6>
                        <input className="up-input" placeholder="" />
                        <br />
                        <h6 className='up-p mt-2'>Mobile Number</h6>
                        <input className="up-input" type="number" placeholder="" />
                        <br />
                        <h6 className='up-p mt-2'>Email</h6>
                        <input className="up-input" type="email" placeholder="" />
                        <br />
                        <h6 className='up-p mt-2'>Account Type</h6>
                        <input className="up-input" type="email" placeholder="" />
                        <br />
                        <h6 className='up-p mt-2'>Enter Amount</h6>
                        <input className="up-input" type='number' placeholder="" />
                        <br />
                        <input className="up-b mt-3" type="submit" value="Submit" />

                    </form>
                  
                </div>
        </div>
    );
};

export default componentName;