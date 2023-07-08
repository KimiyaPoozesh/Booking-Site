
const backButton = document.querySelector('.back');


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
  
  