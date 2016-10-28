import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import PageMapPlace from './PageMapPlace.js';
import { connect } from 'react-redux';


const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;

class PageMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [53.6633603, 23.7781606],
    zoom: 14
  };


  constructor(props) {
    super(props);
  }

  render() {
      let locationList = this.props.locations.map((location) => (
        <PageMapPlace key={location.coordinateLat} locationId={location._id} lat={location.coordinateLat} 
        lng={location.coordinateLng} text={location.name} location={location}
        fetchDescriptions={this.props.fetchDescriptions}
        description={this.props.descriptions.locationId==location._id ? this.props.descriptions.description:''} />
    ));

    return (
       <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}
        margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
        >
        {locationList}
      </GoogleMap>
    );
  }
}

export default PageMap;