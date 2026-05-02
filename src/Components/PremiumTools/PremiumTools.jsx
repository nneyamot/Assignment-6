import React, { Suspense, useState } from 'react';
import Cards from '../Cards/Cards';
import ListedItems from '../ListedItems/ListedItems';

const PremiumTools = ({ items, setItems, promiseOfApi }) => {
    const [bg, setBg] = useState(true)

    const showListedItems = (items) => {
        // items.map(item => )

    }

    const showCards = () => {
        // console.log('showCards')


    }




    return (
        <div className='space-y-5  mb-20'>
            <h1 className='text-8xl font-bold  text-[#101727]'>Premium Digital Tools</h1>
            <p className='text-md text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>

            <div className='text-[#101727] mb-10'>

                <button
                    onClick={() => { setBg(true); showCards() }}
                    className={`btn ${bg ? 'bg-blue-700 text-white' : ''} `}>Products</button>


                <button onClick={() => { setBg(false); showListedItems(items) }}

                    className={`btn ${bg === false ? 'bg-blue-700 text-white' : ''} `}>Carts({items.length})</button>

                {
                    bg ? <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>} > <Cards promiseOfApi={promiseOfApi} items={items} setItems={setItems}></Cards> </Suspense> : <ListedItems items={items} setItems={setItems} ></ListedItems>
                }
            </div>

        </div>
    );
};

export default PremiumTools;