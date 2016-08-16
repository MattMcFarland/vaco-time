const XLSX = require('xlsx')
const fs = require('fs')
const resolvePath = require('path').resolve
const comparator = /(\d)+(:)+(\d+)/g

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

module.exports = function parseExcelFile (filepath) {
  if (!filepath) {
    throw new Error('filepath must be valid')
  }
  fs.readFile(resolvePath(filepath), (err, data) => {
    if (err) {
      throw err
    }
    const sheet = XLSX.read(data).Sheets['Sheet 1']
    const hrs = Object.keys(sheet).reduce((sum, key) => {
      if (!sheet[key].v) {
        return sum
      }
      const cell = sheet[key].v
      const hasTime = cell.match(comparator)
      if (hasTime) {
        let time = parseInt(hasTime[0].split(':')[0])
        if (isNumeric(time)) {
          sum += time
        }
      }
      return sum
    }, 0)
    console.log(`You have worked a total of ${hrs} hours`)
  })
}
