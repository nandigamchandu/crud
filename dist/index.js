
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./devfractal-crud.cjs.production.min.js')
} else {
  module.exports = require('./devfractal-crud.cjs.development.js')
}
