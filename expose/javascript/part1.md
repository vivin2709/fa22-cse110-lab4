# Part 1 - Answers Lab 4

1. Line 9 prints the following line: ``values added:  20``
2. Line 13 prints the following: ``final result:  20``
3. Line 9 prints the following: ``values added:  20``
4. Line 13 throws the following error: ``ReferenceError: result is not defined`` this happens because result is no longer in scope since we used let instead of var, the scope of result ended on line 6 with the if block.
5. The following code throws the following error : `` result = num1 + num2; TypeError: Assignment to constant variable.`` This happens because we are trying to assign a const value, const in Js works like final in Java and is basically read - only constant values and cannot be edited by our code while line 4 tries to do that.
6. Nothing is printed ny line 13 due to the same error from the following line: `` result = num1 + num2;`` since an assignment to a const value is an error the rest of the lines do not run.