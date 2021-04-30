---
title: "Next.js: Build Times & Incremental Static Regeneration to the Rescue"
description: "Next.js has an incredible Incremental Static Regeneration capability that can drastically improve build times and reduce the need for doing full Static Site Generation builds every time a change is made."
date: "2021-04-26"
categories: 
  - "nextjs"
  - "topPost"
socialImage: "https://thetombomb-public.s3.amazonaws.com/IncrmentalStaticRegeneration.png"
---

![Blog banner image with text Next.js incremental static regeneration](/images/ForPosts/IncrementalStaticRegeneration.png)

Static site generation is different, we are in the Jamstack world now. With it we focus on creating static content at build time that can be directly sent to our site visitors. No longer are we relying on a beefy server to handle all incoming requests. Static site generation (SSG) gives us direct access to a fast, efficient Content Delivery Network (CDN) hosted on the edge, pushing out our static content to visitors.

So if we don't need to worry so much about handling each request server side, what do we need to be worrying about?

**Build Times!**

Build times have become much more important with SSG. If we want to push out new content or fix a bug, a full build is necessary. We have to regenerate all that static content. And depending on the app's size that could take a while. A simple change to the homepage could mean rebuilding every other page just to get that change pushed out. In this article, we will learn how we can use a special Next.js feature called Incremental Static Regeneration to ease these build time concerns.

## **Scaling Build Times**

It's important to realize that build times with SSG *generally* scale linearly. I say generally because there are many factors that go into build times, but overall the more pages you have, the more time it will take to build. For an in-depth look and comparison into build times, I highly recommend this article: [Comparing Static Site Generator Build Times](https://css-tricks.com/comparing-static-site-generator-build-times/).

Some of the **scariest examples of long build times come from SSG e-commerce sites**. If you have 10,000 products, is it reasonable to generate 10,000 pages with every single build? Even if all you need to change is a spelling mistake on contact your page? Could you imagine an app with 100,000 pages?

## Incremental Static Regeneration to the Rescue

Incremental Static Regeneration (ISR) is a special feature of Next.js. **It lets us rebuild static content on a page without rebuilding the entire application.** This is amazing for SSG because a full site build is no longer required to update a single page. For our 10,000 page e-commerce site, we can regenerate a given page only when it's actually visited. 

How is this possible? Incremental Static Regeneration, inside our getStaticProps() there is a **revalidate property**. If we set it, this means ISR is turned on. It takes a number value in seconds. If we set it to 30, that means if 30 seconds has elapsed, since the last request to the page, it will re-run the getStaticProps() method and determine if new props values are returned. **If new data is returned, the pages static content is regenerated and the NEXT person to visit the page will see the new content.** 

*Notes: It is important to realize the user that started the ISR will still get the page with stale data served from the CDN. It is the **NEXT** request to the page that will be served the new static content.*

```jsx
export async function getStaticProps() {
  const topPosts = getAllPostsByCategory("topPost");
  const hobbyPosts = getAllPostsByCategory("hobby");

  return {
    props: {
      topPosts: topPosts,
      hobbyPosts: hobbyPosts,
    },
    revalidate: 30
  };
}
```

ISR is incredibly helpful when working with a Content Management System (CMS). If we have content being pulled in via getStaticProps(), when we can change content in the CMS, and it will automatically regenerate. Without even doing a build, we know that ISR will regenerate our page once someone visits it.

## Considerations when using ISR

There are a few considerations before you begin using ISR. It is powerful, but make sure that it is right for your situation.

- **Increased API calls:** It is important to think about the number of API calls ISR could create. If you set the revalidate property to 5 seconds, you have the potential to hit your API endpoint every 5 seconds. This could be something worth considering depending on API quotas, costs, & capacity.
- **Not as useful if already have quick build time:** If your application only takes a few minutes or less to build, then your build times may not be as big of a concern. Doing a full build guarantees that your new content is available on every page.
- **Stale data for ISR initiator:** I want to reiterate that the first person to your page that starts ISR will still get the old stale data. It is the second person to visit that will get the updated content.

To learn more about Incremental Static Regeneration, check out the [Complete Guide To Incremental Static Regeneration (ISR) With Next.js](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/) written by Vercel Developer Advocate Lee Robinson.