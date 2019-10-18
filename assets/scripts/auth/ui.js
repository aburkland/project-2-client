'use strict'
// const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Your sign-up was successful.')
  $('#sign-up').trigger('reset')
  $('.no-display').hide()
}

const onSignUpFailure = function () {
  failureMessage('Your sign-up was unsuccessful. Please try again.')
  $('#sign-up').trigger('reset')
}
module.exports = {
  successMessage,
  failureMessage,
  onSignUpSuccess,
  onSignUpFailure
}
