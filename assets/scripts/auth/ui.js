'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Your sign-up was successful.')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Your sign-up was unsuccessful. Please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  // console.log(responseData)
  successMessage('You are signed in!')
  store.user = responseData.user // the user object containing the user token
  $('#sign-in').trigger('reset')
  $('.no-start-display').show()
  $('.yes-start-display').hide()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('You successfully signed out. Sign in to relieve your anxiety!')
  $('.no-start-display').hide()
  $('.yes-start-display').show()
  $('.no-display-until-view-all').hide()
  $('#create-memory').trigger('reset')
  $('#update-memory').trigger('reset')
  $('#delete-memory').trigger('reset')
  $('#change-password').trigger('reset')
  $('#view-all-memories-message').text('')
  $('#memory-message').text('')
  $('#update-memory-message').text('')
  $('#delete-memory-message').text('')
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
