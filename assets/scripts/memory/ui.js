'use strict'
const store = require('../store')

const successMessage = function (newText) {
  // a helper reusable function to display text
  $('#memory-message').text(newText)
  $('#memory-message').removeClass('failure')
  $('#memory-message').addClass('success')
  // reset form below so info clears from form
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#memory-message').text(newText)
  $('#memory-message').removeClass('success')
  $('#memory-message').addClass('failure')
}

const onCreateMemorySuccess = function (responseData) {
  successMessage('New memory created successfully!')
  store.memory = responseData.memory
  // console.log(responseData)
}

const onCreateMemoryFailure = function () {
  failureMessage('New memory creation failed')
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateMemorySuccess,
  onCreateMemoryFailure
}
