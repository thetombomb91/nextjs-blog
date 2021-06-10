---
title: "Consider these 4 JavaScript GraphQL clients for your next project"
description: "Let's dive into a comparison of popular JavaScript GraphQL clients: Apollo Client, Relay, GraphQL-Request, & Nanographql"
date: "2021-03-25"
categories: 
  - "graphql"
  - "edge"
socialImage: "https://thetombomb-public.s3.amazonaws.com/javascriptGraphQLClients.png"
---

***Apollo Client vs Relay vs GraphQL-Request vs Nanographql***

![Blog banner image with text Javascript GraphQL Clients](/images/ForPosts/javascriptclientbanner.png)


If your question is: *What GraphQL client should I choose for my JavaScript project?* You have come to the right place. There are many JavaScript clients available to choose from. I want to make your decision of picking one easier.

*I encourage you to read the full article* but if you need the quickest answer. **I recommend Apollo Client because of its popularity and full feature set. However, if you do not need caching or package size is a concern GraphQL-Request is my second choice.**

Also, one of the first places I started when learning about GraphQL was here, [awesome-graphql](https://github.com/chentsulin/awesome-graphql), a curated list of GraphQL resources. If you go there, you can a ton of resources to learn about GraphQL. But what I want to focus on is specifically the different JavaScript clients available.

## Do I need a GraphQL client?

GraphQL clients provide a layer of abstraction. **Clients let you focus on what is important to you: getting the data & displaying that data in the UI.** Under the hood, most GraphQL requests are making a POST request over HTTP to your endpoint, but can include many more helpful features along the way.

### The top GraphQL Clients
- Apollo Client
- Relay
- GraphQL-Request
- Nanographql

Let us dive into and look at the details of each of these GraphQL clients.

## [Apollo Client](https://www.apollographql.com/docs/react/)

**Pros:**
- One of the, if not the, most popular JavaScript GraphQL client
- Fully featured works with React, Next.js, Angular, Vue and more
- Enhanced tooling for Typescript, in browser, & VS Code
- Zero-config caching feature

**Cons:**
- Larger package size 57.7kB, but not too big

Apollo GraphQL is one of the most popular GraphQL clients available. It is owned and maintained by Apollo Graph Inc, and has a significant community supporting it. The large community means there are many tutorials and examples built showing how to use Apollo Client. I highly recommend using Apollo Client.

## [Relay](https://relay.dev/)

**Pros:**
- Created and maintained by Facebook (the original creators of GraphQL)
- Small package size 8.4kB
- Includes caching feature

**Cons:**
- Less popular than you would expect
- Only built for React or React frameworks (Next.js)
- Infrequent releases (As of writing the last release was over a year ago)

Even though Relay was created by Facebook, it is hard to recommend because of the lack of adoption by the community. It is fully featured, but you may not find the same level of support as other GraphQL clients.

## [GraphQL-Request](https://github.com/prisma-labs/graphql-request)

**Pros:**
- Lightweight GraphQL client
- Works in all JavaScript environments
- Written in TypeScript
- Smaller package size 15.9kB

**Cons:**
- Does not have built in caching feature

Created and maintained by Prisma Labs, GraphQL-Request is a popular lightweight GraphQL client. It is built to be simple and flexible, adding no unnecessary features. It is a great client to pick if all you want to do is make GraphQL requests and do not need advanced features like caching.

## [Nanographql](https://github.com/choojs/nanographql)

**Pros:**
- Truly a nano sized GraphQL client
- Tiny package size at 413 bytes

**Cons:**
- No thrills, no added features

If the tiniest of tiny package sizes is important to you, Nanographql may be your choice. It has no additional features to maintain that tiny package size.

## Conclusion

In conclusion, **my choice would be Apollo Client**. It is fully featured, and a heavily adopted GraphQL client. You will easily find examples, tutorials, and community support when using Apollo Client.

However, **if you do not want or need caching GraphQL-Request would be my choice.** It is smaller package size, simplicity, and flexibility to make it an excellent choice as a lightweight GraphQL client.