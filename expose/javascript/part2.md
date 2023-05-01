# Part 2 - Lab 4 

1. Line 12 will print ``3`` this happens because the size of the array is 3 therefore the loop runs 3 times that is 0-1-2 however the value of i still updates one last time before it can no longer enter the loop and hence updates to 3 which is then printed. This happens because var was used to declare i and it exists outside the for loop.
2. Line 13 will print ``150``. This is because discountedPrice is var type and it's scope exists across the file and outside the for loop. THereofre its lates value of prices[i] * (1-discount) which is 300*(1-0.5) = 150 
3. Line 14 will print ``150`` because final price is declared as a var outside the for loop. Therefore, its current value is 300 * 0.5 the computation carried out in the last iteration of the for loop.
4. This functions returns an array: ``[50, 100, 150]``. This is the discounted price array of all prices in the input array it is simply originalPrice * 0.5 it is also rounded before pushing to the output array. 
5. This throws the following error: `` console.log(i); ReferenceError: i is not defined `` This is because i has scope only wihtin the for loop since it has been initialized with the let keyword. let essentially has block scope and hence i does not exist outside the for loop.
6. Line 13: the following error: `` ReferenceError: discountedPrice is not defined `` This is because i has scope only wihtin the for loop since it has been initialized with the let keyword. let essentially has block scope and hence i does not exist outside the for loop.
7. Line 14 will print ``150`` this is because finalPrice has block scope within the entire function and hence prints its latest value which is 300*0.5 = 150.
8. This function will return `` [50, 100, 150] `` since all the variables have block scope and push to discounted which stores the various discounted values the functions still correctly returns discounted array.
9. Line 11 does not print anything since the following error is being thrown: 
 `` finalPrice = Math.round(discountedPrice * 100) / 100;
                   ^
TypeError: Assignment to constant variable.``
This is because finalPrice is a const and its value is being reassigned from 0 which is causing an error since a const value is immutable.
10. Line 12 throws the same error  `` finalPrice = Math.round(discountedPrice * 100) / 100;
                   ^
TypeError: Assignment to constant variable.`` Since the code is still reassigning finalPrice which is a const it throws an error before the console.log(length) line is even reached.
11.  This function does not return anything and throws the following error: `` TypeError: Assignment to constant variable. `` This error comes from the same line as the earlier questions where we try and reassign value of finalPrice which is a const value. 

    ## QUESTION 2 ##
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

    ## QUESTION 3 ##
    A. '32' It simply appends 2 to the string '3' instead of adding them as numbers.
    B. 1 Js treats 3 and 2 as numbers and hence return 1 for '3' - 2.
    C. 3 is the output since it adds 0 to 3 which is read as 3 while null is read as 0. 
    D. '3null' since both '3' and null are treated as strings and hence appended to each other. 
    E. 4 this returns 4 since true is treated as a 1 and added to 3 to sum to 4. 
    F. 0 this returns 0 since the value of false is 0 as a number and it is added to a null which also converts to 0. Hence 0+0 = 0. 
    G. '3undefined' JS concatenates both '3' and undefined as as strings to give '3undefined' 
    H. NaN - when we try and subtract undefined which is not a number JS gives us NaN since we are trying to subtract from 3 a non-number value. 

    ## QUESTION 4 ##
    A. true - Js automatically converts '2' to a number and compares it to 1 and since 2 > 1 it returns true.
    B. false - because '2' has a higher unicode value than '12' and Js uses unicode values to compare two strings and the NaN character has the highest value as compared to the 2 in '12'. 
    C. true - this is because the == operator uses type coercion and brings both operands to numbers and since the number 2 is equal to 2, it returns true. 
    D. false - the ` === ` operator does not use type coercion and is a strict equality checer and returns false because 2 and '2' are of different types. 
    E. false - This returns false because ``==`` uses type coercion and treats true as 1 and hence converts it to 1 , which is not equal to 2. 
    F. true - Boolean(non zero number) is true in boolean and hence Boolean(2) is the same as true in boolean and despite === being a strict equality operator Boolean(2) is true and is hence equal to true in boolean and returns true for the entire expression. 

    ## QUESTION 5 ## 
    The `` == `` operator performs type coercion on the operands and then compares them while `` === `` is a strict equality operator and will immediately return false if the operands are of different types. THerefore == is a far more forgiving operator which can be used to compare operands of different types. 

    ## QUESTION 17
    modifyArray([1, 2, 3], doSomething) edits the passed array and returns the following: ``[2,4,6]``. Essentially it calls doSomething on every element in [1,2,3] this is because of the modifyArray function which then edits 1,2,3 to 2,4,6 by multiplying each value in it with 2 and returns the new array. Essentially, modifyArray goes through each element and callback is the function which takes in each element and modifies it appropriately.

    ## QUESTION 19
    1
    4
    3
    2
    
    


