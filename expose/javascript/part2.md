# Part 2 - Lab 4 

1. Line 12 will print ``3`` this happens because the size of the array is 3 therefore the loop runs 3 times that is 0-1-2 however the value of i still updates one last time before it can no longer enter the loop and hence updates to 3 which is then printed. This happens because var was used to declare i and it exists outside the for loop.
2. Line 13 will print ``150``. This is because discountedPrice is var type and it's scope exists across the file and outside the for loop. THereofre its lates value of prices[i] * (1-discount) which is 300*(1-0.5) = 150 
3. 