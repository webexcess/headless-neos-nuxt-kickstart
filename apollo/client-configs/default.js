import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '~/fragmentTypes.json';
import { createHttpLink } from "apollo-link-http";
import { Agent } from 'https';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

export default (context) => {
  let clientConfig = {
    cache,
    httpEndpoint: context.env.httpEndpoint,
    defaultHttpLink: false
  }

  if (context.env.httpEndpoint.indexOf('https') === 0) {
    clientConfig.link = createHttpLink({
      uri: context.env.httpEndpoint,
      fetchOptions: {
        agent: new Agent({ rejectUnauthorized: false })
      }
    });
  }

  return clientConfig;
};
