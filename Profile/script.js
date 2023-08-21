// Get the JWT token from local storage
const token = localStorage.getItem('authToken');

// Send a GET request to the server with the token in the Authorization header
fetch('http://localhost:3000/api/users/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': token
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json(); // Parse the response body as JSON
})
.then(data => {
    const nameElement = document.querySelector('h5');
    
    nameElement.innerHTML = `<i class="bx bxs-star" style="color: #ffffff"></i>${data.name} `;

  // Update the user interface with the user data
  const idElement = document.querySelector('td#id');
  const emailElement = document.querySelector('td#email');
  const phoneElement = document.querySelector('td#phone');
  const birthdayElement = document.querySelector('td#birthday');

  idElement.textContent = data.ID;
  emailElement.textContent = data.email;
  phoneElement.textContent = data.phone;
  birthdayElement.textContent = data.age;

//   const ticketsElement = document.querySelector('div#tickets');
//   data.airplaneTickets.forEach(ticket => {
//     const ticketElement = document.createElement('p');
//     ticketElement.classList.add('font-italic', 'mb-0');
//     ticketElement.textContent = `Airplane Ticket to ${ticket.destination}`;
//     ticketsElement.appendChild(ticketElement);
//   });
//   data.trainTickets.forEach(ticket => {
//     const ticketElement = document.createElement('p');
//     ticketElement.classList.add('font-italic', 'mb-0');
//     ticketElement.textContent = `Train Ticket to ${ticket.destination}`;
//     ticketsElement.appendChild(ticketElement);
//   });
//   data.reservedRooms.forEach(room => {
//     const ticketElement = document.createElement('p');
//     ticketElement.classList.add('font-italic', 'mb-0');
//     ticketElement.textContent = `Hotel Room in ${room.hotelName}`;
//     ticketsElement.appendChild(ticketElement);
//   });
})
.catch(error => {
  alert(error);
});