const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateMemory = function (event) {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)
  api.createMemory(formData) // need to add arguments, define them, and leave comments about what they are
    .then(ui.onCreateMemorySuccess)
    .catch(ui.onCreateMemoryFailure)
    // .then((response) => {
    //   console.log('here', response)
    // })
    // .catch(console.error)
}

const onGetAllMemories = function () {
  event.preventDefault()
  api.getAllMemories()
    // .then((response) => {
    //   console.log('here', response)
    // })
    .then(ui.onGetAllMemoriesSuccess)
  // .catch(ui.onGetGamesFailure)
}

// will maybe need to require store if i want to retrieve a memory just saved

module.exports = {
  onCreateMemory,
  onGetAllMemories
}
