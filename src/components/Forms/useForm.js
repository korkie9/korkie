import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    organisation: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmitting(true);
    onSubmit(e);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, isSubmitting, callback]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
