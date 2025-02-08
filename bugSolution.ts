function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const bNum = typeof b === 'string' ? parseInt(b, 10) : b;  // type guard and conversion
  if (isNaN(bNum)) {
    throw new Error('Invalid input: b must be a number or a parsable string');
  }
  return a + bNum;
}

const result1 = add(5, 10); // Correct: Numbers only
console.log(result1); // Output: 15

const result2 = addSafe(5, '10'); // Correct: Handles string input
console.log(result2); // Output: 15

const result3 = addSafe(5, 'abc'); //Throws an error because 'abc' is not a number
console.log(result3); // Throws error: Invalid input: b must be a number or a parsable string