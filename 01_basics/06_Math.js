const score =400
const balance = new Number(100)
console.log(balance)
// Number�{100}
console.log(balance.toString().length)
// 3
 
console.log(typeof balance)
// object
console.log(balance)
// Number�{100}
console.log(balance.toFixed(3))
// 100.000
const num = 29.927
console.log(num.toPrecision(2))
// 30
console.log(num.toPrecision(3))
// 29.9
console.log(num.toPrecision(1))
// 3e+1
const hundred = 10000000
console.log(hundred.toLocaleString())
// 10,000,000
console.log(hundred.toLocaleString('en-IN'))
// 1,00,00,000
console.log(Math)
// Math�{abs: �, acos: �, acosh: �, asin: �, asinh: �,��}E: 2.718281828459045LN2: 0.6931471805599453LN10: 2.302585092994046LOG2E: 1.4426950408889634LOG10E: 0.4342944819032518PI: 3.141592653589793SQRT1_2: 0.7071067811865476SQRT2: 1.4142135623730951abs: � abs()acos: � acos()acosh: � acosh()asin: � asin()asinh: � asinh()atan: � atan()atan2: � atan2()atanh: � atanh()cbrt: � cbrt()ceil: � ceil()clz32: � clz32()cos: � cos()cosh: � cosh()exp: � exp()length: 1name: "exp"arguments: (...)caller: (...)[[Prototype]]: � ()[[Scopes]]: Scopes[0]expm1: � expm1()floor: � floor()fround: � fround()hypot: � hypot()imul: � imul()log: � log()log1p: � log1p()log2: � log2()log10: � log10()max: � max()min: � min()pow: � pow()random: � random()round: � round()sign: � sign()sin: � sin()sinh: � sinh()sqrt: � sqrt()tan: � tan()tanh: � tanh()trunc: � trunc()Symbol(Symbol.toStringTag): "Math"[[Prototype]]: Object

console.log(Math.round(4.6))
// 5
console.log(Math.round(-4.6))
// -5
console.log(Math.abs(-4.6))
// 4.6
console.log(Math.sqrt(4))
// 2
console.log(Math.exp(2,2))
// 7.38905609893065
console.log(Math.floor(Math.random()*10)) 
// random number btw 0 - 9
