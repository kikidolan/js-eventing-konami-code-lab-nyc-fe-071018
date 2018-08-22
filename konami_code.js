const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  const tracker = 0
  // Write your JavaScript code inside the init() function
const body = document.querySelector('body')
body.addEventListener('keydown', (event) => {
  if (event.which === code[tracker]) {
    console.log('YAS!')
    tracker ++
  } else {
    console.log('BUMMAH!')
    tracker = 0
  }
})
}

init()