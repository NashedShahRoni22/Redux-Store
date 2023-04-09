import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {
    const cart = useSelector((state)=> state.cart)
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4'>
            {
                cart.map(product => <ProductCard product={product} />)
            }
        </div>
    );
};

export default Cart;