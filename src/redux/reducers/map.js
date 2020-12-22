import { GET_MAP } from '../actionTypes';

const initialState = {
    // map,
    // center,
    // zoom
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MAP: {
            return action.payload;
        }
        default:
            return state;
    }
}