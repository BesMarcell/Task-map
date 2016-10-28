import { combineReducers } from 'redux';
import categories from './categories';
import route from './route';
import locations from './locations';
import descriptions from './descriptions';

const rootReducer = combineReducers({
	categories,
	route,
	locations,
	descriptions
});

export default rootReducer;
