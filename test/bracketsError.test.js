const parser = require('../src/parser');
const fs = require('fs')

test('test invalid number of brackets', () => {
  function wrapper () {
    const text = fs.readFileSync('examples/wrong/bracketsErr.js');
    return new parser().parse(text.toString());
  }
  expect(wrapper).toThrowError('Invalid command number 2 (starts at line 12)\ninvalid number of brackets');

});