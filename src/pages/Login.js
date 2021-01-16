import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { FaRegPaperPlane } from 'react-icons/fa'
import './Login.css'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const tokenAndId = await axios.post(process.env.REACT_APP_LOGIN, {
        username: data.username,
        password: data.password,
      })
      if (tokenAndId) {
        localStorage.setItem('auth-token', tokenAndId.data.token)
        localStorage.setItem('uid', tokenAndId.data.uid)
        return history.push("/Admin");
      }
      setErrorMessage('there are errors')
    } catch (err) {
      setErrorMessage('nice try')
    }
  }
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <h2 className="form-contact-heading">Log in</h2>
        <div className="errors">{errorMessage}</div>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Username"
            ref={register({ required: true })}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <textarea
            className="form-textarea-input"
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
        </div>
        <button className="form-input-btn" type="submit">
          <FaRegPaperPlane />
        </button>
      </form>
    </div>
  )
}

export default Login
