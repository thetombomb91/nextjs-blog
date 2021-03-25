---
title: "const in JavaScript is weird! The non-immutable const."
description: "const acts different in Javascript than I am used to in C#"
date: "2020-08-21"
categories: 
  - "programming"
---
[//]: # (TODO: I think code samples are making UI terrible on small screen sizes)


Const variables in JavaScript have a behavior that I would not expect. Coming from a .NET/C# background const, behaves quite a bit differently than what I was used to.

Looking at the developer documentation for JavaScript, the declaration of a **const** "creates a constant whose scope can be either global or local to the block in which it is declared" ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#:~:text=The%20const%20declaration%20creates%20a,variable%20identifier%20cannot%20be%20reassigned.&text=A%20constant%20cannot%20share%20its,variable%20in%20the%20same%20scope.)). That sounds all normal; well because it is so far.

As we read further, we get to this line: "The **`const` declaration** creates a read-only reference to a value. It does **not** mean the value it holds is **immutable**—just that the variable identifier cannot be reassigned." The VERY important piece here is that the **VALUE IS NOT IMMUTABLE**.

Immutable? What the heck does immutable mean? Well, if an object is immutable, for that instance the properties cannot be changed. But since **const** objects are NOT immutable; it means that a **const** object can have its _properties_ changed within it.

That's just how it is and we have to work with it but if you come from the C# world and you think of a **const** never changing, be prepared for a **const** to be non-immutable in JavaScript.

### Valid Example

Looking at a code example, this is a **valid** usage of const where we change the non-immutable value of an underlying property.

```
// Our const object
const myObject = {
  name: 'Thomas',
  age: 99,
  country: 'US'
};

// Even though myObject is a a const we are allowed to change the properties within it
myObject.name = 'TomBomb'; 
```

Example of valid usage of const in JavaScript

### Invalid Example

Now, it wouldn't be called **const** if everything was not constant about our objects. In the docs, we see that "the variable identifier cannot be reassigned". What this means is that we cannot _completely_ reassign our **const** reference.

The following code is an example of what we **CANNOT** do with a **const**:

```
// Our const object
const myObject = {
  name: 'Thomas',
  age: 99,
  country: 'US'
};

let secondObject = {
  name: 'Chad',
  age: 70,
  country: 'CA'
}

// This is NOT allowed. We cannot reassign a const like this
myObject = secondObject; 
```

Example of a invalid reassign of const

**const** in JavaScript made me uneasy at first. The ability to change properties within a **const** was a new concept to me. However, I took the time to learn about it and understand it. I hope that after this **const** is a little less scary for you as well.

![programming on a macbook](/images/ForPosts/emile-perron-xrVDYZRGdw4-unsplash-1-1024x576.jpg)
