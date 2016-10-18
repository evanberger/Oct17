import React from 'react';
import Map from './common/map';

class BuildingList extends React.Component {
  render() {
    const {loading, buildings} = this.props;

    if (loading) return null;

    return (
      <div className="buildings">
        <Map buildings={buildings} />
      </div>
    )
  }
};

export default BuildingList;
