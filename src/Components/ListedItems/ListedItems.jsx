import React, { useState } from 'react';
import ShowListedItems from '../ShowListedItems/ShowListedItems';

const ListedItems = ({ items, setItems }) => {

    // const [totalCost, setTotalCost] = useState(999);
    
    let total=items.reduce((sum,cart)=> sum+cart.price,0);

   


    return (
         items.length===0 ?(<div className='mt-10'>
             <h2 className='text-5xl font-bold mt-10'>NO items Include </h2>
             
         </div>) :

        <div className='mt-10 w-11/12 mx-auto shadow-2xl p-7 space-y-5'>
            <h2 className='text-left  font-bold'>Your Cart</h2>
            {
                items.map(item => <ShowListedItems key={item.id} item={item} items={items} setItems={setItems}></ShowListedItems>)
            }
            <div className='space-y-5'>
                <div className='flex justify-between items-center p-10'>
                    <h1>Total</h1>
                    <h1 className='font-bold'>${total}</h1>
                </div>
                <button className='btn bg-blue-700 w-full text-white'>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default ListedItems;