import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clg2990l0090i01t3gyurhaq1/master',
    cache: new InMemoryCache()

})