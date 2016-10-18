import {Templates, Buildings, Hours} from '../../collections';

export default {
  templates: () => {
    return Templates.find().fetch()
  },
  buildings: () => {
    return Buildings.find().fetch()
  },
  building: (root, {id}) => {
    return Buildings.findOne(id)
  }
}
