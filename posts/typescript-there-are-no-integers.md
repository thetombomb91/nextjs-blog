---
title: "Typescript: There are no integers! 😱"
description: "How do we deal with having no integer type in Typescript?"
date: "2020-10-08"
categories:
    - "Typescript"
---

Typescript has a few basic types. One of which is the [Number](https://www.typescriptlang.org/docs/handbook/basic-types.html#number) type. Number is meant to represent any and all numbers. What this means is the Number type is a floating-point value.

This usually is not a problem but is something you want to be aware of when performing math in Typescript. Coming from the C# .NET world where Integer and Float are two separate types, having only Number as a type can make you stop and think for a second.

I ran into this today doing some multiplication and division. Of course, I had forgotten Typescript Numbers were floating points. I did (505 \* 42) / 100 which equals 212.1. Now in my C# mind, I assumed an all integer math equation would return me an integer. My number would be automatically truncated, I would get 212 as an integer.

Nope, this was the wrong assumption. Returned to me was 212.1. And it was causing all sorts of screwy things later on in my calculations. After finding the problem, a simple Math.floor() call saved the day.

But I want to write this post to help me remember. There is no integer type in Typescript only floating-point!
