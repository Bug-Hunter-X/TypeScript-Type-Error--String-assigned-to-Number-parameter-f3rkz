# TypeScript Type Error: String assigned to Number parameter

This repository demonstrates a common TypeScript type error: assigning a string to a function parameter expecting a number.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides the corrected version.

## Problem

The `add` function is designed to add two numbers. However, in the example, a string ('10') is passed as the second argument. TypeScript correctly flags this as a type error, preventing potential runtime issues.

## Solution

The solution involves ensuring that only numbers are passed to the `add` function. This can be achieved through input validation or by explicitly converting the input string to a number using `parseInt()` or similar functions.

## How to run

1. Clone this repository.
2. Navigate to the directory.
3. Compile and run the code using TypeScript compiler (tsc) and Node.js.