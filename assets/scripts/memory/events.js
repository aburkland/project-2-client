const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

// tictactoe example code
// const onCreateGame = function (event) {
//   event.preventDefault()
//   $('.box').text('') // is this really clearing game?
//   currentPlayer = 'X'
//   api.createGame()
//     .then(ui.onCreateGameSuccess)
//     .catch(ui.onCreateGameFailure)
// }

const onCreateMemory = function (event) {
  event.preventDefault()
  api.createMemory()
    // .then(ui.onCreateGameSuccess)
    // .catch(ui.onCreateGameFailure)
    .then(console.log('reached createMemory', event))
    .catch(console.log('not reaching createMemory'))
}
