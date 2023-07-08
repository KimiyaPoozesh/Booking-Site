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
