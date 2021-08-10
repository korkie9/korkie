import React from 'react'
// import Form from '../components/Forms/Form'
import { useForm } from 'react-hook-form'
import { FaRegPaperPlane } from 'react-icons/fa'
import Slide from 'react-reveal/Slide'
import './ContactForm.css'
import axios from 'axios'
import { useState } from 'react'

const ContactForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const [ failed, setFailed ] = useState('')

  const onSubmit = async (data) => {
    try{
        console.log(data)
        const msg = await axios.post(process.env.REACT_APP_MESSAGES, data)
        if(msg) {
          props.submitForm()
          console.log(data)
        } 
    } catch(err){
        setFailed('Oops! Something went wrong')
    }

  }
  return (
    <div>
      <div className="form-content-right">
        <Slide right>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h2 className="form-contact-heading">Get in touch</h2>
            <p className="failed-para">{failed}</p>
            <div className="form-inputs">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Enter your name"
                ref={register({
                  required: 'Name is required',
                  maxLength: {
                    value: 20,
                    message: 'Name must be fewer than 20 characters',
                  },
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Surname</label>
              <input
                className="form-input"
                type="text"
                name="surname"
                placeholder="Enter your surname"
                ref={register({
                  required: 'Surname is required',
                  maxLength: {
                    value: 20,
                    message: 'Surname must be fewer than 20 characters',
                  },
                })}
              />
              {errors.surname && <p>{errors.surname.message}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                ref={register({
                  required: 'Email is required',
                  maxLength: {
                    value: 30,
                    message: 'Email must be fewer than 30 characters',
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Organisation</label>
              <input
                className="form-input"
                type="text"
                name="organisation"
                placeholder="Enter your organisation"
                ref={register({ maxLength: 20 })}
              />
              {errors.organisation && <p>Max character length is 20</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea-input"
                type="text"
                name="message"
                placeholder="Write a message"
                ref={register({
                    required: 'Message is required',
                    maxLength: {
                      value: 80,
                      message: 'Message must be fewer than 80 characters',
                    },
                  })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              <FaRegPaperPlane />
            </button>
          </form>
        </Slide>
      </div>
    </div>
  )
}

export default ContactForm