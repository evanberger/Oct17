const HourTemplate = `
  type HourTemplate {
    hour1: Float
    hour2: Float
    hour3: Float
    hour4: Float
    hour5: Float
    hour6: Float
    hour7: Float
    hour8: Float
  }
`;

const Template = `
  type Template {
    _id: ID
    name: String
    hours: HourTemplate
    createdAt: String
    user: String
  }
`;

export default () => [Template, HourTemplate];
