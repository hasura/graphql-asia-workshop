# hasura-graphql-asia-2019-workshop

### Setup Hasura

 [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

Get the endpoint: `https://<appname>.herokuapp.com`

### Setup a React app

```bash
npm install -g yarn
npm install -g create-react-app

create-react-app graphql-app
cd graphql-app
```

### Add GraphQL packages

```bash
yarn add apollo-boost apollo-link-ws subscriptions-transport-ws graphql react-apollo
```
