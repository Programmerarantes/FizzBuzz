const result = FizzBuzz(123);
console.log(result);

function FizzBuzz(input) {
  if (typeof input !=='number'){
    return 'Not a number';
  } else if ((input % 3 === 0) && (input % 5 === 0)) {
    return 'FizzBuzz';
  } else if (input % 3 === 0) {
    return 'Fizz';
  } else if (input % 5 === 0) {
    return 'Buzz';
  } else {
    return input;
  }
}