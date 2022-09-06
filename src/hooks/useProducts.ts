import { useEffect, useState } from 'react';
import { ProductCategory } from '../../assets/data/productData';

const useProducts =()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        ProductCategory.map(category =>{
        setProducts(category.porducts)
    })},[])
 
    return[products, setProducts];
}

export default useProducts;