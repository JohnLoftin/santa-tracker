import {
    GET_WISHLIST,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
}  from './actionTypes';

let nextWishlistID = 0;

export const addToWishlist = content => ({
    type: ADD_TO_WISHLIST,
    payload: {
        id: ++nextWishlistID,
        content
    }
})

export const removeFromWishlist = id => {
    console.log(id)
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: {
            id
        }
    }
}


