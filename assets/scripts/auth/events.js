const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignUp = function (event) {
  event.preventDefault()
  // $('.box').text('')
  $('.blur').blur()
  const form = event.target

  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
