import { REQUEST_LOCATIONS, RECEIVE_LOCATIONS } from '../constants';

const locations = (state = [], action) => {
	switch (action.type) {
		case REQUEST_LOCATIONS:
			return [];
		case RECEIVE_LOCATIONS:
			return action.locations;
		default:
			return state;
	}
};

export default locations;
