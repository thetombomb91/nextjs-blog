---
title: "App Module vs 
Core Module vs 
Shared Module vs 
Feature Modules in Angular"
description: "With so many modules in Angular it can be hard to tell them apart. Let's compare all of them"
date: "2019-11-13"
categories: 
  - "angular"
  - "programming"
  - "topPost"
---

![Angular Icon](/images/ForPosts/angular.png)

Angular development best practices indicate we should break our applications into modules. Modules in Angular refer to a place where we group like components, services, directives, pipes, etc for our applications.

The easiest to think about would be Feature Modules we simply break these up by feature or domain. But what about the App Module, Core Module, & Shared Module?

What should we put into each of them? What components should live in each of them? Why do we need all of them? Let's take a look at each of the types of modules and what they are used for.

### App Module

Lets first take a look at the App Module in Angular. The App Module can also be called the root module. Every app must contain at least one module and that is the App Module. We launch our applications by bootstrapping the root module.

We want to keep our App Module pretty compact. There should not be a lot of content in the App Module or App Component. We want to encapsulate our application into domain-specific modules, the Core Module, & the Shared Module, which we will look into now.

### Core Module

The Core Module is where we want to put our shared singleton services. So the services that we want only one instance of while having them shared among multiple modules should live here.

The Angular injector creates a new instance of a service for each lazily loaded module that it is provided in. We want to keep our singleton services in the core module so only one instance is ever created. We do not want to spread them out in our feature modules.

Another piece of our application that should live in the Core Modules are app-level components. A good example of an app-level component would be the navigation bar. Only the app needs to know about our navigation component.

We do not want to put components used throughout the application inside of the Core Module. We have the Shared Module for that and we will look at that now.

## Shared Module

The Shared Module is where we want everything to live that is shared throughout the application. Components, directives, guards, & pipes can all live in the Shared Module.

An example of something commonly found in the shared module would be a loading spinner. If you have any other components that you want to be distributed throughout your application the shared module is where you want to keep them.

It is also common to import and export Angular built modules inside your Shared Module if you need to access them in multiple locations. Because Shared is imported into many of your Feature Modules it's common to import/export Common Module or Angular Material modules. Import/Export the modules once in Shared Module and now anyone that imports Shared will have access to them.

### Feature Modules

Applications commonly have multiple Feature Modules. Depending on the size of your application you may have A LOT of Feature Modules. Breaking things up into domain-specific areas can help in the long run for development.

One of the main reasons to break your features up into different modules is lazy loading. If you want to learn more about lazy loading check out the Angular documentation on [Lazy Loading Feature Modules](https://angular.io/guide/lazy-loading-ngmodules).

![Laptop Code](/images/ForPosts/laptopWithCode.jpg)

Now you have a better understanding of how to separate your different modules in Angular. For more on modules check out the [Angular Introduction to Modules](https://angular.io/guide/architecture-modules).

For more frontend developer content, check me out on Twitter [@ThomasJDesmond](https://twitter.com/ThomasJDesmond).