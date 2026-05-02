import React from 'react';
import { TiTickOutline } from 'react-icons/ti';

const TransparentPricing = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='mt-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-6 '>

                <div className='shadow-2xl p-6 bg-amber-200 rounded-xl'>

                    <div>
                        <h1 className='text-2xl font-bold'>Starter</h1>
                        <p>Perfect for getting started</p>
                    </div>
                    <br />
                    <div className='text-4xl font-bold'>
                        <h1>$0/<span>Month</span></h1>
                    </div>
                    <br />
                    <div>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Access to 10 free tools</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Basic templates</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Community support</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> 1 project per month</p>
                    </div>
                        <button className='btn bg-blue-700 text-white font-bold text-2xl mt-8'>Get Started Free</button>


                </div>




                <div className='shadow-2xl p-6 bg-amber-200 rounded-xl'>

                    <div>
                        <h1 className='text-2xl font-bold'>Starter</h1>
                        <p>Perfect for getting started</p>
                    </div>
                    <br />
                    <div className='text-4xl font-bold'>
                        <h1>$0/<span>Month</span></h1>
                    </div>
                    <br />
                    <div>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Access to all premium tools</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Unlimited templates</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Priority support</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Unlimited projects</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Cloud sync</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Advanced analytics </p>
                    </div>
                        <button className='btn bg-blue-700 text-white font-bold text-2xl mt-8'>Start Pro Trial</button>


                </div>




                <div className='shadow-2xl p-6 bg-amber-200 rounded-xl'>

                    <div>
                        <h1 className='text-2xl font-bold'>Starter</h1>
                        <p>Perfect for getting started</p>
                    </div>
                    <br />
                    <div className='text-4xl font-bold'>
                        <h1>$0/<span>Month</span></h1>
                    </div>
                    <br />
                    <div>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Everything in Pro</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Team collaboration</p>
                        <p className='flex gap-2 items-center'><TiTickOutline /> Custom integrations</p>
                        <p className='flex gap-2 items-center'><TiTickOutline />Dedicated support</p>
                        <p className='flex gap-2 items-center'><TiTickOutline />SLA guarantee</p>
                        <p className='flex gap-2 items-center'><TiTickOutline />Custom branding</p>
                    </div>
                        <button className='btn bg-blue-700 text-white font-bold text-2xl mt-8'>Contact Sales</button>

                </div>
            </div>





        </div>
    );
};

export default TransparentPricing;