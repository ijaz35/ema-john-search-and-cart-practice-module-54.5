import { useEffect, useState } from "react"
import { getCart } from "../utilities/storage";

const useCart = (products) => {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return [cart, setCart];
}
export default useCart; 