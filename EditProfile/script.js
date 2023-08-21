const saveChangesBtn = document.querySelector('#profileForm button');
// Get the JWT token from local storage
const token = localStorage.getItem('authToken');
saveChangesBtn.addEventListener('click', updateProfile);

async function updateProfile() {
  const nameInput = document.querySelector('#inputFirstName');
  const lastNameInput = document.querySelector('#inputLastName');
  const idInput = document.querySelector('#id');
  const emailInput = document.querySelector('#inputEmailAddress');
  const phoneInput = document.querySelector('#inputPhone');
  const sexInput = document.querySelector('#inputSex');
  const ageInput = document.querySelector('#inputAge');

  const data = {};
  if (nameInput) data.name = nameInput.value;
  if (lastNameInput) data.lastName = lastNameInput.value;
  if (idInput) data.ID = idInput.value;
  if (emailInput) data.email = emailInput.value;
  if (phoneInput) data.phone = phoneInput.value;
  if (sexInput) data.sex = sexInput.value;
  if (ageInput) data.age = ageInput.value;

  const url = '/api/edit-profile';
  const options = {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
}