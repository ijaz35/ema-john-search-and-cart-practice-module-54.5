import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}
export default useProducts;