'use strict'
const config = require('../config.js')
const store = require('../store')

// AJAX call to createMemory endpoint on server
// formData is what data was put into form fields like the title, date, desc.
// of a memory
const createMemory = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/memories',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// AJAX call to getAllMemories endpoint on server
const getAllMemories = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/memories',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// AJAX call to updateMemory endpoint on server
const updateMemory = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/memories/' + store.memory.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createMemory,
  getAllMemories,
  updateMemory
}
