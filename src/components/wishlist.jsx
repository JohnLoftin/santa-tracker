import { connect } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import { addToWishlist, removeFromWishlist } from '../redux/actions';
import wishlist from '../redux/reducers/wishlist';

const Wishlist = ({ addToWishlist, removeFromWishlist, wishlist, byIds }) => {

    const [input, setInput] = useState('');

    let updateInput = e => {
        setInput(e.target.value);
    };
    
    let handleAddItem = () => {
        addToWishlist(input);
        setInput("");
    };

    let handleDeleteItem = (id) => {
        removeFromWishlist(id);
    };

    const items = wishlist.map((itemId, index) => {
        return <li key={`${itemId}-${index}`}>{byIds[itemId].content} <button key={`${itemId}-${index}`} onClick={() => handleDeleteItem(itemId)}>Delete</button></li>
    });
    
    return (
        <div>
            <h1 className="title">Wishlist</h1>
            <input 
                type="text" 
                placeholder="Add Item to Wishlist"
                onChange={updateInput}
                value={input}
            />
            <button className="add-item" onClick={handleAddItem}>Add Item</button>
            <ul className="wishlist-items">{items}</ul>
        </div>
    )
}

const mapStateToProps = state => ({
    wishlist: state.wishlist.allIds,
    byIds: state.wishlist.byIds
})

const mapDispatchToProps = dispatch => ({
    addToWishlist: wishlistItem => dispatch(addToWishlist(wishlistItem)),
    removeFromWishlist: wishlistItem => dispatch(removeFromWishlist(wishlistItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);