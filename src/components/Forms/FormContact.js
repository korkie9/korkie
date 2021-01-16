import React from 'react'
import validate from './validateInfo'
import useForm from './useForm'
import './Form.css'
import { FaRegPaperPlane } from 'react-icons/fa'
import Slide from 'react-reveal/Slide'
import axios from 'axios'

const FormContact = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  )

  const onSubmit = async () => {
    try{
      await axios.post(process.env.REACT_APP_MESSAGES, values)
    } catch(err){
    }
  }

  return (
    <div className="form-content-right">
      <Slide right>
        <form onSubmit={(e)=> handleSubmit(e, onSubmit)} className="form" noValidate>
          <h2 className="form-contact-heading">Get in touch</h2>
          <div className="form-inputs">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Surname</label>
            <input
              className="form-input"
              type="text"
              name="surname"
              placeholder="Enter your surname"
              value={values.surnname}
              onChange={handleChange}
            />
            {errors.surname && <p>{errors.surname}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Organisation</label>
            <input
              className="form-input"
              type="text"
              name="organisation"
              placeholder="Enter your organisation"
              value={values.organisation}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea-input"
              type="text"
              name="message"
              placeholder="Write a message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            <FaRegPaperPlane />
          </button>
        </form>
      </Slide>
    </div>
  )
}

export default FormContact
