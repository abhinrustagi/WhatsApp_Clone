const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = [];

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.push("Name field is required");
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.push("Email field is required");
  } else if (!Validator.isEmail(data.email)) {
    errors.push("Email is invalid");
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.push("Mobile Number is required");
  } else if (!Validator.isMobilePhone(data.mobile)) {
    errors.push("Mobile Number is invalid");
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.push("Password field is required");
  }

  if (Validator.isEmpty(data.password2)) {
    errors.push("Confirm password field is required");
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.push("Password must be at least 8 characters");
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.push("Passwords must match");
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
