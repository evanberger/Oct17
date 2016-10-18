import Building from './building'

const Mutation = `
  type Mutation {
    createBuilding(building: BuildingInput!): Building
  }
`;

export default () => [Mutation, Building];
