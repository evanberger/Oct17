import {Buildings, Hours} from '../../collections';

export default {
  hours: ({_id}) => {
    return Hours.find({building: _id}).fetch()
  }
}
