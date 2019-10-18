const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateMemory = function (event) {
  event.preventDefault()
  console.log('made it to the onCreateMemory function')
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

module.exports = {
  onCreateMemory
}
