/* rounds a number down to the nearest integer  */
console.log(Math.floor(2.4)) // 2
console.log(Math.floor(1.999999)) // 1
console.log(Math.floor(10.5)) // 10

/* rounds a number up to the next largest integer  */
console.log(Math.ceil(0.000000000000000001)) // 1
console.log(Math.ceil(0) )// 0
console.log(Math.ceil(10.5)) // 11

/* get a random number n where 0 <= n < 1 */
console.log(Math.random()) //  0.3594237846698176
 
// Returns a random integer from 0 to 50:
console.log(Math.floor(Math.random() * 50)) // 43

/* rounds to the nearest integer  */
console.log(Math.round(0.2)) // 0
console.log(Math.round(10.5)) // 11
console.log(Math.round(1.9) )// 2

/*  get the integer part of a number */
console.log(Math.trunc(1.000000001)) // 1
console.log(Math.trunc(10.5)) // 10
console.log(Math.trunc(4.999999)) // 4

/*  get the sign of a number  */
console.log(Math.sign(-4.5)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(10)) // 1

/*  get the value of a num1 to the power of a num2  */
console.log(Math.pow(2,3)) // 8
console.log(Math.pow(1,10)) // 1
console.log(Math.pow(10,3)) // 1000

/*  get  the square root of a number */
console.log(Math.sqrt(16)) // 4
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(25)) // 5

/*  get  the cubic root of a number */
console.log(Math.cbrt(8)) // 2
console.log(Math.cbrt(27)) // 3
console.log(Math.cbrt(64)) // 4

/*  get  the base 2 logarithm of a number */
console.log(Math.log2(2)) // 1
console.log(Math.log2(8)) // 3
console.log(Math.log2(16)) // 4

/*  get  the smallest num of the given numbers */
console.log(Math.min(2, 4, 6, 8)) // 2
console.log(Math.min(...[20, 10, 100, 70])) // 10
console.log(Math.min(7, "Aya", "Bouchiha", 3)) // NaN
console.log(Math.min()) // Infinity

/*  get  the biggest num of the given numbers */
console.log(Math.max(2, 4, 6, 8)) // 8
console.log(Math.max(...[20, 10, 100, 70])) // 100
console.log(Math.max(7, "Aya", "Bouchiha", 3)) // NaN
console.log(Math.max()) // -Infinity

/*  get  the absolute value of the given number */
console.log(Math.abs(-2)) // 2 
console.log(Math.abs(0))  // 0
console.log(Math.abs(4.5)) // 4.5
console.log(Math.abs('')) // 0
console.log(Math.abs(null)) // 0
console.log(Math.abs([])) // 0
console.log(Math.abs('Aya Bouchiha')) // NaN
console.log(Math.abs([1, 2, 3, 4])) // NaN
console.log(Math.abs({})) // NaN 
console.log(Math.abs()) //  NaN
console.log(Math.abs(undefined)) // NaN

/*  get  the tangent of an angle(radians) */
console.log(Math.tan(1)) // 1.5574077246549023
console.log(Math.tan(2)) // -2.185039863261519
console.log(Math.tan()) // NaN
console.log(Math.tan('')) // 0

/*  get  the sine of an angle(radians) */
console.log(Math.sin(2)) // 0.9092974268256817
console.log(Math.sin(1)) // 0.8414709848078965
console.log(Math.sin()) // NaN
console.log(Math.sin('')) // 0

/*  get  the cosine of an angle(radians) */
console.log(Math.cos(2)) // -0.4161468365471424
console.log(Math.cos(1)) // 0.5403023058681398
console.log(Math.cos()) // NaN
console.log(Math.cos('')) // 1

/*  get  e ^ givingNum */
console.log(Math.exp(-1)) // 0.36787944117144233
console.log(Math.exp(0)) // 1
console.log(Math.exp(2)) // 7.38905609893065

/* PI */
const Pi = Math.PI
const CalculateAreaOfACircle = radius => Math.round(Pi* (radius ** 2));
console.log(Pi) // 3.141592653589793
console.log(CalculateAreaOfACircle(4)) //  50

/* Euler's numbe */
const e = Math.E
console.log(e) // 2.718281828459045

/* natural logarithm of 2 */
console.log(Math.LN2) // 0.6931471805599453

/* By Aya Bouchiha */
