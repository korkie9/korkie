import React, { useState } from 'react'
import './Form.css'
import ContactForm from './ContactForm'
import FormSuccess from './FormSuccess'
import skating from '../../environment/skating.jpg'
import Fade from 'react-reveal/Fade'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className="form-container">
        <Fade left>
          <div className="form-content-left">
            <img className="form-img" src={skating} alt="" />
          </div>
        </Fade>
        <Fade right>
          <div className="form-content-right">
            {!isSubmitted ? (
              <ContactForm submitForm={submitForm} />
            ) : (
              <FormSuccess />
            )}
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Form
