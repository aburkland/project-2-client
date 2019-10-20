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
  $('#create-memory').trigger('reset')
  // console.log(responseData)
}

const onCreateMemoryFailure = function () {
  // may need to remove successMessage and target html element where failure
  // message should appear
  failureMessage('New memory creation failed')
  // $('#create-memory').trigger('reset')
}

const onGetAllMemoriesSuccess = function (response) {
  // $('#view-all-memories').text(response.memories)
  // put forEach function - for each memory, i want to append memory values
  $('#view-all-memories').text('')
  response.memories.forEach(memory => {
    // $('#view-all-memories').append('<div id=' + memory.id + '</div>')
    $('#view-all-memories').append('<p>' + 'ID: ' + memory.id + '</p>')
    $('#view-all-memories').append('<p>' + 'Title: ' + memory.title + '</p>')
    $('#view-all-memories').append('<p>' + 'Date of memory: ' + memory.date + '</p>')
    $('#view-all-memories').append('<p>' + 'Description: ' + memory.description + '</p>')
  })
  successMessage('Your memories are displayed below')
}

const onGetAllMemoriesFailure = function () {
  failureMessage('Memory history retrieval failed')
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateMemorySuccess,
  onCreateMemoryFailure,
  onGetAllMemoriesSuccess,
  onGetAllMemoriesFailure
}
