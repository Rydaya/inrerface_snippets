import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://your-graphql-endpoint.com/graphql", // свой GraphQL endpoint
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
