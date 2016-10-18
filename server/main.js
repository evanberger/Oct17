import {createApolloServer} from 'meteor/apollo';
import {schema} from '../imports/api';

createApolloServer({
  graphiql: true,
  pretty: true,
  logger: true,
  schema
});
