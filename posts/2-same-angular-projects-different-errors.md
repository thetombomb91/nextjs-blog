---
title: "Two Angular 10 projects, same package.json, one project has 281 vulnerabilities the other has 0"
description: "I created two brand new projects and they were acting very differently from one another. I learned my lesson on how to fix it and share that lesson here."
date: "2020-07-21"
categories: 
  - "angular"
  - "programming"
tags: 
  - "npm"
---

![npm package manager logo](/images/forPosts/npm-1024x399.png)

The other day I was messing around with Angular and upgraded a project from Angular 8 to Angular 10. I wanted to see the new hotness! Upon upgrading my fairly simple application I was hit with 281 low vulnerabilities reported when I performed an 'npm install'.

281?!? How could this be? I had zero before. Granted they are low but come on this is way too many. I scoured the internet and had trouble finding someone else who had the same issue as me. I thought to myself it must be because Angular 10 is so new.

So, I took the debugging into my own hands. I created a brand new 'ng new' project. Upgraded it to Angular 10, added all the same packages, and what do you know 0 package vulnerabilities. Two Angular 10 projects, the same set of packages, wildly different set of vulnerabilities.

This created a great deal of confusion for me. So I ended up taking the fight to Reddit. I presented my problem hoping the great ether of [Reddit](https://www.reddit.com/r/Angular2/comments/ho59al/two_projects_same_packagejson_one_project_has_281/) would be able to find a solution for me.

And you know what, they did! After a few failed attempts to fix the problem someone suggested deleting my entire node\_modules folder and the package-lock.json file. Simple stuff right, I've done this before actually on different projects. How could I have forgotten this simple trick.

**After deleting the node\_modules and the package-lock.json file. I tried 'npm install' again and behold 0, zero, goose egg, vulnerabilities.** Apparently npm is not the best at cleaning up after itself or taking the very latest packages.

Deleting node\_modules and package-lock.json to have them recreated by an 'npm install' will not solve everyones problems. But if you are seeing issues revolving around npm not pulling down the very latest versions of packages, this very well may be a good solution for you.
