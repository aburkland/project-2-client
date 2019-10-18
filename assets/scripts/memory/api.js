'use strict'
const config = require('../config.js')
const store = require('../store')

// create a new memory
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

module.exports = {
  createMemory
}
