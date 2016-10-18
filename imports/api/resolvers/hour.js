import {Buildings, Hours} from '../../collections';

export default {
  building: ({building}) => {
    return Buildings.findOne({_id: building}).fetch()
  }
}
