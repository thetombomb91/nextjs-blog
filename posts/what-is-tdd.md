---
title: "What is Test-Driven Development (TDD)?"
date: "2019-10-22"
categories: 
  - "programming"
  - "test-driven-development"
---

At my organization, we utilize test-driven development (TDD) to develop our software. To get a better understanding of TDD myself, I want to put together a post about what is test-driven development.

#### What Is a Test?

Before jumping straight into TDD let's define what a test is. A test is something that verifies that our code works as we expect it to. Typically, this is a procedure or method that executes and asserts that a given valid response is received.

With a test, we verify that our code solves the problem it was intended to solve. That given a particular set of inputs and setup we get back the responses or see the changes that we would expect.

#### What is Test-Driven Development?

![Test Driven Development](/images/ForPosts/tdd.png)

_"_ TDD can be defined as a programming practice that instructs developers to write new code only if an automated test has failed._"_ [Guru99](https://www.guru99.com/test-driven-development.html)

The above definition is from [Guru99](https://www.guru99.com/test-driven-development.html). Let's break it down and I will put TDD into my own words.

The code we develop is driven forward by our test hence, Test-driven development. We write our test first before the implementation has been written. Making sure the test fails and for the right reason. Our test asserts proper functionality. Our test should satisfy the requirements of the software.

We then write the code that makes the test pass. This means our production code is already under test because we wrote the test first.

#### Red Green Refactor

Red Green Refactor is an important concept in TDD. Above I described how we wrote a failing test this is the **red**. Then we wrote the actual implementation code to make the test pass this is the **green**.

We have made it to the **refactor** step. Now that we have code written that is tested we can feel comfortable to refactor it. Maybe we see code duplication or any number of code smells.

With the tests backing us up, we can feel comfortable modifying the code running our tests and ensuring we are still green.

![Flow diagram of red, green, refactor](/images/ForPosts/red-green-refactor.jpg)

The simple definition of Test-Driven Development is that we write our tests first. The code is tested from the very beginning. We gain the confidence to refactor and improve our code.

Expect more posts on TDD as I expand my own knowledge of test-driven development!
