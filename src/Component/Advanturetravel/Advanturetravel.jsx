import React from 'react';

const Advanturetravel = () => {
    return (
        <div className='md:grid grid-cols-2 gap-4 justify-between mt-20'>
            <div className='w-96'>
                <img className='rounded-tr-full rounded-tl-full' src="Public/img/Addvance.jpg" alt="" />
            </div>
            <div>
                <span className='text-lime-500'>Who We are</span>
                <h1 className='text-5xl mt-5'>Great opportunity for advanture & travels</h1>

                <div className='flex mt-12'>
                    <img className='w-16 pr-3' src="Public/img/travel/t1.jpg" alt="" />
                    <div>
                        <h3>Mountain hiking</h3>
                        <p>We're here for look even you from start to finish</p>
                    </div>
                </div>
                <div className='flex mt-12'>
                    <img className='w-16 pr-3' src="Public/img/travel/t2.jpg" alt="" />
                    <div>
                        <h3>Mountain hiking</h3>
                        <p>We're here for look even you from start to finish</p>
                    </div>
                </div>
                <div className='flex mt-12'>
                    <img className='w-16 pr-3' src="Public/img/travel/t3.jpg" alt="" />
                    <div>
                        <h3>Mountain hiking</h3>
                        <p>We're here for look even you from start to finish</p>
                    </div>
                </div>
                <div className='flex mt-12'>
                    <img className='w-16 pr-3' src="Public/img/hero34.jpg" alt="" />
                    <div>
                        <h3>Call experts</h3>
                        <p>+92(03)68-090</p>
                    </div>
                    <button className='btn btn-success text-white rounded ml-2'>Discover More</button>
                </div>
            </div>

        </div>
    );
};

export default Advanturetravel;