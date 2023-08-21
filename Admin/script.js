const panel = document.querySelector('.panel');
const form2 = document.querySelector('.plane');
const button = document.querySelector('.planeTicket');
const backButton = document.querySelector('.back');
const formTrain = document.querySelector('.train');
const buttonTrain = document.querySelector('.trainTicket');
const formHotel = document.querySelector('.hotel');
const buttonHotel = document.querySelector('.hotelTicket');
const Planeform = document.getElementById('plane-ticket');

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

  Planeform.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent the default form submit behavior
  
    const formData = new FormData(Planeform); // create a new FormData object from the form data
  
    const airplaneTicketData = {
      origin: formData.get('origin'),
      destination: formData.get('Destination'),
      airLine: formData.get('Airline'), 
      departureTime: parseInt(formData.get('Departure')),
      arrivalTime: parseInt(formData.get('Arrival')),
      flightNumber: parseInt(formData.get('Flight')),
      terminal: formData.get('Terminal'),
      price: parseFloat(formData.get('Price')),
      quantity: parseInt(formData.get('Passengers')), // You can use 'Passengers' field to store quantity of tickets
      isVip: formData.get('checkbox1') === 'value1'
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/airplane-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airplaneTicketData)
      });
  
      const data = await response.json(); // parse the response data as JSON
  
      console.log(data); // log the response data to the console
    } catch (error) {
      console.error(error); // handle any errors that occur during the request
    }
  });