import { REQUEST_DESCRIPTIONS, RECEIVE_DESCRIPTIONS } from '../constants';

const descriptions = (state = {}, action) => {
	//console.log('------action.descriptions-----'+JSON.stringify(action.descriptions));
	switch (action.type) {
		case REQUEST_DESCRIPTIONS:
			return {};
		case RECEIVE_DESCRIPTIONS:
			return action.descriptions;
		default:
			return state;
	}
};

export default descriptions;
