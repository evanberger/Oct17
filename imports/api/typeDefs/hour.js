import Building from './building'

const Hour = `
  type Hour {
    _id: ID
    name: String
    building: Building
    createdAt: String
    type: String
    load: Int
    icemakingTons: Int
    chillerTons: Int
    iceDispatchTons: Int
    user: String
  }
`;

export default () => [Hour, Building];
