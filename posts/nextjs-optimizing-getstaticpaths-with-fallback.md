---
title: "Next.js: Optimizing getStaticPaths() build times with the fallback property"
description: "The fallback property of getStaticPaths() has three values: false, true, & blocking. Learn how to use the fallback property to improve your static site generation build times in Next.js."
date: "2021-05-04"
categories: 
  - "nextjs"
socialImage: "https://thetombomb-public.s3.amazonaws.com/nextjsandfallback.png"
---
![Blog banner image with text Next.js incremental static regeneration](/images/ForPosts/nextjsandfallback.png)

getStaticPaths() is one of our Static Site Generation (SSG) functions unique to Next.js alongside getStaticProps(). **getStaticPaths() is used for our dynamic routes**, with it we define a list of paths that should be rendered to HTML at build time. 

An example of using getStaticPaths() for dynamic routes is for the blog posts on this blog. I do not create a page for every single post. I store all the markdown files for these posts in a specific location. I then point my getStaticPaths() to that location in the file system and it generates the routes dynamically to each of my posts with that information. 

**TLDR: The fallback property of getStaticPaths() can be used to not generate all of your dynamic pages during the initial build. You can generate only your most popular pages, then wait for the other dynamic routes to be accessed before generating them.** Read on to learn how to do this, and all the different options available. 

```jsx
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}
```

## The Fallback Property

You may have noticed the fallback property on line 5 of the code snippet above. This is a required field of getStaticPaths() and it is what can help us improve our build times. **The fallback property can have 3 values: false, true, blocking.** Let's dive into what each of these do and how it can help us with our build times. 

### fallback: false

```jsx
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
```

Fallback: false is probably the least complicated setting for the fallback property. **If a user attempts to visit a page that does not exist, this will cause a 404 page.** I use the fallback false setting for my blog posts because I have a relatively low number of posts. There is not a major impact to my build times by generating all of my posts.

**fallback: false is what we want to use if we plan on generating ALL of our dynamic paths during build time.** 

### fallback: true

```jsx
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}
```

Fallback: true is where things start getting more interesting. Just like the false case, all paths returned by getStaticPaths will be generated to HTML during build time. **But any path NOT generated during build time will NOT result in an automatic 404 page.** 

Next.js will serve the user a fallback version of the page, essentially a temporary page you create, while in the background Next.js generates the page. When the users attempts to visit a dynamic route that has not yet been generated, Next.js will generate that page, run getStaticProp() for it, and display the page to the user once it is generated. During the build process, a fallback version of the page is displayed to the user. 

Once a page has been generated, it is put into the pool of all generated pages. So this generation process only happens on the first time a page is accessed. This means a good use case for this would be to **generate only your most popular pages and leave your less popular ones to be generated once they are actually visited for the first time.** 

Below is a very simple sample of a fallback page. A more advanced fallback page could be a skeleton loading screen. Essentially, you check on the router status, **if isFallback is true** you display your loading fallback page. 

```jsx
// Simple fallback page example
function Post({ post }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Render post...
}
```

Fallback true is great when you do not want to generate all of your dynamic routes. If you were an e-commerce application, you could generate your top 500 pages and leave all other pages to be generated only when they are visited for the first time. 

### fallback: blocking

```jsx
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: blocking,
  };
}
```

Fallback blocking is like true in that paths that have not yet been generated will NOT result in a 404 page. The difference is that there is no fallback page displayed to users. Next.js blocks or waits for the page to be generated before displaying anything to the user. Again, once the page has been generated, it will be cached and all future visits will get the generated page.  

With blocking the first visit that starts, the generation will perform much like Server Side Rendering (SSR), because it waits for the page to fully load before rendering. 

Because the user sees nothing while waiting for the page to load in the blocking scenario; it's not recommended to be used with pages that will take a long time to load. Fallback true would be a better user experience because they would at least see a loading spinner or skeleton page as they wait.

## Conclusion

getStaticPaths() allows us to create dynamic routes in our statically generated Next.js applications. The fallback property of getStaticPaths() can be powerful and be used to improve build times drastically. For each page where you use getStaticPaths() consider all your options: false, true, & blocking. 

For even more information about the fallback property, check out the [documentation on Nextjs.org](https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required).

If you have any thoughts or questions, I encourage you to reach out to me on Twitter: [@ThomasJDesmond](https://twitter.com/ThomasJDesmond).