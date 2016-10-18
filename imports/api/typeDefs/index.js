import Query from './query';
import Mutation from './mutation';
import Building from './building';
import Template from './template';
import Hour from './hour';

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

export default [
  SchemaDefinition,
  Query,
  Building,
  Template,
  Hour,
  Mutation
]
