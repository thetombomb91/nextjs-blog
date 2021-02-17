---
title: "Stubbing location.reload in Angular for Jasmine Tests"
date: "2020-09-09"
description: "location.reload was giving me all sorts of trouble in my tests. Let's look how I fixed it."
categories: 
  - "angular"
  - "javascript"
  - "programming"
  - "topPost"
---

![Jasmine test logo](/images/forPosts/jasmine-1024x1020.png)

Today I ran into a new problem in my Angular application. My Jasmine unit tests were running FOREVER. Every time the tests finished they just kept running again and again. I reached 1505 out of 490 unit tests run. I was very confused! location.reload was the problem!

After finding the exact tests that were the culprit. (Thank you small commits!) It was narrowed down to a **location.reload()** call in my production Angular component code that was causing the issue.

So let's jump into how to handle a location.reload() in our production code from our tests. _Note: I did not want/need to test my location.reload(), I just wanted to get past it, essentially ignore it._

* * *

#### Step One

First off, we need to **move our location.reload() call, from our production code, into its own function**. We do this because it makes it MUCH easier for us to stub out a component level function in our test. So here we made a simple reloadPage function.

```
  reloadPage() {
    location.reload();
  }
```

The reloadPage function in our production code simply calling location.reload()

#### **Step Two**

Next up, we go to our tests. I am assuming you already have your tests set up, most importantly getting an instance of your component under test. **We can now reassign our reloadPage function to an empty function**.

```
  it('should do the thing we want', () => {
    component.reloadPage = function() { };
    // Rest of our test goes here
    
  });
```

Stubbing out our reloadPage call so location.reload() is not called

In the above code, we are stubbing out or overriding the function reloadPage from our component. In this test, reloadPage no longer calls **location.reload()**. It will call our empty function instead, thus doing nothing. We have essentially removed the **location.reload()** call from this test or more appropriately stubbed reloadPage out.

_Again Note: In my situation, I did not want/need to test location.reload() with this test. I simply wanted to get past it, essentially ignore it._

After making these changes, the tests ran as expected. No more 1505 out of 490 tests. I hope this helped and if it did leave a comment!

For more interesting JavaScript related posts check out [const in JavaScript is weird! The non-immutable const.](https://www.thetombomb.com/2020/08/21/const-in-javascript-is-weird-the-non-immutable-const/)
