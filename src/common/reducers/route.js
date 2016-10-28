import { CHOOSE_CATEGORY } from '../constants';
import update from 'react-addons-update';

const initialState = {
  origin: ''
};

const route = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_CATEGORY:
    	return update(state, { origin: { $set: action.code } });
  	default:
   		return state;
  }
};

export default route;
