const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateMemory = function (event) {
  event.preventDefault()
  const form = event.target
  // below is assigning form field input data to a variable
  const formData = getFormFields(form)
  console.log(formData)
  api.createMemory(formData)
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
    .catch(ui.onGetAllMemoriesFailure)
}

const onUpdateMemory = function (event) {
  event.preventDefault()
  const form = event.target
  // below is assigning form field input data to a variable
  const formData = getFormFields(form)
  api.updateMemory(formData)
    .then(ui.onUpdateMemorySuccess)
    .catch(ui.onUpdateMemoryFailure)
    // .then((response) => {
    //   console.log('response is', response)
    // })
    // .catch(console.error)
}

const onDeleteMemory = function (event) {
  event.preventDefault()
  const form = event.target
  // below is assigning form field input data to a variable
  const formData = getFormFields(form)
  api.deleteMemory(formData)
    .then(ui.onDeleteMemorySuccess)
    .catch(ui.onDeleteMemoryFailure)
    // .then((response) => {
    //   console.log('response is', response)
    // })
    // .catch(console.error)
}

// will maybe need to require store if i want to retrieve a memory just saved

module.exports = {
  onCreateMemory,
  onGetAllMemories,
  onUpdateMemory,
  onDeleteMemory
}
