// script.js

document.getElementById('btn').addEventListener('click', async function() {
  // Get user input values
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  // Validate inputs
  if (textInput.trim() === '' || isNaN(delayInput) || delayInput < 0) {
    alert('Please enter valid values for Text and Delay.');
    return;
  }

  // Convert delayInput to milliseconds
  const delayInMilliseconds = parseInt(delayInput) * 1000;

  // Display a loading message immediately
  document.getElementById('output').innerText = 'Loading...';

  // Wait for the specified delay before resolving
  await delay(delayInMilliseconds);

  // Display the user input text after the delay
  document.getElementById('output').innerText = textInput;
});

// Function to create a delay using Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
