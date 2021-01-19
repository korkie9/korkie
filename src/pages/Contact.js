import React, { useEffect } from 'react'
import Form from '../components/Forms/Form'

const Contact = () => {
  useEffect(() => {
    window. scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <div>
      <Form/>
    </div>
  )
}

export default Contact
