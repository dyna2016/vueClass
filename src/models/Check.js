
var check = function(email, password) {
  var emailCheck, passwordCheck;
  emailCheck = email.includes('@');
  passwordCheck = password.length > 6 ? true : false;

  var result = {
    email: emailCheck ? '' : 'Email should contain "@"',
    password: passwordCheck ? '' : 'Password should be at least 6 characters'
  }

  return result;
};

export default check;