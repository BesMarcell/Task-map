import React, {PropTypes, Component} from 'react';
import {PlaceStyle, descriptionStyle} from './PageMapPlaceStyles.js';

export default class PageMapPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    let {location} = this.props;
    return (
      <div title={this.props.description}>
      <div style={PlaceStyle} onClick={this.props.fetchDescriptions.bind(this,location._id)}>
          {this.props.text}
      </div>
      </div>
    );
  }
}