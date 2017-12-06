const parser = require('../index');
const fs = require('fs');


function getParsed(path) {
    const data = fs.readFileSync(path);
    path ='test/examples/'+path;
    const parsed = (new parser().config()).parse(data.toString());
    return (JSON.stringify(parsed, undefined, 1));

}

function getSample(path) {
     path ='test/examples/samples/'+path;
    return (fs.readFileSync(path)).toString();

}

test('positive test of parsing', () => {
    fileName='getVbar.js';
 expect(getParsed(fileName)).toBe(getSample(fileName));
});