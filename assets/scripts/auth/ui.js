'use strict'
const store = require('../store')

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
  // $('.no-display').hide()
  // mimic .removeClass and .addClass for no-display and yes-display classes
  // which target an id element instead of the above .no-display class with .hide
}

const onSignUpFailure = function () {
  failureMessage('Your sign-up was unsuccessful. Please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('You are signed in!')
  store.user = responseData.user // the user object containing the user token
  $('#sign-in').trigger('reset')
  //  example $("p").hide();
  // $('#sign-in').trigger('reset')
  // $('#sign-in').hide()
  // $('#sign-in-header').hide()
  // $('#after-sign-in').hide()
  // $('#sign-up').hide()
  // $('#sign-up-header').hide()
  // $('#after-sign-up').hide()
  // $('.no-display').show()
  // $('.no-start-display').removeClass('no-start-display')
  $('.no-start-display').addClass('yes-display-after-sign-in')
  // $('.yes-start-display').removeClass('yes-start-display')
  // $('.yes-start-display').addClass('no-display-after-sign-in')
  // $('yes-start-display').removeClass('yes-start-display')
  // $('yes-start-display').removeClass('yes-start-display')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('#change-password').trigger('reset')
  // $('#game-message').text('')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('You successfully signed out. Sign in to relieve your anxiety!')
  // $('.box').text('')
  $('#game-message').text('')
  // $('.no-display').hide()
  // $('#sign-in').show()
  // $('#sign-in-header').show()
  // $('#after-sign-in').show()
  // $('#sign-up').show()
  // $('#sign-up-header').show()
  // $('#after-sign-up').show()
}

const onSignOutFailure = function () {
  failureMessage('Sign-out failed. Please try again.')
}

module.exports = {
  successMessage,
  failureMessage,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
