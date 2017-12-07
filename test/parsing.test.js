const parser = require('../index');
const fs = require('fs');


function getParsed(fileName) {
    let path = 'examples/' + fileName;
    const data = fs.readFileSync(path);
    const parsed = (new parser().config()).parse(data.toString());
    return  (JSON.stringify(parsed, undefined, 1));

}

function getSample(fileName) {
    let path = 'examples/samples/' + fileName;
    return (fs.readFileSync(path).toString());

}

test('positive test of parsing getVbar.js', () => {
    const fileName = 'getVbar.js';
    expect(getSample(fileName)).toBe(getParsed(fileName));
});

test('positive test of parsing getDeps.js', () => {
    const fileName = 'getDeps.js';
    expect(getParsed(fileName)).toBe(getSample(fileName));
});

test('positive test of parsing pca.js', () => {
    const fileName = 'pca.js';
    expect(getParsed(fileName)).toBe(getSample(fileName));
});

test('positive test of parsing feedView.js', () => {
    const fileName = 'feedView.js';
    expect(getParsed(fileName)).toBe(getSample(fileName));
});

test('positive test of parsing rssTimeLine.js', () => {
    const fileName = 'rssTimeLine.js';
    expect(getParsed(fileName)).toBe(getSample(fileName));
});

test('positive test of parsing getTimeSerie.js', () => {
    const fileName = 'getTimeSerie.js';
    expect(getParsed(fileName)).toBe(getSample(fileName));
});