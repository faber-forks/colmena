'use strict'
const config = require('config')
const log = require('@colmena/logger')

const datasources = {}

if (config.has('mongodb') && config.get('mongodb.url')) {
  log.magenta.b('[data-sources] Configure MongoDB')
  datasources['db'] = {
    name: 'db',
    connector: 'mongodb',
    url: config.get('mongodb.url'),
  }
}

if (config.has('smtp') && config.get('smtp.host') && config.get('smtp.port')) {
  log.magenta.b('[data-sources] Configure SMTP')
  datasources['mail'] = {
    connector: 'mail',
    transports: [
      {
        type: 'smtp',
        host: config.get('smtp.host'),
        port: config.get('smtp.port'),
      },
    ],
  }
}

module.exports = datasources
