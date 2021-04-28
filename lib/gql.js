import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloLink,
    from,
  } from "@apollo/client";
  
  export const httpLink = createHttpLink({
    uri: process.env.CH_URL,
  });
  
  export const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "X-GQL-Token": process.env.CH_TOKEN,
      },
    }));
  
    return forward(operation);
  });
  
  export const client = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });
  