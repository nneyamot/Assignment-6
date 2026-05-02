import React from 'react';

const Steps3 = () => {
    return (
        <div className='mx-auto w-11/12'>
            <div className='text-center space-y-4 mb-10'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>



            <div className='grid grid-cols-3 gap-5 mb-10'>
                <div className='shadow-2xl p-10 rounded-xl border-white'>
                    <div className='flex justify-end '>
                        <h1 className='w-10 text-center rounded-full bg-blue-700 text-white'>01</h1>

                    </div>
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center items-center  '>
                            <img className='bg-amber-100 rounded-full p-3' src="/src/assets/user.png" alt="" />

                        </div>
                        <h1 className='text-4xl font-bold'>Create Account</h1>
                        <p >Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className='shadow-2xl p-10 rounded-xl border-white'>
                    <div className='flex justify-end '>
                        <h1 className='w-10 text-center rounded-full bg-blue-700 text-white'>02</h1>

                    </div>
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center items-center'>
                            <img className='bg-amber-100 rounded-full p-3' src="/src/assets/package.png" alt="" />

                        </div>
                        <h1 className='text-4xl font-bold'>Choose Products</h1>
                        <p >Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                <div className='shadow-2xl p-10 rounded-xl border-white'>
                    <div className='flex justify-end '>
                        <h1 className='w-10 text-center rounded-full bg-blue-700 text-white'>03</h1>

                    </div>
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center items-center'>
                            <img className='bg-amber-100 rounded-full p-5' src="/src/assets/rocket.png" alt="" />

                        </div>
                        <h1 className='text-4xl font-bold'>Start Creating</h1>
                        <p >Download and start using your premium  tools immediately.</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Steps3;