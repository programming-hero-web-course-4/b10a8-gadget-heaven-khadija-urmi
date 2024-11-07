



const getWishItem = () => {
    const items = localStorage.getItem('wishItem');
    return items ? JSON.parse(items) : [];
};

const addToWishItem = (gadget) => {
    const wishItem = getWishItem();
    const isHasItem = wishItem.find(item => item.product_id === gadget.product_id);

    if (isHasItem) return alert("Item already added");

    wishItem.push(gadget);
    localStorage.setItem('wishItem', JSON.stringify(wishItem));
    alert('Successfully added!')

};

export { addToWishItem, getWishItem };