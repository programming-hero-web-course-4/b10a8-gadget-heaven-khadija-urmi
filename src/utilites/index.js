//adding items to cart
const getCartItem = () => {
    const carts = localStorage.getItem('cartItem');
    return carts ? JSON.parse(carts) : [];
}


const addToCartItem = (gadget) => {
    const cartItems = getCartItem();
    const isHasItem = cartItems.find(cart => cart.product_id === gadget.product_id);
    if (isHasItem) return alert("Item already added in cart");
    cartItems.push(gadget);
    localStorage.setItem('cartItem', JSON.stringify(cartItems));
    alert('Successfully added in cart!')

}
const removeItemsCart = id => {
    const cartList = getCartItem();
    const remaining = cartList.filter(cart => cart.product_id != id);
    localStorage.setItem('cartItem', JSON.stringify(remaining));
    alert('Successfully removed');
}


const getWishItem = () => {
    const items = localStorage.getItem('wishItem');
    return items ? JSON.parse(items) : [];
};

const addToWishItem = (gadget) => {
    const wishItem = getWishItem();
    const isHasItem = wishItem.find(item => item.product_id === gadget.product_id);
    if (isHasItem) return alert("Item already added in wishlist");
    wishItem.push(gadget);
    localStorage.setItem('wishItem', JSON.stringify(wishItem));
    alert('Successfully added wishlist!')

};



export { addToWishItem, getWishItem, getCartItem, addToCartItem, removeItemsCart };