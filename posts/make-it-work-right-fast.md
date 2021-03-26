---
title: "Make it work, Make it right, Make it fast"
description: "Incremental steps to creating quality software, first make it work, then make it right, last make it fast"
date: "2018-05-17"
categories: 
  - "programming"
  - "topPost"
socialImage: "https://thetombomb-public.s3.amazonaws.com/kentbeckquote.jpg"
---
![Wallpaper with Kent Beck Quote Make it work, Make it right, Make it fast](/images/ForPosts/kentbeckquote.jpg)


I support the software development strategy of make it work, make it right, make it fast. This is a quote from Kent Beck, common in the software industry. I interpret this quote as let us make sure our most basic solution solves the problem at hand before investing any more time than necessary.

### Make it work

Not all solutions to a problem are pretty. This may mean little to no tests, poor performance, janky code, etc. Sometimes we just need a solution to a problem that shows that the problem can be solved. We want to make sure the problem is solvable albeit with a less than desirable solution.

An example where I implement a 'make it work' solution in code, is often in the area of user input or user navigation in my applications. Instead of relying on the user, I will hard-code the exact data I want. I want to encourage a happy path solution and test my application under only the best-case scenario. This will tell me if under the most ideal conditions whether or not my solution even works. If my code does not work for this, the solution will have no hope in the edge cases and no reason to continue on with the work. I would then focus my 'make it work' code on implementing a different solution until I get it right.

Pushing code to production in the 'make it work' phase is a scary thought and something we should all strive to avoid. If you have a continuous integration (CI machine running all your tests pushing this 'Make it work' code is an option (preferably in a separate branch). However, it is important to see how it holds up to a full suite of tests.

### Make it right

If we can show the problem can be solved with a 'make it work' solution we can move onto steps to make it right. This includes tests, proper syntax, good naming conventions, extensibility, and the like.

We want to remove any hard-coded data, we want to start thinking about the edge cases, and we definitely need to have tests around the code. For testing make sure to comment out code or remove code to see a failing test. Never trust a test during this stage unless you see it failing first for the right reason.

Our code should be bulletproof at the end of the 'make it right' stage. We should not feel any hesitations about presenting this code to a user from the standpoint of introducing a bug. A 'make it right' solution should be production-ready.

### Make it fast

Now for the hard part, 'make it fast'. This is an area of software development that we often do not get the time and resources to experiment with. We just released a solution to production that works from the 'make it right' stage. It adds value to the users but we have ideas of making it even better. Often, the next bug or feature takes priority.

But let us assume we have the time. Let us assume we have the resources. We should always be thinking of ways to refactor our code and continuously improve the solutions we have.

Make it fast sounds like a performance or timing centric idea. People think "how can I get this code to run faster". But it is more than that. We should be thinking how can I make it more testable, how can I make it more extensible, **how can I make this code more valuable to the user**. Performance is important but these other areas are just as important as well.

Having time for the 'make it fast' stage is a privilege and we should always try to take advantage of it. Improving existing code is just as important as writing new code.

In the end, we want to provide software solutions to our users that provide the most value. The make it work, make it right, make it fast idea of software development can help us get there. It allows us to choose the happy path of problem-solving before even considering the often much more difficult edge cases. Make it work, make it right, make it fast provides a solid foundation for building great code.

## Make it work, make it fast, make it right -Kent Beck

For more on happy path coding, check out my previous post [Programming Better and Easier With The Happy Path.](https://thetombomb.com/2017/04/18/programming-better-and-easier-with-the-happy-path/)
