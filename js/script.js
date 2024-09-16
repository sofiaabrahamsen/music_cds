'use strict';

// Grab the container for the CD list and the form
const cdListBody = document.querySelector('#cd-list tbody');
const cdForm = document.querySelector('#cd-form form');

// Function to create and add a new CD row to the table
const addCDToList = (author, title, year) => {
    const cdRow = document.createElement('tr');

    const authorCell = document.createElement('td');
    authorCell.textContent = author;

    const titleCell = document.createElement('td');
    titleCell.textContent = title;

    const yearCell = document.createElement('td');
    yearCell.textContent = year;

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.addEventListener('click', () => {
        cdRow.remove(); // Remove the row from the table
    });

    // appending author, title and year to the CDrow by using append.
    deleteCell.append(deleteButton);
    cdRow.append(authorCell, titleCell, yearCell, deleteCell);

    cdListBody.append(cdRow);
};

// Adding Eventlistener for form submission
cdForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Getting the values from the input fields
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;

    // Add the CD to the list
    addCDToList(author, title, year);

    // Clear the form
    cdForm.reset();
});
