// Select the <main> element
const mainElement = document.querySelector('main');

// Create a new div element
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';

// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph element';

// Append the new elements to the <main> element
mainElement.appendChild(newDiv);
mainElement.appendChild(newParagraph);