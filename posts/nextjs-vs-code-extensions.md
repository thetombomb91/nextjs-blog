---
title: "4 Helpful Next.js VS Code Extensions"
description: "VS Code extensions can help you develop faster and more efficiently. Try these extensions in your development environment."
date: "2021-07-13"
categories: 
  - "nextjs"
  - "topPost"
socialImage: "https://thetombomb-public.s3.amazonaws.com/nextjsextensionbanner.png"
---

![nextjsextensionbanner.png](/images/ForPosts/nextjsextensionbanner.png)

I have been developing Next.js applications inside of VS Code for a few months now. I'd like to share 4 of the extensions I have installed that help me develop with Next.js faster. Most of these will also help in your day-to-day JavaScript development as well. 

There are few Next.js specific extensions available on the VS Code Marketplace. So if you have an idea for a Next.js extension, now is your time to shine.

## 1. [Next.js React Snippets by iJS](https://marketplace.visualstudio.com/items?itemName=iJS.reactnextjssnippets)

One of the first things I look for when starting in any new programming language or framework is code snippets. Next.js Snippets by iJS has many of the common Next.js structures that you'll be creating such as GetStaticProps() and GetStaticPaths(). It even has snippets for the Next/Image and Next/Link which I am always forgetting the syntax for.

And that is why I love snippets: **it lets me focus on development and not the small syntax nuances.** A good snippet library will also help you stick with best practices in your development. 

This snippet library paired with a good JavaScript/React, such [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) as snippet library can get you running quickly in Next.js.

## 2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This extension integrates [ESLint](https://eslint.org/) into VS Code. Next.js 11 now supports ESLint out of the box. This means simply **installing ESLint will make you aware when you break Next.js standards and best practices.**  

This means if you are on Next.js 11 you can have the ESLint extension help you find errors and warnings before you push to production. It helps to ensure you are using best practices and developing the best Next.js application you can. Another big plus of having ESLint enabled is all developers on the project will follow the same standards when developing.

See examples of ESLint in action below: Correct Image tag use & escaping apostrophes 

![Example of using wrong image tag in Next.js](/images/ForPosts/nextjswrongimage.png)

![Example of not escaping the apostrophe in a word](/images/ForPosts/eslintapostrophe.png)

## 3. [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

console.log() is cool but have you tried debugging? 

I'm guilty of using too many console.log() statements, but I am trying to get into the habit of using the debugger more often. Debugging is like console.log() but now you can **see every variable value and stop at any point in your application.** 

Trust me, it's worth it to take the time to learn how to use the debugger effectively because you won't want to go back after you do. Check this out to learn more about the [Chrome Debugger](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code).

## 4. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

This extension is something I came across more recently. What it does is **automatically rename your paired HTML tags.** If you want to change your <p> tag to a <div>. Start changing the left-hand side and it will automatically update the right-hand side as you type. Pretty nifty and great when working in your jsx or tsx files.

![Gif showing the usage of the Auto Rename Tag extension](https://raw.githubusercontent.com/formulahendry/vscode-auto-rename-tag/34e7205140ff6a00466f97ea9a09de5eb53acc6c/images/usage.gif)

There are tons of extension available on the VS Code extension marketplace. These are just a few of the ones that I use to increase my productivity. 

Did you like these VS Code extensions? Which ones have you incorporated into your development process? Let me know [@ThomasJDesmond](https://twitter.com/ThomasJDesmond)