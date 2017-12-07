const os = require('os');
const LineMapper = require('../src/utils/lineMapper');
const fs = require('fs')
function getScript(fileName) {
    let path = 'examples/' + fileName;
    return fs.readFileSync(path).toString();
}
let scripts = getScript('set.js');
test('positive test of command mapping', () => {
   
     expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 0)).toBe(1);

  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 3)).toBe(12);
  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 5)).toBe(16);

  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 1)).toBe(3);
  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 2)).toBe(3);
});

test('negative test of command mapping', () => {
   expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), -1)).toBe(-1);
  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 100)).toBe(-1);

  expect(LineMapper.findLineOfCommandStart(scripts.split(os.EOL), 20)).toBe(-1);
});
