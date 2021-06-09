---
title: "Converting my blog from WordPress to Next.js"
description: "A look at the motivations to convert thetombomb.com from WordPress to Next.js. And what I learned along the way."
date: "2021-06-08"
categories: 
  - "nextjs"
  - "WordPress"
  - "topPost"
socialImage: "https://thetombomb-public.s3.amazonaws.com/WordpressToNextjs.png"
---
![Blog banner image with text Javascript GraphQL Clients](/images/ForPosts/WordpressToNextjs.png)

Early 2021, I took on fully revamping this personal blog of mine, [thetombomb.com](http://thetombomb.com). I wanted to move away from WordPress and create a statically generated site. I chose Next.js to be my static site generator. I could not be happier with the results. 

*This post is less of a how to guide and more of an explanation of the process I took to move my personal blog (the site you are on now) from WordPress to a fully static Next.js application.* 

## The motivation behind switching to Next.js

What motivated me to move away from WordPress and over to Next.js? **Speed was the number one factor**. I was getting poor Lighthouse and PageRank scores, especially in the speed category. I thought maybe I could pay for better WordPress hosting, but with free static hosting available that seemed like a waste.

Here are the PageRank scores I was seeing on my WordPress site. Look at that low performance score and long load times. 

![Light house PageRank scores from blog as a WordPress site](/images/ForPosts/oldLighthouseScores.png)


I had recently learned about static site generation (SSG) and many of my favorite developers had their blogs written using ssg. I settled on Next.js because of its ease of entry and potential to do server side rendering and SSG. Not to mention Vercel, the creators of Next.js, have a free fast hosting tier for hobby sites so it was almost a no brainer that it was time to switch off WordPress. 

Now let's look at what it took to move over.

## Next.js vs WordPress getting up and running

I do not remember everything it took to get WordPress running in 2016 but I can tell you it was A LOT faster to first live publish compared to Next.js. With WordPress I signed up for an account, chose some theming and colors, jumped into the WYSIWYG blog post editor, pressed publish and was live to the world. 

Next.js wasn't too difficult, especially with the great tutorial available for free on Vercel, but it definitely was not as simple as WordPress. The conversion from WordPress to Next.js took about a month. Granted, with Next.js I had a working site on the first day. But theming/html/layout took a LONG time. Handling code snippets, adding analytics, page navigation, all things taken for granted in WordPress, I had to set up myself in Next.js. 

Converting to Next.js was quite an undertaking. One big bonus about choosing Vercel as my hosting option is that I could push my code and have it deployed to a production instance but with a Vercel generated URL. This allowed me to keep my WordPress instance live while also having a production view of my Next.js conversion progress. This means an easy switch over in the end.

Vercel also has a nifty branching deployment feature. If you push a branch, Vercel will detect the branch and build a live site based on that branch. This has many uses, but I found it most helpful in sharing a branch with someone to get feedback before moving it into main.

Next.js had infinitely more customization, but this also means more set up. As a developer the customization was great. But for someone who just wants a blog or site up and running. WordPress may easily meet your minimal viable product (MVP). As WordPress did for me for years.

## Why Next.js is awesome

Next.js is also great because it is built on top of the React frontend framework. It has the engine of React powering it while adding tons of out of the box features on top of it. Next.js has Typescript support, image optimization, API routing, I18n, and more built into it. Next.js is the sports car built with React as its engine. The out of the box features were a major reason for choosing Next.js

So after all that work converting from WordPress to Next.js. Did I get the results I wanted? Did I see faster performance, was it more user friendly? Yes!

With Next.js, my lighthouse scores increased immensely. Check them out!

![Light house numbers with new Next.js implementation](/images/ForPosts/lighthousenumbers.png)

![Light house load times with new Next.js implementation](/images/ForPosts/lighthousetimes.png)

So how does Next.js do this? What makes Next.js so different from WordPress that now all my Lighthouse scores are in the green and some even at 100? 

Jamstack and Static Site Generation! That's really what makes Next.js so cool. Next.js is built with Jamstack in mind with static site generation (SSG).

### Jamstack

Let's jump into Jamstack. You can find a lot of information on [jamstack.org](http://jamstack.org) but Jamstack stands for the tech architecture stack of: **J**avascript, **A**PI's, and **M**arkup. These are not new technologies but combined in the right way they can provide:

- Better Performance
- Higher Security
- Scalability

These three benefits are not insignificant. Who wouldn't want all three for their applications. Let's look at how all three are possible with Jamstack.

### Better Performance

The better performance really comes down to Static Site Generation. **By using a Jamstack architecture we allow ourselves to statically generate the content for our website at build time.** That pre generated content can be beamed directly to our users. 

![Gif of a beam of light leaving Earth](/images/ForPosts/beam.gif)

In traditional web development we generate the page with each request. If our page is going to be same for every user why not genrate it once and send that static content out to our users. That's how we get the big jump in performance with Jamstack.

### Higher Security

I cannot tell you Jamstack solves ALL security issues. But it does a good job of simplifying security with the API layer in Jamstack. In the Jamstack architecture, we are using API's to gather data and pull in content during build time. This means secret keys, authentication, accounts can all live on the build server and don't need to be exposed to the client at all.

Another benefit is fewer network calls. We make the call once on our build server and we have everything we need. We do not push that responsibility down to the client. 

Jamstack doesn't remove all security risks but it's API driven architecture can bring on more simplicity.

### Scalability

Remember those static assets I've mentioned so many times now? Well, because those assets are stored directly on a CDN without a server involved scaling up is incredibly easy. Spread your assets on a world-wide network of CDN's and you are set. No upgrading beefy servers to handle more requests, the CDN's have you covered. 

So handling a few requests to a thousand requests isn't difficult for a Jamstack architected site.

With no more server to deal with, having all out content statically generated, and using API's to populate our content we get to see those benefits of performance, security, and scalability.

## So why isn't everyone using Jamstack?

If the Jamstack architecture can provide better performance, higher security, scalability, and a better developer experience, why isn't everyone using it? 

Static site generation or generating all our HTML content at build time sounds very nice. But it isn't all green grass and blue skies. It has downsides of its own. Two major drawbacks of SSG are build times and dynamic content. And when coming from WordPress to Next.js or really any frontend static site generator you leave a lot of the WordPress comforts behind. 

### Build Times

The power of SSG comes from generating all our content at build time. So what's the downside? **It is that you have to build ALL of your content at build time.** Need to make a simple style change, rebuild every page of your site. Need to publish a new page, rebuild every page of your site. This can be wasteful and time-consuming, especially for site with lots of pages. 

I've written a few blog posts about optimizing builds where you do not need to do EVERY page but still you will do some sort of build before a page reaches your users.

[Next.js: Optimizing getStaticPaths() build times with the fallback property](https://thetombomb.com/posts/nextjs-optimizing-getstaticpaths-with-fallback)

[Next.js: Build Times & Incremental Static Regeneration to the Rescue](https://thetombomb.com/posts/nextjs-build-times-and-incremental-static-regeneration)

This was a big change coming from WordPress where I could publish a post and it would be live instantly. Granted my small blog takes just over a minute to build and publish, but this is a 50 page blog. Generating thousands of product pages for an e-commerce site could take quite a while. 

But those benefits I mentioned above could make it worth it. Taking the extra time building your pages ahead of time gives you that near instant delivery when a user visits your site. It's all about tradeoffs. 

### **Dynamic Content**

Again, with SSG we are generating the pages at build time. So if we are calling out to an API that call happens once at build time not with each user request. 

This took a little for me to wrap my head around. It helped to think about a Twitter feed example. A statically generated page is not good for having a Twitter feed. We can grab all the tweets we want at build time but it will be outdated quickly, visitors won't be seeing the very latest tweets. Just what was available when we did our page generation. Our page generation could have been hours, days, weeks ago.

Pulling in CMS data at build time works well but dynamic data such as weather or a Twitter feed would still need to be done client side. Grabbing data client side is possible in Next.js, but to get the very best out of Jamstack we want to pre-render as much as possible.

### Missing WordPress comforts

Because I am a developer and enjoy the freedom to do whatever I want, I like Next.js. But that can also be overwhelming. Something that used to trivial now takes you much longer to do than once thought.

Things that took me longer to set up were Google analytics tracking for every page. For the longest time, my site was only logging the first page a user would visit. If the user navigated to another page within the site, I wouldn't see it tracked. I wrote up another blog post on how I eventually got that all working: [Setting up Google Analytics in static Next.js site, handle all page views](https://thetombomb.com/posts/google-analytics-nextjs).

Another feature that took much longer than I ever thought it should was handling code snippets on my blog posts. I wanted beautiful code snippets: syntax highlighting, line number, copyable, and more. Setting up the 3rd party packages and handling code within markdown was harder than I thought. I wrote a blog post for that experience as well: [Adding code snippets to static markdown in Next.js using react-syntax-highlighter](https://thetombomb.com/posts/adding-code-snippets-to-static-markdown-in-Next%20js).

These types of features and many more are one click install plugins in WordPress. Sometimes the ability to customize everything means you will have a lot more work ahead of you.

## Wrapping Up

My site has been 100% Next.js now for a couple months and glad I am here. I have no desire to go back to WordPress It's a bit more work to update my packages on my own, if I want special features I need to seek out and research libraries myself. But I am a developer those are find things I enjoy doing.

The benefits of a blazing a fast, reliable site definitely make it worth it. And learning about Jamstack and SGG along the way was fun as well. I have even seen my site starting to be ranked more highly on Google since being on Next.js, I attribute that fully to the increase in speed and page rendering made possible by Next.js.

Some other nifty things now that I am fully on Next.js:

- My blog is completely open source, [all files are available on GitHub](https://github.com/thomas-desmond/nextjs-blog)
    - A push to GitHub automatically builds and publishes a new production site
- All content is in markdown

### Interested in Next.js?

If you have gotten this far, you must be interested in Next.js. Vercel, the creators of Next.js, have a great tutorial to help you get started, [Next.js Getting Started.](https://nextjs.org/learn/basics/create-nextjs-app) 

It is worth noting Next.js is definitely not the only static site generator out there. There are dozens of viable Javascript options and one for almost any other language as well. I found Next.js to have the lowest barrier to entry while being fully featured as well. It is also the only one right now to support a hybrid SSG and Sever Side Rendering (SSR) site. You can choose on a page basis whether you do SSG or SSR.