
const backButton = document.querySelector('.back');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');

const name = nameInput.value;
const password = passwordInput.value;
function validateForm() {
    // Get the form inputs
    var emailOrPhoneInput = document.getElementById("inputField");
    var passwordInput = document.getElementsByName("loginPassword")[0];
  
    // Check if the inputs are not empty
    if (emailOrPhoneInput.value == "" || passwordInput.value == "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Check if the email or phone number is valid
    var emailOrPhonePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phonePattern = /^[0-9]{10}$/;
    
    if (!(emailOrPhonePattern.test(emailOrPhoneInput.value) || phonePattern.test(emailOrPhoneInput.value))) {
      alert("Please enter a valid email or phone number");
      return false;
    }
    
    // If all validations pass, submit the form
    return true;
  }

  backButton.addEventListener('click', () => {
    window.history.back();
  });




form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = nameInput.value;
  const password = passwordInput.value;
  const payload = { email, password };
  const payloadJson = JSON.stringify(payload);

  fetch('http://localhost:3000/api/users/sign-in', {
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
  
  