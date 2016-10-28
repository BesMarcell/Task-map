import { RECEIVE_CATEGORIES, CHOOSE_CATEGORY, REQUEST_LOCATIONS, RECEIVE_LOCATIONS, REQUEST_DESCRIPTIONS, RECEIVE_DESCRIPTIONS } from '../constants';
import mapAPI from '../api/mapApi';

const mapActionCreators = {
  fetchCategories() {
  return (dispatch) => {    
      mapAPI.fetchCategories().then(
        (categories) => dispatch({ type: RECEIVE_CATEGORIES, success: true, categories }),
        (error) => dispatch({ type: RECEIVE_CATEGORIES, success: false })
      );
    };
  },

  chooseCategory(category) {
    return {
      type: CHOOSE_CATEGORY,
      code: category? category.value : ''
    }
  },

  fetchLocations(origin) {
    return (dispatch) => {dispatch({ type: REQUEST_LOCATIONS });
    mapAPI.fetchLocations(origin).then((locations) => dispatch({ type: RECEIVE_LOCATIONS, success: true, locations }));
    };
  },

  fetchDescriptions(origin) {
    return (dispatch) => {dispatch({ type: REQUEST_DESCRIPTIONS });
    mapAPI.fetchDescriptions(origin).then((descriptions) => dispatch({ type: RECEIVE_DESCRIPTIONS, success: true, descriptions }));
    };
  }

};

export default mapActionCreators;
