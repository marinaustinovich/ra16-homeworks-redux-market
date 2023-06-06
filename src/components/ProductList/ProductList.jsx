import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../Product/Product';


export default function ProductList() {
    const products = useSelector(state => state.productList);

    return (
        <>
            <h2>Приглядитесь к этим предложениям</h2>
            <ul className="list-group">
                {products.map(product => <Product key={product.id}>{product}</Product>)}
            </ul>
        </>
        
    )
}