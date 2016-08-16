#!/usr/bin/env node

const fs = require('fs')
const parseExcelFile = require('../lib')
const args = process.argv.slice(2)
const filepath = args.join(' ')

function fileExists (myDir) {
  try {
    fs.accessSync(myDir)
    return true
  } catch (e) {
    return false
  }
}

if (fileExists(filepath)) {
  parseExcelFile(filepath)
} else {
  console.log('file not found: ' + filepath)
  process.exit(0)
}

