const panel = document.querySelector('.panel');
const form2 = document.querySelector('.plane');
const button = document.querySelector('.planeTicket');
const backButton = document.querySelector('.back');
const formTrain = document.querySelector('.train');
const buttonTrain = document.querySelector('.trainTicket');
const formHotel = document.querySelector('.hotel');
const buttonHotel = document.querySelector('.hotelTicket');

button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    if (!document.querySelector('.form2-wrapper')) { // Check if the second form has not already been appended to the container
      form2.style.visibility = 'visible'; // Show the cloned form
      panel.classList.add('blur');
    }
  });

  buttonTrain.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    if (!document.querySelector('.formTrain-wrapper')) { // Check if the second form has not already been appended to the container
        formTrain.style.visibility = 'visible'; // Show the cloned form
      panel.classList.add('blur');
    }
  });

  buttonHotel.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    if (!document.querySelector('.formHotel-wrapper')) { // Check if the second form has not already been appended to the container
        formHotel.style.visibility = 'visible'; // Show the cloned form
      panel.classList.add('blur');
    }
  });

backButton.addEventListener('click', () => {
    if(form2.style.visibility=='visible'){
      form2.style.visibility = 'hidden'; // Show the cloned form
      panel.classList.remove('blur');
    }
    else if(formTrain.style.visibility=='visible'){
        formTrain.style.visibility = 'hidden'; // Show the cloned form
        panel.classList.remove('blur');
    }
    else if(formHotel.style.visibility=='visible'){
        formHotel.style.visibility = 'hidden'; // Show the cloned form
        panel.classList.remove('blur');
    }
    else{
      window.location.href = '../Main/index.html';
    }
  });