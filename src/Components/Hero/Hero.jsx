import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const Hero = () => {
    return (
        <div className='grid  lg:grid-cols-2  gap-8 mx-auto m-10  md:grid-cols-1'>

            {/* left side of hero */}
            <div className='space-y-6 '>
                <h4 className='text-[#4F39F6] text-3xl'>New: AI-Powered Tools Available</h4>

                <h1 className='font-extrabold text-8xl text-[#101727]'>
                    Supercharge Your  Digital Workflow
                </h1>

                <p className='text-3xl text-[#627382]'> Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>

                <div className='flex gap-3'>
                    <button className='btn bg-[#4F39F6] text-white rounded-2xl'>Explore Products</button>
                    <button className='btn flex bg-white border-2 border-blue-900 rounded-2xl'>
                        <IoPlayOutline />
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* right side of hero  */}

            <div className=' '>
                <img src="/src/assets/banner.png" />

            </div>

        </div>
    );
};

export default Hero;