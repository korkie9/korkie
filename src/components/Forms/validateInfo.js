export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name required';
  }

  if (!values.surname.trim()) {
    errors.surname = 'Surname required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 6) {
    errors.message = 'Message needs to be 6 characters or more';
  }

  return errors;
}
