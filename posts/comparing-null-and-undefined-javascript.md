---
title: "Comparing null and undefined in JavaScript"
date: "2020-09-04"
categories: 
  - "javascript"
  - "programming"
---

![](/images/ForPosts/null.png)

When first learning JavaScript I came across a new value _**undefined**_. I was familiar with and understood _**null**_ because of my .NET background but had never seen **undefined**. Let's take a deeper look at null and undefined in JavaScript.

## null in JavaScript

According to the JavaScript documentation: "The value _**null**_ represents the **intentional** absence of any object value" ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)). null represents that there is no value, and it is important to not miss the intentional aspect.

A value cannot be null unless it has specifically been assigned null. Let's look at some code:

<script src="https://gist.github.com/thetombomb91/4e107ffcac0d9f1d0c47d05bedf29dc8.js"></script>
Example of null

Above, on line 1 we are setting our value to null. null is powerful and something commonly found in code. There is even a [null object design pattern](https://sourcemaking.com/design_patterns/null_object).1

## undefined in JavaScript

"A variable that has not been assigned a value is of type `**undefined**`" ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)). If we declare a variable but do not assign a value to it, its value is undefined.

https://gist.github.com/thetombomb91/9e4529409793e0c8ba683916e13cd6c5

Example of undefined

Since we didn't assign a value to temp on line 1 it is **undefined**.

"A method or statement also returns **`undefined`** if the variable that is being evaluated does not have an assigned value." So we would see undefined if we access a property on an object that does not exist or does not contain a value.

https://gist.github.com/thetombomb91/7ed6b39f4b48c2469ea86356e5c53c96

Example of undefined object property

We don't need to be scared of undefined it just means the variable has never been assigned or does not exist.

## null vs undefined equality gotcha

There is a bit of a gotcha when thinking about equality of null vs undefined. Let's look at examples:

https://gist.github.com/thetombomb91/3a3ced32798328d1d6e1f4e77a95bb1f

null vs undefined equality example

In the first strict equal (===) case, we get false returned. This is because both null and undefined evaluate to false **BUT** they are different object types. null is of type object while undefined is simply of type undefined.

![](/images/ForPosts/pngfuel.com_.png)

That is why the second case of only loosely equal (==) we get true coming back. It's important to realize the distinction that null & undefined are different types.

Having come from a .NET background I had not seen _undefined_ before. With a little research and playing around with code, it all came together. I encourage you to open up your console window now and mess around a little with null and undefined!
