import React, { useState } from 'react';
import './Form.css';
import FormContact from './FormContact';
import FormSuccess from './FormSuccess';
import skating from '../../environment/skating.jpg'
import Fade  from 'react-reveal/Fade';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
      <Fade left>
        <div className='form-content-left'>
        
          <img className='form-img' src={skating} alt="" />
        </div>
        </Fade>

        {!isSubmitted ? (
          <FormContact submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
