import {Buildings, Hours} from '../../collections';

export default {
  createBuilding(_, {building}) {
    building.createdAt = new Date();
    building._id = Buildings.insert(building);

    console.log(building)

    return building;
  }
}
