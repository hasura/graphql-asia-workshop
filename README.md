# hasura-graphql-asia-2019-workshop

### Setup Hasura

 [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

Get the endpoint: `https://<appname>.herokuapp.com`

Create the follwing tables (using console or SQL):

```sql
CREATE TABLE public.articles (
    id serial NOT NULL PRIMARY KEY,
    author_id integer NOT NULL REFERENCES public.author(id),
    title text NOT NULL,
    body text NOT NULL
);

CREATE TABLE public.authors (
    id serial NOT NULL PRIMARY KEY,
    name text NOT NULL
);
```

Goto Data tab Hasura console and click Track all relations.

### Setup a React app

```bash
npm install -g yarn
npm install -g create-react-app

create-react-app graphql-app
cd graphql-app
yarn start
```

This will open up the app on `http://localhost:8080`

### Add GraphQL packages

```bash
yarn add apollo-boost apollo-link-ws subscriptions-transport-ws graphql react-apollo
```

### Setup apollo client

Create a file `src/apollo.js` with the following contents:

```js
import ApolloClient from "apollo-client";
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

// set your Hausra url
export const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'localhost:8080';

const scheme = (proto) => {
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
};

const wsurl = `${scheme('ws')}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;
const httpurl = `${scheme('http')}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

// setup websocket link for subscriptions
const wsLink = new WebSocketLink({
  uri: wsurl,
  options: {
    reconnect: true,
  }
});

// setup http link for queries and mutations
const httpLink = new HttpLink({
  uri: httpurl,
});

// create the apollo link, but split traffic based on operation type
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// initialize the client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

// export the client
export default client;

```

### 