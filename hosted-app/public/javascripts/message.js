'use strict';

let hostApp = window.parent;
let button = document.querySelector('.messageButton');
let input = document.querySelector('.messageBox');
let message;

// Sending message to host APP.
function clearInput(input) {
  return input.value = '';
}

function sendMessage() {
  let messageValue = input.value;

  message = messageValue;
  hostApp.postMessage(message, "*");
  clearInput(input);
}

function logMessages(message) {
  console.log('Message sent!');
  console.log('message: ', message);
}

button.addEventListener('click', (e) => {
  sendMessage();
});

document.addEventListener('keydown', (e) => {
  if(e.which === 13 || e.keyCode === 13) {
    sendMessage();
    e.preventDefault();
  }
});

// Recieving message from host APP.
function handleHostAppMessage(event) {
  console.log('Host APP message in port 5001 recieved from: ', event.origin);
  console.log('Data:', event.data);
}
window.addEventListener('message', handleHostAppMessage, false);
