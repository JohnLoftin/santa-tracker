import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_WISHLIST: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [ ...state.allIds, id ],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content
                    }
                }
            }
        }
        case REMOVE_FROM_WISHLIST: {
            const id = action.payload.id;
            return state.filter(id => id !== action.payload.byIds.id)
        }
        default:
            return state;
    }
}