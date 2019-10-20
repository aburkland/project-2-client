'use strict'
const config = require('../config.js')
const store = require('../store')

// AJAX call to createMemory endpoint on server
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

module.exports = {
  createMemory,
  getAllMemories
}
