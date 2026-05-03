import React from 'react';

const ReadyToTransform = () => {
    return (
        <div className='bg-blue-700 text-white space-y-5 p-5 mb-30'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <button className='bg-white border-none text-blue-700 p-3 rounded-2xl font-semibold'>Explore Products</button>
                <button className='border-1 border-white p-3 font-semibold rounded-2xl'>View Pricing</button>
            </div>
            <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadyToTransform;