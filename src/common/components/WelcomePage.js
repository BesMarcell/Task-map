import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import PageMap from './PageMap.js';
import PageLeft from './pageLeft.js';
import MapActionCreators from '../actions/MapActionCreators';



class WelcomePage extends Component {
  
  componentDidMount() {
  this.props.fetchCategories();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{height: '100%', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '35%', height: '100%'}}>
					<PageLeft locations={this.props.locations} fetchCategories={this.props.fetchCategories} 
          onChooseCategory={this.props.onChooseCategory.bind(this)}  descriptions = {this.props.descriptions}
          categories={this.props.categories} onChooseCategory={this.props.onChooseCategory} 
          origin={this.props.origin} fetchLocations={this.props.fetchLocations} 
          fetchDescriptions={this.props.fetchDescriptions.bind(this)}/>
				</div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '65%', height: '100%'}}>
					<PageMap locations={this.props.locations} fetchCategories={this.props.fetchCategories} 
          onChooseCategory={this.props.onChooseCategory.bind(this)}  descriptions = {this.props.descriptions}
          categories={this.props.categories} onChooseCategory={this.props.onChooseCategory} 
          origin={this.props.origin} fetchLocations={this.props.fetchLocations} 
          fetchDescriptions={this.props.fetchDescriptions.bind(this)} />
		</div>
        
		</div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    categories: state.categories
      .map(category => ({ value: category._id, label: `${category.name}`, name: category.name})),
    origin: state.route.origin,
    locations: state.locations,
    descriptions: state.descriptions
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchCategories: () => dispatch(MapActionCreators.fetchCategories()),
    onChooseCategory: (category) => dispatch(MapActionCreators.chooseCategory(category)),
    fetchLocations: (origin) => dispatch(MapActionCreators.fetchLocations(origin)),
    fetchDescriptions: (origin) => dispatch(MapActionCreators.fetchDescriptions(origin))
  }
);

const WelcomePageContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

export default WelcomePageContainer;