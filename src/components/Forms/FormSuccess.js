import React from 'react';
import './Form.css';
import logo from '../../environment/logo.jpg'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your message has been sent! Thanks for getting in touch</h1>
      <img className='form-img-2' src={logo} alt="" />
    </div>
  );
};

export default FormSuccess;
