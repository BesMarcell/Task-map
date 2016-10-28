import React, { Component, PropTypes } from 'react';

class LocationItem extends Component {
  render() {
    let {location} = this.props;
    return(
      <div className='location' onClick={this.props.fetchDescriptions.bind(this,location._id)} >
        <div >
          <h2>{location.name}</h2>
        </div>
        <div>
          coordinates: {location.coordinateLat}-{location.coordinateLng}
        </div>
        <div className='temp'>
          {this.props.description}
        </div>
      </div>
    );
  }
}
LocationItem.propTypes = {
    location: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    coordinateLat: PropTypes.number,
    coordinateLng: PropTypes.number
  })
};

export default LocationItem;
