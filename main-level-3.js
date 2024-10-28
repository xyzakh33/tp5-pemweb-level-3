import { factorial } from './factorial.js';
import { fibonacci } from './fibonacci.js';

const numFactorial = 5;
console.log(`Faktorial dari ${numFactorial} adalah ${factorial(numFactorial)}`);

/**
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

const numFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numFibonacci} adalah:`);

let fibonacciSequence = [];
for (let i = 0; i <= numFibonacci; i++) {
    fibonacciSequence.push(fibonacci(i));
    console.log(`[ ${fibonacciSequence.join(', ')} ]`);
}

/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen  10 adalah:
 * [ 0 ]
 * [ 0, 1 ]
 * [ 0, 1, 1 ]
 * [ 0, 1, 1, 2 ]
 * [ 0, 1, 1, 2, 3 ]
 * [ 0, 1, 1, 2, 3, 5 ]
 * [ 0, 1, 1, 2, 3, 5, 8 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */

