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
  // may need to remove successMessage and target html element where success
  // message should appear
  successMessage('New memory created successfully!')
  store.memory = responseData.memory
  console.log(store.memory)
  $('#create-memory').trigger('reset')
  // console.log(responseData)
}

const onCreateMemoryFailure = function () {
  // may need to remove successMessage and target html element where failure
  // message should appear
  failureMessage('New memory creation failed')
  // $('#create-memory').trigger('reset')
}

const onGetAllMemoriesSuccess = function (responseData) {
  // clear all text before showing memories or memories messaging
  $('#view-all-memories-message').text('')
  // if there are no memories, send a message to create a memory
  if (responseData.memories.length === 0) {
    $('#view-all-memories-message').text('You have zero good memories. Better create one first!')
  }
  // put forEach function - for each memory, i want to append memory values
  responseData.memories.forEach(memory => {
    // responseData.memries is an array of memory objects
    // $('#view-all-memories').append('<div id=' + memory.id + '</div>')
    $('#view-all-memories-message').append('<p>' + 'ID: ' + memory.id + '</p>')
    $('#view-all-memories-message').append('<p>' + 'Title: ' + memory.title + '</p>')
    $('#view-all-memories-message').append('<p>' + 'Date of memory: ' + memory.date + '</p>')
    $('#view-all-memories-message').append('<p>' + 'Description: ' + memory.description + '</p>')
  })
  store.memories = responseData.memories
  console.log(store.memories)
  $('.no-display-until-view-all').show()
}

const onGetAllMemoriesFailure = function () {
  $('#view-all-memories-message').text('Memory history retrieval failed')
}

const onUpdateMemorySuccess = function (responseData) {
  // successMessage('Memory updated successfully!')
  // $('#update-memory-message').txt('Memory updated successfully')
  $('#update-memory-message').text('Memory updated successfully')
  $('#update-memory-message').removeClass('failure').addClass('success')
  $('#update-memory').trigger('reset')
}

const onUpdateMemoryFailure = function () {
  // failureMessage('Memory update failed')
  $('#update-memory-message').text('Memory update failed')
  $('#update-memory-message').removeClass('success').addClass('failure')
  // $('#update-memory').trigger('reset') don't clear forms if failure
}

const onDeleteMemorySuccess = function (responseData) {
  $('#delete-memory-message').text('Memory deleted successfully. Please replace before depression takes over.')
  $('#delete-memory-message').removeClass('failure').addClass('success')
  $('#delete-memory').trigger('reset')
}
const onDeleteMemoryFailure = function () {
  $('#delete-memory-message').text('Memory deletion failed')
  $('#delete-memory-message').removeClass('success').addClass('failure')
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateMemorySuccess,
  onCreateMemoryFailure,
  onGetAllMemoriesSuccess,
  onGetAllMemoriesFailure,
  onUpdateMemorySuccess,
  onUpdateMemoryFailure,
  onDeleteMemorySuccess,
  onDeleteMemoryFailure
}
