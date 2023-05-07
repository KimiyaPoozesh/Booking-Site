

const form = document.querySelector('.form');
const phoneNumber = document.querySelector('#phoneNumber');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!validatePhoneNumber(phoneNumber.value)) {
    alert('Please enter a valid phone number');
    return;
  }
  
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address');
    return;
  }

//   if (!validatePasswordStrength(password.value)) {
//     alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
//     return;
//   }

  if (password.value !== passwordConfirmation.value) {
    alert('Passwords do not match');
    return;
  }

  alert('Sign Up successful!');
});

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePasswordStrength(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(password);
}
