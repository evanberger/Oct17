import Building from './building'
import Template from './template'

const Query = `
  type Query {
    buildings: [Building]
    building(id: String): Building
    templates: [Template]
  }
`;

export default () => [Query, Building, Template];
