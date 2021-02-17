---
title: "Programming Better and Easier With The Happy Path"
description: "Let's take the happy path first. Their are always many cases to consider but start easy and build up from there."
date: "2017-04-18"
categories: 
  - "programming"
coverImage: "programming.jpg"
---

![Image of a laptop with code on screen](/images/forPosts/programming.jpg)

When I start down a new solution or looking at how to solve a problem one of the first things to jump into my head are all the crazy edge cases that may or may not ever occur. I see it as a blessing in disguise because, in the long run, it helps out tons to be able to think about the crazy things a user may do. But when just trying to get a proof of concept together it can make the work that much more daunting.

When putting together a proof of concept stick with the happy path. Hard code values, expect perfect reproducible input, and for the proof of concept even lower the security levels a bit. Make sure if using lowered security settings you are in some sort of development environment. Do not go lowering your security on production.

But the key is to make it as easy on yourself as possible. What if you took the happy path and find out your solution did not even work anyway? You do not want to have wasted your time making your ability to accept input the most robust known the man if your strategy to submit the code is

A more real world time when the happy path saved me much time and effort was when the team and I at work were attempting to setup up a cloud solution using AWS. We had a couple different strategies in our minds as to how to build out our cloud solution. It involved security, databases, IoT, Lambda functions. It was going to be an extensive cloud system.

First thing we did was throw security out the door. We knew it needed to be done but would only complicate things. We did not set up a database because again takes time and we had a lot of database knowledge on our team so that did not pose too much of a risk. We just hard coded the data we would receive back when we did end up making the database.

Now we could take a look at the happy path for our proof of concept. Perfect user input, interaction, no confusing security. We found that our first model would not scale well so we threw it out the door. Our second model was not easily supported due to library limitations imposed on us. Our third solution found a happy medium of ability to scale, performance, and ease of implementation. This all did not happen overnight it actually took a few weeks. But imagine if we had added the extra complexity of security or the database. It would have taken months.

Taking the happy path saved us time and frustration. The process of making application development as easy for you as possible. Ignore the edge cases, ignore security, hard code values. Made us more productive and let us explore multiple solution strategies in a shorter amount of time.
