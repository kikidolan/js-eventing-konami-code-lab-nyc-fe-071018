const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// We have an array of key codes (event.which)
//We want to add an event listening somewhere so that when we press this, something happens
//We need to keep track of where we are in the combo - meaning we need to start from the beginning if the user messes up 

function init() {
  const tracker = 0
  // Write your JavaScript code inside the init() function
const body = document.querySelector('body')
body.addEventListener('keydown', (event) => {
  if (event.which === code[tracker] ) {
    console.log('YAS!')
    tracker ++
  } else {
    console.log('BUMMAH!')
    tracker = 0
  }
})
}