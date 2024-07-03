import {ApolloClient, HttpLink} from '@apollo/client';
import {buildCache} from './cache';
import {setupFlipper} from './flipper';

const buildApolloClient = () => {
  const cache = buildCache();

  const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  if (__DEV__) {
    setupFlipper(client);
  }

  return client;
};

export const apolloClient = buildApolloClient();
