const parser = require('../src/parser');
const fs = require('fs')

test('test invalid number of brackets ()', () => {
  function wrapper () {
    const text = fs.readFileSync('examples/wrong/pca_brackets.js');
    return new parser().parse(text.toString());
  }
  expect(wrapper).toThrowError('Invalid command number 4 (starts at line 12)\ninvalid number of brackets');

});

test('test invalid number of braсes {}', () => {
  function wrapper () {
    const text = fs.readFileSync('examples/wrong/getVbar_brackets.js');
    return new parser().parse(text.toString());
  }
  expect(wrapper).toThrowError('Invalid command number 0 (starts at line 9)\nUnexpected token } in JSON at position 13');
});