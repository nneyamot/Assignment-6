import React from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Card = ({ item, items, setItems }) => {
    // console.log(item);
    const { name, description, price, period, tag, tagtype, features, icon } = item;

    const listedItems = (item) => {

        const update = [...items, item]
        setItems(update);
        toast.success('Item Added inside Carts')
    }

    return (
        <div className=''>
            <div className='space-y-5 shadow-2xl p-6 rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <img src={icon} alt="" />
                    <button className="btn">  {tag} </button>

                </div>
                <h2 className='text-4xl font-bold text-[#101727] text-left'>{name} </h2>
                <p className='text-xl text-[#627382] text-left'>{description} </p>
                <h1 className='text-5xl font-bold text-[#101727] text-left'>${price}/mo</h1>
                <div className='text-[#627382]'>
                    <p className='flex items-center'> <TiTick /> {features[0]}</p>
                    <p className='flex items-center'> <TiTick /> {features[1]}</p>
                    <p className='flex items-center'> <TiTick /> {features[2]}</p>
                    {/* {
                        features.map(feature => (


                            <p className='flex items-center'> {feature}</p>
                        ))
                    } */}
                </div>

                <button
                    onClick={() => listedItems(item)}
                    className='btn bg-blue-700 text-white w-full'>Buy Now</button>
            </div>

        </div>
    );
};

export default Card;