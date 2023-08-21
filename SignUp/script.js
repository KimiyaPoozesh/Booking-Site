const form = document.querySelector('.form');
const phoneNumber = document.querySelector('#phoneNumber');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const username=document.querySelector('#name');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if(username.value.trim() === ''){
    alert('Please enter Youre Name');
    return;
  }
  if (!validatePhoneNumber(phoneNumber.value)) {
    alert('Please enter a valid phone number');
    return;
  }
  
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address');
    return;
  }

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



document.addEventListener('DOMContentLoaded', function() {
  console.log('Form submission event listener initialized.');

  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    const namel = username.value;
const emaill = email.value;
const passwordl = password.value;

    formData.append('name', namel);
formData.append('email', emaill);
formData.append('password', passwordl);
const payload = {};

formData.forEach((value, key) => {
  payload[key] = value;
});

const payloadJson = JSON.stringify(payload);
console.log(payloadJson);
    
    fetch('http://localhost:3000/api/users/sign-up', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payloadJson
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then(data => {
      const token = data.token; // Extract the token value from the parsed JSON object
      localStorage.setItem('authToken', token); // Store the token value in local storage
      console.log('Token:', token);
      window.location.href = '../profile/index.html';
    })
    .catch(error => {
      alert(error);
    });
  });
});