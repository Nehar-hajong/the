import React from 'react';

const Travel = () => {
    return (
        <div className='md:grid grid-cols-2 mt-20'>
            <div>
                <span className='text-lime-600 text-1xl font-normal'>What we Provide</span>
                <h1 className='text-4xl font-medium w-3/4'>Most funning company travel and tours</h1>
            </div>
            <div>
                <p>Sit amet consectetue integer eu tincidunt scelerisque.Sodales volutpat neque fermentum alesuada scelerisque massa. </p>
                <div className='flex justify-between mt-5'>
                    <div className='mb-2'>
                        <span className='text-lime-600 text-4xl'>356+</span>
                        <p className='mt-2'>Happy traveler</p>
                    </div>
                    <div>
                        <span className='text-lime-600 text-4xl'>852+</span>
                        <p className='mt-2'>Campaigns Closed</p>
                    </div>
                    <div>
                        <span className='text-lime-600 text-4xl'>99%</span>
                        <p className='mt-2'>Positive Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;