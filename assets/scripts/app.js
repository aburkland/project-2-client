'use strict'
const authEvents = require('./auth/events')
const memoryEvents = require('./memory/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-memory').on('submit', memoryEvents.onCreateMemory)
  $('#view-all-memories-button').on('click', memoryEvents.onGetAllMemories)
  // $('#clear-all-memories-button').on('click', memoryEvents.onClearAllMemories)
  $('#update-memory').on('submit', memoryEvents.onUpdateMemory)
})
