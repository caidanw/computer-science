/*
 * Returns either the index of the location in the array,
 * or -1 if the array did not contain the target.
 */
function binarySearch(arr: number[], target: number): number {
  let min = 0;
  let max = arr.length - 1;

  // Iterate until either the guess is found or we have no guesses left
  while (min <= max) {
    let guess = Math.floor((min + max) / 2);
    // console.log(`Min: ${min} Max: ${max} Guess: ${guess}`);

    if (arr[guess] === target) return guess;
    else if (arr[guess] < target) min = guess + 1;
    else max = guess - 1;
  }

  // Target is not present in the array
  return -1;
}

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const isPrime = (num: number) =>
  console.log(`Number ${num} at index`, binarySearch(primes, num));

isPrime(13);
isPrime(37);
isPrime(61);
isPrime(89);
isPrime(102);
