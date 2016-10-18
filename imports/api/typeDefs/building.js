import Hour from './hour'

const BuildingInput = `
  input BuildingInput {
    name: String
    existingRate: Int
    iceStorageRate: Int
    chillerType: String
    chillerTonnage: Int
    chillerEfficiency: Int
    ddChillerEfficiency: Int
    iceMakingEfficiency: Int
    monthsCooling: Int
    downsizeDuctSavings: Int
    downsizePipeSavings: Int
    roundDuctSavings: Int
    additionalCostsIceStorageInstallation: Int
  }
`;

const Building = `
  type Building {
    _id: ID
    name: String
    createdAt: String
    existingRate: Int
    iceStorageRate: Int
    airCooled: Boolean
    chillerTonnage: Int
    chillerEfficiency: Int
    ddChillerEfficiency: Int
    iceMakingEfficiency: Int
    monthsCooling: Int
    downsizeDuctSavings: Int
    downsizePipeSavings: Int
    roundDuctSavings: Int
    additionalCostsIceStorageInstallation: Int
    user: String
    hours: [Hour]
  }
`;

export default () => [Building, Hour, BuildingInput];
