1. The error was that num1 and num2 were being typecsted to strings and the output was a concatenation of num1 and num2 instead of its sum.
2. I fixed the error by parsing both num1 and num2 to ints before calculating result. This led to the sum of both being calculated and being stored in result, giving the accurate sum.
