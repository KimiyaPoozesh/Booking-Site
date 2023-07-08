const button = document.querySelectorAll('.choose');
const container = document.querySelector('.container');
const form2 = document.querySelector('.finilization');
const table = document.querySelector('.table');
const rows = document.querySelectorAll('tr');
const backButton = document.querySelector('.back');

rows.forEach(row => {
  const details = row.querySelector('.details');
  row.addEventListener('click', () => {
    // Toggle the visibility of the details div element
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});

backButton.addEventListener('click', () => {
  if(form2.style.visibility=='visible'){
    form2.style.visibility = 'hidden'; // Show the cloned form
    container.classList.remove('blur');
  }
  else{
    window.location.href = '../Main/index.html';
  }
});


button.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    if (!document.querySelector('.form2-wrapper')) { // Check if the second form has not already been appended to the container
      form2.style.visibility = 'visible'; // Show the cloned form
      container.classList.add('blur');
    }
  });
});


$('#flight-form').on('submit', async function (event) {
  event.preventDefault(); // prevent the default form submission

  const startDate = $('#startDate').val();
  const returnDate = $('#returnDate').val();
  const destination = $('#destination').val();
  const startCity = $('#startCity').val();
  const passengers = $('#passengers').val();

  try {
    // send an HTTP GET request to the server
    const response = await fetch(`/find/${destination}/${startCity}/${startDate}/${returnDate}/${passengers}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    table.querySelectorAll('tr').forEach((row, index) => {
      // skip the first row (header row)
      if (index > 0) {
        row.remove();
      }
    });

    const ticket = await response.json();

    ticket.forEach((item) => {
      // create a new table row
      const row = document.createElement('tr');
    
      // create table cells for each field in the data
      const fromCell = document.createElement('td');
      fromCell.textContent = item.from;
      row.appendChild(fromCell);
    
      const toCell = document.createElement('td');
      toCell.textContent = item.to;
      row.appendChild(toCell);
    
      const airlineCell = document.createElement('td');
      airlineCell.textContent = item.airline;
      row.appendChild(airlineCell);
    
      const arrivalTimeCell = document.createElement('td');
    arrivalTimeCell.textContent = item.arrivalTime;
    row.appendChild(arrivalTimeCell);

    const departureTimeCell = document.createElement('td');
    departureTimeCell.textContent = item.departureTime;
    row.appendChild(departureTimeCell);

    const familySizeCell = document.createElement('td');
    familySizeCell.textContent = item.familySize;
    row.appendChild(familySizeCell);

    const gateNoCell = document.createElement('td');
    gateNoCell.textContent = item.gateNo;
    row.appendChild(gateNoCell);

    const flightNoCell = document.createElement('td');
    flightNoCell.textContent = item.flightNo;
    row.appendChild(flightNoCell);

    const isVipCell = document.createElement('td');
    isVipCell.textContent = item.isVip;
    row.appendChild(isVipCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item.price;
    row.appendChild(priceCell);

    const detailsCell = document.createElement('td');
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');
    const detailsText = `Flight number: ${item.flightNo}<br />Terminal: ${item.gateNo}`;
    const detailsParagraph = document.createElement('p');
    detailsParagraph.innerHTML = detailsText;
    const detailsButton = document.createElement('button');
    detailsButton.classList.add('form-button', 'choose');
    detailsButton.style.marginTop = '0.1rem';
    detailsButton.textContent = 'Choose';
    detailsDiv.appendChild(detailsParagraph);
    detailsDiv.appendChild(detailsButton);
    detailsCell.appendChild(detailsDiv);
    row.appendChild(detailsCell);

    // append the new row to the table
    table.appendChild(row);
    });
  } catch (error) {
    console.error('Error:', error);
  }
});
