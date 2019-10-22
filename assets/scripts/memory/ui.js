'use strict'
const store = require('../store')

const successMessage = function (newText) {
  // a helper reusable function to display text
  $('#memory-message').text(newText)
  setTimeout(function () {
    $('#memory-message').text('')
  }, 4000)
  $('#memory-message').removeClass('failure')
  $('#memory-message').addClass('success')
  // reset form below so info clears from form
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#memory-message').text(newText)
  setTimeout(function () {
    $('#memory-message').text('')
  }, 4000)
  $('#memory-message').removeClass('success')
  $('#memory-message').addClass('failure')
}

const onCreateMemorySuccess = function (responseData) {
  successMessage('New memory created successfully!')
  store.memory = responseData.memory
  // console.log(store.memory)
  $('#create-memory').trigger('reset')
  // console.log(responseData)
}

const onCreateMemoryFailure = function () {
  failureMessage('New memory creation failed')
  // $('#create-memory').trigger('reset')
}

const onGetAllMemoriesSuccess = function (responseData) {
  // clear all text before showing memories or memories messaging
  $('#view-all-memories-message').text('')
  // if there are no memories, send a message to create a memory
  if (responseData.memories.length === 0) {
    $('#view-all-memories-message').text('Looks like you have ZERO good memories. Better create one so you can bask in it!')
    $('#view-all-memories-message').addClass('failure')
    $('#view-all-memories-message').append('<p></p>')
    setTimeout(function () {
      $('#view-all-memories-message').text('')
    }, 5000)
  } else {
    // put forEach function - for each memory, i want to append memory values
    responseData.memories.forEach(memory => {
      // responseData.memries is an array of memory objects
      $('#view-all-memories-message').removeClass('failure')
      $('#view-all-memories-message').append('<p>ID: ' + memory.id + '</p>')
      $('#view-all-memories-message').append('<p>Title: ' + memory.title + '</p>')
      $('#view-all-memories-message').append('<p>Date of memory: ' + memory.date + '</p>')
      $('#view-all-memories-message').append('<p>Description: ' + memory.description + '</p>')
    })
    store.memories = responseData.memories
    // console.log(store.memories)
    $('.no-display-until-view-all').show()
  }
}

const onGetAllMemoriesFailure = function () {
  $('#view-all-memories-message').text('Memory history retrieval failed')
  setTimeout(function () {
    $('#view-all-memories-message').text('')
  }, 4000)
}

const onUpdateMemorySuccess = function (responseData) {
  // successMessage('Memory updated successfully!')
  // $('#update-memory-message').txt('Memory updated successfully')
  $('#update-memory-message').text('Memory updated successfully. Retrieve your memories to view update.')
  setTimeout(function () {
    $('#update-memory-message').text('')
  }, 4000)
  $('#update-memory-message').removeClass('failure').addClass('success')
  $('#update-memory').trigger('reset')
}

const onUpdateMemoryFailure = function () {
  // failureMessage('Memory update failed')
  $('#update-memory-message').text('Memory update failed')
  $('#update-memory-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#update-memory-message').text('')
  }, 4000)
  // $('#update-memory').trigger('reset') - we don't clear forms here if failure
}

const onDeleteMemorySuccess = function (responseData) {
  $('#delete-memory-message').text('Memory deleted successfully. Please replace before depression takes over.')
  $('#delete-memory-message').removeClass('failure').addClass('success')
  setTimeout(function () {
    $('#delete-memory-message').text('')
  }, 4000)
  $('#delete-memory').trigger('reset')
}
const onDeleteMemoryFailure = function () {
  $('#delete-memory-message').text('Memory deletion failed')
  $('#delete-memory-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#delete-memory-message').text('')
  }, 4000)
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
