import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({ promiseOfApi, items, setItems }) => {
    const cards = use(promiseOfApi);

    return (
        <div className='grid lg:grid-cols-3 gap-5 mx-auto w-11/12 md:grid-cols-2'>
            {
                cards.map(item => <Card key={item.id} item={item} items={items} setItems={setItems}></Card>)
            }
        </div>
    );
};

export default Cards;