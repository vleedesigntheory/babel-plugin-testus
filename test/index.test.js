const babel = require('@babel/core');

const testus = require('../index');

console.log('testus', testus);

const code = `
// @testus
function sum(a,b) {
  return a+b;
}

// @testus
const sum2 = (a,b) => a+b;

// @testus
const sum3 = function(a,b) {
  return a+b;
}
`

const _code = babel.transformSync(code, {
    plugins: [
        testus
    ]
})

console.log('_code', _code);