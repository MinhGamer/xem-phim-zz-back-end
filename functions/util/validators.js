const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

exports.validateSignUp = (data) => {
  let errors = {};

  if (!data.email || isEmpty(data.email)) {
    errors.email = 'Email must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }

  if (!data.password || isEmpty(data.password))
    errors.password = 'Passwrd must not be empty';

  // if (data.password !== data.confirmPassword)
  //   errors.confirmPassword = 'Passowrds must be the same';

  if (!data.name || isEmpty(data.name)) errors.name = 'Name must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLogin = (data) => {
  let errors = {};
  if (!data.email || isEmpty(data.email))
    errors.email = 'Email must not be empty';
  if (!data.password || isEmpty(data.password))
    errors.password = 'Password must not be  empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
