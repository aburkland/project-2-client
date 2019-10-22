'use strict'
const authEvents = require('./auth/events')
const memoryEvents = require('./memory/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1 // January is 0!
const yyyy = today.getFullYear()
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

const todayDate = yyyy + '-' + mm + '-' + dd
// document.getElementById('today-date-max-test').setAttribute('max', todayDate)

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-memory').on('submit', memoryEvents.onCreateMemory)
  $('#view-all-memories-button').on('click', memoryEvents.onGetAllMemories)
  // $('#clear-all-memories-button').on('click', memoryEvents.onClearAllMemories)
  $('#update-memory').on('submit', memoryEvents.onUpdateMemory)
  $('#delete-memory').on('submit', memoryEvents.onDeleteMemory)
  document.getElementById('today-date-max-create').setAttribute('max', todayDate)
  document.getElementById('today-date-max-update').setAttribute('max', todayDate)
})
