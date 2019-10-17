'use strict'

let apiUrl
const apiUrls = {
  production: 'https://desolate-badlands-44499.herokuapp.com',
  development: 'http://localhost:4741' // client facing server uses - 7165
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
