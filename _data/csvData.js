const fs = require('fs');
const { parse } = require('csv-parse/sync');

module.exports = async function() {
  const csv = fs.readFileSync('./_data/Stantec_MABD_Export.csv', 'utf8');
  const data = parse(csv, {
    columns: true,
    skip_empty_lines: true
  });
  return data;
};