# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


Sources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice   to help explain and test how slice worked to implement the three sub arrays 

https://reintech.io/blog/understanding-divide-conquer-javascript   help further explain divide and conquer algorithms

https://www.youtube.com/watch?v=V1mhlWT6qcc   -  used mergesort tutorial to figure out recurrence relation and simplifying 

The recurrence relation for this function is 3t (n/3) + 1, as the array is divided into three parts with each recursive call (third1,third2,third3).
t(n) = 3t(n/3) + 1 
substitute 
3(3t(n/9)+1)1
9t(n/9) +2
substitute
9(9t(n/27)+1)+2
27t(n/27)+3
general pattern found here with constant being multiplied by i power each expansion
3^i (n/3^i) + i 
i = log₃(n)
t(n) = 3^log₃(n) (n/3^log₃(n)) + log₃(n)

 3^log₃(n) = n  using law of exponants 
n/n = 1 
n * 1 = n 
n + log₃(n)
n is the leading term here which would bring us to 
T(n) = O(n) 
Since n grows quicker than log₃(n) , this makes it grow linearly. 

 
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."


