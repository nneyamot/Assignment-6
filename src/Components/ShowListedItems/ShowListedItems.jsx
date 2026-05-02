import React from 'react';


const ShowListedItems = ({ item,items,setItems }) => {
    const { name, price, icon } = item;

    const removeItem = (id)=>{
        const filteredItems=items.filter(it=> it.id!==id)
        setItems(filteredItems);


    }
  
    return (
        <div className='border rounded-2xl p-5  border-amber-200 flex items-center justify-between '>
            <div className='flex items-center gap-10'>
                <img src="/src/assets/products/design-tool.png" alt="picture" />

                <div className='text-left'>
                    <h1 className='font-bold text-3xl mb-3'>{name}</h1>
                    <h2>${price}</h2>
                </div>
            </div>

            <button 
            onClick={()=>removeItem(item.id)}
            className='btn text-red-500' >Remove</button>


        </div>
    );
};

export default ShowListedItems;