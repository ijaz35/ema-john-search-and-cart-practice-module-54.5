const getCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const addToDb = (id) => {
    const shoppingCart = getCart();
    let quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const removeItemFromDb = (id) => {
    const storedCart = getCart();
    if (id in storedCart) {
        delete storedCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(storedCart))
    }
}

export {
    addToDb,
    getCart,
    removeItemFromDb
};