import Validator from 'validator';

const signInValidator = (user) => {
  const errors = {};

  if (Validator.isEmpty(user.name)) {
    errors.name = 'Username field must not be empty';
  }

  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field must not be empty';
  }
  return errors;
};

export default signInValidator;
