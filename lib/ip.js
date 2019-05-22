#!/usr/bin/env node

const os = require('os')
const chalk = require('chalk')

const netWorkInterfaces = os.networkInterfaces()
const en0 = netWorkInterfaces['en0'] || []

const log = console.log

en0.map(info => {
  const { family, address } = info || {}
  const isIPv4 = family === 'IPv4' ? true : false
  log(`${family}: ${isIPv4 ? chalk.green.bold(address) : address}`)
})

